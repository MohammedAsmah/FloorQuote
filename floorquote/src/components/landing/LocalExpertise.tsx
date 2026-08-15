'use client';

import { motion } from 'framer-motion';
import { Thermometer, Snowflake, Sun, Hammer, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function LocalExpertise() {
  const factors = [
    {
      icon: Thermometer,
      title: 'Extreme Temperature Swings',
      description: 'Calgary experiences dramatic temperature changes that can affect coating performance and curing times.',
    },
    {
      icon: Snowflake,
      title: 'Freeze-Thaw Cycles',
      description: 'Repeated freezing and thawing requires coatings with superior flexibility and adhesion properties.',
    },
    {
      icon: Sun,
      title: 'UV Exposure',
      description: 'High altitude and intense sunlight demand UV-resistant coatings to prevent yellowing and degradation.',
    },
    {
      icon: Hammer,
      title: 'Salt and Chemical Exposure',
      description: 'Road salts and de-icing chemicals can damage coatings, requiring specialized formulations.',
    },
    {
      icon: MapPin,
      title: 'Concrete Preparation',
      description: 'Local soil conditions and concrete quality affect surface preparation requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Local Pricing Knowledge',
      description: 'Calgary labor rates and material costs differ significantly from other regions.',
    },
  ];

  return (
    <section
      className="local-expertise"
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
            Why Calgary Pricing Matters
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Calgary\'s unique climate and conditions affect garage floor coating costs and requirements. 
            Generic estimates from other regions don\'t account for these critical factors.
          </p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
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
                <factor.icon size={28} color={colors.accent.blue} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {factor.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                }}
              >
                {factor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: `2px solid ${colors.accent.blue}`,
            borderRadius: '1.5rem',
            padding: '3rem',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '1rem',
            }}
          >
            Local Estimates, Local Results
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            FloorQuote uses real Calgary market data and connects you with local contractors who understand 
            our unique climate and conditions. Get estimates that account for everything that makes Calgary different.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '1.25rem auto 0',
              lineHeight: '1.6',
            }}
          >
            Planning a garage floor project here? Learn more about{' '}
            <Link
              href="/calgary-garage-flooring"
              style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent.darkBlue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.accent.blue)}
            >
              garage flooring in Calgary
            </Link>{' '}
            — the options, costs, and local considerations worth planning around.
          </p>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr;
          }
          section h2 {
            font-size: 2rem !important;
          }
          section > div > div:last-child {
            padding: 2rem !important;
          }
          section > div > div:last-child h3 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}