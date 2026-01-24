import Container from "@/components/ui/Container";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    details: ["info@saltcity.church", "support@saltcity.church"],
    href: "mailto:info@saltcity.church",
  },
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    details: ["+234 801 234 5678", "Mon-Fri, 9AM-5PM WAT"],
    href: "tel:+2348012345678",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "WhatsApp",
    details: ["+234 801 234 5678", "Quick responses"],
    href: "https://wa.me/2348012345678",
  },
  {
    icon: <MapPin size={28} />,
    title: "Visit Us",
    details: ["20 Okumagba Ave, Warri", "Delta State, Nigeria"],
    href: "/locations",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We'd love to hear from you. Whether you have a question, need prayer, or want to get involved, we're here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {CONTACT_METHODS.map((method) => (
              
                <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group bg-neutral-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                <div className="w-16 h-16 rounded-xl bg-black/5 group-hover:bg-black group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-colors">
                  {method.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-sm text-black/70">
                    {detail}
                  </p>
                ))}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-black mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow">
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Partnership</option>
                    <option>Volunteering</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-neutral-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 text-white">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black mb-4">Office Hours</h2>
                <div className="space-y-2 text-white/80">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM (WAT)</p>
                  <p><strong>Saturday:</strong> Closed</p>
                  <p><strong>Sunday:</strong> Service times only</p>
                </div>
                <p className="mt-4 text-white/60 text-sm">
                  For urgent matters outside office hours, please call or WhatsApp our emergency line.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}