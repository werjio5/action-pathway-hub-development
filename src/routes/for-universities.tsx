import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/for-universities")({
  head: () => ({
    meta: [
      { title: "For Universities — Action Competence in Your Curriculum" },
      {
        name: "description",
        content:
          "Include the Action Pathway method in your curriculum to transform academic knowledge into action competence, with workshops, mentoring and published student action plans.",
      },
      { property: "og:title", content: "For Universities — ActHub" },
      {
        property: "og:description",
        content: "Turn academic knowledge into action competence with the Action Pathway method.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForUniversities,
});

const OFFERS = [
  {
    title: "Action workshops",
    body: "A facilitated session — online or on campus — where students move from problem statement to a co-created action plan in a single workshop.",
  },
  {
    title: "Curriculum integration",
    body: "The Action Pathway as a module inside an existing course, with pre-tasks, guiding questions, stakeholder analysis and self-reflection surveys.",
  },
  {
    title: "Teacher training",
    body: "We train your staff to facilitate the method themselves, so it keeps running after we leave.",
  },
  {
    title: "Featuring Students’ Actions",
    body: "Action plans your students create can be sent to the stakeholders that matter, and featured as success stories in the ACT Hub.",
  },
];

const JOURNEY = [
  {
    title: "Contact ActHub",
    body: "Get in contact with ActHub and begin a partnership around a meaningful local action.",
  },
  {
    title: "Integrate the Action Pathway",
    body: "Bring the method into your curriculum in the way that fits your university.",
    options: [
      "Integrate it into an existing course",
      "Create a separate, tailored course",
      "Request teacher training to use the Action Pathway",
    ],
  },
  {
    title: "Students take action",
    body: "Whichever route you choose, students develop and implement actions on local sustainability issues.",
  },
  {
    title: "Share the outcomes",
    body: "Promote your students’ action stories and outcomes through the ActHub platform.",
  },
  {
    title: "Create lasting impact",
    body: "Enable cross-sector engagement and help equip future generations to act for the planet.",
  },
];

function ForUniversities() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <p className="text-xs font-semibold tracking-widest text-clay uppercase">
          For universities
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Include the Action Pathway in your curriculum to transform knowledge into action
          competence.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Your students already have the knowledge. The method gives them the competence — and the
          confidence — to use it where they live.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {OFFERS.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-xl">{o.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-clay uppercase">Your journey with ActHub</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              From curriculum to lasting local impact
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              There is more than one way to begin. Each route leads students from learning to action,
              and makes their outcomes visible to others.
            </p>
          </div>

          <ol className="mt-10 space-y-6 border-l border-primary/25 pl-7">
            {JOURNEY.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="absolute top-7 -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.body}</p>
                {step.options ? (
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                    {step.options.map((option, optionIndex) => (
                      <li key={option} className="flex gap-3">
                        <span className="font-semibold text-clay">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="soft-shadow mt-20 rounded-3xl bg-primary px-8 py-14 text-center">
          <h2 className="font-display text-3xl text-primary-foreground">
            Apply with your university
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
            Tell us about your faculty, course and timeline. We will come back with a concrete
            proposal.
          </p>
          <a
            href="mailto:info@acthub.org?subject=University%20application"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-wide text-accent-foreground uppercase"
          >
            info@acthub.org
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
