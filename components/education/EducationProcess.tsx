import {
  ArrowRight,
  BookOpenCheck,
  ClipboardList,
  MessageSquareText,
  Target,
  type LucideIcon,
} from "lucide-react";

type EducationStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const educationSteps: EducationStep[] = [
  {
    number: "01",
    title: "Understand the Audience",
    description:
      "We identify the participants, their responsibilities, and the safety challenges they encounter.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Customize the Training",
    description:
      "We align the program with your campus plans, policies, priorities, and learning needs.",
    icon: Target,
  },
  {
    number: "03",
    title: "Teach and Practice",
    description:
      "Participants build practical knowledge through instruction, discussion, and realistic scenarios.",
    icon: BookOpenCheck,
  },
  {
    number: "04",
    title: "Reinforce the Learning",
    description:
      "We provide guidance and resources that help your school apply and sustain what was learned.",
    icon: MessageSquareText,
  },
];

export default function EducationProcess() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#030718] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Decorative red rail */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" />

      <div className="relative w-full max-w-full">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
          Our education process
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          Training designed for your people and your campus.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/60">
          Every learning experience is built around clear objectives, practical
          application, and the responsibilities of the people being trained.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {educationSteps.map((step, index) => {
            const Icon = step.icon;
            const hasNextStep = index < educationSteps.length - 1;

            return (
              <article
                key={step.number}
                className="group relative border-t border-white/20 pt-7">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-5xl font-black text-red-600">
                    {step.number}
                  </span>

                  <div className="flex size-16 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white/60 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-700 group-hover:text-white">
                    <Icon
                      className="size-8"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-7 text-lg font-black uppercase">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-10 bg-red-700 transition-all duration-300 group-hover:w-20" />

                {hasNextStep && (
                  <ArrowRight
                    className="absolute -right-5 top-11 hidden size-5 text-red-600 xl:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
