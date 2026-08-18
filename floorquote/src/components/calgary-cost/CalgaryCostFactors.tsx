import Link from 'next/link';
import { Thermometer, Sun, Snowflake } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

const factors = [
  { icon: Snowflake, title: 'Road salt and slush', description: 'Calgary winters bring salt and moisture into the garage, which can affect coating selection and preparation.' },
  { icon: Thermometer, title: 'Freeze-thaw cycles', description: 'Concrete expands and contracts as temperatures swing, which is why flexible coating systems and careful prep matter.' },
  { icon: Sun, title: 'Temperature at installation', description: 'Most coatings have minimum application temperatures, so installers schedule around the weather — spring through fall is typical.' },
];

export function CalgaryCostFactors() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Calgary-Specific Cost Considerations
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          Calgary&apos;s climate adds conditions that affect preparation, product
          choice, and installation timing — and all of those can affect the
          estimate. These aren&apos;t dramatic markups; they&apos;re the practical
          details that make a Calgary project different from one in a milder
          region.
        </p>

        <div className="calgary-grid-3" style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}>
          {factors.map((f) => (
            <div
              key={f.title}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(15, 118, 110, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <f.icon size={22} color={colors.accent.teal} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.375rem' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: colors.text.secondary, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px' }}>
          For a deeper look at how Calgary conditions affect garage flooring
          beyond pricing, see our{' '}
          <Link href="/calgary-garage-flooring" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            garage flooring in Calgary
          </Link>{' '}
          guide. Want to compare how different coatings handle local conditions?{' '}
          <Link href="/epoxy-vs-polyaspartic-garage-floor-calgary" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            see how epoxy and polyaspartic compare in Calgary
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
