'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Calculator, MessageSquareText, ArrowRight } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Answer a few questions',
      description: 'Tell us about your garage size, current condition, and coating preferences.',
      step: '01',
    },
    {
      icon: Calculator,
      title: 'Receive your personalized estimate',
      description: 'Get an instant, accurate cost estimate based on Calgary market pricing.',
      step: '02',
    },
    {
      icon: MessageSquareText,
      title: 'Compare quotes from trusted contractors',
      description: 'Review quotes from vetted local professionals and choose the best fit.',
      step: '03',
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Get your garage floor estimate in three simple steps
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              position: 'relative',
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                style={{ position: 'relative' }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: colors.background.card,
                    padding: '2.5rem',
                    borderRadius: '1.5rem',
                    boxShadow: shadows.md,
                    border: `1px solid ${colors.border.default}`,
                    height: '100%',
                    position: 'relative',
                    transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = shadows.xl;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = shadows.md;
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-1rem',
                      left: '2rem',
                      fontSize: '4rem',
                      fontWeight: '700',
                      color: 'rgba(37, 99, 235, 0.1)',
                      lineHeight: '1',
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '1.25rem',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <step.icon size={32} color={colors.accent.blue} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: colors.text.primary,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: colors.text.secondary,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      right: '-1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      display: 'none',
                    }}
                    className="arrow-connector"
                  >
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        backgroundColor: colors.accent.blue,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: shadows.glowBlue,
                      }}
                    >
                      <ArrowRight size={20} color="white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .arrow-connector {
            display: flex !important;
          }
        }
        @media (max-width: 1024px) {
          section > div > div:last-child {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 640px) {
          section h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}