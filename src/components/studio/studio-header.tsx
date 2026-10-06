import { Layers } from "lucide-react";

export function StudioHeader() {
  return (
    <header
      className="flex h-16 shrink-0 items-center justify-between border-b border-studio-border bg-studio-header px-4"
      role="banner"
    >
      <div className="flex items-center gap-3">
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
      <div className="flex items-center gap-2">
        <span
          className="rounded-md border border-studio-border bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600"
        >
          Main
        </span>
        <div
          className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300"
          title="User"
          aria-label="User menu placeholder"
        />
      </div>
    </header>
  );
}
