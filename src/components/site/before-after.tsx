import { useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { PhotoPlaceholder } from "./photo-placeholder";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, pct)));
  };

  return (
    <div className="relative">
      <div
        ref={wrapRef}
        onPointerDown={(e) => {
          drag.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (drag.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => (drag.current = false)}
        className="relative overflow-hidden rounded-2xl border border-border shadow-lg select-none touch-none"
      >
        <PhotoPlaceholder
          label="After"
          sublabel="Replace with real client photo"
          aspect="aspect-[16/10]"
          tone="grass"
          className="rounded-none border-0"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <PhotoPlaceholder
            label="Before"
            sublabel="Replace with real client photo"
            aspect="aspect-[16/10]"
            tone="default"
            className="rounded-none border-0"
          />
        </div>
        <div className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          Before
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-[var(--forest-deep)]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          After
        </div>
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${pos}%` }}
        >
          <div className="pointer-events-auto absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-foreground shadow-lg">
            <GripVertical className="h-4 w-4" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Drag the slider · Replace placeholders with real client photos
      </p>
    </div>
  );
}