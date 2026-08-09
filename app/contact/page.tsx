import type { Metadata } from "next";
import { Suspense } from "react";

import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Code Red | School Safety & Partnerships",
  description:
    "Connect with Code Red Safer Schools Initiative about school safety support, campus readiness, partnerships, or sponsorship opportunities.",
};

// const contactDetails = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "info@coderedssi.org",
//     href: "mailto:info@coderedssi.org",
//   },
//   {
//     icon: Phone,
//     label: "Direct line",
//     value: "(844) 243-5727",
//     href: "tel:+18442435727",
//   },
//   {
//     icon: MapPin,
//     label: "Office",
//     value: "Tampa, Florida",
//     href: "https://maps.google.com/?q=15257+Amberly+Dr+Ste+537+Tampa+FL",
//   },
// ];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(185,28,28,0.34),transparent_30%)]" />
        <div className="absolute -right-16 top-6 select-none text-[12rem] font-black leading-none text-white/[0.025] sm:text-[18rem]">
          CODE RED
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-red-500">
              <ShieldCheck className="h-5 w-5" />
              Start the conversation
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Safer schools begin with a
              <span className="block text-red-600">clear next step.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-white/70 sm:text-xl">
              Tell us whether you represent a school, district, sponsor, or
              strategic partner. We will route your inquiry to the right team
              and help you identify the most practical path forward.
            </p>
          </div>

          <div className="border-l-4 border-red-700 bg-white/[0.05] p-7 backdrop-blur-sm">
            <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-white/45">
              What happens next
            </p>
            <p className="mt-3 text-xl font-bold leading-8">
              Your information helps our team prepare for a focused, productive
              conversation about your needs.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="border-b border-slate-200 bg-slate-100 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-3 md:grid-cols-3">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === "Office" ? "_blank" : undefined}
              rel={label === "Office" ? "noreferrer" : undefined}
              className="group flex items-center gap-4 border border-slate-200 bg-white p-5 transition hover:border-red-700">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-700 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </span>
                <span className="mt-1 block font-bold group-hover:text-red-700">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section> */}

      <Suspense
        fallback={
          <section
            className="min-h-[720px] bg-white"
            aria-label="Loading contact form"
          />
        }>
        <ContactSection />
      </Suspense>
    </main>
  );
}
