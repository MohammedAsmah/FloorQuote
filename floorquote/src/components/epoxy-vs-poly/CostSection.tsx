import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/design-system';

const factors = [
  { label: 'Garage size', detail: 'Larger garages use more material and time' },
  { label: 'Concrete condition', detail: 'Pitting, cracks, moisture or leveling changes the scope' },
  { label: 'Surface preparation', detail: 'Grinding, repair and cleaning are priced by condition' },
  { label: 'Existing coating', detail: 'Removing old epoxy, paint or sealer adds labour' },
  { label: 'Decorative finish', detail: 'Flakes, metallics, quartz or custom colour affect cost' },
  { label: 'Project complexity', detail: 'Stem walls, steps, tight access or detailed edging' },
];

export function CostSection() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Epoxy vs Polyaspartic Cost in Calgary
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '2.5rem' }}>
          The base coating price is only one part of the final project. FloorQuote
          also considers garage size, concrete condition, surface preparation,
          crack and repair work, existing coating removal, decorative finish,
          project complexity, and product quality. Two garages can use the same
          coating system and still have very different total project estimates.
        </p>

        <div className="calgary-grid-2" style={{ alignItems: 'start' }}>
          <div
            style={{
              backgroundColor: colors.background.card,
              borderRadius: '1rem',
              padding: '1.75rem',
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: colors.accent.blue,
                backgroundColor: `${colors.accent.blue}10`,
                marginBottom: '1.25rem',
              }}
            >
              Base range: $3&ndash;8 / sq ft
            </span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: colors.text.primary, marginBottom: '0.75rem' }}>
              Epoxy estimate
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: colors.text.secondary, margin: 0 }}>
              Lower base cost makes epoxy attractive for budget-focused projects.
              Longer cure time and UV sensitivity are trade-offs to consider.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.background.card,
              borderRadius: '1rem',
              padding: '1.75rem',
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: colors.accent.teal,
                backgroundColor: `${colors.accent.teal}10`,
                marginBottom: '1.25rem',
              }}
            >
              Base range: $6&ndash;10 / sq ft
            </span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: colors.text.primary, marginBottom: '0.75rem' }}>
              Polyaspartic estimate
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: colors.text.secondary, margin: 0 }}>
              Higher base cost reflects faster cure, UV stability and moisture
              resistance. The total depends on the same project factors as epoxy.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
            Factors that change your estimate
          </h3>
          <div className="calgary-grid-3">
            {factors.map((f) => (
              <div
                key={f.label}
                style={{
                  backgroundColor: colors.background.card,
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  border: `1px solid ${colors.border.default}`,
                }}
              >
                <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.25rem' }}>
                  {f.label}
                </div>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: colors.text.muted }}>
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            backgroundColor: colors.background.card,
            borderRadius: '1rem',
            padding: '2rem',
            border: `1px solid ${colors.border.default}`,
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.text.primary, marginBottom: '0.75rem' }}>
            The cheapest coating isn&apos;t always the cheapest project
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Two garages using the same coating system can end up with very
            different total estimates because of size, concrete condition,
            preparation scope and finish choice. Use the calculator to compare
            based on your actual garage.
          </p>
          <Link href="/calculator" className="calgary-btn-primary" style={{ display: 'inline-flex' }}>
            Calculate My Garage Flooring Cost
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
