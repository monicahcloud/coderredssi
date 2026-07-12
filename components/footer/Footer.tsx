"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const initiatives = [
  {
    label: "Physical Assessments",
    icon: ClipboardCheck,
  },
  {
    label: "Education and Training",
    icon: GraduationCap,
  },
  {
    label: "Equipment Coordination",
    icon: ShieldCheck,
  },
  {
    label: "Reassessment and Support",
    icon: RefreshCcw,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-8 border-red-700 bg-slate-950 text-white">
      {/* Main footer */}
      <div className="mx-auto w-full px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:gap-20">
          {/* Brand section */}
          <div className="border-b border-white/10 pb-12 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-16">
            <Link
              href="/"
              aria-label="Code Red home"
              className="inline-block w-[230px] sm:w-[280px]">
              <Image
                src="/images/Code_Red_Approved_Logo_Designs.png"
                alt="Code Red Safe Schools Initiative"
                width={520}
                height={200}
                priority
                className="h-auto w-full object-contain"
              />
            </Link>

            <p className="mt-8 max-w-2xl border-l-4 border-red-700 pl-6 text-lg font-medium leading-8 text-white/70 sm:text-xl">
              Code Red helps schools strengthen safety readiness while giving
              partners a clear path to fund, support, and scale measurable
              protection across real campuses.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-red-700/40 bg-red-700/10 px-5 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-600 opacity-50" />
                <span className="relative inline-flex h-3 w-3 bg-red-600" />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                501(c)(3) Status Pending
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-red-700 px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-800">
                Contact Our Team
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/#framework"
                className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-slate-950">
                Explore Our Framework
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Information section */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Initiative focus */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-10 bg-red-600" />

                <h3 className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                  Initiative Focus
                </h3>
              </div>

              <div className="space-y-3">
                {initiatives.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-red-600/60 hover:bg-white/[0.06]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-700 text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-sm font-bold leading-6 text-white/75 transition group-hover:text-white">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact information */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-10 bg-red-600" />

                <h3 className="text-xs font-black uppercase tracking-[0.28em] text-red-500">
                  Direct Contact
                </h3>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+18442435727"
                  className="group flex items-start gap-4 border-b border-white/10 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/5 text-red-500 transition group-hover:bg-red-700 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                      Phone
                    </p>

                    <p className="mt-1 text-base font-bold text-white/80 transition group-hover:text-white">
                      (844) 243-5727
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@coderedssi.org"
                  className="group flex items-start gap-4 border-b border-white/10 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/5 text-red-500 transition group-hover:bg-red-700 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                      Email
                    </p>

                    <p className="mt-1 break-all text-base font-bold text-white/80 transition group-hover:text-white">
                      info@coderedssi.org
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/5 text-red-500">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                      Location
                    </p>

                    <address className="mt-1 text-base font-bold not-italic leading-7 text-white/80">
                      15257 Amberly Drive, Suite 537
                      <br />
                      Tampa, FL 33647
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 px-6 py-7 sm:px-8 md:flex-row lg:px-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-white/35 md:text-left">
            © {currentYear} Code Red Safe Schools Initiative. All rights
            reserved.
          </p>

          <a
            href="https://vitanovadesigns.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/25 transition group-hover:text-white/50">
              Designed by
            </span>

            <span className="font-mono text-sm font-bold tracking-tight text-white/50 transition group-hover:text-red-500">
              VitaNova Designs
            </span>

            <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
