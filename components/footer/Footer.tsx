"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-background/5">
      <div className=" mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-[240px] sm:w-[300px]">
              <Image
                src="/images/Code_Red_Approved_Logo_Designs.png"
                alt="Code Red Logo"
                width={520}
                height={200}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="text-xl font-medium tracking-tight leading-relaxed text-background/60 max-w-md italic border-l-2 border-primary/30 pl-6">
              Code Red helps schools strengthen safety readiness while giving
              partners a clear path to fund, support, and scale measurable
              protection across real campuses.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">
                501(c)(3) Nonprofit Entity
              </span>
            </div>
          </div>

          {/* Contact / Info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Initiative Snapshot */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Initiative Focus
              </h4>
              <ul className="space-y-4 text-sm font-bold text-background/70">
                <li>Physical Assessments Program</li>
                <li>Education and Training</li>
                <li>Safety Equipment Coordination</li>
                <li>Ongoing Reassessment & Support</li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Direct Comms
              </h4>

              <a
                href="tel:+18442435727"
                className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (844) 243-5727
              </a>

              <a
                href="mailto:info@coderedssi.org"
                className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@coderedssi.org
              </a>

              {/* <div className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 " /> Washington, D.C.
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black tracking-widest text-background/30 uppercase text-center md:text-left">
            &copy; {currentYear} Code Red: Safe Schools Initiative
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-background/5 bg-background/2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                System Verified Ready
              </span>
            </div> */}

            <a
              href="https://vitanovadesigns.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center md:items-end gap-1">
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-background/20 group-hover:text-primary transition-colors">
                Architecture by
              </span>
              <span className="text-[15px] font-mono font-bold tracking-tighter text-background/40 group-hover:text-background transition-colors">
                VitaNova Designs
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
