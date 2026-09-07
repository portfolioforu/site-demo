import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Card, PageTitle, Bullets } from "@/components/site/Layout";

export const Route = createFileRoute("/projets/serveur-web")({
  head: () => ({
    meta: [
      { title: "Projet : Serveur Web Debian sécurisé — Testeur Dupuis" },
      {
        name: "description",
        content:
          "Déploiement et durcissement d'un serveur web Debian 12 : Nginx, Netfilter, Fail2ban, SSH par clés et SSL/TLS.",
      },
      { property: "og:title", content: "Serveur Web Debian sécurisé" },
      {
        property: "og:description",
        content: "Nginx, iptables, Fail2ban et SSL/TLS : projet BTS SIO E4.",
      },
    ],
  }),
  component: Projet,
});

function Projet() {
  return (
    <SiteLayout>
      <Link to="/competences" className="text-sm font-semibold text-primary">
        ← Retour aux projets
      </Link>

      <div className="mt-4">
        <PageTitle
          kicker="// projet 01"
          title="Déploiement & Sécurisation d'un Serveur Web Debian"
        />
      </div>

      <Card>
        <div className="grid gap-4 border-b border-border pb-6 font-mono text-xs text-muted-foreground md:grid-cols-2">
          <div>
            <span className="text-primary">Technologies :</span> Debian 12, Nginx,
            Netfilter/iptables, Fail2ban, SSL/TLS
          </div>
          <div>
            <span className="text-primary">Contexte :</span> Projet académique BTS SIO / E4
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold">1. Objectif du projet</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Mettre en place une architecture Web de production capable de résister aux attaques
          automatisées courantes (scans de ports, brute-force SSH, injections) tout en garantissant
          une disponibilité optimale des services.
        </p>

        <h2 className="mt-8 text-xl font-semibold">2. Réalisations techniques</h2>
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Installation du système :</strong> Déploiement
              d'une distribution Debian 12 Minimal sans interface graphique sur machine virtuelle.
            </>,
            <>
              <strong className="text-foreground">Configuration du pare-feu Netfilter :</strong>{" "}
              Mise en place d'une politique DROP par défaut. Autorisation stricte des flux TCP 80
              (HTTP), 443 (HTTPS) et 22 (SSH sur port personnalisé).
            </>,
            <>
              <strong className="text-foreground">Sécurisation SSH :</strong> Désactivation de la
              connexion du compte root, authentification obligatoire par paire de clés RSA 4096
              bits.
            </>,
            <>
              <strong className="text-foreground">Protection Fail2ban :</strong> Configuration de
              règles de bannissement automatique des IP après 3 tentatives de connexion
              infructueuses.
            </>,
            <>
              <strong className="text-foreground">Certificat de chiffrement :</strong> Génération et
              intégration d'un certificat SSL/TLS pour forcer le HTTPS.
            </>,
          ]}
        />

        <h2 className="mt-8 text-xl font-semibold">3. Résultat & Compétences acquises</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Le serveur a été testé face à des outils d'analyse de vulnérabilités (Nmap, Nikto). Le
          niveau de durcissement (<em>hardening</em>) atteint permet de bloquer 100 % des tentatives
          d'intrusion de niveau 1.
        </p>
      </Card>
    </SiteLayout>
  );
}
