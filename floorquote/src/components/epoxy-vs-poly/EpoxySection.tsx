import { Shield } from 'lucide-react';
import Link from 'next/link';
import { colors } from '@/lib/design-system';

export function EpoxySection() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="calgary-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  backgroundColor: `${colors.accent.blue}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Shield size={22} color={colors.accent.blue} />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.text.primary }}>
                What Is Epoxy Garage Floor Coating?
              </h2>
            </div>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '1rem' }}>
              Epoxy is one of the most established garage floor coating systems.
              It uses a resin and hardener that chemically react to form a rigid,
              durable surface. Once cured, epoxy creates a hard film that
              resists chemicals, abrasion and stains.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: colors.text.secondary }}>
              Epoxy is available in a wide range of colours and can be used as a
              solid colour system, with decorative flakes, or with quartz
              broadcast. It remains a common option for homeowners who want a
              proven coating at a lower upfront material cost.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.background.primary,
              borderRadius: '1rem',
              padding: '1.75rem',
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              At a Glance
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', color: colors.accent.blue, backgroundColor: `${colors.accent.blue}10` }}>
                FloorQuote base range: $3&ndash;8 / sq ft
              </span>
            </div>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Advantages
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
              {['Lower upfront material cost', 'Strong adhesion and chemical resistance', 'Wide colour selection', 'Longer working time for installers'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Limitations
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
              {['Slower cure time than polyaspartic', 'Can amber under UV exposure', 'More temperature-sensitive during install'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
              Where it makes sense
            </div>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {['Budget-conscious projects', 'High-build coating applications', 'Garages with limited direct sunlight', 'Situations where longer working time helps'].map((item) => (
                <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginTop: '2rem' }}>
          Installation quality and concrete preparation matter as much as the
          coating itself. Even a well-formulated epoxy system can fail if the
          concrete is not properly profiled, cleaned or repaired before
          application.{' '}
          <Link href="/calgary-garage-flooring-cost" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Garage flooring cost in Calgary
          </Link>{' '}
          is influenced by how much preparation your concrete needs.
        </p>
      </div>
    </section>
  );
}
