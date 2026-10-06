import { Sparkles } from "lucide-react";

type AiAssistantFabProps = {
  onClick: () => void;
};

export function AiAssistantFab({ onClick }: AiAssistantFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex h-11 items-center gap-2 rounded-full border border-teal-700/20 bg-white px-4 text-sm font-medium text-slate-800 shadow-fab transition hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      aria-label="Open AI assistant"
    >
      <Sparkles className="h-5 w-5 text-teal-700" aria-hidden />
      AI assistant
    </button>
  );
}
