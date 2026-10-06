export function StudioCanvas() {
  return (
    <main
      className="studio-canvas-grid absolute inset-0 z-0"
      aria-label="Journey canvas"
    >
      <div className="flex h-full w-full items-center justify-center p-8">
        <p className="max-w-sm text-center text-sm text-itrs-muted">
          Canvas vide — les nœuds du parcours apparaîtront ici.
        </p>
      </div>
    </main>
  );
}
