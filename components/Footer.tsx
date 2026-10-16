export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-zinc-500 text-sm">
          © 2025 Test D Tech. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          {[
            { label: "TikTok", href: "https://www.tiktok.com/@testd.tech" },
            { label: "YouTube", href: "https://www.youtube.com/channel/UC2d8J25W7T0qJpYzRDNOJzw" },
            { label: "Instagram", href: "https://www.instagram.com/testd.tech" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-violet-400 transition-colors text-sm"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
