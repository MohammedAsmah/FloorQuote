'use client';

import { motion } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function ComparisonSection() {
  const traditionalFeatures = [
    { text: 'Call multiple companies', available: false },
    { text: 'Wait for callbacks', available: false },
    { text: 'Unclear pricing', available: false },
    { text: 'Multiple appointments', available: false },
    { text: 'Time-consuming process', available: false },
  ];

  const floorquoteFeatures = [
    { text: 'Instant estimate', available: true },
    { text: 'Transparent pricing', available: true },
    { text: 'Local quotes', available: true },
    { text: 'Fast process', available: true },
    { text: 'No obligation', available: true },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.background.card,
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
            The FloorQuote Advantage
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            See why thousands of homeowners choose FloorQuote over traditional methods
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Traditional Process */}
          <motion.div
            style={{
              backgroundColor: colors.background.primary,
              padding: '2.5rem',
              borderRadius: '1.5rem',
              boxShadow: shadows.sm,
              border: `1px solid ${colors.border.default}`,
              opacity: 0.7,
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: colors.text.secondary,
                  marginBottom: '0.5rem',
                }}
              >
                Traditional Process
              </h3>
              <p style={{ fontSize: '0.9375rem', color: colors.text.muted }}>
                The old way of getting garage floor quotes
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {traditionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 0',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <X size={16} color={colors.status.error} />
                  </div>
                  <span style={{ color: colors.text.secondary, fontSize: '1rem' }}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FloorQuote */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: colors.background.primary,
              padding: '2.5rem',
              borderRadius: '1.5rem',
              boxShadow: shadows.xl,
              border: `2px solid ${colors.accent.blue}`,
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = shadows['2xl'];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = shadows.xl;
            }}
          >
            {/* Premium badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: colors.accent.blue,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Zap size={14} />
              Better Way
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '0.5rem',
                }}
              >
                FloorQuote
              </h3>
              <p style={{ fontSize: '0.9375rem', color: colors.text.secondary }}>
                The modern, efficient approach
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {floorquoteFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 0',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 163, 129, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} color={colors.status.success} />
                  </div>
                  <span style={{ color: colors.text.primary, fontSize: '1rem', fontWeight: '500' }}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          section > div > div:last-child {
            grid-template-columns: 1fr;
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