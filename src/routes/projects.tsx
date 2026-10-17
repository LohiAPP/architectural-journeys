import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { Hero } from '../components/Hero';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  place: string;
  year: string;
  description: string;
  images: {
    src: string;
    caption: string;
    tag: string;
  }[];
}

const projectsList: ProjectItem[] = [
  {
    id: "mr-aditya",
    name: "Mr. Aditya Residence",
    subtitle: "The Monolith & Flute Residence",
    tag: "Interior Architecture",
    place: "Private Residence",
    year: "2024",
    description: "Designed with an emphasis on geometric clarity and understated luxury, balancing monolithic marble surfaces with vertical fluted timber and reeded glass partitions.",
    images: [
      {
        src: "/projects/Mr. Aditya/2 (3).jpeg",
        caption: "Living Room & Architectural Screen Partition",
        tag: "Living Area"
      },
      {
        src: "/projects/Mr. Aditya/2 (2).jpeg",
        caption: "Master Bedroom Suite with Integrated Daybed Nook",
        tag: "Master Suite"
      },
      {
        src: "/projects/Mr. Aditya/2 (1).jpeg",
        caption: "Foyer Console & Natural Teak Entryway",
        tag: "Foyer"
      },
      {
        src: "/projects/Mr. Aditya/2 (4).jpeg",
        caption: "Secondary Bedroom Vanity & Floating Study Workstation",
        tag: "Bedroom"
      }
    ]
  },
  {
    id: "mr-mansa",
    name: "Mr. Mansa Residence",
    subtitle: "The Sacred & Contemporary Abode",
    tag: "Residential Interior",
    place: "Family Residence",
    year: "2024",
    description: "A sophisticated dialogue between classical Indian sensibilities and contemporary architectural joinery, celebrating carved teakwood, curved marble paneling, and a consecrated prayer sanctuary.",
    images: [
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.30 PM.jpeg",
        caption: "Formal Living Lounge & Solid Teakwood Diwan",
        tag: "Living Lounge"
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.08.49 PM.jpeg",
        caption: "Mandir Sanctuary with Backlit Fluted Marble & Lotus Om",
        tag: "Pooja Ghar"
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.10.08 PM.jpeg",
        caption: "Transitional Threshold with Timber-and-Mirror Ceiling",
        tag: "Foyer / Divider"
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.15 PM.jpeg",
        caption: "Children's Twin Suite with Arched Wainscoting & Mural",
        tag: "Kids Suite"
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.10.50 PM.jpeg",
        caption: "Contemporary Modular Kitchen in Powder Blue & Black Granite",
        tag: "Modular Kitchen"
      }
    ]
  },
  {
    id: "my-home-tridaas",
    name: "My Home Tridaas",
    subtitle: "The Tridasa Arches",
    tag: "High-Rise Interior",
    place: "High-Rise Residence",
    year: "2024",
    description: "Embodying architectural poise and spatial continuity, this residence celebrates classical Roman arches reinterpreted through contemporary joinery, slatted timber ceilings, and radiant marble geometry.",
    images: [
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.23 PM.jpeg",
        caption: "Dining Hall & Colonnade of Triple Roman Arches",
        tag: "Dining Hall"
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.44 PM.jpeg",
        caption: "Concentric Stepped Marble Mandir with Seated Ganesha",
        tag: "Pooja Sanctum"
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.54 PM.jpeg",
        caption: "Entry Foyer & Meditative Buddha Console",
        tag: "Foyer"
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.12.45 PM.jpeg",
        caption: "Master Suite with Vertical Fluted Teak Cladding",
        tag: "Master Bedroom"
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.15.14 PM.jpeg",
        caption: "Children's Bedroom with Undulating Wave Headboard",
        tag: "Youth Bedroom"
      }
    ]
  }
];

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

