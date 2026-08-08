'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function Hero() {
  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: '8rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}
      >
        <div style={{ maxWidth: '800px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              lineHeight: '1.1',
              color: colors.text.primary,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Making Garage Flooring Decisions Simpler.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: colors.text.secondary,
              marginBottom: '2.5rem',
            }}
          >
            FloorQuote helps Calgary homeowners understand the potential cost of garage floor coating projects before they contact contractors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link href="/calculator">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
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
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: colors.accent.blue,
                  border: `2px solid ${colors.accent.blue}`,
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: `transform ${transitions.fast}`,
                }}
              >
                Request Quotes
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section h1 {
            font-size: 2.5rem !important;
          }
          section > div > div > div:last-child {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}