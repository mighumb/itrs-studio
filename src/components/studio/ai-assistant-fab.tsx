import { Sparkles } from "lucide-react";

type AiAssistantFabProps = {
  onClick: () => void;
};

export function AiAssistantFab({ onClick }: AiAssistantFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex h-11 items-center gap-2 rounded-dem-xl border border-dem-border bg-dem-card px-4 text-sm font-semibold text-dem-body shadow-fab transition hover:bg-dem-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dem-accent"
      aria-label="Open AI assistant"
    >
      <Sparkles className="h-5 w-5 text-dem-accent" aria-hidden />
      AI assistant
    </button>
  );
}
