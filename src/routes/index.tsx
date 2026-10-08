import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Sprout, Users } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AnimatedCatchphrase } from "@/components/site/AnimatedCatchphrase";
import { PathwayInfographic } from "@/components/site/PathwayInfographic";
import { stories } from "@/data/stories";
import hero from "@/assets/hero-students-planning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Act Hub — University Knowledge into Local Action" },
      {
        name: "description",
        content:
          "We turn university knowledge into local actions and share stories of change for planetary well-being worldwide, using the Finnish Action Pathway method.",
      },
      {
        property: "og:title",
        content: "Act Hub — University Knowledge into Local Action",
      },
      {
        property: "og:description",
        content:
          "Success stories of local action for planetary well-being, powered by the Action Pathway method from Finland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-6 lg:pt-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
            <Sprout className="h-3.5 w-3.5" />A method born in Finland, practised worldwide
          </p>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <AnimatedCatchphrase />
              <h1 className="mt-5 font-display text-2xl leading-[1.12] text-ink sm:text-3xl lg:text-4xl">
                We turn university knowledge into local actions.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We bring together university communities worldwide and celebrate stories of change
                for planetary well-being. People who learn the Action Pathway method leave in an
                empowered state — able to act on the problems that matter to them most.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/act-hub"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Explore our hub <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/method"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Explore our method
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={hero}
                width={1600}
                height={1104}
                alt="Students and a teacher planning local action together"
                className="soft-shadow aspect-4/3 w-full rounded-3xl object-cover"
              />
              <div className="soft-shadow absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 sm:block">
                <p className="font-display text-2xl text-primary">5 steps</p>
                <p className="text-xs text-muted-foreground">from problem to ripple effect</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value strip */}
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: "Collected globally",
                body: "Success stories for planetary well-being, gathered from communities across the planet.",
              },
              {
                icon: Users,
                title: "Built in community",
                body: "Change-makers, universities and non-profits supporting each other's first and final steps.",
              },
              {
                icon: Sprout,
                title: "Grounded in research",
                body: "Action competence can be developed by anyone, no matter the conditions.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
                <c.icon className="h-6 w-6 text-leaf" />
                <h2 className="mt-4 text-xl">{c.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-clay uppercase">
                Below we share success stories
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Change that started with one action</h2>
            </div>
            <Link
              to="/act-hub"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold tracking-wide text-accent-foreground uppercase"
            >
              Act Hub
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article
                key={s.slug}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-clay uppercase">
                    {s.place}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {s.challenge}
                  </p>
                  <Link
                    to="/act-hub"
                    hash={s.slug}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read the story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Method */}
        <section className="mt-24 border-y border-border bg-secondary/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-3xl sm:text-4xl">
              Action Pathway — a method that enables local success stories, globally
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              The Action Pathway is built on research and theories of action competence for
              sustainability — an ability that can be developed no matter the conditions. Research
              shows action competence brings about positive change and a happier, more fulfilling
              life. Humans need purpose, and we are here to support you in taking meaningful steps.
            </p>
            <div className="mt-10">
              <PathwayInfographic />
            </div>
            <Link
              to="/method"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              See the full method and our eco-social approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <div className="soft-shadow rounded-3xl bg-primary px-8 py-14 text-center">
            <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl">
              “What will it take for me to be the change?”
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Share your action story, apply as a change-maker, or bring the method to your
              university.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/act-hub"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
              >
                Share your action story
              </Link>
              <Link
                to="/for-universities"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Apply with your university
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
