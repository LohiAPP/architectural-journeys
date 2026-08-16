import { useEffect } from "react";
import archResidential from "@/assets/arch_residential_1786438080484.jpg";
import archApartments from "@/assets/arch_apartments_1786438106244.jpg";
import archCommercial from "@/assets/arch_commercial_1786438127360.jpg";
import archInstitutional from "@/assets/arch_institutional_1786438145110.jpg";
import archHospital from "@/assets/arch_hospital_1786438159549.jpg";
import archElevation from "@/assets/arch_elevation_1786438172299.jpg";

import intResidential from "@/assets/int_residential_1786438197168.jpg";
import intOffice from "@/assets/int_office_1786438212890.jpg";
import intCommercial from "@/assets/int_commercial_1786438370168.jpg";
import intLiving from "@/assets/int_living_1786438583641.jpg";
import intKitchen from "@/assets/int_kitchen_1786438640710.jpg";
import intWorkspace from "@/assets/int_workspace_1786438670208.jpg";

import landResidential from "@/assets/land_residential_1786439043058.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";
import featured from "@/assets/featured.jpg";
import hero from "@/assets/hero.jpg";
import matStone from "@/assets/mat-stone.jpg";
import matConcrete from "@/assets/mat-concrete.jpg";
import matTimber from "@/assets/mat-timber.jpg";
import ctaImg from "@/assets/cta.jpg";
import darkImg from "@/assets/dark-section.jpg";

export const disciplinesData = {
  Architecture: {
    title: "Architecture",
    images: [archResidential, archApartments, archCommercial, archInstitutional, archHospital, archElevation],
    categories: [
      "Residential architecture",
      "Apartments",
      "Commercial buildings",
      "Institutional buildings",
      "Hospitals / education buildings",
      "Elevations / planning"
    ],
    description: "We create functional architectural solutions with smart planning and strong execution."
  },
  "Interior Design": {
    title: "Interior Design",
    images: [intResidential, intOffice, intCommercial, intLiving, intKitchen, intWorkspace],
    categories: [
      "Residential interiors",
      "Office interiors",
      "Commercial interiors",
      "Living spaces",
      "Kitchens / bedrooms",
      "Contemporary workspace interiors"
    ],
    description: "We design spaces that balance aesthetic elegance with everyday functionality."
  },
  Landscaping: {
    title: "Landscaping",
    images: [
      landResidential,
      work1,
      work2,
      work3,
      work4,
      featured
    ],
    categories: [
      "Residential gardens",
      "Commercial landscapes",
      "Theme parks",
      "Urban landscapes",
      "Roof gardens",
      "Water features / swimming pools"
    ],
    description: "We blend natural elements to create serene, sustainable outdoor environments."
  },
  "Renovation Works": {
    title: "Renovation Works",
    images: [
      hero,
      matStone,
      matConcrete,
      matTimber,
      work2,
      work3
    ],
    categories: [
      "Home renovation",
      "Office renovation",
      "Structural repair",
      "Interior upgrades",
      "Finishing works",
      "Before/after renovation-style visuals"
    ],
    description: "We breathe new life into spaces through careful restoration and upgrades."
  },
  "Project Management": {
    title: "Project Management",
    images: [
      ctaImg,
      darkImg,
      work4,
      work1,
      featured,
      hero
    ],
    categories: [
      "Construction site supervision",
      "Project execution",
      "Site coordination",
      "Architectural/construction drawings",
      "Material/vendor coordination",
      "Team/project management on site"
    ],
    description: "We ensure seamless execution with end-to-end site supervision and coordination."
  }
};

export type DisciplineKey = keyof typeof disciplinesData;

interface DisciplineModalProps {
  disciplineKey: DisciplineKey | null;
  onClose: () => void;
}

export function DisciplineModal({ disciplineKey, onClose }: DisciplineModalProps) {
  useEffect(() => {
    if (disciplineKey) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [disciplineKey]);

  if (!disciplineKey) return null;

  const data = disciplinesData[disciplineKey];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[1200px] h-[90vh] sm:h-[80vh] bg-white rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Images Gallery */}
        <div className="w-full md:w-[50%] p-6 md:p-10 bg-[#f4f4f4] flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[500px]">
            {data.images.map((img, idx) => (
              <div key={idx} className="relative rounded-[16px] overflow-hidden aspect-square bg-white shadow-sm border border-gray-200">
                <img 
                  src={img} 
                  alt={`${data.title} image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[50%] p-8 md:p-14 flex flex-col relative bg-white overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-xl text-gray-500 shadow-sm"
            aria-label="Close"
          >
            ×
          </button>

          <div className="mt-4 flex-1">
            <h2 className="text-3xl font-bold text-black mb-8">{data.title}</h2>
            
            <div className="flex flex-wrap items-start gap-4 mb-12">
              {data.categories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 rounded-lg border border-gray-200 bg-[#fbfbfb] shadow-sm flex items-center gap-2 cursor-default hover:bg-white transition-colors text-black font-medium text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 block shrink-0" />
                  <span>{cat}</span>
                </div>
              ))}
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-[#fbfbfb] shadow-sm cursor-pointer hover:bg-white transition-colors text-black font-medium text-sm">
                + More
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-auto">
              {data.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
