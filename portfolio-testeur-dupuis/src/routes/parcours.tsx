import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Card, PageTitle, Bullets } from "@/components/site/Layout";
import cv from "@/assets/cv.asset.json";

export const Route = createFileRoute("/parcours")({
  head: () => ({
    meta: [
      { title: "Parcours — Testeur Dupuis, BTS SIO SISR" },
      {
        name: "description",
        content:
          "Stage technicien réseau chez TechData, BTS SIO option SISR et Baccalauréat NSI : parcours professionnel et scolaire.",
      },
      { property: "og:title", content: "Parcours — Testeur Dupuis" },
      {
        property: "og:description",
        content: "Stage TechData, BTS SIO SISR et Bac NSI : le détail du parcours.",
      },
    ],
  }),
  component: Parcours,
});

function Parcours() {
  return (
    <SiteLayout>
      <PageTitle kicker="// timeline" title="Mon Parcours Professionnel & Scolaire" />

      <a
        href={cv.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Télécharger mon CV au format PDF 📄
      </a>

      <div className="mt-10 space-y-6 border-l border-border pl-6 md:pl-10">
        <Card>
          <p className="mono-label text-primary">TechData — 8 semaines (2025)</p>
          <h2 className="mt-3 text-2xl font-semibold">
            Stage Technicien Réseau & Infrastructure
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Participation active à la maintenance et à la sécurisation du parc informatique :
          </p>
          <Bullets
            items={[
              <>
                <strong className="text-foreground">Brassage & Commutation :</strong> Installation,
                repérage et configuration de commutateurs Cisco IOS.
              </>,
              <>
                <strong className="text-foreground">Scripting & Automatisation :</strong> Écriture
                de scripts Bash et Python pour automatiser les sauvegardes.
              </>,
              <>
                <strong className="text-foreground">Support & Incidents :</strong> Traitement des
                tickets de niveau 1 et 2, diagnostic de pannes avec Wireshark.
              </>,
              <>
                <strong className="text-foreground">Documentation :</strong> Rédaction de procédures
                d'intervention et mise à jour du schéma réseau.
              </>,
            ]}
          />
        </Card>

        <Card>
          <p className="mono-label text-primary">
            Services Informatiques aux Organisations (2024 - 2026)
          </p>
          <h2 className="mt-3 text-2xl font-semibold">BTS SIO — Option SISR</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Formation approfondie sur l'administration des systèmes, la conception réseau et la
            cybersécurité :
          </p>
          <Bullets
            items={[
              "Administration de serveurs Linux (Debian) et Windows Server (Active Directory, DNS, DHCP).",
              "Configuration du routage dynamique, des pare-feu et des accès distants VPN.",
              "Gestion des risques informatiques, mise en conformité et continuité d'activité (PCA/PRA).",
            ]}
          />
        </Card>

        <Card>
          <p className="mono-label text-primary">Spécialités NSI & Mathématiques (2024)</p>
          <h2 className="mt-3 text-2xl font-semibold">Baccalauréat Général</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Bases solides en architecture matérielle, modèles réseaux (OSI/TCP-IP), bases de données
            (SQL) et Python.
          </p>
        </Card>
      </div>
    </SiteLayout>
  );
}
