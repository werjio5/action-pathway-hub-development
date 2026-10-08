import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ActHub — Our Team and Mission" },
      {
        name: "description",
        content:
          "ActHub is a non-profit association registered in Finland, building a global change-maker community that turns local knowledge into meaningful action.",
      },
      { property: "og:title", content: "About ActHub" },
      {
        property: "og:description",
        content:
          "A small, motivated international team nurturing active citizenship and local action for planetary well-being.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const TEAM = [
  {
    name: "Orsolya T.",
    role: "Action Lead",
    place: "",
    note: "Doctoral and project researcher, University of Jyväskylä. Creator of the Action Pathway workshops. Supports change-makers taking their first steps.",
    image: "/team/orsi.jpg",
    profileUrl: "https://fi.linkedin.com/in/orsi-tuba",
    profileLabel: "LinkedIn",
  },
  {
    name: "András Zs.",
    role: "Technology & Scaling",
    place: "",
    note: "Builds the technology and scalable systems that help the Action Pathway reach more communities.",
    image: "/team/andras-zs.jpg",
  },
  {
    name: "András M.",
    role: "Grant Development Expert",
    place: "",
    note: "Develops strong funding applications that turn promising ideas into supported projects.",
    image: "/team/andras-m.jpg",
    profileUrl: "https://hu.linkedin.com/in/andr%C3%A1s-merza-3552221a6",
    profileLabel: "LinkedIn",
  },
  {
    name: "Liza B.",
    role: "International Fundraising Advisor",
    place: "",
    note: "Brings international fundraising expertise and connects the initiative with global opportunities and partners.",
    image: "/team/liza.jpg",
    profileUrl: "https://hu.linkedin.com/in/liza-baranyai",
    profileLabel: "LinkedIn",
  },
  {
    name: "Samuel Madtha",
    role: "Community",
    place: "",
    note: "Nurtures a supportive community for people turning ideas into local action.",
    image: "/team/samuel.jpg",
    profileUrl: "https://www.jyu.fi/en/people/samuel-madtha",
    profileLabel: "University profile",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <p className="text-xs font-semibold tracking-widest text-clay uppercase">About us</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          ActHub is a non-profit association registered in Finland.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          We are building a global change-maker community where local knowledge becomes meaningful
          action for the well-being of communities and their environment. Your engagement matters:
          we take your knowledge and your action to build our resource bank and inspire others to
          become ready to act for the planet.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Our activities nurture active citizenship, where communities are aware of global
          challenges and capable of acting locally. We bring together change-makers and non-profits
          looking for volunteers who are motivated to take action towards the well-being of the
          planet.
        </p>

        <section className="mt-20">
          <h2 className="text-3xl">A motivated international team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-6">
                <img
                  src={m.image}
                  alt={`${m.name} profile photo`}
                  className="h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl">{m.name}</h3>
                <p className="text-sm font-semibold text-clay">
                  {m.role}
                  {m.place ? ` · ${m.place}` : ""}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{m.note}</p>
                {m.profileUrl ? (
                  <a
                    href={m.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-accent underline-offset-4"
                  >
                    {m.profileLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-card p-8">
          <h2 className="text-2xl">We are open to collaborate</h2>
          <p className="mt-3 text-muted-foreground">
            Universities, non-profits, teachers, students — write to us.
          </p>
          <a
            href="mailto:info@acthub.org"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            info@acthub.org
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
