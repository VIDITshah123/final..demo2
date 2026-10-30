import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, ShieldCheck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How does ALTIMATE handle Dubai Municipality, Trakhees, and developer approvals?',
    answer:
      'ALTIMATE manages 100% of the statutory submission process. Our in-house engineering and regulatory compliance team prepares all structural, MEP, and architectural drawings to secure immediate NOCs from Dubai Municipality, Trakhees, Civil Defense, and master developers including Emaar, Nakheel, and Meraas.',
  },
  {
    question: 'What is included in your turnkey architecture and fit-out contract?',
    answer:
      'Our turnkey contracts encompass everything from initial architectural concepts, spatial layouts, 3D photorealistic renderings, and authority permits to civil structural works, MEP engineering, bespoke Italian millwork, custom stone installation, lighting choreography, and final snag-free key handover.',
  },
  {
    question: 'Can clients retain their own architect or interior designer?',
    answer:
      'Yes. While ALTIMATE offers end-to-end design and build, we regularly collaborate with international architecture ateliers and private client designers as the executive fit-out and engineering contractor of record in Dubai.',
  },
  {
    question: 'How do you guarantee fixed budgets without variation surprises?',
    answer:
      'Before contract execution, we complete a comprehensive bill of quantities (BOQ) with locked material specifications and direct quarry procurement. Our fixed-price milestone contracts protect our clients from speculative cost variations and hidden fees.',
  },
  {
    question: 'What is the typical completion timeframe for a luxury villa or penthouse?',
    answer:
      'A comprehensive penthouse fit-out typically ranges between 16 to 24 weeks, while a ground-up private villa design and build spans 9 to 14 months depending on spatial complexity. All milestones are governed by contractual delivery guarantees.',
  },
];

interface EnquiryCard {
  id: string;
  title: string;
  description: string;
  action: string;
  tag: string;
  isPopular?: boolean;
}

const enquiryCards: EnquiryCard[] = [
  {
    id: 'enq-1',
    title: 'Residential Interiors',
    description: 'Thoughtfully designed homes shaped around your lifestyle.',
    action: 'Discuss Your Home',
    tag: 'RESIDENTIAL',
  },
  {
    id: 'enq-2',
    title: 'Luxury Villas',
    description: 'Distinctive residential environments with considered architectural detail.',
    action: 'Discuss Your Villa',
    tag: 'SIGNATURE ESTATES',
    isPopular: true,
  },
  {
    id: 'enq-3',
    title: 'Commercial Interiors',
    description: 'Refined environments for business, hospitality, and work.',
    action: 'Discuss Your Space',
    tag: 'COMMERCIAL & HQ',
  },
  {
    id: 'enq-4',
    title: 'Fit-Out Projects',
    description: 'Coordinated fit-out solutions with attention to quality and finishing.',
    action: 'Discuss Your Fit-Out',
    tag: 'TURNKEY FIT-OUT',
  },
  {
    id: 'enq-5',
    title: 'Bespoke Projects',
    description: 'Tell us about the space you envision creating.',
    action: 'Start a Conversation',
    tag: 'BESPOKE ATELIER',
  },
];

export const ProjectEnquiries: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#070707] py-28 sm:py-36 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/5"
    >
      {/* Background Soft Amber & Bronze Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] max-w-[900px] max-h-[600px] rounded-full ambient-glow-lg"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.2) 0%, rgba(214, 183, 121, 0.12) 40%, transparent 75%)',
          }}
        />
        <div
          className="absolute -bottom-20 left-10 w-[500px] h-[500px] rounded-full ambient-glow"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* ================= FREQUENTLY ASKED QUESTIONS (Matching Frame 11) ================= */}
        <div className="w-full max-w-3xl mx-auto mb-28">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D6B779] font-medium block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Turnkey Architectural Clarity
            </h3>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10 rounded-2xl ios-glass p-6 sm:p-8 border border-white/10 border-t-white/25 shadow-2xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between space-x-4 focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#D6B779] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 group-hover:text-white transition-transform duration-300 shrink-0 ${
                        isOpen ? 'transform rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8">
                      <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SECTION SIX: FINAL MULTI-CARD COMPOSITION ================= */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-300">
              YOUR NEXT PROJECT
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            Let's Create
            <br />
            <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D6B779] via-[#F4F0E8] to-[#EA580C]">
              Something Extraordinary.
            </span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-xl mx-auto">
            Every exceptional space begins with an idea. Let's discuss your vision and explore the possibilities.
          </p>
        </div>

        {/* ================= 5 PROJECT ENQUIRY CARDS ROW ================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch mb-16">
          {enquiryCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative group ${
                card.isPopular
                  ? 'bg-gradient-to-b from-[#221B15]/90 to-[#141210]/90 border border-[#EA580C]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_35px_rgba(234,88,12,0.25),0_20px_50px_rgba(0,0,0,0.85)]'
                  : 'ios-glass border-t-white/25 hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_15px_40px_rgba(0,0,0,0.6)]'
              }`}
            >
              {card.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#EA580C] text-white font-bold shadow-md">
                    MOST REQUESTED
                  </span>
                </div>
              )}

              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#D6B779] block mb-2">
                  {card.tag}
                </span>
                <h4 className="font-bold text-sm text-white tracking-wide uppercase mb-2">
                  {card.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-medium text-white group-hover:text-[#EA580C] transition-colors">
                  {card.action}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#EA580C] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Studio Contact Bar */}
        <div className="w-full max-w-4xl rounded-2xl ios-glass border-t-white/25 p-6 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#D6B779]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                Dubai Studio
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Building 4, Dubai Design District (d3), UAE
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:contact@altimate.ae"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D6B779]" />
              <span>contact@altimate.ae</span>
            </a>
            <a
              href="tel:+97140000000"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#10B981]" />
              <span>+971 4 000 0000</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectEnquiries;
