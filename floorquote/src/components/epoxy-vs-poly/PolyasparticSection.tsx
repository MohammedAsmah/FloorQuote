import { Zap } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function PolyasparticSection() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="calgary-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  backgroundColor: `${colors.accent.teal}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={22} color={colors.accent.teal} />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.text.primary }}>
                What Is Polyaspartic Garage Floor Coating?
              </h2>
            </div>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '1rem' }}>
              Polyaspartic coatings are a faster-curing alternative to
              traditional epoxy. They belong to the polyurea family but are
              formulated for easier application in residential settings. The
              system cures quickly, often becoming walkable within hours instead
              of days.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '1rem' }}>
              One of polyaspartic&apos;s biggest advantages is UV stability.
              Unlike standard epoxy, polyaspartic resists yellowing and chalking
              when exposed to sunlight, which can be relevant for Calgary garages
              with large south-facing doors or significant daylight exposure.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: colors.text.secondary }}>
              Polyaspartic also performs well in moisture conditions and wider
              temperature ranges, which is useful during Calgary&apos;s
              transitional seasons when overnight temperatures can shift
              quickly.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.background.card,
              borderRadius: '1rem',
              padding: '1.75rem',
              boxShadow: shadows.sm,
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              At a Glance
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', color: colors.accent.teal, backgroundColor: `${colors.accent.teal}10` }}>
                FloorQuote base range: $6&ndash;10 / sq ft
              </span>
            </div>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Advantages
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
              {['Fast cure \u2014 often walkable the same day', 'Excellent UV stability', 'Good moisture resistance', 'Wide installation temperature range'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Limitations
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
              {['Higher material cost', 'Faster working time requires experienced installers', 'Fewer colour options in some product lines'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Calgary use cases
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {['Garages with regular vehicle traffic', 'Spaces where fast return to service matters', 'Sun-exposed or south-facing garage doors', 'Properties with moisture concerns'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginTop: '2rem' }}>
          The higher base cost reflects the material and the faster, more
          demanding installation process. Many Calgary homeowners find the
          trade-off worthwhile when UV performance and cure time matter.{' '}
          <Link href="/calgary-garage-flooring" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Our Calgary garage flooring guide
          </Link>{' '}
          explains how different systems fit local conditions.
        </p>
      </div>
    </section>
  );
}
