import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Act Hub — Knowledge into Action" },
      {
        name: "description",
        content: "Turning university knowledge into local action for planetary well-being.",
      },
      { name: "author", content: "Act Hub" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=DM+Sans:wght@400;500;700&display=swap",
      },
      { rel: "stylesheet", href: "https://use.typekit.net/joh3mor.css" },
      { rel: "icon", href: "/favicon-green-v2.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


type Palette = "philippines-offer" | "common-purpose" | "common-purpose-2" | "wearebreakfast" | "granatalma" | "orsi" | "orsi-2";
type CornerStyle = "square" | "soft" | "current";

function DesignSettings() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<Palette>("philippines-offer");
  const [cornerStyle, setCornerStyle] = useState<CornerStyle>("current");

  const applyPalette = (next: Palette) => {
    document.documentElement.classList.toggle("common-purpose-theme", next === "common-purpose");
    document.documentElement.classList.toggle("wearebreakfast-theme", next === "wearebreakfast");
    document.documentElement.classList.toggle("common-purpose-2-theme", next === "common-purpose-2");
    document.documentElement.classList.toggle("granatalma-theme", next === "granatalma");
    document.documentElement.classList.toggle("orsi-theme", next === "orsi");
    document.documentElement.classList.toggle("orsi-2-theme", next === "orsi-2");
    localStorage.setItem("acthub-palette", next);
    setPalette(next);
  };

  const applyCornerStyle = (next: CornerStyle) => {
    document.documentElement.classList.remove("corners-square", "corners-soft", "corners-current");
    document.documentElement.classList.add(`corners-${next}`);
    localStorage.setItem("acthub-corners", next);
    setCornerStyle(next);
  };

  useEffect(() => {
    const savedPalette = localStorage.getItem("acthub-palette");
    const savedCorners = localStorage.getItem("acthub-corners");
    applyPalette(savedPalette === "common-purpose" || savedPalette === "common-purpose-2" || savedPalette === "wearebreakfast" || savedPalette === "granatalma" || savedPalette === "orsi" || savedPalette === "orsi-2" ? savedPalette : "philippines-offer");
    applyCornerStyle(savedCorners === "square" || savedCorners === "soft" ? savedCorners : "current");
  }, []);

  return (
    <div className="design-settings">
      <button
        type="button"
        className="design-settings-trigger"
        aria-expanded={open}
        aria-controls="design-settings-panel"
        aria-label="Open design settings"
        title="Design settings"
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 0-3.6H12a1.6 1.6 0 0 1 0-3.2h2.1A5.9 5.9 0 0 0 20 8.3 5.3 5.3 0 0 0 14.7 3H12Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="7.7" cy="10" r="1" fill="currentColor"/><circle cx="10.3" cy="6.9" r="1" fill="currentColor"/><circle cx="14.1" cy="7.4" r="1" fill="currentColor"/></svg>
      </button>
      {open && (
        <section id="design-settings-panel" className="design-settings-panel" aria-label="Design settings">
          <p className="design-settings-title">Colour palette</p>
          <div className="design-settings-options">
            <button type="button" className={palette === "philippines-offer" ? "is-selected" : ""} onClick={() => applyPalette("philippines-offer")}>Philippines offer</button>
            <button type="button" className={palette === "common-purpose" ? "is-selected" : ""} onClick={() => applyPalette("common-purpose")}>Common Purpose</button>
            <button type="button" className={palette === "common-purpose-2" ? "is-selected" : ""} onClick={() => applyPalette("common-purpose-2")}>Common Purpose 2</button>
            <button type="button" className={palette === "wearebreakfast" ? "is-selected" : ""} onClick={() => applyPalette("wearebreakfast")}>We Are Breakfast</button>
            <button type="button" className={palette === "granatalma" ? "is-selected" : ""} onClick={() => applyPalette("granatalma")}>Granatalma</button>
            <button type="button" className={palette === "orsi" ? "is-selected" : ""} onClick={() => applyPalette("orsi")}>Orsi</button>
            <button type="button" className={palette === "orsi-2" ? "is-selected" : ""} onClick={() => applyPalette("orsi-2")}>Orsi 2</button>
          </div>
          <p className="design-settings-title">Corners</p>
          <div className="design-settings-options design-settings-corners">
            <button type="button" className={cornerStyle === "square" ? "is-selected" : ""} onClick={() => applyCornerStyle("square")}>Square</button>
            <button type="button" className={cornerStyle === "soft" ? "is-selected" : ""} onClick={() => applyCornerStyle("soft")}>Slightly rounded</button>
            <button type="button" className={cornerStyle === "current" ? "is-selected" : ""} onClick={() => applyCornerStyle("current")}>Current</button>
          </div>
        </section>
      )}
    </div>
  );
}

function ToneToggle() {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  useEffect(() => {
    const enabled = localStorage.getItem("acthub-tone") === "bw";
    document.documentElement.classList.toggle("bw-mode", enabled);
    setIsBlackAndWhite(enabled);
  }, []);

  const toggleTone = () => {
    const next = !isBlackAndWhite;
    document.documentElement.classList.toggle("bw-mode", next);
    localStorage.setItem("acthub-tone", next ? "bw" : "colour");
    setIsBlackAndWhite(next);
  };

  return (
    <button
      type="button"
      className="tone-toggle"
      onClick={toggleTone}
      aria-pressed={isBlackAndWhite}
      aria-label={isBlackAndWhite ? "Switch to colour mode" : "Switch to black and white mode"}
      title="Black and white / colour mode"
    />
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <DesignSettings />
        <ToneToggle />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
