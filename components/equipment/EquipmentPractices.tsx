import {
  BookOpenCheck,
  RefreshCw,
  School,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type EducationPractice = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const educationPractices: EducationPractice[] = [
  {
    title: "Age Appropriate",
    description:
      "Content is adapted to the developmental level and responsibilities of each audience.",
    icon: School,
  },
  {
    title: "Role Specific",
    description:
      "Leaders, staff, students, and families receive guidance relevant to their roles.",
    icon: UsersRound,
  },
  {
    title: "Practical Learning",
    description:
      "Training connects safety principles to realistic school situations and decisions.",
    icon: BookOpenCheck,
  },
  {
    title: "Built to Continue",
    description:
      "Resources and reinforcement help schools sustain learning beyond one session.",
    icon: RefreshCw,
  },
];

export default function EducationPractices() {
  return (
    <section className="w-full max-w-full border-y border-slate-200 bg-[#f8f8f7] px-5 py-10 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
      <div className="grid w-full max-w-full gap-8 lg:grid-cols-[0.7fr_2.3fr] lg:items-center">
        {/* Section heading */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-red-700">
            Designed around
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase leading-tight">
            How people learn.
          </h2>

          <div className="mt-4 h-1 w-14 bg-red-700" />
        </div>

        {/* Practice cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {educationPractices.map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                key={practice.title}
                className="group grid grid-cols-[48px_1fr] gap-4 border-l border-slate-300 pl-5">
                <div className="flex size-11 items-center justify-center rounded-full border border-red-700/30 bg-red-700/5 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
                  <Icon
                    className="size-6"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase">
                    {practice.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
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
