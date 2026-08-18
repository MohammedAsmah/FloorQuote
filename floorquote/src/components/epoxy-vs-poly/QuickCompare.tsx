import { colors } from '@/lib/design-system';

const rows = [
  { label: 'FloorQuote base price', epoxy: '$3\u20138 / sq ft', poly: '$6\u201310 / sq ft' },
  { label: 'Cure speed', epoxy: 'Slower (24\u201372 hrs)', poly: 'Fast (2\u20136 hrs walkable)' },
  { label: 'UV stability', epoxy: 'Can yellow in sunlight', poly: 'Excellent UV resistance' },
  { label: 'Temperature sensitivity', epoxy: 'More sensitive during install', poly: 'Wider install range' },
  { label: 'Working time', epoxy: 'Longer pot life', poly: 'Faster set, needs experience' },
  { label: 'Durability', epoxy: 'Very good', poly: 'Excellent' },
  { label: 'Chemical resistance', epoxy: 'Strong', poly: 'Strong' },
  { label: 'Finish options', epoxy: 'Wide colour selection', poly: 'Growing range' },
  { label: 'Typical residential use', epoxy: 'Budget-friendly, high-build', poly: 'Fast turnaround, UV areas' },
];

export function QuickCompare() {
  return (
    <section id="quick-comparison" className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Epoxy vs Polyaspartic: Quick Comparison
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          These are base-system characteristics. Your actual FloorQuote estimate
          also includes adjustments for garage size, concrete condition,
          preparation, decorative finish and other project factors.
        </p>

        {/* Desktop table */}
        <div className="calgary-table-scroll calgary-table-desktop" style={{ maxWidth: '860px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.75rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: `2px solid ${colors.border.default}`, width: '36%' }}>
                  Feature
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.75rem', fontWeight: '600', color: colors.accent.blue, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: `2px solid ${colors.border.default}` }}>
                  Epoxy
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.75rem', fontWeight: '600', color: colors.accent.teal, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: `2px solid ${colors.border.default}` }}>
                  Polyaspartic
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.9375rem', fontWeight: '500', color: colors.text.primary, borderBottom: `1px solid ${colors.border.subtle}` }}>
                    {row.label}
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.9375rem', color: colors.text.secondary, borderBottom: `1px solid ${colors.border.subtle}` }}>
                    {row.epoxy}
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.9375rem', color: colors.text.secondary, borderBottom: `1px solid ${colors.border.subtle}` }}>
                    {row.poly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="calgary-compare-cards" style={{ gap: '1.25rem' }}>
          {rows.map((row) => (
            <div
              key={row.label}
              style={{
                backgroundColor: colors.background.primary,
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: `1px solid ${colors.border.default}`,
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                {row.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: colors.accent.blue }}>Epoxy</span>
                  <span style={{ fontSize: '0.875rem', color: colors.text.secondary }}>{row.epoxy}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: colors.accent.teal }}>Polyaspartic</span>
                  <span style={{ fontSize: '0.875rem', color: colors.text.secondary }}>{row.poly}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
