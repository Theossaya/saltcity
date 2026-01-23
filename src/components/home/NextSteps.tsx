import Container from "@/components/ui/Container";

const NEXT_STEPS = [
  {
    title: "Pray With Us",
    desc: "We pray every morning on Mixlr and Telegram.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6v12M12 12l-3-3m3 3l3-3"/>
        <path d="M4 9l8-6 8 6"/>
      </svg>
    )
  },
  {
    title: "Join a Company",
    desc: "Do life with a community of believers close to you.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4"/>
        <circle cx="16" cy="9" r="3"/>
        <path d="M2 21v-3c0-2 2-4 5-4h4c3 0 5 2 5 4v3"/>
        <path d="M18 21v-2c0-2 1-3 3-3"/>
      </svg>
    )
  },
  {
    title: "Serve in a Unit",
    desc: "Dispense your gift/grace through faithful service.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    )
  }
];

export default function NextSteps() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-center text-4xl font-black mb-12 tracking-tight">
          Take Your Next Step
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {NEXT_STEPS.map((step) => (
            <div
              key={step.title}
              className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-black/5"
            >
              <div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {step.title}
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}