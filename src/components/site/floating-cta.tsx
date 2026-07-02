import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
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
    <>
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all hover:bg-muted md:flex",
          show ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}