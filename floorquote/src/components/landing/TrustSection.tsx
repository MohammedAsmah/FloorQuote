'use client';

import { motion } from 'framer-motion';
import { DollarSign, Shield, Users, Zap, Award, Sparkles } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function TrustSection() {
  const trustCards = [
    {
      icon: DollarSign,
      title: 'Market-Based Pricing',
      description: 'Estimates based on real Calgary market data, not guesswork.',
    },
    {
      icon: Shield,
      title: 'Free Estimates',
      description: 'Get accurate pricing without any cost or commitment.',
    },
    {
      icon: Users,
      title: 'Local Contractor Network',
      description: 'Connect with vetted professionals in your area.',
    },
    {
      icon: Zap,
      title: 'No Hidden Costs',
      description: 'Transparent pricing with no surprise fees or markups.',
    },
    {
      icon: Award,
      title: 'Professional Recommendations',
      description: 'Expert guidance on the best coating for your needs.',
    },
    {
      icon: Sparkles,
      title: 'Premium Design',
      description: 'Modern interface that makes estimation simple.',
    },
  ];

  return (
    <section
      className="trust-section"
      style={{
        backgroundColor: colors.background.card,
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
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
            Why Homeowners Trust FloorQuote
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Built on transparency, accuracy, and local expertise
          </p>
        </motion.div>

        <motion.div
          className="trust-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: '2rem',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {trustCards.map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: colors.background.primary,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
                width: '100%',
                boxSizing: 'border-box',
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
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <card.icon size={28} color={colors.accent.blue} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}