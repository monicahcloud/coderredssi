import { Target, BarChart3, Users, Handshake } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Proven Impact",
    description:
      "Real solutions that improve school safety, strengthen readiness, and help protect lives.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We collaborate with mission-aligned partners to drive meaningful, measurable outcomes.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description:
      "Transparent reporting and insights demonstrate impact and guide smarter decisions.",
  },
  {
    icon: Users,
    title: "Vendor Neutral & Inclusive",
    description:
      "We vet solutions, not brands, ensuring fairness, choice, and the best outcomes for schools.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-zinc-100 py-24 text-slate-900">
      <div className="mx-auto w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            Why Code Red
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            What Makes Code Red Different
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 bg-red-600" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We are not another product vendor. We coordinate people, technology,
            training, and expertise into a unified framework schools can
            actually implement and sustain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-none border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-9 rounded-none bg-gradient-to-r from-red-700 to-red-600 p-8 text-center text-white shadow-xl sm:p-10">
          <h3 className="text-2xl font-black sm:text-3xl">
            A Coordinated, Partner-Driven Approach To School Protection
          </h3>

          <p className="mx-auto mt-4 max-w4xl text-base leading-8 text-red-50 sm:text-lg">
            Code Red brings together schools, partners, technology providers,
            community leaders, and safety professionals under one coordinated
            framework designed to improve preparedness, reduce risk, and
            strengthen response capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
