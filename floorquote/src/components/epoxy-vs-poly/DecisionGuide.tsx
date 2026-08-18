import Link from 'next/link';
import { Shield, Zap, Layers, ArrowRight } from 'lucide-react';
import { colors } from '@/lib/design-system';

const options = [
  {
    icon: Shield,
    iconColor: colors.accent.blue,
    title: 'Choose epoxy if',
    items: [
      'Budget is the primary concern',
      'You want a high-build coating',
      'Longer working time is helpful',
      'UV exposure is limited',
    ],
  },
  {
    icon: Zap,
    iconColor: colors.accent.teal,
    title: 'Choose polyaspartic if',
    items: [
      'Fast return to service matters',
      'Garage gets direct sunlight',
      'Moisture or condensation is a concern',
      'You want faster installation',
    ],
  },
  {
    icon: Layers,
    iconColor: colors.accent.purple,
    title: 'Choose hybrid if',
    items: [
      'You want epoxy adhesion + polyaspartic UV stability',
      'The garage is used for vehicles daily',
      'You need a balance of performance and cost',
      'A professional recommends this layering approach',
    ],
  },
];

export function DecisionGuide() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Which One Should You Choose?
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '2.5rem' }}>
          There is no single coating that works best for every Calgary garage.
          The right system depends on your priorities&nbsp;&mdash; whether that is
          upfront cost, fast return to service, UV resistance, or long-term
          durability under local conditions.
        </p>

        <div className="calgary-grid-3" style={{ marginBottom: '2.5rem' }}>
          {options.map((opt) => (
            <div
              key={opt.title}
              style={{
                backgroundColor: colors.background.primary,
                borderRadius: '1rem',
                padding: '1.75rem',
                border: `1px solid ${colors.border.default}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: opt.iconColor }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.75rem',
                    backgroundColor: `${opt.iconColor}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <opt.icon size={20} color={opt.iconColor} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: '600', color: colors.text.primary, margin: 0 }}>
                  {opt.title}
                </h3>
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                {opt.items.map((item) => (
                  <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.375rem', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: colors.background.primary,
            borderRadius: '1rem',
            padding: '2rem',
            border: `1px solid ${colors.border.default}`,
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.text.primary, marginBottom: '0.75rem' }}>
            Not sure which system fits your garage?
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Enter your garage size, floor condition, coating preference and
            project details. FloorQuote uses the same Calgary pricing model
            to estimate your project.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <Link href="/calculator" className="calgary-btn-primary">
              Calculate My Garage Flooring Cost
              <ArrowRight size={18} />
            </Link>
            <Link href="/quotes" className="calgary-btn-secondary">
              Request Garage Flooring Quotes
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
