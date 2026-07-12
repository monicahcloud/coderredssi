// components/about/AboutCTA.tsx

import Link from "next/link";
import { ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";

const audiences = [
  {
    label: "Schools & Districts",
    icon: Building2,
  },
  {
    label: "Public Safety",
    icon: ShieldCheck,
  },
  {
    label: "Community Partners",
    icon: Handshake,
  },
];

export default function AboutCTA() {
  return (
    <section className="border-y border-slate-900 bg-white">
      <div className="grid min-h-[670px] lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left panel */}
        <div className="flex bg-red-700 px-8 py-14 text-white sm:px-10 lg:px-16 lg:py-16 xl:px-20">
          <div className="flex w-full flex-col justify-between">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="h-px w-14 bg-white/70" />

                <p className="text-xs font-black uppercase tracking-[0.35em] text-white/85 sm:text-sm">
                  Take the Next Step
                </p>
              </div>

              <h2 className="max-w-6xl text-4xl font-black text-center uppercase leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-7xl xl:text-[5.4rem]">
                Together, We Can Build
                <span className="block font-black text-black">
                  Safer Schools.
                </span>
              </h2>

              <p className="mt-4 max-w-7xl text-center text-lg leading- text-white/95">
                Whether you represent a school district, public safety agency,
                technology provider, nonprofit, or community organization, Code
                Red is ready to help create safer, stronger learning
                environments.
              </p>
            </div>

            <div className=" grid gap-4 sm:grid-cols-3">
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border border-white/30 bg-white/10 px-5 py-6 transition hover:bg-white/15">
                    <div className="flex items-center gap-4">
                      <Icon className="h-8 w-8 shrink-0 text-white" />

                      <p className="text-sm font-black uppercase tracking-wide leading-none">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex bg-white px-8 py-14 text-slate-950 sm:px-10 lg:px-12 lg:py-16 xl:px-16">
          <div className="flex w-full flex-col justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-600 sm:text-sm">
                Start the Conversation
              </p>

              <h3 className="mt-7 max-w-3xl text-3xl font-black uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]">
                One Conversation Can Move Your School Safety Plan Forward.
              </h3>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore the Code Red framework or connect directly with our team
                to discuss your goals, challenges, and next steps.
              </p>
            </div>

            <div className="mt-12">
              <div className="space-y-4">
                <Link
                  href="/#framework"
                  className="group flex min-h-16 items-center justify-between bg-slate-950 px-6 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-red-700">
                  <span>Explore Our Framework</span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/#contact"
                  className="group flex min-h-16 items-center justify-between border-2 border-red-600 px-6 text-sm font-black uppercase tracking-[0.2em] text-red-600 transition hover:bg-red-700 hover:text-white">
                  <span>Contact Our Team</span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-7">
                <p className="max-w-2xl text-sm  text-center leading-6 text-slate-500">
                  Built for schools, districts, agencies, partners, and
                  communities committed to safer learning environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
