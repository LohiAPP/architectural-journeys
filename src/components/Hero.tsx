import { useState, useEffect } from "react";
import { Magnetic } from "@/components/Magnetic";

interface HeroProps {
  image?: string;
  eyebrow?: string;
  titleLine1?: React.ReactNode;
  titleLine2?: React.ReactNode;
  description?: string;
  buttonText?: string;
}

export function Hero({
  image = "/assets/hero.jpg", // fallback if not provided
  eyebrow = "MANUSHYALAYA · ARCHITECTS & INTERIOR STUDIO",
  titleLine1 = "Architecture",
  titleLine2 = (
    <>
      as <span className="text-[var(--clay)]">emotion.</span>
    </>
  ),
  description = "An independent studio designing quiet, human-scaled buildings that age with grace — from courtyard homes to hillside retreats.",
  buttonText = "VIEW PORTFOLIO →"
}: HeroProps) {
  const [y, setY] = useState(0);
  
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[var(--obsidian)]">
      <img
        src={image}
        alt="Hero background"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* Left Vertical Text */}
      <div 
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] uppercase text-[var(--cream)]/60 z-10" 
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        EST · MMXVIII
      </div>

      {/* Right Vertical Text */}
      <div 
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] uppercase text-[var(--cream)]/60 z-10" 
        style={{ writingMode: "vertical-rl" }}
      >
        VISION · CRAFT · SILENCE
      </div>

      <div className="absolute inset-0 flex flex-col justify-between px-6 pb-10 pt-32 md:px-14 md:pb-14">
        <div className="flex items-center justify-between text-[var(--cream)]/80">
          <span className="text-hairline">Est. 2004 — Hyderabad & Vijayawada · India</span>
          <span className="text-hairline hidden md:block">N 12°58′ · E 77°35′</span>
        </div>

        <div className="max-w-[1400px]">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6 text-[var(--cream)]/70">
            {eyebrow}
          </p>
          <h1 className="font-display text-[15vw] leading-[0.88] text-[var(--cream)] md:text-[11vw]">
            <span className="block mask-reveal" style={{ animationDelay: "0.1s" }}>
              {titleLine1}
            </span>
            <span className="block mask-reveal italic text-[var(--cream)]/90" style={{ animationDelay: "0.35s" }}>
              {titleLine2}
            </span>
          </h1>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--cream)]/80">
              {description}
            </p>
            <div className="flex items-center gap-4">
              {buttonText && (
                <Magnetic className="rounded-full bg-[var(--cream)] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink)]">
                  {buttonText}
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
