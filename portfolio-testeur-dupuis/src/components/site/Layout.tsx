import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Parcours" },
  { to: "/competences", label: "Compétences & Projets" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen grid-bg">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="group flex flex-col leading-tight">
            <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">
              TESTEUR DUPUIS
            </span>
            <span className="mono-label text-primary">// portfolio sisr</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 pt-2 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors [&.active]:bg-secondary [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">{children}</main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Testeur Dupuis — Démo réalisée pour Portfolio For U</p>
          <p className="font-mono text-xs tracking-widest text-primary">BTS SIO · OPTION SISR</p>
        </div>
      </footer>
    </div>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mono-label">{kicker}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gradient md:text-5xl">{title}</h1>
      <div className="mt-5 h-px w-24 bg-primary" />
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card-panel p-6 md:p-8 ${className}`}>{children}</div>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
