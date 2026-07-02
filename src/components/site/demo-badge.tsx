import { useState } from "react";
import { X } from "lucide-react";

export function DemoBadge() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 left-4 z-40 hidden max-w-xs md:block">
      <div className="relative rounded-2xl border border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur">
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss demo badge"
          className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground transition hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--forest-deep)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--forest)]" />
          Demo Website
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Built by <span className="font-semibold text-foreground">Her Digital Media</span>. This page
          demonstrates what your landscaping website could look like.
        </p>
      </div>
    </div>
  );
}