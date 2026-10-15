export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-zinc-500 text-sm">
          © 2025 Test D Tech. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          {[
            { label: "TikTok", href: "#" },
            { label: "YouTube", href: "#" },
            { label: "Instagram", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
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
