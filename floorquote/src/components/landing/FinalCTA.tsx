'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(15, 118, 110, 0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: colors.background.card,
            borderRadius: '2rem',
            padding: '4rem 3rem',
            boxShadow: shadows.xl,
            border: `1px solid ${colors.border.default}`,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(15, 118, 110, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: colors.accent.blue,
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '2rem',
              }}
            >
              <Zap size={16} />
              Free • No Obligation • Instant Results
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Ready to Discover Your Garage Floor Cost?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontSize: '1.25rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto 3rem',
                lineHeight: '1.6',
              }}
            >
              Join thousands of Calgary homeowners who got accurate estimates and found the perfect contractor for their garage floor project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/calculator">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2.5rem',
                    backgroundColor: colors.accent.blue,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: shadows.glowBlue,
                    transition: `transform ${transitions.fast}`,
                  }}
                >
                  Get My Free Estimate
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/quotes">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2.5rem',
                    backgroundColor: 'transparent',
                    color: colors.accent.blue,
                    border: `2px solid ${colors.accent.blue}`,
                    borderRadius: '0.75rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: `transform ${transitions.fast}`,
                  }}
                >
                  Request Quotes
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                marginTop: '3rem',
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Free Estimates', value: '100%' },
                { label: 'Calgary Pricing', value: 'Local' },
                { label: 'No Obligation', value: 'Ever' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: colors.text.primary,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: colors.text.secondary,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div {
            padding: 3rem 2rem !important;
          }
          section h2 {
            font-size: 2rem !important;
          }
          section > div > div > div > div:nth-child(4) {
            flex-direction: column;
            gap: 1.5rem;
          }
          section > div > div > div > div:nth-child(5) {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}