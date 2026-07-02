import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 flex justify-center transition-all md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Button asChild size="lg" className="w-full rounded-full shadow-lg">
        <a href="#contact">Request My Website</a>
      </Button>
    </div>
  );
}