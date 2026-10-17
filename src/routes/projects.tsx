import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { Hero } from '../components/Hero';
import { Magnetic } from '../components/Magnetic';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

interface ProjectImage {
  src: string;
  title: string;
  caption: string;
}

interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  style: string;
  reference: string;
  heroImage: string;
  description: string;
  features: string[];
  images: ProjectImage[];
}

const projectsData: ProjectData[] = [
  {
    id: "monolith-flute",
    number: "01",
    title: "The Monolith & Flute Residence",
    category: "Luxury Residential Interior",
    style: "Contemporary Minimalist",
    reference: "Mr. Aditya",
    heroImage: "/projects/Mr. Aditya/2 (3).jpeg",
    description:
      "Designed with an emphasis on geometric clarity and understated luxury, this residence balances monolithic surfaces with refined linear textures. The interior composition juxtaposes bookmatched marble-patterned finishes against vertical fluted timber, dark powder-coated steel frameworks, and tactile fluted glass partitions. Concealed architectural cove lighting, integrated niche daybeds, and disciplined neutral palettes punctuated by deep teal accents create a serene, light-filled urban sanctuary.",
    features: [
      "Full-height dual-tone wardrobe joinery incorporating an integrated cushioned reading nook and daybed niche",
      "Custom floor-to-ceiling spatial room divider constructed from black steel box sections, reeded/fluted glass, and marble-clad panels",
      "Bookmatched white marble TV backdrop paired with open grid display shelving and floating console",
      "Bespoke prayer cabinet with arched fluted-glass casements, brass ring pulls, and back-painted glass detailing",
      "Functional study and vanity suite featuring bespoke semicircular handles, capsule mirror, and floating geometric wall niches"
    ],
    images: [
      {
        src: "/projects/Mr. Aditya/2 (3).jpeg",
        title: "Living Room & Architectural Partition",
        caption: "Bookmatched marble TV backdrop, floating console, black metal reeded-glass room divider, and arched fluted-glass pooja unit."
      },
      {
        src: "/projects/Mr. Aditya/2 (2).jpeg",
        title: "Master Bedroom & Daybed Nook",
        caption: "Dual-tone full-height wardrobe wall with integrated cushioned daybed, concrete-effect accent wall, and fluted teak study ledge."
      },
      {
        src: "/projects/Mr. Aditya/2 (1).jpeg",
        title: "Foyer Console & Teak Entryway",
        caption: "Bookmatched marble-pattern cabinetry, dark open display shelving with curated greenery, and natural teak flush doorway."
      },
      {
        src: "/projects/Mr. Aditya/2 (4).jpeg",
        title: "Secondary Bedroom & Vanity Suite",
        caption: "High-gloss pearl grey wardrobes with semicircular teal pulls, floating dual-level desk, and capsule arched mirror."
      }
    ]
  },
  {
    id: "sacred-contemporary",
    number: "02",
    title: "The Sacred & Contemporary Abode",
    category: "Luxury Residential Interior",
    style: "Transitional Indian Modernism",
    reference: "Mr.Mansa",
    heroImage: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.30 PM.jpeg",
    description:
      "A sophisticated dialogue between classical Indian sensibilities and contemporary architectural joinery defines this spacious family residence. Rich natural teakwood accents, sculpted wooden diwan seating, and consecrated marble prayer sanctuaries coexist effortlessly with minimalist metal partition screens and curved marble paneling. Warm perimeter cove lighting, slatted timber-and-mirror ceiling treatments, and thoughtful color zoning deliver a deeply rooted yet modern living experience.",
    features: [
      "Monumental prayer sanctuary with halo-backlit fluted marble paneling, lotus-Om iconography, suspended brass bells, and hand-carved jali screens",
      "Curved backlit Statuario marble entertainment wall framed by vertical acoustic timber battens and illuminated display vitrines",
      "Spatial threshold divider uniting timber ceiling beams, inset mirrors, open steel cubic shelving, and a fluted-glass pedestal showcase",
      "Themed children’s twin bedroom featuring curved wainscoting, narrative landscape mural, integrated mauve study cabinetry, and diamond cove ceiling",
      "Ergonomic modular kitchen with handleless powder-blue base drawers, polished black stone countertops, and contrasting dark textured splashback"
    ],
    images: [
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.30 PM.jpeg",
        title: "Formal Living Lounge & Sculpture Niche",
        caption: "Curved backlit marble TV feature, acoustic fluted timber, traditional wooden diwan, and timber arch portal."
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.08.49 PM.jpeg",
        title: "Consecrated Mandir Sanctum",
        caption: "Backlit fluted marble backdrop, laser-cut lotus-Om cutwork, white marble Krishna idol, brass temple bells, and walnut credenza."
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.10.08 PM.jpeg",
        title: "Spatial Threshold & Slatted Ceiling",
        caption: "Timber-and-mirror false ceiling, white storage joinery, black metal display frames, and reeded glass showcase column."
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.15 PM.jpeg",
        title: "Children's Twin Suite",
        caption: "Curved twin beds, pillared wainscoting, landscape balloon mural, integrated mauve wardrobe desk, and diamond ceiling cove."
      },
      {
        src: "/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.10.50 PM.jpeg",
        title: "Contemporary Modular Kitchen",
        caption: "Powder-blue handleless base cabinetry, jet black granite countertops, dark textured splashback, and angled chimney hood."
      }
    ]
  },
  {
    id: "tridasa-arches",
    number: "03",
    title: "The Tridasa Arches",
    category: "High-Rise Residential Interior",
    style: "Neo-Classical Modernism",
    reference: "my home tridaas (My Home Tridasa)",
    heroImage: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.23 PM.jpeg",
    description:
      "Embodying architectural poise and spatial continuity, this high-rise residence celebrates classical arched motifs reinterpreted through contemporary joinery and refined lighting. A rhythmic sequence of architectural Roman arches delineates formal dining from private living areas, complementing textured lime-wash feature walls and custom slatted timber ceilings. From the radiant concentric geometry of the marble mandir to the fluted wood and curved transitions of the master suite, the home balances meditative tranquility with functional elegance.",
    features: [
      "Triple architectural Roman arch colonnade integrating an open arched portal and two symmetrical floating-shelf display niches over sleek credenza cabinetry",
      "Consecrated marble mandir featuring concentric stepped circular wall reveals, halo backlighting, gold 'Om' iconography, and hanging brass temple bells",
      "Sculptural entry foyer console featuring a fluted marble column, gold framing, seated Buddha art piece, and brass globe pendant fixtures",
      "Master bedroom retreat with acoustic fluted timber cladding, curved headboard wall with shadow reveals, and integrated corner study nook",
      "Custom slatted timber ceiling grid with inset mirrored panels creating vertical height and ambient warmth across the central circulation axis"
    ],
    images: [
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.23 PM.jpeg",
        title: "Dining Hall & Colonnade of Roman Arches",
        caption: "Triple Roman arches forming an open passage and dual display vitrines, paired with laser-cut Ganesha jali door."
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.44 PM.jpeg",
        title: "Concentric Marble Mandir Sanctuary",
        caption: "Concentric stepped circular reveals in white marble, halo cove illumination, gold Om emblem, and hanging brass bells."
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.14.54 PM.jpeg",
        title: "Formal Foyer & Buddha Console",
        caption: "Textured lime-plaster wall, fluted marble and gold Buddha console, brass globe pendants, and timber-mirror ceiling."
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.12.45 PM.jpeg",
        title: "Master Bedroom Suite",
        caption: "Vertical fluted teak wall panel, curved headboard with reveals, corner floating desk, and wardrobe with fluted wood belt."
      },
      {
        src: "/projects/my home tridaas/WhatsApp Image 2026-10-10 at 3.15.14 PM.jpeg",
        title: "Children's Bedroom Suite",
        caption: "Dual-tone navy and blush cabinetry, undulating wave headboard panels, space-saving fold-down study desk, and diamond ceiling cove."
      }
    ]
  }
];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalImage, setActiveModalImage] = useState<ProjectImage | null>(null);

  const categories = ["All", "Contemporary Minimalist", "Transitional Indian Modernism", "Neo-Classical Modernism"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.style === selectedCategory);

  return (
    <main className="relative bg-[var(--cream)] text-[var(--ink)] min-h-screen">
      <CustomCursor />
      <Nav forceSolid={false} />

      <Hero
        image="/projects/Mr.Mansa/WhatsApp Image 2026-10-10 at 3.09.30 PM.jpeg"
        eyebrow="MANUSHYALAYA · CURATED PORTFOLIO"
        titleLine1="Selected"
        titleLine2={<span className="text-[var(--clay)] italic">Works.</span>}
        description="A curation of bespoke living environments — where monolithic textures, fluted craftsmanship, and sacred sanctuaries coalesce."
        buttonText=""
      />

      {/* Filter Header */}
      <section className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[var(--ink)]/15 pb-8">
          <div>
            <p className="text-hairline text-[var(--ink-soft)] uppercase tracking-[0.3em]">Portfolio Index</p>
            <h2 className="font-display mt-2 text-4xl md:text-5xl">Three Flagship Sanctuaries</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[var(--clay)] text-[var(--cream)]"
                    : "bg-[var(--sand)] text-[var(--ink)]/80 hover:bg-[var(--ink)]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 space-y-40">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            id={project.id}
            className="scroll-mt-32 border-b border-[var(--ink)]/15 pb-32 last:border-b-0"
          >
            {/* Project Header */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-baseline">
              <div className="md:col-span-2">
                <span className="font-display italic text-5xl md:text-6xl text-[var(--clay)]">
                  {project.number}
                </span>
                <span className="block mt-2 text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)]">
                  {project.category}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-display text-4xl md:text-6xl leading-[1.05]">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--clay)] font-medium">
                  {project.style} · Reference: {project.reference}
                </p>
                <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/80 max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-4 bg-[var(--sand)] p-6 md:p-8 rounded-2xl">
                <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[var(--ink-soft)] mb-4">
                  Architectural Highlights
                </p>
                <ul className="space-y-3 text-xs leading-relaxed text-[var(--ink)]/85">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-[var(--clay)] mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.images.map((img, i) => (
                <div
                  key={img.src}
                  onClick={() => setActiveModalImage(img)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-[var(--sand)] aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-[var(--cream)]">
                    <p className="text-xs font-semibold tracking-wide">{img.title}</p>
                    <p className="text-[11px] opacity-80 mt-1 line-clamp-2 leading-snug">{img.caption}</p>
                    <span className="mt-3 inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-[var(--clay)]">
                      Enlarge View →
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 rounded-full bg-[var(--cream)]/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-medium text-[var(--ink)] shadow-sm">
                    View 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full bg-[var(--obsidian)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 text-white p-2.5 hover:bg-[var(--clay)] transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative flex-1 max-h-[75vh] flex items-center justify-center bg-black/40 overflow-hidden">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 md:p-8 bg-[var(--obsidian)] text-[var(--cream)] border-t border-white/10">
              <h4 className="font-display text-2xl text-[var(--cream)]">{activeModalImage.title}</h4>
              <p className="mt-2 text-sm text-[var(--cream)]/80 leading-relaxed">{activeModalImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Start a conversation CTA */}
      <section className="bg-[var(--sand)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px] flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-hairline text-[var(--ink-soft)] uppercase tracking-[0.3em]">Next Steps</p>
            <h2 className="font-display mt-4 text-4xl md:text-6xl max-w-xl">
              Ready to design your <span className="italic text-[var(--clay)]">dwelling?</span>
            </h2>
          </div>
          <Link to="/">
            <Magnetic className="rounded-full bg-[var(--clay)] px-8 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--cream)]">
              Back to Home →
            </Magnetic>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
