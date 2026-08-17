import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Magnetic } from "@/components/Magnetic";

export function Nav({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (forceSolid) return;
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [forceSolid]);

  const s = forceSolid || scrolled;
  const textColor = s ? "text-[var(--ink)]" : "text-[var(--cream)]";
  const borderColor = s ? "border-[var(--ink)]" : "border-[var(--cream)]";
  
  // Assuming the new logon.jpeg has a white background:
  // On light nav (s=true): mix-blend-multiply removes the white background.
  // On dark nav (s=false): invert makes the background black and logo white, then mix-blend-screen removes the black background.
  const logoBlend = s ? "mix-blend-multiply" : "invert mix-blend-screen brightness-200";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s ? "backdrop-blur-xl bg-[var(--cream)]/90 border-b border-[var(--ink)]/10" : ""}`}>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 md:py-4">
        <Link to="/" className="flex items-center gap-4 md:gap-6">
          <img src="/logon.jpeg" alt="Logo" className={`h-16 md:h-24 w-auto object-contain transition-all duration-500 ${logoBlend}`} />
          <div className="flex items-baseline gap-3 md:gap-4 mt-1">
            <span className={`font-serif text-2xl md:text-4xl tracking-tight transition-colors duration-500 ${textColor}`}>Manushyalaya</span>
            <span className={`text-[10px] md:text-sm tracking-[0.4em] uppercase font-medium opacity-80 transition-colors duration-500 ${textColor}`}>
              Architects
            </span>
          </div>
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {["Home", "About Us", "Services", "Projects", "Contact"].map(l => {
            const isServices = l === "Services";
            return (
              <li key={l}>
                {isServices ? (
                  <Link to="/services" className={`text-hairline opacity-70 transition-all duration-500 hover:opacity-100 ${textColor}`}>
                    {l}
                  </Link>
                ) : (
                  <a href={`/#${l.toLowerCase().replace(" ", "-")}`} className={`text-hairline opacity-70 transition-all duration-500 hover:opacity-100 ${textColor}`}>
                    {l}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <Magnetic className={`rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-500 ${borderColor} ${textColor}`}>
          Enquire
        </Magnetic>
      </nav>
    </header>
  );
}
