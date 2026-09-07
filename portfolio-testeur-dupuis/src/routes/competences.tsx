import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Card, PageTitle, Bullets } from "@/components/site/Layout";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences & Projets — Testeur Dupuis" },
      {
        name: "description",
        content:
          "Systèmes, réseaux, scripting Python/Bash et projets : serveur web sécurisé Debian et script de sauvegarde automatisé.",
      },
      { property: "og:title", content: "Compétences & Projets — Testeur Dupuis" },
      {
        property: "og:description",
        content: "Compétences techniques SISR et projets réseau/système détaillés.",
      },
    ],
  }),
  component: Competences,
});

function Competences() {
  return (
    <SiteLayout>
      <PageTitle kicker="// savoir-faire" title="Compétences & Projets" />

      <h2 className="mono-label">Compétences techniques</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold">Systèmes & Réseaux</h3>
          <Bullets
            items={[
              "Linux (Debian / Ubuntu Server)",
              "Cisco IOS (Switchs, Routeurs, VLANs)",
              "Wireshark (Analyse de trames & logs)",
              "Pare-feu & Sécurité (Netfilter / iptables)",
            ]}
          />
        </Card>
        <Card>
          <h3 className="text-xl font-semibold">Développement & Outils</h3>
          <Bullets
            items={[
              "Python (Scripts & Automatisation)",
              "Bash / Shell Linux",
              "HTML5 / CSS3",
              "Git & GitHub",
            ]}
          />
        </Card>
      </div>

      <h2 className="mono-label mt-14">Projets réalisés</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="font-mono text-xs text-primary">01 / infrastructure</p>
          <h3 className="mt-3 text-xl font-semibold">Serveur Web Sécurisé</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Déploiement complet d'une infrastructure Web sécurisée sous Linux Debian avec filtrage
            réseau strict et durcissement système.
          </p>
          <Link
            to="/projets/serveur-web"
            className="mt-6 inline-block text-sm font-semibold text-primary"
          >
            Voir les détails du projet →
          </Link>
        </Card>
        <Card>
          <p className="font-mono text-xs text-primary">02 / automatisation</p>
          <h3 className="mt-3 text-xl font-semibold">Script de Sauvegarde System</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Création d'une solution automatisée gérant la compression, le chiffrement et le contrôle
            d'intégrité des sauvegardes critiques.
          </p>
          <Link
            to="/projets/script-backup"
            className="mt-6 inline-block text-sm font-semibold text-primary"
          >
            Voir les détails du projet →
          </Link>
        </Card>
      </div>
    </SiteLayout>
  );
}
