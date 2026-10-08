import { useEffect, useState } from "react";

const WORDS = ["knowledge", "uncertainty", "fear", "problems", "reaction"];

export function AnimatedCatchphrase() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <p className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
      Turn{" "}
      <span className="relative inline-grid align-baseline">
        {/* invisible sizer keeps layout stable */}
        <span className="col-start-1 row-start-1 invisible pr-1" aria-hidden>
          uncertainty
        </span>
        <span key={i} className="word-in col-start-1 row-start-1 text-clay italic">
          {WORDS[i]}
        </span>
      </span>{" "}
      into{" "}
      <span className="text-primary underline decoration-accent decoration-4 underline-offset-4">
        action
      </span>
      .
    </p>
  );
}
