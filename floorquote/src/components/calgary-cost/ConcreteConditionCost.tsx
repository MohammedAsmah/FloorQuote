import Link from 'next/link';
import { colors } from '@/lib/design-system';

const conditions = [
  { label: 'Excellent', impact: 'Base estimate', description: 'Like new — minimal prep, lowest cost.' },
  { label: 'Good', impact: '+5%', description: 'Minor wear — light cleaning and prep.' },
  { label: 'Fair', impact: '+15%', description: 'Visible wear and stains — more thorough prep needed.' },
  { label: 'Poor', impact: '+30%', description: 'Heavy damage — significant preparation before coating.' },
];

const cracks = [
  { label: 'No cracks', impact: 'Base estimate', description: 'Smooth surface, no repair work.' },
  { label: 'Minor cracks', impact: '+5%', description: 'A few hairline cracks to fill.' },
  { label: 'Several cracks', impact: '+10%', description: 'Multiple visible cracks needing repair.' },
  { label: 'Major cracks', impact: '+20%', description: 'Large or structural cracks — more extensive work.' },
];

function ConditionRow({ label, impact, description, isBase }: { label: string; impact: string; description: string; isBase: boolean }) {
  return (
    <div
      style={{
        padding: '1rem 1.25rem',
        backgroundColor: colors.background.primary,
        borderRadius: '0.75rem',
        border: `1px solid ${colors.border.default}`,
      }}
    >
      <div className="condition-row-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontWeight: '600', color: colors.text.primary, fontSize: '0.9375rem' }}>{label}</span>
        <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: isBase ? colors.text.muted : '#F59E0B', whiteSpace: 'nowrap' }}>
          {impact}
        </span>
      </div>
      <p className="condition-desc" style={{ fontSize: '0.8125rem', color: colors.text.secondary, margin: '0.375rem 0 0', lineHeight: 1.4 }}>
        {description}
      </p>
    </div>
  );
}

export function ConcreteConditionCost() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Why Concrete Condition Changes the Price
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          A garage floor is not a blank surface. Cracks, staining, old coatings,
          and uneven concrete all need attention before a new coating can bond
          properly. Better preparation generally means better adhesion — and it
          can increase the project cost when repairs or extra work are needed.
        </p>

        <div className="calgary-grid-2" style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
              Floor condition
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {conditions.map((c) => (
                <ConditionRow key={c.label} {...c} isBase={c.impact === 'Base estimate'} />
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
              Crack severity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cracks.map((c) => (
                <ConditionRow key={c.label} {...c} isBase={c.impact === 'Base estimate'} />
              ))}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px' }}>
          FloorQuote accounts for the condition of your floor when estimating
          your project.{' '}
          <Link href="/calculator" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Enter your actual conditions
          </Link>{' '}
          to see how they affect your estimate.
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .condition-row-top {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.25rem !important;
          }
          .condition-desc {
            margin-top: 0.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
