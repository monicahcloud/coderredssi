import Image from "next/image";
import {
  ArrowRight,
  BriefcaseMedical,
  Cctv,
  DoorOpen,
  RadioTower,
  Siren,
  type LucideIcon,
} from "lucide-react";

type EquipmentSystem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const equipmentSystems: EquipmentSystem[] = [
  {
    title: "Communications",
    description:
      "Two-way radios, public-address systems, intercoms, and staff communication tools.",
    icon: RadioTower,
  },
  {
    title: "Access Control",
    description:
      "Secure entry points, door controls, visitor management, and credential systems.",
    icon: DoorOpen,
  },
  {
    title: "Video and Monitoring",
    description:
      "Cameras and monitoring tools that improve visibility and situational awareness.",
    icon: Cctv,
  },
  {
    title: "Emergency Alerts",
    description:
      "Mass notification and alert systems that deliver clear, immediate messages.",
    icon: Siren,
  },
  {
    title: "Response Equipment",
    description:
      "Emergency kits and response supplies that support staff during critical moments.",
    icon: BriefcaseMedical,
  },
];

export default function EquipmentSystems() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#f4f4f2] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Folded corner */}
      <div className="absolute right-0 top-0 z-20 size-24 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)] lg:size-36" />

      {/* Blueprint dots */}
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative grid w-full max-w-full gap-12 lg:grid-cols-[0.7fr_1.55fr] lg:items-center">
        {/* Section content */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-red-700">
            The tools that support
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.97] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Readiness.
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Integrated equipment solutions designed specifically for schools—
            built to work together when it matters most.
          </p>

          <div className="mt-8 divide-y divide-slate-300 border-y border-slate-300">
            {equipmentSystems.map((system) => {
              const Icon = system.icon;

              return (
                <article
                  key={system.title}
                  className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 py-4">
                  <Icon
                    className="size-6 text-red-700"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-xs font-black uppercase">
                      {system.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {system.description}
                    </p>
                  </div>

                  <ArrowRight
                    className="size-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-red-700"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Equipment system image */}
        <div className="relative min-h-[500px] overflow-hidden border border-slate-300 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)] sm:min-h-[620px] lg:min-h-[680px]">
          <Image
            src="/images/equipment-systems-plan.png"
            alt="Integrated school safety equipment including communications, access control, cameras, emergency alerts, and response supplies"
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover object-center"
          />

          {/* Soft edge overlays improve label contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/20" />

          <EquipmentCallout
            title="Communications"
            icon={RadioTower}
            className="left-[3%] top-[4%]"
          />

          <EquipmentCallout
            title="Emergency Alerts"
            icon={Siren}
            className="left-1/2 top-[4%] -translate-x-1/2"
          />

          <EquipmentCallout
            title="Video & Monitoring"
            icon={Cctv}
            className="right-[3%] top-[4%]"
          />

          <EquipmentCallout
            title="Access Control"
            icon={DoorOpen}
            className="bottom-[4%] left-[3%]"
          />

          <EquipmentCallout
            title="Response Equipment"
            icon={BriefcaseMedical}
            className="bottom-[4%] right-[3%]"
          />
        </div>
      </div>
    </section>
  );
}

type EquipmentCalloutProps = {
  title: string;
  icon: LucideIcon;
  className: string;
};

function EquipmentCallout({
  title,
  icon: Icon,
  className,
}: EquipmentCalloutProps) {
  return (
    <div
      className={`absolute z-10 inline-flex max-w-[170px] items-center gap-2 bg-red-700 px-3 py-2 text-[9px] font-black uppercase tracking-[0.1em] text-white shadow-lg sm:max-w-none sm:px-4 sm:text-[10px] ${className}`}>
      <Icon className="size-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
      <span>{title}</span>
    </div>
  );
}
