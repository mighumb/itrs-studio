"use client";

import { Paperclip, Send, Sparkles, X } from "lucide-react";

type ChatPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function ChatPanel({ open, onClose }: ChatPanelProps) {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-[1px] lg:hidden"
        aria-label="Close chat overlay"
        onClick={onClose}
      />
      <aside
        className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[min(100%,26rem)] flex-col border-l border-studio-border bg-studio-surface shadow-panel sm:max-w-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-panel-title"
      >
        <div className="flex items-center justify-between border-b border-studio-border px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-teal-700" aria-hidden />
            <h2 id="chat-panel-title" className="text-sm font-semibold text-slate-900">
              AI assistant
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close assistant"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <p className="text-lg font-medium text-slate-900">Hi Miguel</p>
          <p className="text-sm leading-relaxed text-studio-muted">
            What user journey would you like us to go through today?
          </p>
          <p className="mt-4 text-xs text-slate-400">Chat placeholder — no backend yet.</p>
        </div>

        <div className="border-t border-studio-border p-3">
          <div className="rounded-xl border border-studio-border bg-slate-50/80 p-3">
            <label className="sr-only" htmlFor="chat-input">Message</label>
            <textarea
              id="chat-input"
              rows={2}
              placeholder="Describe your journey…"
              className="w-full resize-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              disabled
            />
            <div className="mt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-white"
                aria-label="Attach image"
                disabled
              >
                <Paperclip className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-white opacity-50"
                aria-label="Send message"
                disabled
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
