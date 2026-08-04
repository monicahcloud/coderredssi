import {
  BookOpenCheck,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type EducationOutcome = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const educationOutcomes: EducationOutcome[] = [
  {
    number: "01",
    title: "Build Awareness",
    description:
      "Help your school community recognize warning signs, risks, and unsafe conditions before they escalate.",
    icon: BookOpenCheck,
  },
  {
    number: "02",
    title: "Strengthen Confidence",
    description:
      "Give educators, staff, students, and families the knowledge to respond calmly and appropriately.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Create Shared Responsibility",
    description:
      "Build a safety culture where everyone understands their role and works together to protect the campus.",
    icon: UsersRound,
  },
];

export default function EducationOutcomes() {
  return (
    <section
      id="education-details"
      className="w-full max-w-full overflow-hidden border-b border-slate-200 bg-white">
      <div className="grid w-full max-w-full lg:grid-cols-[1.05fr_3fr]">
        {/* Section introduction */}
        <div className="relative overflow-hidden bg-red-700 px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">
              The outcomes that matter
            </p>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.05] sm:text-4xl">
              Knowledge that
              <br />
              strengthens
              <br />
              readiness.
            </h2>

            <div className="mt-6 h-1.5 w-20 bg-white" />
          </div>
        </div>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-3">
          {educationOutcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article
                key={outcome.number}
                className="group border-b border-slate-200 px-7 py-10 transition-colors last:border-b-0 hover:bg-slate-50 md:border-b-0 md:border-l lg:px-10 lg:py-14">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-5xl font-black text-red-700 sm:text-6xl">
                    {outcome.number}
                  </span>

                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-red-700 bg-red-700/5 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon
                      className="size-8"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-9 text-lg font-black uppercase leading-tight sm:text-xl">
                  {outcome.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {outcome.description}
                </p>

                <div className="mt-7 h-1 w-12 bg-red-700 transition-all duration-300 group-hover:w-24" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
