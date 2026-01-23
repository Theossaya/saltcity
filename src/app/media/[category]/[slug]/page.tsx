import Link from "next/link";
import {
  CATEGORY_META,
  MEDIA_ITEMS,
  type MediaCategory,
  type MediaItem,
} from "../../mediaData";

function isCategory(x: string): x is MediaCategory {
  return x in CATEGORY_META;
}

export default async function MediaDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (!isCategory(category)) {
    return notFoundUI();
  }

  const meta = CATEGORY_META[category];
  const item = MEDIA_ITEMS.find(
    (x) => x.category === category && x.slug === slug
  );

  if (!item) {
    return notFoundUI();
  }

  const related = MEDIA_ITEMS.filter(
    (x) => x.category === category && x.slug !== slug
  ).slice(0, 6);

  return (
    <main className="pb-16">
      {/* Banner */}
      <div className="h-[210px] w-full overflow-hidden">
        <img
          src={item.heroImage}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Top section (title + summary) */}
        <div className="pt-10">
          <div className="text-xs font-semibold tracking-wide text-black/60">
            {meta.title.toUpperCase()}
          </div>

          <h1 className="mt-3 text-[40px] font-extrabold leading-[1.05] tracking-tight">
            {item.title}
          </h1>

          <p className="mt-4 max-w-[760px] text-[16px] leading-[28px] text-black/70">
            {item.summary}
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {item.primaryCta ? (
              <a
                href={item.primaryCta.href}
                className="rounded-full bg-black px-6 py-2 text-[13px] font-semibold text-white"
              >
                {item.primaryCta.label}
              </a>
            ) : null}

            {item.secondaryCta ? (
              <a
                href={item.secondaryCta.href}
                className="rounded-full border border-black/15 px-6 py-2 text-[13px] font-semibold text-black hover:border-black/25"
              >
                {item.secondaryCta.label}
              </a>
            ) : null}

            <Link
              href={`/media/${category}`}
              className="rounded-full border border-black/10 px-6 py-2 text-[13px] font-semibold text-black/70 hover:border-black/20"
            >
              View all in {meta.title}
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        {item.resources?.length ? (
          <div className="mt-10">
            <div className="text-sm font-extrabold">Additional Resources</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.resources.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  className="rounded-full border border-black/15 px-5 py-2 text-xs font-semibold hover:border-black/25"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {/* In This Series */}
        <div className="mt-12">
          <div className="text-sm font-extrabold">In This Series</div>

          {item.episodes?.length ? (
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.episodes.map((ep) => (
                <Link
                  key={ep.slug}
                  href={`/media/${category}/${slug}?play=${ep.slug}`}
                  className="group"
                >
                  <div
                    className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                    style={{ boxShadow: "0 14px 34px rgba(0,0,0,0.12)" }}
                  >
                    <div className="relative h-[170px]">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-[11px] font-semibold text-white">
                        {ep.duration ?? "—"}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="text-[14px] font-extrabold leading-snug">
                        {ep.title}
                      </div>
                      {ep.part ? (
                        <div className="mt-2 text-[11px] font-semibold tracking-wide text-black/45">
                          {ep.part}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6 text-black/70">
              No items yet. Add <code>episodes</code> for this entry in{" "}
              <code>mediaData.ts</code>.
            </div>
          )}
        </div>

        {/* Related */}
        {related.length ? (
          <div className="mt-14">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold">Related</div>
              <Link
                href={`/media/${category}`}
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold hover:border-black/20"
              >
                View all
              </Link>
            </div>

            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RelatedCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <Link
            href="/media"
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            ← Back to Media
          </Link>
        </div>
      </div>
    </main>
  );
}

function RelatedCard({ item }: { item: MediaItem }) {
  return (
    <Link href={`/media/${item.category}/${item.slug}`} className="group">
      <div
        className="overflow-hidden rounded-2xl border border-black/10 bg-white"
        style={{ boxShadow: "0 14px 34px rgba(0,0,0,0.12)" }}
      >
        <div className="h-[170px]">
          <img src={item.cardImage} alt={item.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <div className="text-[14px] font-extrabold">{item.title}</div>
        </div>
      </div>
    </Link>
  );
}

function notFoundUI() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="text-3xl font-extrabold">Not found</h1>
      <p className="mt-3 text-black/70">That page doesn’t exist yet.</p>
      <Link
        href="/media"
        className="mt-6 inline-flex rounded-full bg-black px-6 py-2 text-sm font-semibold text-white"
      >
        Back to Media
      </Link>
    </main>
  );
}
