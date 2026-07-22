import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";
import matStone from "@/assets/mat-stone.jpg";
import matConcrete from "@/assets/mat-concrete.jpg";
import matTimber from "@/assets/mat-timber.jpg";
import darkImg from "@/assets/dark-section.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- helpers ---------- */

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return p;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, seen } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(eased * to));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
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
    let raf = requestAnimationFrame(loop);
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

function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };
    const off = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", on);
    el.addEventListener("mouseleave", off);
    return () => { el.removeEventListener("mousemove", on); el.removeEventListener("mouseleave", off); };
  }, []);
  return <button ref={ref} data-magnet className={`transition-transform duration-300 ease-out ${className}`}>{children}</button>;
}

/* ---------- sections ---------- */

function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s ? "backdrop-blur-xl bg-[var(--cream)]/70 border-b border-[var(--ink)]/8" : ""}`}>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="text-hairline text-[var(--ink)]">
          Manushyalaya<span className="text-[var(--clay)]">.</span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {["Work","Studio","Services","Process","Journal"].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-hairline text-[var(--ink)]/70 transition-colors hover:text-[var(--ink)]">{l}</a>
            </li>
          ))}
        </ul>
        <Magnetic className="rounded-full border border-[var(--ink)] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em]">
          Enquire
        </Magnetic>
      </nav>
    </header>
  );
}

function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-[var(--obsidian)]">
      <img
        src={heroImg}
        alt="A concrete and timber villa above the sea at golden hour"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      <div className="absolute inset-0 flex flex-col justify-between px-6 pb-10 pt-32 md:px-10 md:pb-14">
        <div className="flex items-center justify-between text-[var(--cream)]/80">
          <span className="text-hairline">Est. 2004 — Bengaluru · India</span>
          <span className="text-hairline hidden md:block">N 12°58′ · E 77°35′</span>
        </div>

        <div className="max-w-[1400px]">
          <p className="text-hairline mb-6 text-[var(--cream)]/70">— Volume 24 · Selected Works</p>
          <h1 className="font-display text-[15vw] leading-[0.88] text-[var(--cream)] md:text-[11vw]">
            <span className="block mask-reveal" style={{ animationDelay: "0.1s" }}>Architecture</span>
            <span className="block mask-reveal italic text-[var(--cream)]/90" style={{ animationDelay: "0.35s" }}>
              as <span className="text-[var(--clay)]">emotion.</span>
            </span>
          </h1>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--cream)]/80">
              An independent studio designing quiet, human-scaled buildings that
              age with grace — from courtyard homes to hillside retreats.
            </p>
            <div className="flex items-center gap-4">
              <Magnetic className="rounded-full bg-[var(--cream)] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink)]">
                View Selected Works →
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--cream)]/60 text-[10px] tracking-[0.4em] uppercase animate-float">
        Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Architecture", "· Interiors", "· Planning", "· Landscape", "· Turnkey"];
  return (
    <section className="border-y border-[var(--ink)]/10 bg-[var(--cream)] py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
            {words.map((w, j) => (
              <span key={j} className="font-display text-[9vw] leading-none md:text-[6vw]">
                {w.replace("·","")}{j < words.length - 1 && <span className="text-[var(--clay)] mx-8">✦</span>}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="work" className="relative bg-[var(--cream)] px-6 pt-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-hairline text-[var(--ink-soft)]">Featured — 001</p>
            <h2 className="font-display mt-4 text-[11vw] leading-[0.9] md:text-[6vw]">
              House of<br /><span className="italic">Quiet Water</span>
            </h2>
          </div>
          <div className="hidden max-w-xs text-right text-sm text-[var(--ink-soft)] md:block">
            Alibaug, Maharashtra · 2024 · 640 sqm ·<br /> Photography by Ishita Sitwala
          </div>
        </div>

        <div className="relative">
          <img
            src={featuredImg}
            alt="Double-height living room overlooking desert landscape"
            width={1600}
            height={1808}
            loading="lazy"
            className="h-[80vh] w-full object-cover"
          />
          <div className="pointer-events-none absolute -top-8 left-6 text-[var(--clay)] font-display italic text-[6vw] md:text-[3.5vw]">
            No. 001
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="col-span-6 col-start-1 font-display text-3xl leading-[1.15] md:col-start-2 md:text-4xl">
            "A pavilion carved into a slope — where the horizon becomes the ceiling and stone remembers monsoon light."
          </p>
          <div className="col-span-4 col-start-1 self-end text-sm leading-relaxed text-[var(--ink-soft)] md:col-start-9">
            The residence is organised around a still black-granite pool that
            mirrors the sky between the two wings. Kota stone, teak battens and
            board-formed concrete anchor the composition to the land.
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  const items = [
    { img: work1, name: "Verandah House", place: "Bengaluru, IN", year: "2024", tag: "Residence" },
    { img: work2, name: "Ateliér Kaia", place: "Goa, IN", year: "2023", tag: "Interior" },
    { img: work3, name: "The Cantilever", place: "Coonoor, IN", year: "2023", tag: "Retreat" },
    { img: work4, name: "Maison Noir", place: "Udaipur, IN", year: "2022", tag: "Hospitality" },
  ];
  return (
    <section className="bg-[var(--cream)] px-6 pt-40 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex items-end justify-between">
          <p className="text-hairline text-[var(--ink-soft)]">Selected Works — 2020 / 2025</p>
          <a href="#" className="text-hairline underline underline-offset-8 decoration-[var(--clay)]">All Projects</a>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-32">
          {items.map((it, i) => {
            const layouts = [
              "col-span-12 md:col-span-7 md:col-start-1",
              "col-span-12 md:col-span-5 md:col-start-8 md:mt-40",
              "col-span-12 md:col-span-6 md:col-start-2",
              "col-span-12 md:col-span-5 md:col-start-8 md:-mt-24",
            ];
            const heights = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[5/6]", "aspect-[4/5]"];
            return (
              <a key={it.name} href="#" className={`group block ${layouts[i]}`}>
                <div className={`relative overflow-hidden ${heights[i]}`}>
                  <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/10" />
                  <div className="absolute left-4 top-4 rounded-full bg-[var(--cream)]/85 px-3 py-1 text-[10px] uppercase tracking-[0.24em]">
                    {it.tag}
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{it.name}</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{it.place} · {it.year}</p>
                  </div>
                  <span className="text-hairline text-[var(--ink-soft)]">0{i + 1} / 0{items.length}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="studio" className="relative px-6 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-hairline text-[var(--ink-soft)]">The Studio</p>
        <h2 className="font-display mt-8 max-w-[16ch] text-[13vw] leading-[0.92] md:text-[7.5vw]">
          We design <span className="italic text-[var(--clay)]">stillness</span> — buildings that hold light, and lives.
        </h2>
        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="col-span-5 col-start-1 text-lg leading-relaxed md:col-start-6">
            Manushyalaya — Sanskrit for "human dwelling" — is a small studio of
            architects, interior designers and craftsmen. For two decades we
            have practised a quiet modernism rooted in place, climate and
            material honesty.
          </p>
          <div className="col-span-5 col-start-1 text-sm leading-relaxed text-[var(--ink-soft)] md:col-span-3 md:col-start-6">
            Every project begins by listening. To the site, to the client, to
            the wind. We draw slowly, prototype in the workshop, and
            build only what we can defend a decade later.
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const s = [
    { n: "01", t: "Architecture", d: "Residences, retreats, cultural and commercial buildings from concept through construction." },
    { n: "02", t: "Interior Design", d: "Interiors conceived alongside the shell — from millwork to lighting temperature." },
    { n: "03", t: "Master Planning", d: "Site strategy, campus and neighbourhood planning with a light ecological touch." },
    { n: "04", t: "Landscape", d: "Native planting, water and stone as inseparable extensions of the architecture." },
    { n: "05", t: "Turnkey Delivery", d: "Single-point delivery of design, build and interior styling by our in-house workshop." },
  ];
  return (
    <section id="services" className="bg-[var(--sand)] px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between">
          <p className="text-hairline text-[var(--ink-soft)]">Practice — Five Disciplines</p>
          <p className="font-display italic text-2xl hidden md:block">One studio.</p>
        </div>
        <ul className="mt-16 divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
          {s.map((row) => (
            <li key={row.n} className="group relative">
              <a href="#" className="grid grid-cols-12 items-center gap-6 py-10 md:py-14 transition-colors">
                <span className="col-span-2 md:col-span-1 text-hairline text-[var(--ink-soft)]">{row.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-display text-4xl md:text-6xl transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--clay)]">
                  {row.t}
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-7 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {row.d}
                </p>
                <span className="col-span-12 md:col-span-1 justify-self-end text-2xl text-[var(--ink-soft)] transition-transform duration-500 group-hover:rotate-45 group-hover:text-[var(--clay)]">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "I", t: "Discover", d: "We walk the land, meet its neighbours, sketch the wind." },
    { n: "II", t: "Imagine", d: "A single quiet idea — the parti — that orders everything after." },
    { n: "III", t: "Design", d: "Slow drawings, physical models, material trials in our workshop." },
    { n: "IV", t: "Build", d: "Craft-forward site supervision, weekly presence, transparent costs." },
    { n: "V", t: "Deliver", d: "Interiors, landscape and stewardship — handed over as one whole." },
  ];
  return (
    <section id="process" className="relative bg-[var(--obsidian)] px-6 py-32 text-[var(--cream)] md:px-10 md:py-48 overflow-hidden">
      <img src={darkImg} alt="" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="relative mx-auto max-w-[1600px]">
        <p className="text-hairline text-[var(--cream)]/60">The Journey — Five Movements</p>
        <h2 className="font-display mt-6 text-[11vw] leading-[0.92] md:text-[6vw]">
          From <span className="italic">first walk</span><br />to first light.
        </h2>

        <ol className="mt-24 grid grid-cols-1 gap-px md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.n} className="relative border-t border-[var(--cream)]/15 pt-8 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-display italic text-3xl text-[var(--clay)]">{s.n}</span>
                <span className="h-px flex-1 bg-[var(--cream)]/20" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/70 max-w-[22ch]">{s.d}</p>
              <span className="mt-6 block text-[10px] tracking-[0.3em] uppercase text-[var(--cream)]/40">Step 0{i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Materials() {
  const m = [
    { img: matStone, name: "Kota Stone", note: "Cool underfoot, weathered by feet." },
    { img: matConcrete, name: "Board Concrete", note: "Timber grain remembered in stone." },
    { img: matTimber, name: "Burma Teak", note: "Warm hand, monsoon-tested." },
  ];
  return (
    <section className="bg-[var(--cream)] px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 text-hairline text-[var(--ink-soft)]">Palette — Honest Materials</p>
          <h2 className="col-span-12 md:col-span-9 font-display text-[9vw] leading-[0.95] md:text-[5vw]">
            Stone. Concrete. Timber.<br />
            <span className="italic text-[var(--clay)]">Time.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {m.map((x, i) => (
            <figure key={x.name} className={`group ${i === 1 ? "md:mt-24" : ""} ${i === 2 ? "md:mt-12" : ""}`}>
              <div className="relative overflow-hidden aspect-[4/5]">
                <img src={x.img} alt={x.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="font-display italic text-2xl">{x.name}</span>
                <span className="text-sm text-[var(--ink-soft)]">{x.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const m = [
    { n: 184, s: "+", l: "Projects Completed" },
    { n: 27, s: "", l: "Cities Across India" },
    { n: 21, s: "", l: "Years of Practice" },
    { n: 34, s: "", l: "Design Awards" },
  ];
  return (
    <section className="bg-[var(--sand)] px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-hairline text-[var(--ink-soft)] mb-16">A Quiet Record — By the Numbers</p>
        <div className="grid grid-cols-2 gap-y-16 md:grid-cols-4">
          {m.map((x) => (
            <div key={x.l}>
              <div className="font-display text-[14vw] leading-none md:text-[7vw]">
                <Counter to={x.n} suffix={x.s} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--ink-soft)]">{x.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="px-6 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="text-hairline text-[var(--ink-soft)] mb-10">In Their Words</p>
        <blockquote className="font-display text-[7vw] leading-[1.05] md:text-[3.6vw]">
          "They didn't design a house. They gave our
          <span className="italic text-[var(--clay)]"> family a rhythm </span>
          to live inside — the light moves through the rooms like a slow, patient guest."
        </blockquote>
        <p className="mt-12 text-sm text-[var(--ink-soft)]">
          Ananya & Rohan Iyer · Homeowners, House of Quiet Water
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative h-[95vh] overflow-hidden">
      <img src={ctaImg} alt="Aerial view of an illuminated residential courtyard at dusk" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--obsidian)]/55" />
      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 py-16 text-[var(--cream)] md:px-10">
        <p className="text-hairline text-[var(--cream)]/70">Begin — 2026 Commissions Now Open</p>
        <div>
          <h2 className="font-display text-[13vw] leading-[0.92] md:text-[8vw]">
            Let us build<br />
            <span className="italic">something that outlives us.</span>
          </h2>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-[var(--cream)]/80">
              We accept a limited number of new projects each year to keep our
              attention undivided. Tell us about yours.
            </p>
            <Magnetic className="rounded-full bg-[var(--clay)] px-8 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--cream)]">
              Start a Conversation →
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--cream)] px-6 pb-10 pt-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <h3 className="font-display text-[16vw] leading-[0.85] md:text-[10vw]">
          Manushyalaya<span className="text-[var(--clay)]">.</span>
        </h3>
        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-[var(--ink)]/15 pt-10 md:grid-cols-4">
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Studio</p>
            <p className="text-sm leading-relaxed">
              14, Lavelle Cross<br />Bengaluru 560001<br />India
            </p>
          </div>
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Contact</p>
            <p className="text-sm leading-relaxed">
              hello@manushyalaya.in<br />+91 80 4123 4567
            </p>
          </div>
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Elsewhere</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[var(--clay)]">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">Journal</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">ArchDaily</a></li>
            </ul>
          </div>
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Newsletter</p>
            <form className="flex items-center border-b border-[var(--ink)]/40 py-1">
              <input placeholder="Your email" className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]" />
              <button className="text-hairline text-[var(--clay)]">Send</button>
            </form>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-xs text-[var(--ink-soft)] md:flex-row">
          <span>© 2026 Manushyalaya Architects LLP — All rights reserved.</span>
          <span>Designed & built in Bengaluru.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const p = useScrollProgress();
  return (
    <main className="relative bg-[var(--cream)] text-[var(--ink)]">
      <CustomCursor />
      <div className="fixed left-0 top-0 z-[60] h-[2px] bg-[var(--clay)]" style={{ width: `${p * 100}%` }} />
      <Nav />
      <Hero />
      <Marquee />
      <Featured />
      <Works />
      <Philosophy />
      <Services />
      <Process />
      <Materials />
      <Metrics />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
}
