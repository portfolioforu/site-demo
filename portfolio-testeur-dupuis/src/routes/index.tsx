import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Card, Bullets } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Testeur Dupuis — Portfolio SISR & Cybersécurité" },
      {
        name: "description",
        content:
          "Étudiant en BTS SIO option SISR : réseaux, administration Linux/Windows Server et sécurisation d'infrastructures.",
      },
      { property: "og:title", content: "Testeur Dupuis — Portfolio SISR & Cybersécurité" },
      {
        property: "og:description",
        content: "Réseaux, systèmes et cybersécurité : parcours, compétences et projets.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "2+", l: "Années d'études spécialisées" },
  { n: "8", l: "Semaines de stage intensif" },
  { n: "5+", l: "Projets réseau & système" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="card-panel overflow-hidden p-8 md:p-14">
        <p className="mono-label">// étudiant bts sio — option sisr</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gradient md:text-7xl">
          Testeur Dupuis
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Étudiant en BTS SIO (Option SISR), passionné par l'architecture réseau, l'administration
          de serveurs Linux/Windows et la sécurisation des infrastructures d'entreprise.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/parcours"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Découvrir mon parcours →
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Me contacter ✉
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.l}>
            <div className="font-mono text-4xl font-bold text-primary">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </Card>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="mono-label">// profil</p>
          <h2 className="mt-3 text-2xl font-semibold">À propos de moi</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Formé aux exigences du terrain informatique, je maîtrise le déploiement de services
            réseau critiques (DNS, DHCP, Active Directory), le suivi d'incidents et le scripting
            d'automatisation. Rigoureux et curieux, je prépare une spécialisation en cybersécurité.
          </p>
          <Link to="/parcours" className="mt-6 inline-block text-sm font-semibold text-primary">
            Découvrir mon profil complet →
          </Link>
        </Card>

        <Card>
          <p className="mono-label">// expérience clé</p>
          <h2 className="mt-3 text-2xl font-semibold">Technicien Réseau — TechData</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Intervention directe sur l'infrastructure : configuration de VLANs et switchs Cisco,
            automatisation de sauvegardes via scripts Bash/Python et gestion de la sécurité du
            réseau local.
          </p>
          <Link to="/parcours" className="mt-6 inline-block text-sm font-semibold text-primary">
            Voir mes missions détaillées →
          </Link>
        </Card>

        <Card className="lg:col-span-2">
          <p className="mono-label">// stack</p>
          <h2 className="mt-3 text-2xl font-semibold">Compétences clés</h2>
          <Bullets
            items={[
              "Linux Debian & Windows Server",
              "Cisco IOS & Wireshark",
              "Python & Bash Scripting",
              "Sécurisation Netfilter & Active Directory",
            ]}
          />
          <Link to="/competences" className="mt-6 inline-block text-sm font-semibold text-primary">
            Voir tous les projets & compétences →
          </Link>
        </Card>
      </section>
    </SiteLayout>
  );
}
