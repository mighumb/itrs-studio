import { Sparkles } from "lucide-react";

type AiAssistantFabProps = {
  onClick: () => void;
};

export function AiAssistantFab({ onClick }: AiAssistantFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex h-11 items-center gap-2 rounded-itrs-xl border border-itrs-primary/25 bg-itrs-surface-lightest px-4 text-sm font-semibold text-itrs-body shadow-fab transition hover:bg-itrs-surface-lighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itrs-primary"
      aria-label="Open AI assistant"
    >
      <Sparkles className="h-5 w-5 text-itrs-primary" aria-hidden />
      AI assistant
    </button>
  );
}
