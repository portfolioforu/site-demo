import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Card, PageTitle, Bullets } from "@/components/site/Layout";

export const Route = createFileRoute("/projets/script-backup")({
  head: () => ({
    meta: [
      { title: "Projet : Script de sauvegarde automatisé — Testeur Dupuis" },
      {
        name: "description",
        content:
          "Script Python/Bash de sauvegarde : archives horodatées tar.gz, contrôle SHA-256, rétention 30 jours et alerte mail.",
      },
      { property: "og:title", content: "Script d'automatisation de sauvegarde système" },
      {
        property: "og:description",
        content: "Python, Bash, Crontab et SHA-256 : mission de stage chez TechData.",
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
        <PageTitle kicker="// projet 02" title="Script d'Automatisation de Sauvegarde Système" />
      </div>

      <Card>
        <div className="grid gap-4 border-b border-border pb-6 font-mono text-xs text-muted-foreground md:grid-cols-2">
          <div>
            <span className="text-primary">Technologies :</span> Python 3, Bash, Crontab, SHA-256
          </div>
          <div>
            <span className="text-primary">Contexte :</span> Mission de stage chez TechData
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold">1. Problématique initiale</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          L'entreprise manquait d'une solution centralisée et légère pour effectuer des sauvegardes
          régulières des fichiers de configuration réseau et des bases de données sans impacter la
          bande passante durant les heures de travail.
        </p>

        <h2 className="mt-8 text-xl font-semibold">2. Fonctionnalités développées</h2>
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Extraction automatique :</strong> Récupération
              quotidienne des répertoires cibles (
              <code className="font-mono text-primary">/etc</code>,{" "}
              <code className="font-mono text-primary">/var/www</code>, bases SQL).
            </>,
            <>
              <strong className="text-foreground">Compression & Archivage :</strong> Création
              d'archives horodatées au format{" "}
              <code className="font-mono text-primary">.tar.gz</code>.
            </>,
            <>
              <strong className="text-foreground">Contrôle d'intégrité :</strong> Calcul de
              l'empreinte SHA-256 de chaque archive pour détecter toute altération.
            </>,
            <>
              <strong className="text-foreground">Rétention glissante :</strong> Suppression
              automatique des archives de plus de 30 jours pour préserver l'espace disque.
            </>,
            <>
              <strong className="text-foreground">Alerte Mail :</strong> Envoi automatique d'un
              rapport d'exécution (succès ou erreur) à l'administrateur système.
            </>,
          ]}
        />

        <h2 className="mt-8 text-xl font-semibold">3. Déploiement</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Le script a été intégré dans la <code className="font-mono text-primary">crontab</code> du
          serveur principal pour une exécution nocturne à 02h00. Il tourne actuellement en
          production sans interruption.
        </p>
      </Card>
    </SiteLayout>
  );
}
