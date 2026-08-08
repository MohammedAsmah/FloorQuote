'use client';

import { motion } from 'framer-motion';
import { Phone, Users, DollarSign, Layers, MessageSquare, Calendar } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function TheProblem() {
  const traditionalProblems = [
    { icon: Phone, text: 'Contact multiple contractors' },
    { icon: MessageSquare, text: 'Wait for responses' },
    { icon: Users, text: 'Explain the same project repeatedly' },
    { icon: DollarSign, text: 'Difficulty understanding pricing' },
    { icon: Layers, text: 'Compare different coating options' },
    { icon: Calendar, text: 'Schedule visits before knowing budget fit' },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0',
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
            Planning a Garage Floor Project Shouldn't Be a Guess.
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            The traditional process often leaves homeowners uncertain about costs and options.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Traditional Problems */}
          <motion.div
            style={{
              backgroundColor: colors.background.card,
              padding: '2.5rem',
              borderRadius: '1.5rem',
              boxShadow: shadows.md,
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: colors.text.primary,
                marginBottom: '2rem',
              }}
            >
              The Traditional Challenge
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {traditionalProblems.map((problem, index) => (
                <motion.div
                  key={problem.text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <problem.icon size={20} color={colors.status.error} />
                  </div>
                  <span style={{ color: colors.text.secondary, fontSize: '1rem' }}>
                    {problem.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FloorQuote Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.05)',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: `2px solid ${colors.accent.blue}`,
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '1.5rem',
                }}
              >
                How FloorQuote Helps
              </h3>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  marginBottom: '2rem',
                }}
              >
                FloorQuote simplifies the first part of the process by giving you a clear understanding of potential costs before you commit to scheduling visits or contacting multiple contractors.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {[
                  'Get instant estimates based on your specific project',
                  'Understand what factors affect your pricing',
                  'Compare different coating options and their costs',
                  'Know your budget range before scheduling visits',
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: colors.text.primary,
                      fontSize: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: colors.status.success,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
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