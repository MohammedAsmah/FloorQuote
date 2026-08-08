'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function Transparency() {
  return (
    <section
      style={{
        backgroundColor: colors.background.card,
        padding: '6rem 0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}
      >
        <div
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: `2px solid ${colors.accent.blue}`,
            borderRadius: '1.5rem',
            padding: '3rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AlertCircle size={28} color={colors.accent.blue} />
            </div>
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                An Estimate Is a Starting Point, Not a Promise.
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                }}
              >
                FloorQuote provides estimates based on the information you provide and the pricing data available to our system. Actual project costs can vary depending on site conditions, preparation requirements, materials, labor, and contractor pricing.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: colors.background.primary,
              borderRadius: '1rem',
              padding: '2rem',
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 163, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle size={18} color={colors.status.success} />
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.primary,
                }}
              >
                <strong style={{ color: colors.accent.teal }}>Important:</strong> An on-site assessment may be required for an exact quote. The estimates provided by FloorQuote are designed to give you a useful starting point for planning and budgeting.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div {
            padding: 2rem !important;
          }
          section h2 {
            font-size: 1.5rem !important;
          }
          section > div > div > div {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}