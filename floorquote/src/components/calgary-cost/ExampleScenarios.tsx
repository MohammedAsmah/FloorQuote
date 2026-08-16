import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

const scenarios = [
  {
    label: 'Budget-conscious standard garage',
    tag: 'Lower range',
    tagColor: '#10B981',
    sqft: '250 sq ft',
    coating: 'Epoxy',
    condition: 'Excellent concrete',
    prep: 'No cracks, no existing coating',
    finish: 'Solid colour',
    result: 'Smaller space with a straightforward system and minimal prep keeps the total at the lower end of the range.',
  },
  {
    label: 'Popular residential garage',
    tag: 'Mid range',
    tagColor: colors.accent.blue,
    sqft: '400 sq ft',
    coating: 'Epoxy',
    condition: 'Good concrete',
    prep: 'Minor cracks, standard flakes',
    finish: 'Standard flake finish',
    result: 'The most common Calgary setup — a standard 2-car garage with a flake system and normal preparation.',
  },
  {
    label: 'Higher-complexity project',
    tag: 'Upper range',
    tagColor: '#F59E0B',
    sqft: '400 sq ft',
    coating: 'Polyaspartic',
    condition: 'Fair concrete',
    prep: 'Several cracks, old paint removal, moisture issues',
    finish: 'Premium flakes',
    result: 'More preparation, repairs, and a premium system push the estimate toward the higher end of the range.',
  },
];

export function ExampleScenarios() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Example Project Scenarios
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          These examples use the same factors FloorQuote&apos;s calculator
          considers. Your actual estimate depends on your specific inputs — but
          these show how the same coating system can produce different totals
          based on garage size, condition, and finish.
        </p>

        <div className="calgary-grid-3" style={{ width: '100%', boxSizing: 'border-box' }}>
          {scenarios.map((s) => (
            <div
              key={s.label}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: '600', color: colors.text.primary }}>
                  {s.label}
                </h3>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    color: s.tagColor,
                    backgroundColor: `${s.tagColor}15`,
                    padding: '0.25rem 0.625rem',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.tag}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {[
                  ['Garage', s.sqft],
                  ['System', s.coating],
                  ['Condition', s.condition],
                  ['Preparation', s.prep],
                  ['Finish', s.finish],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span style={{ color: colors.text.muted }}>{label}</span>
                    <span style={{ color: colors.text.primary, fontWeight: '500' }}>{value}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: colors.text.secondary, margin: 0 }}>
                {s.result}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginTop: '2rem' }}>
          These are qualitative descriptions, not price guarantees. To see an
          estimate based on your actual project details,{' '}
          <Link href="/calculator" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            calculate your garage flooring cost
          </Link>{' '}
          using FloorQuote&apos;s Calgary pricing model.
        </p>
      </div>
    </section>
  );
}
