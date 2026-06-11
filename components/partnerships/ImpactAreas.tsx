import { ClipboardCheck, GraduationCap, Shield, RefreshCw } from "lucide-react";

const impactAreas = [
  {
    title: "Assess",
    icon: ClipboardCheck,
    description:
      "Comprehensive school safety assessments that identify vulnerabilities, risks, and preparedness gaps.",
  },
  {
    title: "Educate",
    icon: GraduationCap,
    description:
      "Training, drills, and preparedness programs that equip staff and students with confidence and clarity.",
  },
  {
    title: "Equip",
    icon: Shield,
    description:
      "Technology, communication systems, and security resources that strengthen campus readiness.",
  },
  {
    title: "Reassess",
    icon: RefreshCw,
    description:
      "Ongoing evaluations, audits, and improvement planning to ensure lasting effectiveness.",
  },
];

const ImpactAreas = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Impact Areas
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Where Partnership Creates Impact
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 bg-red-600" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Every contribution supports a structured framework designed to help
            schools prevent, prepare for, respond to, and recover from security
            incidents.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {impactAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-3xl font-black uppercase">
                  {area.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-300">
                  {area.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-red-600/20 bg-red-950/20 p-8 text-center">
          <h3 className="text-2xl font-black sm:text-3xl">
            Assess. Educate. Equip. Reassess.
          </h3>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-zinc-300">
            These four pillars form the foundation of the Code Red Safer Schools
            Initiative, creating a repeatable framework that helps schools move
            from awareness to action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;
