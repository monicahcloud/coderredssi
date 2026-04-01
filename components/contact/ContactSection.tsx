"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, ShieldCheck, Handshake } from "lucide-react";
import SchoolSafetyIntake from "../intake/ScholSaftetyIntake";
import ContactTypeToggle from "./ContactTypeToggle";
import PartnerIntake from "../partner-intake/PartnerIntake";

type ContactType = "school" | "partner";

type SubmitStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const searchParams = useSearchParams();

  const initialType = useMemo<ContactType>(() => {
    const type = searchParams.get("type");
    return type === "partner" ? "partner" : "school";
  }, [searchParams]);

  const [contactType, setContactType] = useState<ContactType>(initialType);
  const [status, setStatus] = useState<SubmitStatus>(null);

  useEffect(() => {
    setContactType(initialType);
  }, [initialType]);

  const handleTypeChange = (type: ContactType) => {
    setContactType(type);
    setStatus(null);
  };

  const panelContent =
    contactType === "school"
      ? {
          badge: "School Outreach",
          title: (
            <>
              PROTECT YOUR <br />
              <span className="italic text-primary">CAMPUS.</span>
            </>
          ),
          quote:
            "Complete a guided intake so we can understand your campus, current safety posture, and the support your team needs.",
          cardTitle: "Start School Safety Intake",
          cardText:
            "Share your school's current safety needs through a structured intake experience.",

          heading: "School Intake",
          subheading:
            "Share your school's current safety needs through a structured intake experience.",
          cta: "Start School Safety Intake",
          highlights: [
            {
              title: "Structured Intake Flow",
              body: "A guided step-by-step experience designed to capture your school's real safety needs clearly and efficiently.",
            },
            {
              title: "Readiness Snapshot",
              body: "Help us understand current systems, procedures, vulnerabilities, and barriers before recommendations are made.",
            },
            {
              title: "Support Planning",
              body: "Your intake helps us prioritize the right services, timeframe, and next-step recommendations for your campus.",
            },
          ],
        }
      : {
          badge: "Partner Relations",
          title: (
            <>
              MAKE AN <br />
              <span className="italic text-primary">IMAPCT.</span>
            </>
          ),
          quote:
            "Tell us how you want to support school safety through funding, systems, implementation, or national collaboration.",
          cardTitle: "Partner With Code Red",
          cardText:
            "Join a partner ecosystem focused on measurable implementation, accountability, and safer schools.",
          heading: "Partner Inquiry",
          subheading:
            "Establish direct communication with our partnership team.",
          cta: "Submit Partner Inquiry",
          highlights: [
            {
              title: "Strategic Sponsorship",
              body: "Support district and school implementation through national, regional, or targeted sponsorship initiatives.",
            },
            {
              title: "Technology Collaboration",
              body: "Align your platform, equipment, or systems with a practical school safety delivery model.",
            },
            {
              title: "Mission-Aligned Expansion",
              body: "Join a partner ecosystem focused on measurable implementation, accountability, and safer schools.",
            },
          ],
        };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-128 w-lg rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-120 w-120 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className=" relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col gap-12 lg:flex-row lg:items-start text-black lg:justify-between">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight italic">
            CONTACT <span className="text-primary">US</span>
          </h2>

          <div className="max-w-md ">
            <p className="border-l border-primary/20 pl-6 text-lg font-medium leading-relaxed">
              Code Red converts philanthropic capital into measurable
              institutional infrastructure, ensuring long-term sustainability
              and student protection.
            </p>{" "}
          </div>
        </div>

        <div className="grid items-start gap-10 xl:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] md:p-10 xl:col-span-5">
            <div className="absolute inset-x-0 top-0 h-1 bg-primary " />
            <div className=" flex items-center justify-center mb-5">
              {" "}
              <ContactTypeToggle
                value={contactType}
                onChange={handleTypeChange}
              />
            </div>

            <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground md:text-5xl">
              {panelContent.title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {panelContent.quote}
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {contactType === "school" ? (
                    <ShieldCheck className="h-5 w-5" />
                  ) : (
                    <Handshake className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-black tracking-tight text-foreground">
                    {panelContent.cardTitle}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {panelContent.cardText}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-5">
              {/* Email */}
              <div className="rounded-[1.5rem] border border-border bg-background p-5">
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <p className="text-[11px] font-black uppercase tracking-[0.2em]">
                    Email
                  </p>
                </div>
                <a
                  href="mailto:info@coderedssi.org"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  info@coderedssi.org
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-[1.5rem] border border-border bg-background p-5">
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="text-[11px] font-black uppercase tracking-[0.2em]">
                    Direct Line
                  </p>
                </div>
                <a
                  href="tel:+18442435727"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  (844) 243-5727
                </a>
              </div>
            </div>
          </motion.div>

          <div className="xl:col-span-7">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative rounded-[2rem] bg-foreground p-8 text-background shadow-2xl md:p-12">
                <div className="mb-10">
                  <h3 className="mb-2 text-3xl font-black italic uppercase tracking-tighter text-primary">
                    {panelContent.heading}
                  </h3>
                  <p className="text-background/60">
                    {panelContent.subheading}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {status && (
                    <motion.div
                      key={status.message}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className={`mb-8 rounded-2xl border-l-4 p-5 text-sm font-bold ${
                        status.type === "success"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-red-500 bg-red-500/10 text-red-400"
                      }`}>
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait" initial={false}>
                  {contactType === "school" ? (
                    <motion.div
                      key="school-intake"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}>
                      <SchoolSafetyIntake />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="partner-form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}>
                      <PartnerIntake />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
