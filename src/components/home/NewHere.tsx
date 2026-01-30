import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NewHere() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/new-here.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Soft overlay (not too dark) */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Optional: gentle tint for polish */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      {/* Bottom fade into the next section background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent" />

      <Container className="relative">
        <div className="py-20 lg:py-24 flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              New to SaltCity?
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              Here at SaltCity, we teach believers how to live victoriously by practicing the
              Written Word of GOD and living everyday with JESUS as our EXAMPLE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/app/who-we-are" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
                  Who We Are
                </Button>
              </Link>

              <Link href="/app/next-steps" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-transparent text-white ring-1 ring-white/50 hover:ring-white hover:bg-white/10 cursor-pointer">
                  Grow With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
