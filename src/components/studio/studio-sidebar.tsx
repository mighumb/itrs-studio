"use client";

import {
  Box,
  FolderOpen,
  LayoutGrid,
  Play,
  Settings,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SidebarItem = {
  icon: LucideIcon;
  label: string;
  separatorAfter?: boolean;
};

const ITEMS: SidebarItem[] = [
  { icon: LayoutGrid, label: "Canvas" },
  { icon: Wrench, label: "Toolbox" },
  { icon: Box, label: "Components" },
  { icon: FolderOpen, label: "Resources" },
  { icon: Play, label: "Run", separatorAfter: true },
  { icon: Settings, label: "Settings" },
];

export function StudioSidebar() {
  return (
    <aside
      className="relative z-10 ml-4 mt-3 flex w-12 shrink-0 flex-col rounded-xl border border-studio-border bg-studio-surface shadow-panel"
      aria-label="Studio tools"
    >
      <nav className="flex flex-col items-center gap-1 p-1.5">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex w-full flex-col items-center">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              title={item.label}
              aria-label={item.label}
            >
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
            {item.separatorAfter && (
              <div className="my-1 h-px w-8 bg-studio-border" role="separator" />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
