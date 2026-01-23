import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src="/place-for-you.jpg"
              alt="Welcome"
              className="h-[420px] w-full object-cover lg:h-[540px]"
            />
          </div>

          <div>
            <h1 className="text-5xl lg:text-7xl leading-tight font-black mb-6 tracking-tight">
              WELCOME TO SALTCITY!
            </h1>

            <p className="text-lg lg:text-xl text-black/75 leading-relaxed max-w-[540px] mb-8">
SaltCity Church is a Bible-teaching church focused on Discipling Believers and Perfecting them for the Fulfillment of the Work of Ministry.
     </p>

            <div className="max-w-[540px]">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-black/70">
                <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-black/30 text-xs">📍</span>
                <span>Find Your Closest Location</span>
              </div>

              <select className="w-full rounded-xl border border-black/20 bg-white px-5 py-4 text-base shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-black/20">
                <option value="">Choose a Location</option>
                <optgroup label="Online">
                  <option value="online">SaltCity Online</option>
                </optgroup>
                <optgroup label="Nigeria">
                  <option value="warri">Warri</option>
                  <option value="benin">Benin City</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}