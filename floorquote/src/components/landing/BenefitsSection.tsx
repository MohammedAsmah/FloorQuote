'use client';

import { motion } from 'framer-motion';
import { Wallet, Shield, Layers, Clock, Users, CheckCircle } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Wallet,
      title: 'Know your budget',
      description: 'Get accurate estimates before talking to contractors, so you can plan with confidence.',
    },
    {
      icon: Shield,
      title: 'Avoid overpaying',
      description: 'Compare market rates and ensure you\'re getting fair pricing for your project.',
    },
    {
      icon: Layers,
      title: 'Understand coating options',
      description: 'Learn about different coating types and find the best fit for your needs.',
    },
    {
      icon: Clock,
      title: 'Save time',
      description: 'Skip multiple phone calls and appointments. Get everything you need in one place.',
    },
    {
      icon: Users,
      title: 'Receive multiple quotes',
      description: 'Get quotes from several trusted contractors to compare and choose the best.',
    },
    {
      icon: CheckCircle,
      title: 'Plan with confidence',
      description: 'Make informed decisions with accurate pricing and expert recommendations.',
    },
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
            Why Use FloorQuote
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Benefits that save you time, money, and stress
          </p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: colors.background.primary,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = shadows.sm;
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(15, 118, 110, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <benefit.icon size={28} color={colors.accent.teal} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div:last-child {
            grid-template-columns: 1fr;
          }
          section h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}