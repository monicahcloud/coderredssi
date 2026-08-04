import {
  BookOpenCheck,
  Check,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type EducationDeliverable = {
  phase: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

const educationDeliverables: EducationDeliverable[] = [
  {
    phase: "Before Training",
    title: "Prepare",
    description:
      "We align the learning experience with your school, audience, and existing safety plans.",
    items: [
      "Audience and needs review",
      "Customized learning objectives",
      "Campus-specific preparation",
    ],
    icon: ClipboardCheck,
  },
  {
    phase: "During Training",
    title: "Educate",
    description:
      "Participants receive practical, engaging instruction built around their responsibilities.",
    items: [
      "Facilitated instruction",
      "Realistic scenarios",
      "Guided discussion and practice",
    ],
    icon: GraduationCap,
  },
  {
    phase: "After Training",
    title: "Reinforce",
    description:
      "Your school receives resources that support continued learning and everyday application.",
    items: [
      "Reference materials",
      "Recommended next steps",
      "Ongoing reinforcement guidance",
    ],
    icon: BookOpenCheck,
  },
];

export default function EducationDeliverables() {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      <div className="grid w-full max-w-full overflow-hidden border border-slate-200 lg:grid-cols-[0.82fr_2.25fr]">
        {/* Section introduction */}
        <div className="relative overflow-hidden bg-red-700 p-9 text-white lg:p-12">
          <ShieldCheck
            className="absolute -bottom-16 -right-14 size-64 text-black/10"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/65">
              The learning experience
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
              From knowledge
              <br />
              to confident
              <br />
              action.
            </h2>

            <div className="mt-6 h-1.5 w-20 bg-white" />

            <p className="mt-7 max-w-sm text-base leading-7 text-white/75">
              Education should change what people understand, how they respond,
              and the role they play in building a safer school.
            </p>
          </div>
        </div>

        {/* Deliverable phases */}
        <div className="grid md:grid-cols-3">
          {educationDeliverables.map((deliverable) => {
            const Icon = deliverable.icon;

            return (
              <article
                key={deliverable.phase}
                className="group border-b border-slate-200 p-8 last:border-b-0 transition-colors hover:bg-slate-50 md:border-b-0 md:border-l lg:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-16 items-center justify-center rounded-full border-2 border-red-700 bg-red-700/5 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon
                      className="size-8"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-5xl font-black text-slate-100">
                    0
                    {educationDeliverables.findIndex(
                      (item) => item.phase === deliverable.phase,
                    ) + 1}
                  </span>
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-red-700">
                  {deliverable.phase}
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase">
                  {deliverable.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {deliverable.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {deliverable.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-semibold leading-5 text-slate-600">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-red-700"
                        aria-hidden="true"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 h-1 w-10 bg-red-700 transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
