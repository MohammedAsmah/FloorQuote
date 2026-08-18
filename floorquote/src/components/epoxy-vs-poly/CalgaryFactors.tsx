import Link from 'next/link';
import { colors } from '@/lib/design-system';

const factors = [
  {
    title: 'Road salt and slush',
    desc: 'Calgary winters bring salt and sand tracked in from driveways. Coating selection and preparation affect how the floor handles repeated exposure.',
  },
  {
    title: 'Freeze-thaw temperature changes',
    desc: 'Overnight temperature swings can stress coatings, particularly during installation. Choosing a system suited to the installation window matters.',
  },
  {
    title: 'UV exposure and sunlight',
    desc: 'South-facing garage doors and long daylight hours in summer can cause UV-sensitive coatings to yellow over time.',
  },
  {
    title: 'Moisture and condensation',
    desc: 'Concrete moisture levels affect adhesion. Proper testing and preparation help prevent premature coating failure.',
  },
  {
    title: 'Hot tire pickup',
    desc: 'Warm vehicle tires can pull up poorly bonded coatings. The right system and preparation reduce this risk.',
  },
  {
    title: 'Installation temperature',
    desc: 'Some coatings need specific temperature ranges during application. Calgary\'s seasonal swings can narrow the ideal installation window.',
  },
];

export function CalgaryFactors() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          What Does Calgary&apos;s Climate Mean for Your Choice?
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          Coating selection, preparation and installation conditions matter more
          in Calgary than in milder climates. These are reasons that coating
          choice should consider local conditions, not just product
          specifications.
        </p>

        <div className="calgary-grid-3">
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.primary,
                padding: '1.5rem',
                borderRadius: '1rem',
                border: `1px solid ${colors.border.default}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: colors.accent.teal }} />
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.5rem' }}>
                {factor.title}
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: colors.text.secondary, margin: 0 }}>
                {factor.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginTop: '2rem' }}>
          These factors affect both coating selection and the scope of
          preparation needed. They are also reasons two garages of the same size
          can receive different estimates.{' '}
          <Link href="/calgary-garage-flooring-cost" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            See what affects garage flooring pricing
          </Link>{' '}
          for more detail.
        </p>
      </div>
    </section>
  );
}
