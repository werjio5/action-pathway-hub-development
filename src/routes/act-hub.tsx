import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { stories, boardImage } from "@/data/stories";

export const Route = createFileRoute("/act-hub")({
  head: () => ({
    meta: [
      { title: "ACT Hub — Action Stories for Planetary Well-being" },
      {
        name: "description",
        content:
          "Real success stories from university and school communities worldwide, with the actions people took alone and together.",
      },
      { property: "og:title", content: "ACT Hub — Action Stories" },
      {
        property: "og:description",
        content:
          "What can you do alone, and what can you do with your community? Explore stories of action from Finland, Europe and Uzbekistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActHub,
});

function ActHub() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <p className="text-xs font-semibold tracking-widest text-clay uppercase">Act Hub</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Be the change.
        </h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            "What is the main challenge you experience in your community?",
            "Do you know how to help?",
            "Are you ready to take action?",
          ].map((q) => (
            <p
              key={q}
              className="rounded-2xl border border-border bg-card p-5 font-display text-lg text-ink"
            >
              {q}
            </p>
          ))}
        </div>

        <section className="mt-20 space-y-16">
          {stories.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 gap-8 lg:grid-cols-2 lg:items-center"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                loading="lazy"
                className={`soft-shadow aspect-4/3 w-full rounded-3xl object-cover ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              />
              <div>
                <p className="text-xs font-semibold tracking-widest text-clay uppercase">
                  {s.place}
                </p>
                <h2 className="mt-2 text-3xl leading-snug">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {s.challenge}
                </p>

                <dl className="mt-6 overflow-hidden rounded-2xl border border-border">
                  <div className="grid gap-1 border-b border-border bg-card p-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="text-sm font-semibold text-ink">What can you do alone?</dt>
                    <dd className="text-base leading-relaxed text-muted-foreground">{s.alone}</dd>
                  </div>
                  <div className="grid gap-1 border-b border-border bg-card p-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="text-sm font-semibold text-ink">What can you do together?</dt>
                    <dd className="text-base leading-relaxed text-muted-foreground">{s.together}</dd>
                  </div>
                  <div className="grid gap-1 bg-secondary/60 p-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="text-sm font-semibold text-ink">The ripple effect</dt>
                    <dd className="text-base leading-relaxed text-muted-foreground">{s.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-24 grid gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2 lg:items-center">
          <img
            src={boardImage}
            alt="Action board with sticky notes mapping what participants can do now and in 3–4 months"
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl">Action Story Bank</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every workshop ends with a wall like this one: concrete steps for now, and steps for
              three to four months from now — written by the people who will take them. Share your
              action story and get featured.
            </p>
            <a
              href="mailto:info@acthub.org?subject=My%20action%20story"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-wide text-accent-foreground uppercase"
            >
              Share your action story
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Bringing a whole institution?{" "}
              <Link
                to="/for-universities"
                className="font-semibold text-primary underline decoration-accent underline-offset-4"
              >
                Apply with your university
              </Link>
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mt-24">
          <h2 className="text-3xl sm:text-4xl">Our roadmap</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "Awareness",
                body: "Collecting and sharing local knowledge from across the planet on what humans can do to improve planetary well-being — every day, starting today. Share your local challenges that need global awareness. Coming next: art-based awareness campaigns.",
              },
              {
                tag: "Action",
                body: "Knowledge is not enough. The Action Story Bank turns what people know into what people do, with an action-based approach grounded in research on action competence.",
              },
              {
                tag: "Core community",
                body: "First steps and final steps are easier among like-minded people. We select change-makers based on profile and motivation, and provide free mentoring and networking.",
              },
            ].map((r) => (
              <div key={r.tag} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-bold tracking-widest text-clay uppercase">{r.tag}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
          <a
            href="mailto:info@acthub.org?subject=Change-maker%20application"
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Apply to be a change-maker
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
