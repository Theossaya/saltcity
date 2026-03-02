import { NextRequest, NextResponse } from "next/server";

const WEBAPP_URL = process.env.FORMS_WEBAPP_URL || "";
const API_KEY = process.env.FORMS_API_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!WEBAPP_URL) {
      return NextResponse.json(
        { ok: false, error: "Webapp URL not configured" },
        { status: 500 }
      );
    }

    const url = new URL(WEBAPP_URL);
    if (API_KEY) url.searchParams.set("key", API_KEY);

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 12_000);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": request.headers.get("user-agent") || "saltcity-web",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(t);

    const text = await response.text();

    let data: any = null;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Apps Script non-JSON response:", text);
      return NextResponse.json(
        { ok: false, error: "Invalid response from server" },
        { status: 500 }
      );
    }

    if (!data?.ok) {
      return NextResponse.json(
        { ok: false, error: data?.error || "Submission failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    const msg =
      error?.name === "AbortError"
        ? "Request timed out"
        : error?.message || "Server error";

    console.error("Form submission error:", error);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}