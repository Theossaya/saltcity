import Container from "@/components/ui/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const FOOTER_LINKS = [
  "Watch",
  "Locations",
  "Give",
  "Tools",
  "For Churches",
  "Careers",
  "Shop",
  "Contact Us",
];

const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Use",
  "Vulnerability Disclosure Program",
  "Cookie Preferences",
];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-14 grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-sm text-black/70">
              Attend{" "}
              <a href="#" className="text-sky-600 hover:underline">
                SaltCity Online
              </a>{" "}
              or a{" "}
              <a href="#" className="text-sky-600 hover:underline">
                SaltCity location
              </a>.
            </p>

            <div className="flex flex-wrap gap-x-2 text-sm text-sky-600">
              {LEGAL_LINKS.map((item, i) => (
                <span key={item} className="flex items-center">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                  {i < LEGAL_LINKS.length - 1 && (
                    <span className="mx-2 text-black/20">|</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-sm text-black/60">
              © {new Date().getFullYear()} SaltCity. All rights reserved.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 lg:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 justify-start lg:justify-end">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-sky-600 hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex gap-4 justify-start lg:justify-end">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-black text-white grid place-items-center hover:bg-black/90"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
