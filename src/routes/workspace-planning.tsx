import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/workspace-planning")({
  head: () => ({
    meta: [
      { title: "Workspace planning | Act Hub" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "description", content: "Four exploratory Action Workspace concepts for the Action Lab course." },
    ],
  }),
  component: WorkspacePlanning,
});

const concepts = [
  {
    number: "Idea 1",
    title: "Workspace Planning v2",
    href: "/workspace-planning-v2.html",
    description: "A calm, step-by-step workspace that turns a starting concern into one clear next move. It keeps the project plan, small actions and learning notes together without pretending that progress happens automatically.",
    points: [
      "Six short guided decisions make the route from challenge to first move tangible.",
      "The next-move card gives every action an owner and a date.",
      "The project story separates team-reported learning from unverified impact claims.",
    ],
  },
  {
    number: "Idea 2",
    title: "Action Workspace",
    href: "/action-workspace.html",
    description: "A dashboard-led concept for teams that want to see their action path, current move and practical tools at a glance. It makes stakeholder mapping, evidence and short check-ins easily discoverable from one workspace.",
    points: [
      "The action-path dashboard makes progress and the current decision visible immediately.",
      "Quick tools connect stakeholder discovery, outreach, evidence and next-move planning.",
      "A lightweight project story can turn the work into a shareable summary.",
    ],
  },
  {
    number: "Idea 3",
    title: "Action Lab & Workspace",
    href: "/action-lab-workspace.html",
    description: "A full four-week course environment that distinguishes individual reflection from shared project work. It includes planning, action tracking, documentation and a course-aware closing report in one detailed prototype.",
    points: [
      "Individual and group work remain structurally separate throughout the course.",
      "Weekly steps connect learning, decisions, implementation and reflection.",
      "The final report is assembled from recorded work rather than written again from scratch.",
    ],
  },
  {
    number: "Idea 4",
    title: "Simple Action Workspace",
    href: "/action-workspace-simple.html",
    description: "The most focused four-week version: one question, one answer and one next step at a time. It reduces the course journey to a gentle guided flow while preserving a shared action summary.",
    points: [
      "A single-task screen lowers the cognitive load for first-time participants.",
      "The evolving action note gives the team a simple, continuous shared picture.",
      "Built-in prompts help students shrink blockers into a manageable next action.",
    ],
  },
];

function WorkspacePlanning() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Internal exploration</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">Workspace planning</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Four standalone directions for the Action Lab course workspace. Each link opens a working prototype in a separate page; this overview does not change the public site navigation or visual system.
        </p>
        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Workspace concepts">
          {concepts.map((concept) => (
            <article key={concept.number} className="rounded-3xl border border-border bg-card p-7 soft-shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{concept.number}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink">{concept.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{concept.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground">
                {concept.points.map((point) => (
                  <li key={point} className="flex gap-2.5"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{point}</li>
                ))}
              </ul>
              <a href={concept.href} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Open {concept.number.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
