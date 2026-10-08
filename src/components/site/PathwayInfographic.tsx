const STEPS = [
  {
    n: "1",
    title: "Problem statement",
    body: "Name the challenge that matters most in your community, in one clear sentence.",
  },
  {
    n: "2",
    title: "Involving others",
    body: "Map who is affected, who decides and who can help — then choose your target group.",
  },
  {
    n: "3",
    title: "Action possibilities",
    body: "Define what you can do alone today, and what your community can do together.",
  },
  {
    n: "4",
    title: "Taking action",
    body: "Adapt the plan to your local context, put it into action and gather evidence of what you did.",
  },
  {
    n: "5",
    title: "Going viral",
    body: "Share your action story on ActHub and find ways to inspire others to do good.",
  },
];

export function PathwayInfographic() {
  return (
    <div className="relative">
      <div className="absolute top-7 right-6 left-6 hidden h-px bg-border lg:block" aria-hidden />
      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            className="rise rounded-2xl border border-border bg-card p-5"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg">{s.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
