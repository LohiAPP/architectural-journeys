import { useEffect, useRef } from "react";

export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * 0.35;
      const y = (e.clientY - (top + height / 2)) * 0.35;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const leave = () => {
      el.style.transform = `translate3d(0, 0, 0)`;
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <button ref={ref} data-magnet className={`transition-transform duration-300 ease-out ${className}`}>{children}</button>;
}
