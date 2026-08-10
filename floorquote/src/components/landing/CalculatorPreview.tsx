'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function CalculatorPreview() {
  return (
    <section
      className="calculator-preview"
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
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            See Your Estimate in Action
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Our intelligent calculator adapts to your specific needs
          </p>
        </motion.div>

        <div className="calculator-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Calculator Preview */}
          <motion.div
            className="calculator-card"
            style={{
              backgroundColor: colors.background.card,
              borderRadius: '1.5rem',
              boxShadow: shadows.xl,
              overflow: 'hidden',
              border: `1px solid ${colors.border.default}`,
            }}
          >
            {/* Calculator Header */}
            <div
              className="calculator-header"
              style={{
                padding: '1.5rem',
                borderBottom: `1px solid ${colors.border.default}`,
                backgroundColor: colors.background.primary,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div className="calculator-header-title" style={{ fontSize: '1.25rem', fontWeight: '600', color: colors.text.primary }}>
                    Garage Floor Calculator
                  </div>
                  <div className="calculator-header-step" style={{ fontSize: '0.875rem', color: colors.text.secondary }}>
                    Step 1 of 6
                  </div>
                </div>
                <div
                  className="calculator-header-badge"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: colors.accent.blue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600',
                    flexShrink: 0,
                  }}
                >
                  1
                </div>
              </div>
              {/* Progress bar */}
              <div
                style={{
                  marginTop: '1rem',
                  height: '4px',
                  backgroundColor: colors.border.subtle,
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '16.67%',
                    height: '100%',
                    backgroundColor: colors.accent.blue,
                    borderRadius: '2px',
                  }}
                />
              </div>
            </div>

            {/* Calculator Content */}
            <div className="calculator-content" style={{ padding: '2rem' }}>
              <div className="calculator-question" style={{ marginBottom: '1.5rem' }}>
                <h3 className="calculator-question-title" style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>What's your garage size?
                </h3>
                <p className="calculator-question-desc" style={{ fontSize: '0.9375rem', color: colors.text.secondary }}>
                  Select the size that best matches your garage
                </p>
              </div>

              {/* Size Options */}
              <div className="size-options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                {['1-Car', '2-Car', '3-Car', '4+ Car'].map((size, index) => (
                  <motion.div
                    key={size}
                    className="size-option"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      padding: '1rem',
                      border: `2px solid ${colors.border.default}`,
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: `border-color ${transitions.fast}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.accent.blue;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.border.default;
                    }}
                  >
                    <div className="size-option-label" style={{ fontSize: '1rem', fontWeight: '500', color: colors.text.primary }}>
                      {size}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Blurred next questions */}
              <div
                className="blurred-question"
                style={{
                  padding: '1.5rem',
                  backgroundColor: colors.background.primary,
                  borderRadius: '0.75rem',
                  border: `1px solid ${colors.border.default}`,
                  marginBottom: '1.5rem',
                  filter: 'blur(4px)',
                  opacity: 0.6,
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '500', color: colors.text.primary }}>
                    Current floor condition?
                  </div>
                </div>
                <div className="blurred-question-placeholder" style={{ height: '40px', backgroundColor: colors.border.subtle, borderRadius: '0.5rem' }} />
              </div>

              <div
                className="blurred-question blurred-question-second"
                style={{
                  padding: '1.5rem',
                  backgroundColor: colors.background.primary,
                  borderRadius: '0.75rem',
                  border: `1px solid ${colors.border.default}`,
                  filter: 'blur(4px)',
                  opacity: 0.6,
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '500', color: colors.text.primary }}>
                    Desired coating type?
                  </div>
                </div>
                <div className="blurred-question-placeholder" style={{ height: '40px', backgroundColor: colors.border.subtle, borderRadius: '0.5rem' }} />
              </div>
            </div>

            {/* Calculator Footer */}
            <Link href="/calculator"
              className="calculator-footer"
              style={{
                padding: '1.5rem',
                borderTop: `1px solid ${colors.border.default}`,
                backgroundColor: colors.background.primary,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: colors.accent.blue,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Continue
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  icon: Layers,
                  title: 'Smart Question Flow',
                  description: 'Questions adapt based on your previous answers for the most accurate estimate.',
                },
                {
                  icon: Zap,
                  title: 'Instant Results',
                  description: 'Get your personalized estimate immediately after completing the questionnaire.',
                },
                {
                  icon: DollarSign,
                  title: 'Market Pricing',
                  description: 'Estimates based on real Calgary market data from local contractors.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  style={{ display: 'flex', gap: '1rem' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '1rem',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <feature.icon size={24} color={colors.accent.blue} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: colors.text.primary,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '0.9375rem', lineHeight: '1.5', color: colors.text.secondary }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: '2rem' }}
            >
              <Link href="/calculator">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    backgroundColor: colors.accent.blue,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: shadows.glowBlue,
                  }}
                >
                  Start My Estimate
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .calculator-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 640px) {
          section h2 {
            font-size: 2rem !important;
          }

          /* Card shell */
          .calculator-card {
            border-radius: 1.1rem !important;
          }

          /* Header */
          .calculator-header {
            padding: 1rem !important;
          }
          .calculator-header-title {
            font-size: 1rem !important;
          }
          .calculator-header-step {
            font-size: 0.75rem !important;
          }
          .calculator-header-badge {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.875rem !important;
          }

          /* Content */
          .calculator-content {
            padding: 1.1rem !important;
          }
          .calculator-question {
            margin-bottom: 1rem !important;
          }
          .calculator-question-title {
            font-size: 1rem !important;
            margin-bottom: 0.25rem !important;
          }
          .calculator-question-desc {
            font-size: 0.8125rem !important;
          }

          /* Size options */
          .size-options-grid {
            gap: 0.625rem !important;
            margin-bottom: 1rem !important;
          }
          .size-option {
            padding: 0.625rem !important;
            border-radius: 0.5rem !important;
          }
          .size-option-label {
            font-size: 0.875rem !important;
          }

          /* Blurred preview questions: shrink, and drop the second one to save height */
          .blurred-question {
            padding: 0.875rem !important;
            margin-bottom: 0.75rem !important;
          }
          .blurred-question-placeholder {
            height: 28px !important;
          }
          .blurred-question-second {
            display: none !important;
          }

          /* Footer */
          .calculator-footer {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}