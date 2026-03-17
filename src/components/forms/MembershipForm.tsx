"use client";

import { useState } from "react";

// ─── Tiny helper ──────────────────────────────────────────────────────────────
function cx(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Shared UI ────────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-black/60">{label}</div>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border border-black/10 bg-white px-4 py-3",
        "text-sm text-black placeholder:text-black/40",
        "focus:outline-none focus:ring-2 focus:ring-black/15",
        props.className
      )}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cx(
        "w-full rounded-xl border border-black/10 bg-white px-4 py-3",
        "text-sm text-black",
        "focus:outline-none focus:ring-2 focus:ring-black/15"
      )}
    />
  );
}

function SubmitRow({ onDone, loading }: { onDone: () => void; loading?: boolean }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="submit"
        disabled={loading}
        className={cx(
          "rounded-full bg-black px-6 py-3 text-sm font-semibold text-white",
          loading ? "cursor-not-allowed opacity-60" : "hover:opacity-90"
        )}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      <button
        type="button"
        onClick={onDone}
        disabled={loading}
        className={cx(
          "rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black/70",
          loading ? "cursor-not-allowed opacity-60" : "hover:border-black/25 hover:text-black"
        )}
      >
        Cancel
      </button>
    </div>
  );
}

// ─── Network Helper ───────────────────────────────────────────────────────────
async function submitToWebApp(payload: Record<string, any>) {
  const res = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data: any = null;
  try {
    data = JSON.parse(text);
  } catch {
    // ignore
  }

  if (!data?.ok) throw new Error(data?.error || "Submission failed");
}

// ─── Privacy Policy Modal ─────────────────────────────────────────────────────
function PrivacyPolicyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
    >
      <button
        aria-label="Close privacy policy"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative flex max-h-[85vh] w-full max-w-[600px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-black/10 px-6 pb-4 pt-6">
          <div>
            <h3 className="text-lg font-black tracking-tight text-black">Privacy Policy</h3>
            <p className="mt-1 text-xs text-black/50">Salt City Church, Warri</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-sm font-semibold text-black/70 hover:bg-black/5 hover:text-black"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="prose prose-sm max-w-none flex-1 space-y-5 overflow-y-auto px-6 py-6 leading-relaxed text-black/80">
          <p className="text-base font-bold text-black">
            My Consent for SaltCity Church to Use My Information
          </p>

          <p>
            By checking the box below, I agree to provide my personal information to Salt City
            Church, Warri. I understand that the church will use this information to maintain its
            membership records, provide me with pastoral care, and send me updates about church
            services and activities.
          </p>

          <p className="font-semibold text-black">I also understand that:</p>

          <ul className="list-none space-y-3 pl-0">
            <li>
              <span className="font-semibold text-black">My Information is Safe:</span>{" "}
              The church will take steps to keep my data secure and will not share it with any
              third parties without my permission.
            </li>
            <li>
              <span className="font-semibold text-black">My Rights:</span>{" "}
              I have the right to ask to see the information the church holds about me, correct any
              mistakes, or ask for my information to be deleted.
            </li>
            <li>
              <span className="font-semibold text-black">I Can Change My Mind:</span>{" "}
              I have the right to withdraw my consent at any time. Withdrawing my consent is as easy
              as giving it and can be done by contacting us at{" "}
              <a href="mailto:info@saltcitycentral.com" className="underline text-black">
                info@saltcitycentral.com
              </a>{" "}
              or calling our office.
            </li>
            <li>
              <span className="font-semibold text-black">Retention:</span>{" "}
              The church will only keep my information for as long as it is needed for these
              purposes.
            </li>
            <li>
              <span className="font-semibold text-black">Complaints:</span>{" "}
              If I am unhappy with how my data is handled, I can lodge a complaint with the{" "}
              <a
                href="https://ndpc.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-black"
              >
                Nigeria Data Protection Commission
              </a>
              .
            </li>
          </ul>

          <p>I agree to the collection and use of my information as described above.</p>
        </div>

        <div className="shrink-0 border-t border-black/10 bg-neutral-50 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Got it, close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Membership Form ──────────────────────────────────────────────────────────
export default function MembershipForm({ onDone }: { onDone: () => void }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [occupation, setOccupation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");

  return (
    <>
      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!consent) {
            setMsg("Please accept the consent statement to continue.");
            return;
          }

          setMsg(null);
          setLoading(true);

          try {
            await submitToWebApp({
              formType: "membership",
              fullName,
              address,
              phone,
              birthday,
              ageRange,
              occupation,
              maritalStatus,
              email,
              consentGiven: true,
              hp,
            });

            setMsg("Submitted. We'll reach out soon.");
            setFullName("");
            setAddress("");
            setPhone("");
            setBirthday("");
            setAgeRange("");
            setOccupation("");
            setMaritalStatus("");
            setEmail("");
            setConsent(false);
            setHp("");

            setTimeout(() => onDone(), 700);
          } catch (err: any) {
            setMsg(err?.message || "Something went wrong.");
          } finally {
            setLoading(false);
          }
        }}
        className="grid gap-5"
      >
        {/* Consent checkbox — first thing users fill */}
        <div className="rounded-xl border border-black/10 bg-neutral-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 accent-black"
              required
            />
            <span className="leading-relaxed text-sm text-black/70">
              I hereby consent to the collection and storage of my personal data by Salt City Church
              for administrative and record-keeping purposes.{" "}
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="font-semibold text-black underline transition-opacity hover:opacity-70"
              >
                Read our Privacy Policy
              </button>
              .
            </span>
          </label>
        </div>

        {/* Honeypot */}
        <div className="hidden">
          <label>
            Leave this empty:
            <input value={hp} onChange={(e) => setHp(e.target.value)} />
          </label>
        </div>

        {/* Row 1: Name + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </Field>
          <Field label="Phone Number">
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="+234..."
            />
          </Field>
        </div>

        {/* Row 2: Birthday + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Birthday (Month/Day)">
            <Input
              value={birthday}
              onChange={(e) => setBirthday(e.target.value.toUpperCase())}
              required
              placeholder="OCT/10"
              pattern="^[A-Z]{3}/[0-9]{2}$"
              title="Use format like OCT/10"
              maxLength={6}
            />
          </Field>
          <Field label="Email Address">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@email.com"
            />
          </Field>
        </div>

        {/* Row 3: Age Range + Occupation */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Age Range">
            <Select value={ageRange} onChange={(e) => setAgeRange(e.target.value)} required>
              <option value="" disabled>
                Select one
              </option>
              <option>Under 18</option>
              <option>18–24</option>
              <option>25–34</option>
              <option>35–44</option>
              <option>45–54</option>
              <option>55+</option>
            </Select>
          </Field>
          <Field label="Occupation">
            <Input
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              placeholder="e.g. Teacher, Engineer..."
            />
          </Field>
        </div>

        {/* Row 4: Marital Status + Address */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Marital Status">
            <Select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </Select>
          </Field>

          <Field label="Home Address">
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Area / street, city"
            />
          </Field>
        </div>

        {msg && (
          <div
            className={cx(
              "text-sm font-semibold",
              msg.startsWith("Submitted") ? "text-green-700" : "text-red-600"
            )}
          >
            {msg}
          </div>
        )}

        <SubmitRow onDone={onDone} loading={loading} />
      </form>
    </>
  );
}