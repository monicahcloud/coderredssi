import { Suspense } from "react";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import AudienceSplitSection from "@/components/landingpage/AudienceSplitSection";
import ImpactFramework from "@/components/landingpage/pillars/ImpactFramework";
import ContactSection from "@/components/contact/ContactSection";
import Partnership from "@/components/Partnership";
import TransitionSlide from "@/components/TransitionSlide";
import Stats from "@/components/Stats";
import { StickyHero } from "@/components/landingpage/hero/StickyHero";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white">
      <Suspense>
        <NavBar />

        <main className="w-full">
          <section className="relative">
            <div className="sticky top-0 h-screen">
              <StickyHero />
            </div>
            <TransitionSlide
              eyebrow="who we serve"
              title="Built for Schools,  Structured for Partners."
              highlight="Threat"
              description="Code Red SSI helps schools strengthen safety readiness while giving partners a clear, accountable way to support measurable impact."
              tone="neutral"
            />
            <AudienceSplitSection />
            <div className="relative z-20 bg-black">
              <TransitionSlide
                eyebrow="Code Red Framework"
                title="From Assessment to Action"
                highlight="Action"
                description="Every school safety decision should move from visibility to coordination to measurable improvement."
                tone="dark"
              />

              <ImpactFramework />
              <TransitionSlide
                eyebrow="Partnership"
                title="How Partnerships Work"
                highlight="Contribute"
                description={[
                  "Contribute expertise, technology, funding, or equipment (donated or at-cost)",
                  "Engage in long-term program development and recognition",
                  "Align on mission and security standards",
                  "Collaborate on local and statewide initiatives",
                ]}
                tone="red"
              />
              <Partnership />
              <TransitionSlide
                eyebrow="The Crisis"
                title="Schools Under Threat"
                highlight="Threat"
                description="School security threats have reached unprecedented levels, demanding
immediate, coordinated action."
                tone="neutral"
              />
              <Stats />

              <ContactSection />
            </div>
          </section>
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}
