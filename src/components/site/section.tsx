import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
  containerClassName,
  align = "left",
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  align?: "left" | "center";
  tone?: "default" | "muted" | "forest" | "cream";
}) {
  const toneClass =
    tone === "muted"
      ? "bg-muted/50"
      : tone === "forest"
        ? "bg-[var(--forest-deep)] text-primary-foreground"
        : tone === "cream"
          ? "bg-[oklch(0.97_0.015_90)]"
          : "bg-background";

  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", toneClass, className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", containerClassName)}>
        {(eyebrow || title || lead) && (
          <Reveal
            className={cn(
              "mb-12 sm:mb-16 max-w-3xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <div
                className={cn(
                  "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
                  tone === "forest"
                    ? "border-white/25 text-[var(--gold-soft)]"
                    : "border-primary/15 bg-primary/5 text-primary",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-balance">
                {title}
              </h2>
            )}
            {lead && (
              <p
                className={cn(
                  "mt-5 text-lg leading-relaxed sm:text-xl text-balance",
                  tone === "forest" ? "text-white/80" : "text-muted-foreground",
                )}
              >
                {lead}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}