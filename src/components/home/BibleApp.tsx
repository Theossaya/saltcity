import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ListenToSermons() {
  return (
    <section className="py-20 bg-neutral-900">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-2c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
                </svg>
              </div>
              <div className="text-3xl font-black text-white">Listen to Our Sermons</div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-[540px] mb-10">
              Grow in grace, build conviction and enter into true liberty with our rich audio sermons, covering every aspect of the faith.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-white/90">
                Listen on Telegram
              </Button>
              <Button className="bg-transparent text-white ring-2 ring-white/30 hover:ring-white/60 hover:bg-white/10">
                Listen on Spotify
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[480px] w-[300px] rounded-[48px] bg-gradient-to-br from-neutral-700 to-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-4">
              <div className="absolute top-8 left-1/2 -translate-x-1/2 h-7 w-32 rounded-full bg-black/80" />
              <div className="mt-12 h-full rounded-[36px] bg-gradient-to-br from-neutral-800 to-black border border-white/5 p-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" opacity="0.9">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-white text-base font-bold mb-2">Audio Sermons</div>
                <div className="text-white/60 text-sm text-center">Available on all platforms</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}