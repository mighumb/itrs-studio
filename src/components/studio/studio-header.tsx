import { Layers } from "lucide-react";

export function StudioHeader() {
  return (
    <header
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-4"
      role="banner"
    >
      <div className="pointer-events-auto flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-itrs-xs bg-itrs-primary text-itrs-primary-foreground"
          aria-hidden
        >
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-itrs-body">
            ITRS Studio
          </p>
          <p className="text-xs text-itrs-muted">Journey editor</p>
        </div>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <span
          className="rounded-itrs-xs border border-itrs-border/80 bg-itrs-surface-lightest/70 px-2 py-1 text-xs font-medium text-itrs-icon backdrop-blur-sm"
        >
          Main
        </span>
        <div
          className="h-8 w-8 rounded-full bg-itrs-icon-button/90 backdrop-blur-sm"
          title="User"
          aria-label="User menu placeholder"
        />
      </div>
    </header>
  );
}
