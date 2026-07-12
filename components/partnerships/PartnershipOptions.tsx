"use client";

import Image from "next/image";

const tiers = [
  {
    name: "Bronze",
    amount: "$25K - $100K",
    badgeSrc: "/images/bronzebadge.png",
    check: "text-amber-700",
  },
  {
    name: "Silver",
    amount: "$100K - $500K",
    badgeSrc: "/images/silverbadge.png",
    check: "text-zinc-400",
  },
  {
    name: "Gold",
    amount: "$500K - $2M",
    badgeSrc: "/images/goldbadge.png",
    check: "text-yellow-500",
  },
  {
    name: "Diamond",
    amount: "$2M+",
    badgeSrc: "/images/diamondbadge.png",
    check: "text-white",
  },
];

const sections = [
  {
    title: "Visibility & Recognition",
    rows: [
      ["Logo on Website", true, true, true, true],
      ["Use of Tier Badge Designation", true, true, true, true],
      ["Included in Impact Report", true, true, true, true],
      ["Featured in Annual Report", false, true, true, true],
      ["Speaking Opportunities", false, false, true, true],
      ["Press Release Recognition", false, false, true, true],
      ["National Campaign Recognition", false, false, false, true],
    ],
  },
  {
    title: "Engagement & Collaboration",
    rows: [
      ["Social Media Recognition", true, true, true, true],
      ["Newsletter Recognition", true, true, true, true],
      ["Co-Branded Content", false, true, true, true],
      ["Advisory/Thought Leadership", false, false, false, true],
    ],
  },
  {
    title: "Reporting & Insights",
    rows: [
      ["Impact Summary", true, true, true, true],
      ["Impact Dashboard Access", false, true, true, true],
      ["Quarterly Impact Reports", false, true, true, true],
      ["Strategic Insights & Advisory", false, false, true, true],
    ],
  },
];

function Mark({ active, color }: { active: boolean; color: string }) {
  return active ? (
    <span className={`text-5xl leading-none ${color}`}>✓</span>
  ) : (
    <span className="text-2xl font-black tracking-widest text-white">
      ........
    </span>
  );
}

export default function PartnershipOptions() {
  return (
    <section
      id="partnership-options"
      className="bg-[#181818] px-4 py-10 text-white md:px-8 lg:px-14">
      <div className="mx-auto max-w-full">
        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-4xl font-heading tracking-tight sm:text-5xl lg:text-6xl">
              Investment Levels
            </h2>

            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-2xl  uppercase md:text-3xl">
              <span className="text-red-600">Flexible Options.</span>
              <span className="text-white">Measureable Value.</span>
            </div>
          </div>

          <Image
            src="/images/Code_Red_Approved_Logo_Designs.png"
            alt="Code Red Safer Schools Initiative"
            width={320}
            height={120}
          />
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-[280px_repeat(4,1fr)] gap-3">
              <div className="flex min-h-[170px] items-center justify-center border border-zinc-500 bg-[#1b1b1b]">
                <h3 className="text-3xl font-body uppercase">Benefits</h3>
              </div>

              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex min-h-[170px] flex-col items-center justify-center border border-zinc-500 bg-[#1b1b1b] p-4 text-center">
                  <p className="text-sm font-black uppercase text-zinc-300">
                    {tier.name}
                  </p>

                  <Image
                    src={tier.badgeSrc}
                    alt={`${tier.name} partner badge`}
                    width={90}
                    height={90}
                    className="my-2 h-[80px] w-auto object-contain"
                  />

                  <p className="text-lg font-black text-zinc-300">
                    {tier.amount}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-4">
              {sections.map((section) => (
                <div key={section.title}>
                  <div className="mb-3 border border-zinc-500 bg-[#1b1b1b] px-4 py-4">
                    <h2 className="font-body  text-center font-bold text-xl text-red-600">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {section.rows.map((row) => (
                      <div
                        key={row[0] as string}
                        className="grid grid-cols-[280px_repeat(4,1fr)] gap-3">
                        <div className="flex min-h-[58px] items-center justify-center border border-zinc-500 bg-[#1b1b1b] px-4 text-center text-md text-zinc-300">
                          {row[0]}
                        </div>

                        {tiers.map((tier, index) => (
                          <div
                            key={`${row[0]}-${tier.name}`}
                            className="flex min-h-[58px] items-center justify-center border border-zinc-500 bg-[#1b1b1b]">
                            <Mark
                              active={Boolean(row[index + 1])}
                              color={tier.check}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-sm font-body font-bold uppercase text-white">
              Pending 501(c)3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
