import Link from 'next/link';
import { Car, Home, Warehouse, Maximize } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

const sizes = [
  { icon: Car, label: '1-Car Garage', sqft: '~250 sq ft', note: 'Smaller spaces use less material, but per-square-foot prep costs stay similar.' },
  { icon: Home, label: '2-Car Garage', sqft: '~400 sq ft', note: 'The most common Calgary garage size — a standard reference point for most estimates.' },
  { icon: Warehouse, label: '3-Car Garage', sqft: '~600 sq ft', note: 'More floor area means more material, more prep time, and a higher total.' },
  { icon: Maximize, label: 'Oversized / Custom', sqft: '700+ sq ft', note: 'Larger or irregular layouts can also affect access and time on site.' },
];

export function GarageSizeCost() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          How Garage Size Affects the Total
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          Two garages with the same coating system can have very different totals
          because the floor area changes how much material and labour the project
          needs. Price per square foot is a useful comparison tool, but the total
          project cost is what matters for budgeting.
        </p>

        <div className="calgary-grid-2" style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}>
          {sizes.map((size) => (
            <div
              key={size.label}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <size.icon size={24} color={colors.accent.blue} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.25rem' }}>
                  {size.label}
                </h3>
                <p style={{ fontSize: '0.8125rem', fontWeight: '600', color: colors.accent.blue, marginBottom: '0.375rem' }}>
                  {size.sqft}
                </p>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: colors.text.secondary, margin: 0 }}>
                  {size.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px' }}>
          FloorQuote&apos;s calculator lets you enter your exact square footage —
          not just a category — so the estimate reflects your actual garage.{' '}
          <Link href="/calculator" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Calculate your garage flooring cost
          </Link>{' '}
          with your real measurements.
        </p>
      </div>
    </section>
  );
}
