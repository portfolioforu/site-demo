import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Card, PageTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Testeur Dupuis, technicien réseau SISR" },
      {
        name: "description",
        content:
          "Contacter Testeur Dupuis par email, GitHub ou LinkedIn pour un stage ou une alternance en réseaux et cybersécurité.",
      },
      { property: "og:title", content: "Contact — Testeur Dupuis" },
      { property: "og:description", content: "Email, GitHub et LinkedIn." },
    ],
  }),
  component: Contact,
});

const cards = [
  {
    icon: "✉️",
    title: "Adresse Email",
    value: "test2@portfolioforu.com",
    href: "mailto:test2@portfolioforu.com",
    cta: "Envoyer un mail →",
    external: false,
  },
  {
    icon: "🐙",
    title: "GitHub",
    value: "Compte de démonstration",
    href: "https://github.com",
    cta: "Voir mon GitHub ↗",
    external: true,
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "Profil professionnel",
    href: "https://linkedin.com",
    cta: "Voir mon profil ↗",
    external: true,
  },
];

function Contact() {
  return (
    <SiteLayout>
      <PageTitle kicker="// prise de contact" title="Me Contacter" />

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <Card key={c.title}>
            <div className="text-3xl">{c.icon}</div>
            <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 break-words font-mono text-sm text-muted-foreground">{c.value}</p>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-6 inline-block text-sm font-semibold text-primary"
            >
              {c.cta}
            </a>
          </Card>
        ))}
      </div>
    </SiteLayout>
  );
}