function ProjectsPage() {
  const p = useScrollProgress();

  return (
    <main className="relative bg-[var(--cream)] text-[var(--ink)] min-h-screen">
      <CustomCursor />
      <div className="fixed left-0 top-0 z-[60] h-[2px] bg-[var(--clay)]" style={{ width: `${p * 100}%` }} />
      <Nav />

      {/* Hero Section */}
      <Hero
        image="/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.30 PM.jpeg"
        eyebrow="MANUSHYALAYA · ARCHITECTS & INTERIOR STUDIO"
        titleLine1="Selected"
        titleLine2={<>Projects <span className="text-[var(--clay)] italic">& Portfolios.</span></>}
        description="A quiet modernism rooted in place, craftsmanship, and material honesty across our residential commissions."
        buttonText=""
      />

      {/* Projects Navigation Index */}
      <section className="bg-[var(--cream)] px-6 pt-32 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--ink)]/15 pb-8 gap-6">
            <div>
              <p className="text-hairline text-[var(--ink-soft)]">Practice — Selected Commissions</p>
              <h2 className="font-display text-4xl md:text-6xl mt-4">Three Living Sanctuaries</h2>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              {projectsList.map((proj, idx) => (
                <a
                  key={proj.id}
                  href={`#${proj.id}`}
                  className="text-hairline underline underline-offset-8 decoration-[var(--clay)] hover:text-[var(--clay)] transition-colors"
                >
                  0{idx + 1} — {proj.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects List — Shown According to Projects using Original Editorial Layout */}
      <div className="space-y-40 md:space-y-56 py-24 md:py-36">
        {projectsList.map((project, pIdx) => {
          return (
            <section
              key={project.id}
              id={project.id}
              className="scroll-mt-32 px-6 md:px-10"
            >
              <div className="mx-auto max-w-[1600px]">
                {/* Project Header in Previous Theme Structure */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--ink)]/15 pb-10 gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display italic text-3xl text-[var(--clay)]">0{pIdx + 1}</span>
                      <span className="text-hairline text-[var(--ink-soft)] uppercase tracking-[0.28em]">
                        {project.tag}
                      </span>
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl mt-4">
                      {project.name}
                    </h2>
                    <p className="font-display italic text-2xl md:text-3xl text-[var(--clay)] mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="max-w-md text-left md:text-right">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                      {project.place} · {project.year} · {project.images.length} Photographs
                    </p>
                  </div>
                </div>

                {/* Staggered Asymmetrical Image Gallery in Previous Theme */}
                <div className="grid grid-cols-12 gap-x-6 gap-y-24 md:gap-y-36">
                  {project.images.map((img, i) => {
                    const layouts = [
                      "col-span-12 md:col-span-7 md:col-start-1",
                      "col-span-12 md:col-span-5 md:col-start-8 md:mt-32",
                      "col-span-12 md:col-span-6 md:col-start-2",
                      "col-span-12 md:col-span-5 md:col-start-8 md:-mt-20",
                      "col-span-12 md:col-span-8 md:col-start-3 md:mt-12",
                    ];
                    const heights = [
                      "aspect-[4/5]",
                      "aspect-[3/4]",
                      "aspect-[5/6]",
                      "aspect-[4/5]",
                      "aspect-[16/10]",
                    ];
                    const layoutClass = layouts[i % layouts.length];
                    const heightClass = heights[i % heights.length];

                    return (
                      <div key={img.src} className={`group block ${layoutClass}`}>
                        <div className={`relative overflow-hidden ${heightClass}`}>
                          <img
                            src={img.src}
                            alt={img.caption}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/10" />
                          <div className="absolute left-4 top-4 rounded-full bg-[var(--cream)]/85 px-3 py-1 text-[10px] uppercase tracking-[0.24em] shadow-sm font-medium">
                            {img.tag}
                          </div>
                        </div>
                        <div className="mt-6 flex items-baseline justify-between gap-4">
                          <div>
                            <h3 className="font-display text-2xl md:text-3xl">{img.caption}</h3>
                            <p className="mt-1 text-sm text-[var(--ink-soft)]">{project.name} · {project.place}</p>
                          </div>
                          <span className="text-hairline text-[var(--ink-soft)] shrink-0">
                            0{i + 1} / 0{project.images.length}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
