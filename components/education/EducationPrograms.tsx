import Image from "next/image";
import {
  ArrowRight,
  Brain,
  MessageSquareText,
  ShieldAlert,
  Siren,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type EducationProgram = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const educationPrograms: EducationProgram[] = [
  {
    title: "Awareness and Prevention",
    description:
      "Recognize warning signs, unsafe conditions, concerning behavior, and opportunities for early intervention.",
    icon: Brain,
  },
  {
    title: "Emergency Readiness",
    description:
      "Understand emergency procedures, individual responsibilities, and how to respond under pressure.",
    icon: Siren,
  },
  {
    title: "Clear Communication",
    description:
      "Strengthen reporting, information sharing, and communication before, during, and after an incident.",
    icon: MessageSquareText,
  },
  {
    title: "Role-Specific Response",
    description:
      "Prepare leaders, educators, staff, students, and families for the responsibilities connected to their roles.",
    icon: ShieldAlert,
  },
  {
    title: "A Culture of Safety",
    description:
      "Create shared expectations and everyday habits that make preparedness part of the school culture.",
    icon: UsersRound,
  },
];

export default function EducationPrograms() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#f4f4f2] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-28">
      {/* Folded corner */}
      <div className="absolute right-0 top-0 z-20 size-24 bg-red-700 [clip-path:polygon(100%_0,100%_100%,0_0)] lg:size-36" />

      {/* Background dots */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      <div className="relative grid w-full max-w-full gap-12 lg:grid-cols-[0.72fr_1.55fr] lg:items-center">
        {/* Section information */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-red-700">
            What we teach
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.97] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Education that prepares the whole school community.
          </h2>

          <div className="mt-6 h-1.5 w-20 bg-red-700" />

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Our programs turn safety plans into practical knowledge. Each
            session is designed around the people, responsibilities, and
            real-world conditions within your school.
          </p>

          <div className="mt-8 divide-y divide-slate-300 border-y border-slate-300">
            {educationPrograms.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 py-4">
                  <div>
                    <div className="flex flex-nowrap items-center gap-3">
                      <Icon
                        className="size-6 shrink-0 text-red-700"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <h3 className="whitespace-nowrap text-xs font-black uppercase">
                        {program.title}
                      </h3>
                    </div>

                    <p className="mt-2 pl-9 text-xs leading-5 text-slate-500">
                      {program.description}
                    </p>
                  </div>

                  <ArrowRight
                    className="size-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-red-700"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Training visual */}
        <div className="relative min-h-[620px] overflow-hidden border border-slate-300 bg-black shadow-[0_25px_80px_rgba(15,23,42,0.18)]">
          <Image
            src="/images/classroom.png"
            alt="Educators and school personnel participating in safety training"
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

          {/* Blueprint grid */}
          <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />

          {/* Top label */}
          <div className="absolute left-0 top-0 bg-red-700 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white">
            Practical. Relevant. Actionable.
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-red-400">
              Prepared people make stronger schools
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-4xl">
              Turn safety policies into confident action.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Interactive instruction, realistic scenarios, and role-specific
              guidance help participants understand what to do, why it matters,
              and how to work together.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Learn", "Practice", "Apply"].map((stage, index) => (
                <div
                  key={stage}
                  className="flex flex-nowrap items-center gap-3 border border-white/20 bg-black/55 px-4 py-4 backdrop-blur-sm">
                  <span className="shrink-0 text-2xl font-black text-red-500">
                    0{index + 1}
                  </span>

                  <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.18em]">
                    {stage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
