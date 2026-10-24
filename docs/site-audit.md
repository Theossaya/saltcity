# Site audit — saltcitycentral.org

Full sweep of the codebase and the running site, 24 October 2026. Everything
below was measured, not guessed: page weights come from the browser against a
production build, 404s were confirmed on the live site, and dead code was found
by checking what imports what.

Ordered by what costs the most to leave alone.

---

## 1. Images are the whole performance problem

The site is slow for one reason: it serves camera-original photos.

| Page | Weight | Of which raw images |
| --- | --- | --- |
| Home | 5.1 MB | 4.8 MB across 5 images |
| Who We Are | 4.1 MB | 4.0 MB from a single image |

On Who We Are, `transform.jpg` alone is **3,979 KB** — 98% of the page. On the
same page, the leadership portraits run through `next/image` and come down at
**11–29 KB each**. Same photos, same page: the optimised ones are roughly 200
times lighter.

On a Warri mobile connection, 5 MB is the difference between a page that opens
and a page people abandon.

**Cause:** 29 `<img>` tags across 20 files bypass Next's image pipeline, so
there is no resizing, no WebP, no lazy loading. The files behind them were
never resized either.

Worst offenders on disk, all currently referenced:

| File | Size | Used by |
| --- | --- | --- |
| `images/FAS_0365.jpg.jpeg` | 24.9 MB | homepage hero |
| `downloads/personal-devotion.pdf` | 24.4 MB | resources |
| `images/fulfill_call.jpeg` | 10.0 MB | who-we-are |
| `images/FAS_1160.jpg` | 8.0 MB | homepage hero |
| `images/home4.jpg` | 7.4 MB | homepage hero |
| `images/PR.jpg` | 4.7 MB | leadership |
| `images/transform.jpg` | 4.0 MB | who-we-are |

A 25 MB source also strains Vercel's image optimiser on every cold render, and
is close to the size where it gives up and serves the original.

**Fix:** resize every photo to 2000px max and re-encode (the ones I compressed
for the blog went from 7–12 MB to about 120 KB with no visible loss), then
replace the 29 `<img>` tags with `next/image`. Files are listed in §7.

## 2. 327 MB of files nothing uses

`public/` is **483 MB**: 216 files, of which **134 files totalling 327 MB are
referenced nowhere in the code**. Among them a `public/images/New folder/`
holding raw camera exports at 9–17 MB each, plus `lifecity.jpeg` (15.7 MB) and
`DSC_8895.jpg.jpeg` (12.3 MB).

This ships in every clone, every CI run and every deployment. Nobody ever sees
the files.

**Fix:** delete them (git history keeps them recoverable), or move the originals
to Drive and keep only web-sized copies in the repo.

## 3. Broken things on the live site

**Seven resource downloads return 404.** Confirmed on production, not just
locally:

```
/downloads/for-children-rhapsody.pdf   404
/downloads/for-my-husband.pdf          404
/downloads/for-my-wife.pdf             404
/downloads/in-jesus-rhapsody.pdf       404
/downloads/prayer-guide.pdf            404
/downloads/prosperity-rhapsody.pdf     404
/downloads/victory-rhapsody.pdf        404
```

They are listed in `src/app/resources/resourcesData.ts` and presented as
downloads. Anyone clicking gets an error page. Only `personal-devotion.pdf`
exists.

**Five media images 404**, so cards render as broken boxes. On
`/media/sermon-series`, three of eight images are broken right now:
`new-creation-realities.jpeg`, `the-saltcity.jpeg`,
`resurrection-faith-seminar.jpg`, plus `new-here.jpg` and `place-for-you.jpg`
elsewhere.

**Two components point at images that do not exist**: `HeroSection.tsx`
(`hero-image.jpg`) and `BibleAppSection.tsx` (`phone-mockup.png`). Both are
dead code (§5), which is the only reason nobody has noticed.

**`/qr` returns HTTP 400** at its own URL.

## 4. Wrong data in the sermon archive

In `src/app/media/mediaData.ts`:

- **The same YouTube video is used in three different series.** `hLNcV4dqAIo`
  appears as an episode of Write the Vision, New Testament Giving *and*
  Resurrection Faith Seminar. Two of those three are showing people the wrong
  message.
- **Duplicate episode slugs inside the same series**, e.g.
  `ressurection-faith-seminar-2.0` twice and `write-the-vision` twice. The
  `?play=` link matches the first one, so the duplicate episode is unreachable.
- `ressurection` is misspelled in slugs, which are public URLs.

This is the kind of drift the YouTube sync was built to end. Once the API key is
in, the cleanest fix is to delete these hand-written series and let the
playlists be the source of truth.

## 5. Dead code: 9 components, about 1,040 lines

Never imported anywhere:

| File | Lines |
| --- | --- |
| `components/home/HeroStage.tsx` | 358 |
| `app/media/CarouselSection.tsx` | 235 |
| `components/sections/HeroSection.tsx` | 82 |
| `components/home/DualContentZone.tsx` | 82 |
| `components/sections/NextStepsSection.tsx` | 72 |
| `components/sections/BibleAppSection.tsx` | 63 |
| `components/forms/FilloutModal.tsx` | 58 |
| `components/sections/NewToLifeSection.tsx` | 58 |
| `components/ui/LinkButton.tsx` | 31 |

