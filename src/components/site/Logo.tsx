export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/acthub-green-mark.png"
        alt=""
        className="site-logo-mark h-[1.377rem] w-[1.6524rem] shrink-0 object-contain"
      />
      <span className="site-logo-wordmark font-display text-[1.6875rem] leading-none font-semibold tracking-tight text-ink">
        Act <span className="text-clay">Hub</span>
      </span>
    </span>
  );
}
