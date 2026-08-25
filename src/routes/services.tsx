import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { DisciplineModal, type DisciplineKey } from '../components/DisciplineModal';
import { CustomCursor } from '../components/CustomCursor';
import { Hero } from '../components/Hero';
import featuredImg from "@/assets/featured.jpg";

import servicesHeroImg from "@/assets/services_hero.jpg";

export const Route = createFileRoute('/services')({
  component: ServicesPage,
});

function ServicesPage() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineKey | null>(null);

  return (
    <main className="relative bg-[var(--cream)] text-[var(--ink)] min-h-screen">
      <CustomCursor />
      {/* We no longer need forceSolid since we have a hero image */}
      <Nav />
      <Hero 
        image={servicesHeroImg}
        titleLine1="The Five" 
        titleLine2={<span className="text-[var(--clay)] italic">Disciplines.</span>} 
        description="A holistic approach to spaces — from architectural conception to bespoke interiors and native landscaping."
        buttonText="" // Hide the button
      />
      
      <div>
        <Services onDisciplineClick={setActiveDiscipline} />
      </div>

      <WhoAreWe />

      <Footer />

      <DisciplineModal 
        disciplineKey={activeDiscipline} 
        onClose={() => setActiveDiscipline(null)} 
      />
    </main>
  );
}

export function Services({ onDisciplineClick }: { onDisciplineClick: (key: DisciplineKey) => void }) {
  const s = [
    { n: "01", t: "Architecture" as DisciplineKey, d: "Residences, retreats, cultural and commercial buildings from concept through construction." },
    { n: "02", t: "Interior Design" as DisciplineKey, d: "Interiors conceived alongside the shell — from millwork to lighting temperature." },
    { n: "03", t: "Landscaping" as DisciplineKey, d: "Native planting, water and stone as inseparable extensions of the architecture." },
    { n: "04", t: "Renovation Works" as DisciplineKey, d: "Breathe new life into spaces through careful restoration and interior upgrades." },
    { n: "05", t: "Project Management" as DisciplineKey, d: "End-to-end site supervision, vendor coordination, and seamless project execution." },
  ];
  return (
    <section id="services" className="bg-[var(--sand)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between">
          <p className="text-hairline text-[var(--ink-soft)]">Practice — Five Disciplines</p>
          <p className="font-display italic text-2xl hidden md:block">One studio.</p>
        </div>
        <ul className="mt-16 divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
          {s.map((row) => (
            <li key={row.n} className="group relative">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onDisciplineClick(row.t);
                }} 
                className="w-full text-left grid grid-cols-12 items-center gap-6 py-10 md:py-14 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 text-hairline text-[var(--ink-soft)]">{row.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-display text-4xl md:text-6xl transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--clay)]">
                  {row.t}
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-7 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {row.d}
                </p>
                <span className="col-span-12 md:col-span-1 justify-self-end text-2xl text-[var(--ink-soft)] transition-transform duration-500 group-hover:rotate-45 group-hover:text-[var(--clay)]">↗</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhoAreWe() {
  return (
    <section className="bg-[var(--obsidian)] text-[var(--cream)] px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <p className="text-hairline text-[var(--cream)]/60 mb-8">Studio — Who We Are</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-10">
            Crafting spaces that resonate with <span className="text-[var(--clay)] italic">human emotion.</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--cream)]/80 max-w-md">
            We are a collective of architects, interior designers, and thinkers who believe in the power of restraint. Founded on the principle that less is more, our work strips away the unnecessary to reveal the essential character of a space. 
            <br/><br/>
            Every project is a dialogue between the site, the client's vision, and our rigorous attention to detail.
          </p>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img 
            src={featuredImg} 
            alt="Who We Are - Studio" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}
