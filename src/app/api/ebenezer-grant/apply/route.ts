import { NextRequest, NextResponse } from "next/server";
import {
  businessRegistrationExists,
  createApplicationWithReference,
  deleteApplication,
  insertDocuments,
  safeFileName,
  uploadPrivateFile,
} from "@/lib/ebenezerGrant/supabaseServer";
import { isEbenezerGrantClosed } from "@/lib/ebenezerGrant/deadline";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png", "doc", "docx"]);
const REQUIRED_FIELDS = [
  "owner_director_name",
  "email",
  "phone",
  "business_name",
  "business_registration_number",
  "business_address",
  "business_sector",
  "date_business_started",
  "business_description",
  "current_estimated_monthly_revenue",
  "projected_monthly_revenue_after_financing",
  "intended_use_of_funds",
  "revenue_growth_explanation",
] as const;

const REQUIRED_FILES = [
  "incorporation_document",
  "financial_report",
  "revenue_projection",
] as const;

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function fileExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function validateFile(file: File | null, label: string, errors: string[]) {
  if (!file || !file.name || file.size === 0) {
    errors.push(`${label} is required.`);
    return;
  }

  if (file.size > MAX_FILE_SIZE) {
    errors.push(`${label} must be 10MB or smaller.`);
  }

  if (!ACCEPTED_EXTENSIONS.has(fileExtension(file.name))) {
    errors.push(`${label} must be a PDF, JPG, PNG, DOC, or DOCX file.`);
  }
}

function getRequiredFile(formData: FormData, name: string) {
  const file = formData.get(name);
  return file instanceof File ? file : null;
}

async function sendOptionalNotification(application: {
  reference_number: string;
  owner_director_name: string;
  business_name: string;
  phone: string;
  email: string;
  submitted_at: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
    const adminUrl = baseUrl
      ? `${baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`}/admin/ebenezer-grant`
      : "/admin/ebenezer-grant";

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "SaltCity Church <onboarding@resend.dev>",
        to: "saltcitycentral@gmail.com",
        subject: `Ebenezer Grant application ${application.reference_number}`,
        text: [
          "A new Ebenezer Grant application has been submitted.",
          "",
          `Reference: ${application.reference_number}`,
          `Applicant: ${application.owner_director_name}`,
          `Business: ${application.business_name}`,
          `Phone: ${application.phone}`,
          `Email: ${application.email}`,
          `Submitted: ${application.submitted_at}`,
          `Admin page: ${adminUrl}`,
        ].join("\n"),
      }),
    });
  } catch (error) {
    console.error("Ebenezer Grant email notification failed:", error);
  }
}

export async function POST(request: NextRequest) {
  if (isEbenezerGrantClosed()) {
    return NextResponse.json(
      {
        ok: false,
        error: "Applications for the Ebenezer Grant are now closed. Thank you for your interest.",
      },
      { status: 403 }
    );
  }

  try {
    const formData = await request.formData();
    const errors: string[] = [];

    for (const name of REQUIRED_FIELDS) {
      if (!field(formData, name)) {
        errors.push(`${name.replaceAll("_", " ")} is required.`);
      }
    }

    const email = field(formData, "email");
    if (email && !isValidEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    const churchMembershipConfirmed = formData.get("church_membership_confirmed") === "on";
    const declarationAccepted = formData.get("declaration_accepted") === "on";

    if (!churchMembershipConfirmed) {
      errors.push("Please confirm SaltCity Church membership.");
    }

    if (!declarationAccepted) {
      errors.push("Please accept the declaration before submitting.");
    }

    for (const name of REQUIRED_FILES) {
      validateFile(getRequiredFile(formData, name), name.replaceAll("_", " "), errors);
    }

    const optionalFiles = formData
      .getAll("optional_supporting_document")
      .filter((file): file is File => file instanceof File && file.size > 0);

    optionalFiles.forEach((file, index) => {
      validateFile(file, `optional supporting document ${index + 1}`, errors);
    });

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, error: errors[0], errors }, { status: 400 });
    }

    const registrationNumber = field(formData, "business_registration_number");
    if (await businessRegistrationExists(registrationNumber)) {
      return NextResponse.json(
        {
          ok: false,
          error: "An application has already been submitted for this business registration number.",
        },
        { status: 409 }
      );
    }

    const application = await createApplicationWithReference({
      owner_director_name: field(formData, "owner_director_name"),
      email,
      phone: field(formData, "phone"),
      church_membership_confirmed: churchMembershipConfirmed,
      church_group_or_department: field(formData, "church_group_or_department") || null,
      business_name: field(formData, "business_name"),
      business_registration_number: registrationNumber,
      business_address: field(formData, "business_address"),
      business_sector: field(formData, "business_sector"),
      date_business_started: field(formData, "date_business_started"),
      business_description: field(formData, "business_description"),
      current_estimated_monthly_revenue: field(formData, "current_estimated_monthly_revenue"),
      projected_monthly_revenue_after_financing: field(
        formData,
        "projected_monthly_revenue_after_financing"
      ),
      intended_use_of_funds: field(formData, "intended_use_of_funds"),
      revenue_growth_explanation: field(formData, "revenue_growth_explanation"),
      declaration_accepted: declarationAccepted,
    });

    try {
      const allFiles = [
        ...REQUIRED_FILES.map((document_type) => ({
          document_type,
          file: getRequiredFile(formData, document_type) as File,
        })),
        ...optionalFiles.map((file, index) => ({
          document_type: `optional_supporting_document_${index + 1}`,
          file,
        })),
      ];

      const uploadedDocuments = [];

      for (const item of allFiles) {
        const timestamp = Date.now();
        const storage_path = `ebenezer-grant/${application.reference_number}/${timestamp}-${safeFileName(
          item.file.name
        )}`;

        await uploadPrivateFile(storage_path, item.file);

        uploadedDocuments.push({
          application_id: application.id,
          document_type: item.document_type,
          original_filename: item.file.name,
          storage_path,
          mime_type: item.file.type || null,
          file_size: item.file.size,
        });
      }

      await insertDocuments(uploadedDocuments);
    } catch (error) {
      await deleteApplication(application.id);
      throw error;
    }

    await sendOptionalNotification(application);

    return NextResponse.json({
      ok: true,
      referenceNumber: application.reference_number,
      submittedAt: application.submitted_at,
    });
  } catch (error) {
    console.error("Ebenezer Grant submission failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "We could not submit your application. Please try again.",
      },
      { status: 500 }
    );
  }
}
