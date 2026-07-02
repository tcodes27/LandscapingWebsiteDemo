import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label = "Professional Landscaping Photo Placeholder",
  sublabel,
  className,
  aspect = "aspect-[4/3]",
  tone = "default",
}: {
  label?: string;
  sublabel?: string;
  className?: string;
  aspect?: string;
  tone?: "default" | "forest" | "grass";
}) {
  const bg =
    tone === "forest"
      ? "bg-gradient-to-br from-[var(--forest-deep)] via-[var(--forest)] to-[var(--grass)]/70 text-white"
      : tone === "grass"
        ? "bg-gradient-to-br from-[var(--grass)]/40 via-[var(--grass)]/20 to-[var(--gold-soft)]/40 text-primary"
        : "bg-gradient-to-br from-primary/10 via-muted to-[var(--gold-soft)]/30 text-primary";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60",
        aspect,
        bg,
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.15), transparent 50%)",
        }}
      />
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-current/10 backdrop-blur">
          <ImageIcon className="h-5 w-5 opacity-70" />
        </div>
        <p className="text-sm font-semibold tracking-tight">{label}</p>
        {sublabel && <p className="mt-1 text-xs opacity-75">{sublabel}</p>}
      </div>
    </div>
  );
}