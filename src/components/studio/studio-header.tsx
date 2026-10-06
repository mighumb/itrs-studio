import { Layers } from "lucide-react";

export function StudioHeader() {
  return (
    <header
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-4"
      role="banner"
    >
      <div className="pointer-events-auto flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-white"
          aria-hidden
        >
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-slate-900">
            ITRS Studio
          </p>
          <p className="text-xs text-studio-muted">Journey editor</p>
        </div>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <span
          className="rounded-md border border-studio-border/80 bg-white/70 px-2 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm"
        >
          Main
        </span>
        <div
          className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200/90 to-slate-300/90 backdrop-blur-sm"
          title="User"
          aria-label="User menu placeholder"
        />
      </div>
    </header>
  );
}
