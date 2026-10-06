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
      className="absolute left-4 top-[4.75rem] z-20 flex w-12 flex-col rounded-itrs-m border border-itrs-separator bg-itrs-surface-lightest shadow-panel"
      aria-label="Studio tools"
    >
      <nav className="flex flex-col items-center gap-1 p-1.5">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex w-full flex-col items-center">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-itrs-xs text-itrs-icon transition-colors hover:bg-itrs-surface-light hover:text-itrs-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itrs-primary"
              title={item.label}
              aria-label={item.label}
            >
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
            {item.separatorAfter && (
              <div className="my-1 h-px w-8 bg-itrs-separator" role="separator" />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
