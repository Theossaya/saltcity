import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NewHere() {
  return (
    <section className="relative overflow-hidden bg-black/95">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/new-here.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative">
        <Container>
          <div className="py-20 lg:py-24 flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                New to SaltCity?
              </h2>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                Here at SaltCity, we teach believers how to live victoriously by practicing the Written Word of GOD and living everyday with JESUS as our EXAMPLE.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" className="bg-white text-black hover:bg-white/90">
                  Who We Are
                </Button>
                <Button variant="secondary" className="bg-transparent text-white ring-1 ring-white/50 hover:ring-white hover:bg-white/10">
                  Grow With Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}