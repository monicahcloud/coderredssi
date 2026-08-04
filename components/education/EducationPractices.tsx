import {
  Headphones,
  Puzzle,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";

type EquipmentPractice = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const equipmentPractices: EquipmentPractice[] = [
  {
    title: "Interoperable Systems",
    description:
      "Equipment and systems designed to work together across the campus.",
    icon: Puzzle,
  },
  {
    title: "School-Appropriate Solutions",
    description: "Technology selected for active K–12 learning environments.",
    icon: Users,
  },
  {
    title: "Reliable Support",
    description:
      "Clear implementation, training, maintenance, and ongoing assistance.",
    icon: Headphones,
  },
  {
    title: "Built to Evolve",
    description:
      "Solutions that can adapt as your campus and safety needs change.",
    icon: RefreshCw,
  },
];

export default function EquipmentPractices() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-y border-slate-200 bg-[#f5f5f3] px-5 py-10 sm:px-8 lg:px-14 lg:py-12 xl:px-20 2xl:px-28">
      {/* Blueprint dots */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative grid w-full max-w-full gap-9 lg:grid-cols-[0.72fr_2.4fr] lg:items-center">
        {/* Section heading */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">
            Built for the
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
            School
            <br />
            environment.
          </h2>

          <div className="mt-4 h-1.5 w-14 bg-red-700" />
        </div>

        {/* Practice items */}
        <div className="grid gap-0 border-y border-slate-300 sm:grid-cols-2 sm:border-y-0 xl:grid-cols-4">
          {equipmentPractices.map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                key={practice.title}
                className="group grid grid-cols-[56px_1fr] items-start gap-4 border-b border-slate-300 px-3 py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 xl:min-h-36">
                <div className="flex size-12 items-center justify-center rounded-full border border-slate-400 bg-white text-slate-700 transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                  <Icon
                    className="size-6 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase leading-5 tracking-[0.06em] text-[#080808]">
                    {practice.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {practice.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
