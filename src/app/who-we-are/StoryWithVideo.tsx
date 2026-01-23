import Link from "next/link";

export default function StoryWithVideo() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Video Section */}
          <div className="overflow-hidden rounded-2xl bg-black shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y1u3T6ZtEjU"
                title="SaltCity Church Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-black mb-6">Our Story</h2>

            <div className="space-y-4 text-lg leading-relaxed text-black/70">
              <p>
                SaltCity Church began in 2016 with a vision to transform lives in the city of Warri. What started as a small gathering has grown into a vibrant community of faith.
              </p>
              <p>
                As seen in our documentary, our journey has been one of "Faith to Faith." We are committed to raising generations of leaders and making disciples who impact their world.
              </p>
              <p>
                We believe church is more than a building—it's a family where God's Word is taught in truth and lives are empowered for purpose.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/who-we-are/our-beliefs"
                className="inline-flex items-center rounded-full bg-black px-8 py-3 text-white font-semibold hover:bg-black/90 transition-colors"
              >
                Our Beliefs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}