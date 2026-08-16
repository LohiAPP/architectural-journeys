import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
    
    let raf: number;
    const loop = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    
    const hover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const on = !!t.closest("a,button,[data-magnet]");
      ring.current?.classList.toggle("scale-[1.8]", on);
      ring.current?.classList.toggle("border-[var(--clay)]", on);
    };
    
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-[var(--ink)]/40 transition-[transform,border-color] duration-200 ease-out will-change-transform md:block" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 rounded-full bg-[var(--ink)] will-change-transform md:block" />
    </>
  );
}
