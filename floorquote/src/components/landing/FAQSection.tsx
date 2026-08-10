'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate is the estimate?',
      answer: 'Our estimates are based on real Calgary market data from local contractors. While actual quotes may vary based on specific site conditions, our estimates typically fall within 10-15% of final contractor pricing.',
    },
    {
      question: 'How long does it take?',
      answer: 'The questionnaire takes about 2 minutes to complete. You\'ll receive your instant estimate immediately after, and can start receiving contractor quotes within 24 hours.',
    },
    {
      question: 'Is it free?',
      answer: 'Yes, FloorQuote is completely free to use. There are no hidden fees or charges for getting estimates or connecting with contractors.',
    },
    {
      question: 'Am I obligated to hire someone?',
      answer: 'Absolutely not. You\'re under no obligation to hire any of the contractors who provide quotes. Use the estimates to make informed decisions at your own pace.',
    },
    {
      question: 'How are estimates calculated?',
      answer: 'Our estimates use Calgary-specific market data, current material costs, labor rates, and project complexity factors. We continuously update our pricing based on local market conditions.',
    },
    {
      question: 'Do you work with local contractors?',
      answer: 'Yes, we work exclusively with vetted local contractors who serve the Calgary area. All contractors in our network are licensed, insured, and have proven track records of quality work.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section"
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Everything you need to know about FloorQuote
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ marginBottom: '1rem' }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: colors.background.card }}
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
                    <div style={{ padding: '1.5rem' }}>
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section h2 {
            font-size: 2rem !important;
          }
          section > div > div:last-child > div > button {
            padding: 1rem !important;
          }
          section > div > div:last-child > div > button > span {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}