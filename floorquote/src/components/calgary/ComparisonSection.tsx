import { colors, shadows } from '@/lib/design-system';

export function ComparisonSection() {
  const rows = [
    {
      option: 'Bare concrete',
      appearance: 'Raw, unfinished look',
      durability:
        'Prone to staining, dusting, and moisture absorption over time',
      bestFor:
        'Budget-first homeowners who don\u2019t mind patching stains',
      maintenance:
        'Constant sweeping; oil, salt, and moisture leave marks',
    },
    {
      option: 'Garage floor paint',
      appearance: 'Low-cost, solid colour',
      durability:
        'Thin film that can chip and peel under vehicle traffic or salt',
      bestFor:
        'Quick cosmetic upgrades on low-traffic floors',
      maintenance:
        'Wears unevenly and often needs re-coating sooner than expected',
    },
    {
      option: 'Epoxy coating',
      appearance: 'Wide colour range; can be flaked',
      durability:
        'Hard and chemical-resistant; lasts years with proper prep',
      bestFor:
        'Homeowners who want durable protection at a moderate cost',
      maintenance: 'Easy to clean; avoid harsh chemicals',
    },
    {
      option: 'Polyaspartic coating',
      appearance: 'UV-stable with fast-install options',
      durability:
        'Flexible and long-lasting; cures quickly',
      bestFor:
        'Attached garages, sunlight, and busy households',
      maintenance: 'Low maintenance; wipe up spills',
    },
    {
      option: 'Decorative flake system',
      appearance: 'Textured, custom speckle finish',
      durability:
        'Depends on the base system; texture hides everyday wear',
      bestFor:
        'Garages used as workshops or show spaces',
      maintenance:
        'Sweeping handles most debris; a quality topcoat protects the finish',
    },
  ];

  return (
    <section
      className="calgary-section"
      style={{
        backgroundColor: colors.background.card,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{
            fontWeight: '700',
            color: colors.text.primary,
            marginBottom: '1.25rem',
          }}
        >
          Garage Flooring vs. Paint, Concrete, and Other Options
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginBottom: '2.5rem',
          }}
        >
          Some homeowners already have bare concrete or painted floors and wonder
          how a coating compares. Here&apos;s an honest comparison of the most
          common starting points.
        </p>

        <div className="calgary-table-scroll" style={{ borderRadius: '1rem' }}>
          <table
            style={{
              width: '100%',
              minWidth: '760px',
              borderCollapse: 'collapse',
              backgroundColor: colors.background.card,
              border: `1px solid ${colors.border.default}`,
              borderRadius: '1rem',
              boxShadow: shadows.sm,
            }}
          >
            <thead>
              <tr style={{ backgroundColor: colors.background.primary }}>
                {['Option', 'Appearance', 'Durability', 'Best for', 'Maintenance considerations'].map(
                  (header) => (
                    <th
                      key={header}
                      scope="col"
                      style={{
                        textAlign: 'left',
                        padding: '1rem 1.25rem',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: colors.text.primary,
                        borderBottom: `1px solid ${colors.border.default}`,
                      }}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.option}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? colors.background.card
                        : colors.background.primary,
                  }}
                >
                  <td
                    style={{
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      color: colors.text.primary,
                      borderBottom: `1px solid ${colors.border.subtle}`,
                    }}
                  >
                    {row.option}
                  </td>
                  <td
                    style={{
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      borderBottom: `1px solid ${colors.border.subtle}`,
                    }}
                  >
                    {row.appearance}
                  </td>
                  <td
                    style={{
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      borderBottom: `1px solid ${colors.border.subtle}`,
                    }}
                  >
                    {row.durability}
                  </td>
                  <td
                    style={{
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      borderBottom: `1px solid ${colors.border.subtle}`,
                    }}
                  >
                    {row.bestFor}
                  </td>
                  <td
                    style={{
                      padding: '1rem 1.25rem',
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      borderBottom: `1px solid ${colors.border.subtle}`,
                    }}
                  >
                    {row.maintenance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: colors.text.muted,
            marginTop: '1rem',
          }}
        >
          These are general descriptions, not guarantees. Ask any installer to
          walk you through the specific products they&apos;d use on your floor.
        </p>
      </div>
    </section>
  );
}
