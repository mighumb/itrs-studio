export function StudioCanvas() {
  return (
    <main
      className="relative min-w-0 flex-1 p-4 pl-3"
      aria-label="Journey canvas"
    >
      <div
        className="studio-canvas-grid h-full w-full rounded-2xl border border-studio-border/80 shadow-inner"
      >
        <div className="flex h-full items-center justify-center p-8">
          <p className="max-w-sm text-center text-sm text-studio-muted">
            Canvas vide — les nœuds du parcours apparaîtront ici.
          </p>
        </div>
      </div>
    </main>
  );
}
