import { CheckCircle2, Map, FileText, Lightbulb, Sprout } from "lucide-react";

const policy = [
  "We stay vendor neutral.",
  "We vet solutions, not brands.",
  "We recommend what best serves schools.",
  "We protect trust, integrity, and fair competition.",
];

export function VendorNeutrality() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-[1500px] ">
        <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl text-center">
          Vendor Neutrality
          <span className="block text-red-600">Protects Everyone</span>
        </h2>

        <div className="mt-12 rounded-[2rem] border border-zinc-500 p-8">
          <h3 className="mb-6 text-3xl font-black">Our Policy</h3>

          {policy.map((item) => (
            <p
              key={item}
              className="mb-4 flex items-center gap-3 text-lg font-bold">
              <CheckCircle2 className="h-6 w-6 text-red-600" />
              {item}
            </p>
          ))}

          <p className="mt-8 text-base leading-8 text-zinc-300">
            Schools get unbiased guidance, districts keep more control, partners
            compete on value, and students benefit from better outcomes.
          </p>

          <p className="mt-4 text-base leading-8 text-zinc-300">
            Safety. Integrity. Transparency. Always.
          </p>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Map,
    title: "National Visibility",
    description:
      "Position your brand within a standards-based school safety model and stay visible to schools, districts, and education leaders.",
  },
  {
    icon: FileText,
    title: "Recommendation Pathways",
    description:
      "Gain exposure where solutions fit assessment findings, school needs, and implementation priorities.",
  },
  {
    icon: Lightbulb,
    title: "Pilot Opportunities",
    description:
      "Support early pilots, implementation pathways, and measurable school safety initiatives.",
  },
  {
    icon: Sprout,
    title: "Growth Alignment",
    description:
      "Align with an initiative designed for regional expansion and long-term multi-state growth.",
  },
];

export function EquipmentTechnologyBenefits() {
  return (
    <section className="bg-[#181818] px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-500">
          Equipment & Technology
        </p>

        <h2 className="max-w-5xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
          Partner <span className="text-red-600">Benefits</span>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-red-700/60 bg-black/30 p-8">
                <Icon className="mb-6 h-14 w-14 text-red-600" />
                <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
