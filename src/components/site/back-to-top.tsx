import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let last = false;
    const handleScroll = () => {
      const now = window.scrollY > 400;
      if (now !== last) {
        last = now;
        setVisible(now);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed right-4 bottom-20 z-40 flex items-center justify-center md:bottom-6 md:right-6",
        "h-14 w-14 rounded-full bg-primary text-primary-foreground",
        "shadow-md transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg",
        "active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
    </button>
  );
}
