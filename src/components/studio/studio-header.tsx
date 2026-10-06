export function StudioHeader() {
  return (
    <header
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-14 items-center justify-between px-5 sm:px-8"
      role="banner"
    >
      <div className="pointer-events-auto flex items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-dem-accent"
          aria-hidden
        />
        <span className="text-sm font-semibold tracking-tight text-dem-body">
          ITRS Studio
        </span>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <span
          className="rounded-dem-sm border border-dem-border bg-dem-card/80 px-2.5 py-1 text-xs font-medium text-dem-icon backdrop-blur-sm"
        >
          Main
        </span>
        <div
          className="h-8 w-8 rounded-full border border-dem-border bg-dem-card/90"
          title="User"
          aria-label="User menu placeholder"
        />
      </div>
    </header>
  );
}