`HeroStage` is worth special mention: `Hero.tsx` defines its own `HeroStage`
function internally, so the 358-line file of the same name is a stale copy.
Anyone editing the hero could easily edit the wrong one.

**Orphaned API routes:** `/api/fillout-submit` (its only caller is the dead
`FilloutModal`), `/api/first-time`, `/api/qr`, and `/api/fathers-blessing`
(whose page now redirects to the homepage).

**Unused dependencies:** `@fillout/react` and `leaflet.markercluster` (3.7 MB in
`node_modules`).

**Unused fonts:** `public/fonts/` holds 40 OTF files (2.0 MB). The layout wires
up 7. The other 33 are never loaded.

## 6. Fonts cost more than they need to

All seven font weights are preloaded on every page, about 330 KB, before the
browser knows which it needs. They are also `.otf`; converting to `.woff2`
typically cuts 30–50% with no visual change.

**Fix:** convert to woff2, and preload only Regular, Bold and Black (what the
pages actually open with), leaving the rest to load on demand.

## 7. Code quality

ESLint reports **134 problems (94 errors)** across `src`:

| Rule | Count | What it means |
| --- | --- | --- |
| `@typescript-eslint/no-explicit-any` | 43 | type checking switched off at the risky spots |
| `react/no-unescaped-entities` | 38 | raw apostrophes and quotes in JSX |
| `@next/next/no-img-element` | 29 | the image problem in §1 |
| `react-hooks/set-state-in-effect` | 12 | cascading re-renders |
| `@typescript-eslint/no-unused-vars` | 11 | leftovers |

**The `any` types cluster exactly where they hurt most** — form handling:
`next-steps/page.tsx` (9), `home/NextSteps.tsx` (4), `home/Hero.tsx` (3),
`api/evangelism/route.ts` (3), `MembershipForm.tsx` (2), `api/forms/route.ts`
(2). A mistyped field name there fails silently and the submission arrives
missing data, with nothing in the logs.

**12 files call `setState` synchronously inside `useEffect`**, which makes React
render twice on every mount: blog list and post, citybuilders, contact,
ebenezer-grant, evangelism, spirit-of-faith, giving and giving/faq,
housekeeping, join, media carousel. Most are an "animate in on mount" flag that
CSS can do by itself.

**12 of 40 pages are entirely client-rendered** (`"use client"` on the page
itself): blog, blog/[id], contact, giving/faq, giving/ways, housekeeping, join,
next-steps, resources, shop, songs/[albumId], who-we-are/our-beliefs. They ship
more JavaScript and paint later than they need to; most only need a small
interactive island, not a client page.

**Four files carry near-duplicate form logic**: `next-steps/page.tsx` (1,312
lines), `home/NextSteps.tsx` (639), `MembershipForm.tsx` (438),
`contact/page.tsx` (460). One shared submit hook would remove most of it.

## 8. Reliability and correctness

**Rate limiting does not work in production.** Five API routes keep their
counters in a module-level `Map`. On Vercel every request can hit a different
instance, and instances are recycled constantly, so the limit resets. It will
stop a casual repeat-clicker and nothing else. If spam ever becomes real, this
needs to live in Supabase or a shared store.

**Admin auth** (`src/proxy.ts`) compares credentials with a hand-written
`timingSafeEqual` that returns early when lengths differ, so it leaks password
length. It should use `crypto.timingSafeEqual`. Basic auth with an env password
is otherwise acceptable for this.

**`dangerouslySetInnerHTML`** is used for blog article bodies. Safe today
because the HTML lives in the repo and only you edit it. It stops being safe the
moment article content comes from a database or a CMS.

**Three public pages are missing from the sitemap**: `/dear-governor`,
`/ebenezer-grant`, `/evangelism`. Search engines are less likely to find them.

---

## Suggested order

**First, because people hit these today**
1. Restore or remove the seven 404 downloads on `/resources`.
2. Fix the five broken media images.
3. Fix the duplicated YouTube ID and duplicate episode slugs.

**Second, the big performance win**
4. Resize and re-encode every photo over 500 KB.
5. Replace the 29 `<img>` tags with `next/image`.
6. Delete the 327 MB of unreferenced files.
7. Convert fonts to woff2 and preload only three weights.

**Third, tidying that prevents future bugs**
8. Delete the nine dead components and the orphaned API routes.
9. Remove `@fillout/react`, `leaflet.markercluster` and the 33 unused fonts.
10. Type the form payloads instead of `any`.
11. Move the mount-flag effects into CSS, and make the 12 client pages server
    pages with small client islands.
12. Add the three missing sitemap entries; fix the `/qr` 400.

**Later, when it matters**
13. Move rate limiting into Supabase.
14. Use `crypto.timingSafeEqual` for admin auth.
15. Retire the hand-written sermon series once the YouTube key is live.

Items 1–3 are small and worth doing immediately. Items 4–7 are where the speed
is: together they should take the homepage from 5.1 MB to well under 1 MB.
