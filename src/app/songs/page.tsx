import Container from "@/components/ui/Container";
import { Play, Music2, ExternalLink } from "lucide-react";
import Link from "next/link";

const SONGS = [
  {
    title: "Rest All Over (Live)",
    thumbnail: "images/rest_all_over.jpeg",
    platforms: {
      youtube: "#",
      youtubeMusic: "#",
      spotify: "#",
      appleMusic: "#",
    }
  },
   {
    title: "Make Me Wise (Live)",
    thumbnail: "images/make-me-wise.jpeg",
    platforms: {
      youtube: "#",
      youtubeMusic: "#",
      spotify: "#",
      appleMusic: "#",
    }
  },
  {
    title: "Surrender (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Let Your Presence Fall (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Invade Us (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Thirsty Lord (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "One Encounter (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Living Water (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Running After You (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Jesus Loves You (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Apple of His Eyes (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "All Yours (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Closer (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Altar (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Holy Ghost and Fire (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Miracles (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "All the Way (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Jesus (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "Matchless One (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  },
  {
    title: "One Mic (Live)",
    thumbnail: "images/surrender.jpeg",
    platforms: { youtube: "#", youtubeMusic: "#", spotify: "#", appleMusic: "#" }
  }
];


const PLATFORMS = [
  {
    name: "YouTube",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    key: "youtube" as const,
  },
  {
    name: "YouTube Music",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-11.904C9.684 7.2 7.8 9.084 7.8 11.4c0 1.392.684 2.628 1.74 3.384l5.46-3.156V8.844c-.54-.42-1.176-.744-1.884-.864-.252-.048-.516-.072-.78-.072-.18 0-.36.012-.54.036z"/>
      </svg>
    ),
    key: "youtubeMusic" as const,
  },
  {
    name: "Spotify",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    key: "spotify" as const,
  },
  {
    name: "Apple Music",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.135-.04 0-.083.005-.124.005H5.988c-.152 0-.303.01-.452.01-.536 0-1.058.06-1.57.18-.47.106-1.028.287-1.438.525-1.11.646-1.85 1.67-2.167 2.98-.184.77-.257 1.56-.257 2.355v11.736c0 .747.058 1.496.232 2.228.303 1.28 1.048 2.29 2.155 3.023.586.387 1.214.605 1.893.725.495.087.98.118 1.474.118h12.02c.593 0 1.181-.04 1.77-.15.68-.124 1.304-.34 1.89-.73 1.11-.733 1.854-1.743 2.168-3.024.174-.732.232-1.48.232-2.228V6.124z"/>
      </svg>
    ),
    key: "appleMusic" as const,
  },
];

export default function SongsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80"
            alt="Worship"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Music2 size={24} className="text-white" />
              <span className="text-white font-semibold">SaltWorship</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Our Songs
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Experience worship that draws you closer to God. Stream our songs on your favorite platform.
            </p>
          </div>
        </Container>
      </section>

      {/* Platform Links */}
      <section className="py-12 bg-white border-b border-black/10">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com/@saltcitycentral"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF0000] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {PLATFORMS[0].icon}
              Listen on YouTube
            </a>
            
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1DB954] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {PLATFORMS[2].icon}
              Listen on Spotify
            </a>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition-colors"
            >
              {PLATFORMS[3].icon}
              Listen on Apple Music
            </a>
          </div>
        </Container>
      </section>

      {/* Songs Grid */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SONGS.map((song, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square bg-neutral-200">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play size={28} className="ml-1" fill="black" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4">{song.title}</h3>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-black/50 uppercase tracking-wide">
                      Listen On
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PLATFORMS.map((platform) => (
                        <a
                          key={platform.key}
                          href={song.platforms[platform.key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition-colors"
                          title={platform.name}
                        >
                          <span className="w-5 h-5">{platform.icon}</span>
                          <ExternalLink size={14} className="opacity-50" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Want More Worship?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our channels and never miss a new release.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com/@saltcitycentral?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Subscribe on YouTube
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}