import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { availabilityBanner } from "@/data/site";

export function AvailabilityBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 bg-[var(--forest-deep)] text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-2 sm:px-8">
        <div className="flex min-w-0 items-center gap-2 text-xs sm:text-sm">
          <Sparkles className="h-4 w-4 shrink-0 text-[var(--gold)]" />
          <p className="truncate">
            <span className="font-semibold">{availabilityBanner.emphasis}</span>{" "}
            {availabilityBanner.message}
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss banner"
          className="shrink-0 rounded-full p-1 opacity-70 transition hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}