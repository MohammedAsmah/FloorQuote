'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { colors, transitions } from '@/lib/design-system';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does garage flooring cost in Calgary?',
      answer:
        'It varies widely, because pricing depends on square footage, concrete condition, surface preparation, the coating system, the number of coats, and extras like flakes, steps, and moisture work. A realistic next step is an estimate based on your specific garage: our cost calculator uses Calgary market pricing and accounts for these factors, or you can request quotes from local flooring professionals.',
    },
    {
      question: 'What is the best garage floor coating for a Calgary garage?',
      answer:
        'There\u2019s no single best system \u2014 it depends on your budget, how you use the garage, and your concrete\u2019s condition. Epoxy is a proven, budget-friendly choice; polyaspartic cures faster and resists UV yellowing; flake systems add texture and a custom look. Talk to an installer about your situation, and get estimates for more than one option so you can compare.',
    },
    {
      question: 'Is epoxy good for garage floors?',
      answer:
        'Yes. Epoxy is one of the most popular garage floor systems because it\u2019s durable, chemical-resistant, and relatively affordable. Success depends heavily on surface preparation. Some epoxy formulations can amber or yellow with strong UV exposure, so discuss your situation (like a south-facing garage door) with your installer.',
    },
    {
      question: 'Is polyaspartic better than epoxy?',
      answer:
        'It depends on what matters to you. Polyaspartic cures much faster, is more flexible, and resists UV yellowing better, but it generally costs more. Epoxy offers strong adhesion and value at a lower price point. Both can serve a garage well with proper preparation \u2014 it\u2019s a trade-off, not a clear winner.',
    },
    {
      question: 'How long does garage floor coating last?',
      answer:
        'Lifespan depends on the system, surface preparation, and how the floor is used. Epoxy systems commonly last in the 5\u201310 year range, while polyaspartic systems are frequently quoted in the 10\u201315+ year range. Quality preparation and basic maintenance are the biggest factors in reaching those numbers.',
    },
    {
      question: 'Can garage floor coating be applied to old concrete?',
      answer:
        'Yes, in most cases. Older concrete can be coated as long as it\u2019s structurally sound, clean, and properly prepared. Cracks and damage get repaired first, and the prep work may add to the cost \u2014 which is exactly why an in-person look beats a phone estimate.',
    },
    {
      question: 'Does garage floor coating work in cold weather?',
      answer:
        'Installed coatings handle cold weather fine once cured. Application is the temperature-sensitive part \u2014 most coatings have minimum application and curing temperatures. That\u2019s why installers schedule around the weather, and why heated attached garages are easier to work in during Calgary winters.',
    },
    {
      question: 'How much does it cost to coat a two-car garage?',
      answer:
        'There\u2019s no reliable one-size-fits-all number. Two-car garages come in different sizes, and cost depends on your concrete\u2019s condition and the system you choose. The most useful step is a personalized estimate: use the calculator for a ballpark based on your garage, then request quotes to compare real numbers.',
    },
    {
      question: 'How long does garage floor coating take?',
      answer:
        'It depends on the system and how much preparation is needed. Fast-cure systems can often be installed within a day or two, while systems with longer cure times take longer. Ask for a clear timeline before you commit \u2014 preparation time is usually the variable.',
    },
    {
      question: 'What preparation is needed before coating a garage floor?',
      answer:
        'Standard preparation includes cleaning and degreasing, mechanical grinding or diamond profiling to create a bondable surface, and repair of cracks or damage. Moisture testing may be recommended for some slabs. Preparation is the most important part of the job \u2014 it\u2019s where adhesion is won or lost.',
    },
    {
      question: 'Can garage floor coatings handle road salt and vehicle fluids?',
      answer:
        'Quality coatings are designed to resist chemicals and stains, including the salt, sand, and de-icing materials Calgary winters track in, plus common vehicle fluids. No floor is indestructible \u2014 wipe up spills and clean periodically and the coating will last longer.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="calgary-section"
      style={{
        backgroundColor: colors.background.primary,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{
            fontWeight: '700',
            color: colors.text.primary,
            marginBottom: '1.25rem',
            textAlign: 'center',
          }}
        >
          Garage Flooring FAQs
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: colors.text.secondary,
            maxWidth: '640px',
            margin: '0 auto 3rem',
            textAlign: 'center',
            lineHeight: '1.6',
          }}
        >
          Straight answers to the questions Calgary homeowners ask most often.
        </p>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={faq.question} style={{ marginBottom: '1rem' }}>
              <motion.button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  backgroundColor: colors.background.card,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  transition: `background-color ${transitions.fast}`,
                }}
                whileHover={{ backgroundColor: colors.background.card }}
                aria-expanded={openIndex === index}
              >
                <span
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    flex: 1,
                  }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginLeft: '1rem', flexShrink: 0 }}
                >
                  <ChevronDown size={20} color={colors.text.secondary} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      overflow: 'hidden',
                      backgroundColor: colors.background.card,
                      border: `1px solid ${colors.border.default}`,
                      borderTop: 'none',
                      borderBottomLeftRadius: '0.75rem',
                      borderBottomRightRadius: '0.75rem',
                    }}
                  >
                    <div className="calgary-faq-answer" style={{ padding: '1.5rem' }}>
                      <p
                        style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: colors.text.secondary,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div > div > button {
            padding: 1rem !important;
          }
          section > div > div > div > button > span {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
