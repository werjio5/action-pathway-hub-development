import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A non-profit association registered in Finland, building a global community where local
            knowledge becomes meaningful action for the well-being of communities and their
            environment.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/act-hub" className="hover:text-primary">
                ACT Hub
              </Link>
            </li>
            <li>
              <Link to="/method" className="hover:text-primary">
                Action Pathway method
              </Link>
            </li>
            <li>
              <Link to="/for-universities" className="hover:text-primary">
                For universities
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About us & team
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Get in touch</h3>
          <p className="mt-4 text-sm text-muted-foreground">We are open to collaborate.</p>
          <a
            href="mailto:info@acthub.org"
            className="mt-2 inline-block text-sm font-semibold text-primary underline decoration-accent underline-offset-4"
          >
            info@acthub.org
          </a>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ActHub · Action Pathway method developed in Finland
      </div>
    </footer>
  );
}
