import { Layers } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

export function HybridSection() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '0.75rem',
              backgroundColor: `${colors.accent.purple}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Layers size={22} color={colors.accent.purple} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.text.primary }}>
            Epoxy + Polyaspartic: Why Some Systems Use Both
          </h2>
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '1.5rem' }}>
          Homeowners do not always have to choose one coating chemistry
          exclusively. A common approach is a hybrid system that combines the
          strengths of different layers:
        </p>

        <div className="calgary-grid-3" style={{ marginBottom: '2rem' }}>
          {[
            {
              step: '1',
              title: 'Epoxy base coat',
              desc: 'Provides strong adhesion to the concrete and a thick, high-build foundation layer.',
              accent: colors.accent.blue,
            },
            {
              step: '2',
              title: 'Decorative flakes or aggregate',
              desc: 'Adds texture, colour, and additional durability to the finished surface.',
              accent: colors.accent.purple,
            },
            {
              step: '3',
              title: 'Polyaspartic topcoat',
              desc: 'Seals the system with UV stability, fast cure, and a durable protective surface.',
              accent: colors.accent.teal,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: item.accent }} />
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '999px',
                  backgroundColor: `${item.accent}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: item.accent,
                  marginBottom: '0.75rem',
                }}
              >
                {item.step}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.375rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: colors.text.secondary, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px' }}>
          Different layers can perform different jobs. The epoxy base provides
          adhesion and build; the polyaspartic topcoat handles UV exposure and
          daily wear. This layered approach is one reason two garages with the
          same visible finish can perform differently&nbsp;&mdash; the
          underlying system matters.
        </p>
      </div>
    </section>
  );
}
