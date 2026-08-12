'use client';

import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, Sparkles, Gem } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function CoatingTypes() {
  const coatingTypes = [
    {
      icon: Droplets,
      title: 'Epoxy',
      description: 'Classic, durable coating with excellent chemical resistance.',
      bestUse: 'Garages, warehouses, industrial spaces',
      lifespan: '5-10 years',
      accent: colors.accent.blue,
    },
    {
      icon: Shield,
      title: 'Polyaspartic',
      description: 'Fast-curing, UV-resistant coating with superior durability.',
      bestUse: 'High-traffic areas, commercial spaces',
      lifespan: '10-15 years',
      accent: colors.accent.teal,
    },
    {
      icon: Zap,
      title: 'Polyurea',
      description: 'Ultra-fast curing coating with extreme flexibility.',
      bestUse: 'Temperature-sensitive environments',
      lifespan: '15-20 years',
      accent: colors.accent.purple,
    },
    {
      icon: Sparkles,
      title: 'Quartz',
      description: 'Decorative flake system with added texture and grip.',
      bestUse: 'Residential garages, showrooms',
      lifespan: '10-15 years',
      accent: colors.accent.indigo,
    },
    {
      icon: Gem,
      title: 'Metallic',
      description: 'Premium metallic pigments for stunning visual effects.',
      bestUse: 'Showrooms, luxury garages, retail spaces',
      lifespan: '10-15 years',
      accent: '#8B5CF6',
    },
  ];

  return (
    <section
      className="coating-types"
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
            Popular Coating Types
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Explore the most trusted garage floor coating options
          </p>
        </motion.div>

        <motion.div
          className="coating-types-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {coatingTypes.map((coating, index) => (
            <motion.div
              key={coating.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: colors.background.card,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = shadows.sm;
              }}
            >
              {/* Accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: coating.accent,
                }}
              />

              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '1rem',
                  backgroundColor: `${coating.accent}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <coating.icon size={28} color={coating.accent} />
              </div>

              <h3
                style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {coating.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  marginBottom: '1.5rem',
                }}
              >
                {coating.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: colors.text.muted,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Best Use
                  </div>
                  <div style={{ fontSize: '0.875rem', color: colors.text.primary }}>
                    {coating.bestUse}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: colors.text.muted,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Expected Lifespan
                  </div>
                  <div style={{ fontSize: '0.875rem', color: colors.text.primary }}>
                    {coating.lifespan}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .coating-types-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}