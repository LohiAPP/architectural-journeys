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
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Magnetic } from "@/components/Magnetic";
import { Hero } from "@/components/Hero";

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

/* ---------- sections ---------- */



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

function BrandPartners() {
  return (
    <section className="bg-[var(--cream)] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px] border-b border-[var(--ink)]/10 pb-20">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--ink-soft)] mb-12">
          Trusted By Our Brand Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale">
          {/* Placeholders for logos to be given by clients later */}
          <div className="h-8 w-32 bg-[var(--ink)]/20 animate-pulse rounded" />
          <div className="h-8 w-24 bg-[var(--ink)]/20 animate-pulse rounded" />
          <div className="h-10 w-32 bg-[var(--ink)]/20 animate-pulse rounded" />
          <div className="h-8 w-28 bg-[var(--ink)]/20 animate-pulse rounded" />
          <div className="h-8 w-36 hidden md:block bg-[var(--ink)]/20 animate-pulse rounded" />
        </div>
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
                  <div className="absolute left-4 top-4 rounded-full bg-[var(--cream)]/85 px-3 py-1 text-[10px] uppercase tracking-[0.24em] shadow-sm">
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

function OurClients() {
  const clients = [
    "Prestige Estates",
    "Lodha Group",
    "Brigade Enterprises",
    "Godrej Properties",
    "Oberoi Realty",
    "Sobha Developers",
  ];
  return (
    <section className="bg-[var(--cream)] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1600px] border-t border-[var(--ink)]/15 pt-24">
        <div className="mb-16 md:mb-24">
          <p className="text-hairline text-[var(--ink-soft)]">Partnerships — Our Clients</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">
            Selected <span className="text-[var(--clay)] italic">Clients.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, i) => (
            <div key={i} className="text-lg md:text-2xl font-light text-[var(--ink)] opacity-80">
              {client}
            </div>
          ))}
          <div className="text-lg md:text-2xl font-light text-[var(--clay)] italic opacity-80">
            + Many More (Logos Pending)
          </div>
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

function Index() {
  const p = useScrollProgress();

  return (
    <main className="relative bg-[var(--cream)] text-[var(--ink)]">
      <CustomCursor />
      <div className="fixed left-0 top-0 z-[60] h-[2px] bg-[var(--clay)]" style={{ width: `${p * 100}%` }} />
      <Nav />
      <Hero image={heroImg} />
      <Marquee />
      <BrandPartners />
      <Featured />
      <Works />
      <Philosophy />
      <Process />
      <Materials />
      <Metrics />
      <OurClients />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
}
