"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can become a Code Red partner?",
    answer:
      "Corporate sponsors, community organizations, foundations, technology providers, local businesses, and civic leaders can participate as partners.",
  },
  {
    question: "Does every partnership require a financial contribution?",
    answer:
      "No. Partnerships may include funding, donated equipment, professional expertise, technology solutions, training support, implementation assistance, or other mission-aligned resources.",
  },
  {
    question: "Can partners support specific schools or districts?",
    answer:
      "Yes. Depending on the partnership structure, support may be directed toward individual schools, districts, regional initiatives, or broader statewide efforts.",
  },
  {
    question: "How does Code Red measure impact?",
    answer:
      "Impact is measured through assessments completed, schools supported, staff trained, preparedness improvements, technology deployments, and other measurable safety outcomes.",
  },
  {
    question: "Will partners receive recognition?",
    answer:
      "Partnership benefits may include website recognition, social media features, partnership badges, impact reporting, and participation in community initiatives.",
  },
  {
    question: "How long does the partnership process take?",
    answer:
      "Most partnerships begin with a discovery conversation followed by planning, alignment, and implementation. Timelines vary depending on the scope and objectives of the partnership.",
  },
  {
    question: "Can technology companies participate?",
    answer:
      "Absolutely. Code Red actively seeks technology partners whose products or services support communication, preparedness, emergency response, and school safety initiatives.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact the Code Red team through the partnership inquiry form. We will schedule a conversation to discuss goals, opportunities, and next steps.",
  },
];

export default function PartnershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-zinc-100 px-6 py-24 text-slate-950 md:px-10 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Common Partnership Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Everything you need to know about becoming a Code Red partner and
            helping strengthen school safety.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50">
                  <h3 className="pr-4 text-lg font-black text-slate-950 sm:text-xl">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-red-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}>
                  <div className="border-t border-slate-100 px-6 py-5">
                    <p className="leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] bg-black p-8 text-center text-white sm:p-10">
          <h3 className="text-2xl font-black sm:text-3xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Our team is happy to discuss partnership opportunities, sponsorship
            options, implementation models, and impact goals.
          </p>
        </div>
      </div>
    </section>
  );
}
