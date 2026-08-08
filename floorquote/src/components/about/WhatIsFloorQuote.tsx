'use client';

import { motion } from 'framer-motion';
import { Layers, MessageSquare, Calculator, Users } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function WhatIsFloorQuote() {
  const features = [
    {
      icon: Layers,
      title: 'Tell Us About Your Garage',
      description: 'Answer questions about your garage size, floor condition, and coating preferences.',
    },
    {
      icon: Calculator,
      title: 'Receive a Personalized Estimate',
      description: 'Get an estimated market range based on your project information and Calgary pricing data.',
    },
    {
      icon: MessageSquare,
      title: 'Understand the Factors',
      description: 'Learn what influences your project cost and see how different choices affect pricing.',
    },
    {
      icon: Users,
      title: 'Request Quotes from Professionals',
      description: 'When you\'re ready, connect with local flooring professionals for exact quotes.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.background.card,
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
            What is FloorQuote?
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
            FloorQuote is a garage floor coating cost estimation and contractor matching platform.
            We help homeowners understand their project costs and connect with trusted local professionals.
          </p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <feature.icon size={28} color={colors.accent.blue} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: `1px solid ${colors.accent.blue}`,
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              color: colors.text.primary,
              lineHeight: '1.6',
            }}
          >
            <strong style={{ color: colors.accent.blue }}>Important:</strong> FloorQuote is not a flooring contractor.
            We provide estimates and help you connect with local professionals who can complete your project.
          </p>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section h2 {
            font-size: 2rem !important;
          }
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}