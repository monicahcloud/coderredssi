import {
  ArrowRight,
  DoorOpen,
  Eye,
  Fence,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type AssessmentArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const assessmentAreas: AssessmentArea[] = [
  {
    title: "Doors and Access",
    description:
      "Entry points, locking systems, visitor flow, and controlled access.",
    icon: DoorOpen,
  },
  {
    title: "Sight Lines",
    description:
      "Visibility, supervision, blind spots, and natural observation.",
    icon: Eye,
  },
  {
    title: "Common Areas",
    description:
      "Cafeterias, gyms, auditoriums, and other high-traffic spaces.",
    icon: Users,
  },
  {
    title: "Perimeter",
    description: "Fencing, gates, exterior lighting, and campus boundaries.",
    icon: Fence,
  },
  {
    title: "Communications",
    description:
      "Alerts, public-address systems, and emergency information flow.",
    icon: Wifi,
  },
];

export default function PhysicalAssessmentAreas() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f2] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Folded corner */}
      <div className="absolute right-0 top-0 size-24 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)] lg:size-36" />

      <div className="relative mx-auto grid max-w-full gap-12 lg:grid-cols-[0.7fr_1.55fr] lg:items-center">
        {/* Section content */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-red-700">
            What we examine
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.97] tracking-[-0.04em] sm:text-5xl">
            A comprehensive look at what matters most.
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
            Our assessments evaluate the physical environment through the lens
            of prevention, protection, and preparedness—examining how people
            move, how spaces are used, and how your campus can respond.
          </p>

          {/* Assessment categories */}
          <div className="mt-7 divide-y divide-slate-300 border-y border-slate-300">
            {assessmentAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group grid grid-cols-[36px_1fr_auto] items-center gap-3 py-3">
                  <Icon
                    className="size-6 text-red-700"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-xs font-black uppercase">
                      {area.title}
                    </h3>

                    <p className="mt-0.5 text-xs leading-5 text-slate-500">
                      {area.description}
                    </p>
                  </div>

                  <ArrowRight className="size-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-red-700" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Campus assessment plan */}
        <div className="relative min-h-[440px] overflow-hidden border border-slate-300 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)] sm:min-h-[560px] lg:min-h-[650px]">
          <Image
            src="/images/campus-assessment.png"
            alt="Architectural campus plan showing the areas evaluated during a physical security assessment"
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover object-center"
          />

          {/* Soft white overlay keeps the red labels readable */}
          <div className="absolute inset-0 bg-white/5" />

          <MapCallout
            label="Sight Lines"
            icon={Eye}
            className="left-[3%] top-[8%]"
            connectorClass="left-full top-1/2 h-px w-10 sm:w-20"
          />

          <MapCallout
            label="Perimeter"
            icon={Fence}
            className="right-[3%] top-[8%]"
            connectorClass="right-full top-1/2 h-px w-10 sm:w-20"
          />

          <MapCallout
            label="Doors and Access"
            icon={DoorOpen}
            className="right-[2%] top-[46%]"
            connectorClass="right-full top-1/2 h-px w-10 sm:w-16"
          />

          <MapCallout
            label="Common Areas"
            icon={Users}
            className="bottom-[4%] left-[10%]"
            connectorClass="bottom-full left-1/2 h-12 w-px sm:h-20"
          />

          <MapCallout
            label="Communications"
            icon={Wifi}
            className="bottom-[5%] right-[4%]"
            connectorClass="bottom-full left-1/2 h-12 w-px sm:h-20"
          />
        </div>
      </div>
    </section>
  );
}

type MapCalloutProps = {
  label: string;
  icon: LucideIcon;
  className: string;
  connectorClass: string;
};

function MapCallout({
  label,
  icon: Icon,
  className,
  connectorClass,
}: MapCalloutProps) {
  return (
    <div
      className={`absolute z-10 inline-flex items-center gap-2 bg-red-700 px-2.5 py-2 text-[8px] font-black uppercase tracking-[0.1em] text-white shadow-lg sm:px-3 sm:text-[10px] ${className}`}>
      <Icon className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />

      <span className="whitespace-nowrap">{label}</span>

      <span
        className={`absolute bg-red-700 ${connectorClass}`}
        aria-hidden="true"
      />
    </div>
  );
}
