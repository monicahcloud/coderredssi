import { CheckCircle2 } from "lucide-react";

const policy = [
  "We are vendor neutral.",
  "We vet solutions, not brands.",
  "We recommend what’s best for schools.",
  "We protect trust, integrity, and competition.",
];

const benefits = [
  "Schools get unbiased recommendations.",
  "Districts have more choices and control.",
  "Partners compete on value and impact.",
  "Students and staff gain the best outcomes.",
];

export default function VendorNeutrality() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl">
          Vendor Neutrality
          <span className="block text-red-600">Protects Everyone</span>
        </h2>

        <div className="mt-12 grid gap-8 rounded-[2rem] border border-zinc-500 p-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-black">Our Policy</h3>
            {policy.map((item) => (
              <p
                key={item}
                className="mb-4 flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="h-6 w-6 text-red-600" />
                {item}
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-6 text-3xl font-black">The Benefits</h3>
            {benefits.map((item) => (
              <p
                key={item}
                className="mb-4 flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="h-6 w-6 text-red-600" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-red-700 p-8 text-center">
          <p className="text-2xl font-black">
            Our Commitment: Safety. Integrity. Transparency.{" "}
            <span className="text-red-600">Always.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
