import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PathwayInfographic } from "@/components/site/PathwayInfographic";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Action Pathway — The Method Behind Every Action Story" },
      {
        name: "description",
        content:
          "The Action Pathway is a five-step method from Finland that builds action competence: problem statement, involving others, action possibilities, taking action and going viral.",
      },
      { property: "og:title", content: "Action Pathway — The Method" },
      {
        property: "og:description",
        content:
          "A five-step method built on research into action competence for sustainability and planetary well-being.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Method,
});

function Method() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <p className="text-xs font-semibold tracking-widest text-clay uppercase">
          Developed in Finland
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Action Pathway — a method to enable success stories of local action, globally
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The method is built upon existing research and theories of action competence for
          sustainability — an ability that can be developed no matter the conditions. We believe
          action competence is the key not only to human well-being, but to planetary well-being.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl">How the Action Pathway works</h2>
          <div className="mt-8">
            <PathwayInfographic />
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl">Our approach</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We take an eco-social approach to valuing life on Earth. It guides our solutions and
              actions towards a state where all living beings have the opportunity to live a happy,
              healthy life. That state is called planetary well-being.
            </p>
          </div>
          <div className="rounded-3xl bg-secondary p-8">
            <h2 className="text-2xl">Why it works</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Research proves that action competence is essential to bring about positive change —
              and to live a happier, more fulfilling life. Humans need purpose, and we support you
              in taking meaningful steps towards well-being.
            </p>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-border p-8">
          <h2 className="text-2xl">Guiding questions we work with</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Who experiences the problem the most?",
              "Who benefits if the problem is solved?",
              "Who has the power to change this?",
              "Who might be unaware that this affects them?",
              "What can I do today, with no preparation?",
              "What can we do together in one year?",
            ].map((q) => (
              <li
                key={q}
                className="rounded-xl bg-secondary/60 px-4 py-3 text-sm text-secondary-foreground"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/act-hub"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            See it in action
          </Link>
          <Link
            to="/for-universities"
            className="rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary"
          >
            Bring it to your curriculum
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
