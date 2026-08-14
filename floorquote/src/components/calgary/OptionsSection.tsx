import { Droplets, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function OptionsSection() {
  const options = [
    {
      icon: Droplets,
      accent: colors.accent.blue,
      name: 'Epoxy Coating',
      whatItIs:
        'A two-part resin system applied over prepared concrete. Epoxy has been a garage standard for decades because it forms a hard, chemical-resistant film.',
      advantages: [
        'Strong adhesion to prepared concrete',
        'Good resistance to chemicals and oil',
        'Wide range of colours',
        'Typically one of the more budget-friendly professional options',
      ],
      disadvantages: [
        'Slower to cure than some alternatives',
        'Some formulations can amber or yellow with heavy UV exposure',
        'Application is temperature-sensitive',
      ],
      durability:
        'With proper surface preparation, a quality epoxy commonly lasts in the 5\u201310 year range depending on use.',
      appearance:
        'Solid colours, and it can be combined with decorative flakes for texture.',
      maintenance:
        'Easy to sweep and mop; avoid harsh chemical cleaners that can dull the finish.',
      bestFor:
        'Homeowners who want proven durability at a moderate cost and can accept the cure time.',
      cost:
        'Usually one of the more affordable professional systems, though prep, extra coats, and flakes push the price up.',
    },
    {
      icon: Shield,
      accent: colors.accent.teal,
      name: 'Polyaspartic Coating',
      whatItIs:
        'A polyurea-based system that cures very quickly and is highly UV-stable. It has become popular for Calgary garages because installers can often finish the work in a day or two.',
      advantages: [
        'Very fast cure times',
        'Strong flexibility and UV stability',
        'Less prone to yellowing than many epoxies',
        'Can be applied in a wider range of conditions',
      ],
      disadvantages: [
        'Generally costs more than epoxy',
        'Requires experience to apply well',
        'Fast cure leaves less room to fix mistakes',
      ],
      durability:
        'Frequently quoted in the 10\u201315+ year range with proper prep and maintenance.',
      appearance:
        'Solid colours, metallic options, or full flake systems.',
      maintenance:
        'Low; a sealed, non-porous surface that is simple to clean.',
      bestFor:
        'Busy households, attached garages where downtime matters, and floors exposed to sunlight.',
      cost:
        'Costs more per square foot than many epoxy systems, though the faster install can shorten overall project time.',
    },
    {
      icon: Sparkles,
      accent: colors.accent.indigo,
      name: 'Decorative Flake Systems',
      whatItIs:
        'An epoxy or polyaspartic base with decorative vinyl flakes broadcast into the surface and sealed with a topcoat. The flakes add texture, hide imperfections, and create a speckled, custom finish.',
      advantages: [
        'Great texture and slip resistance',
        'Hides dirt and minor floor flaws',
        'Highly customizable colour combinations',
      ],
      disadvantages: [
        'Flakes can shift or settle if not sealed properly',
        'More material and labour involved',
        'Topcoat quality matters for the finished look',
      ],
      durability:
        'Comparable to the base system used (epoxy or polyaspartic), typically in the 5\u201315 year range.',
      appearance:
        'Speckled or full flake finishes, from subtle to bold.',
      maintenance:
        'Easy to clean; a poorly done system can trap dirt in uneven areas.',
      bestFor:
        'Homeowners who want a custom look with extra grip and durability.',
      cost:
        'Usually more than a plain solid-colour system because of the added materials and labour.',
    },
  ];

  const otherSystems = [
    {
      name: 'Polyurea',
      description:
        'Ultra-fast curing and very flexible. Often chosen where speed matters most.',
    },
    {
      name: 'Quartz',
      description:
        'Broadcast quartz grains create a textured, mineral finish popular in showrooms and high-end garages.',
    },
    {
      name: 'Metallic',
      description:
        'Pigment techniques produce flowing, decorative metallic effects — mostly an aesthetic upgrade rather than a performance one.',
    },
  ];

  return (
    <section
      className="calgary-section"
      style={{
        backgroundColor: colors.background.primary,
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
          Garage Flooring Options in Calgary
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginBottom: '3rem',
          }}
        >
          Most garage floor projects in Calgary fall into one of a few coating
          families, and pricing is usually quoted per square foot. Here&apos;s a
          straight comparison of the most common options — strengths, trade-offs,
          and who each one tends to suit.
        </p>

        <div
          className="calgary-grid-3"
          style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}
        >
          {options.map((option) => (
            <div
              key={option.name}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                width: '100%',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: option.accent,
                }}
              />
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '1rem',
                  backgroundColor: `${option.accent}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <option.icon size={28} color={option.accent} />
              </div>
              <h3
                style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {option.name}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  marginBottom: '1.25rem',
                }}
              >
                {option.whatItIs}
              </p>

              <SectionLabel>Advantages</SectionLabel>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem' }}>
                {option.advantages.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      marginBottom: '0.375rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <SectionLabel>Trade-offs</SectionLabel>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem' }}>
                {option.disadvantages.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      marginBottom: '0.375rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <SectionLabel>Durability</SectionLabel>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  margin: '0 0 1.25rem',
                }}
              >
                {option.durability}
              </p>

              <SectionLabel>Appearance</SectionLabel>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  margin: '0 0 1.25rem',
                }}
              >
                {option.appearance}
              </p>

              <SectionLabel>Maintenance</SectionLabel>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  margin: '0 0 1.25rem',
                }}
              >
                {option.maintenance}
              </p>

              <SectionLabel>Best for</SectionLabel>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  margin: '0 0 1.25rem',
                }}
              >
                {option.bestFor}
              </p>

              <SectionLabel>Cost considerations</SectionLabel>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {option.cost}
              </p>
            </div>
          ))}
        </div>

        <div
          className="calgary-card"
          style={{
            backgroundColor: colors.background.card,
            padding: '2rem',
            borderRadius: '1.5rem',
            boxShadow: shadows.sm,
            border: `1px solid ${colors.border.default}`,
            maxWidth: '820px',
            marginBottom: '3rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: colors.text.primary,
              marginBottom: '0.75rem',
            }}
          >
            Other systems worth knowing about
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
            }}
          >
            {otherSystems.map((system) => (
              <div key={system.name}>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '0.25rem',
                  }}
                >
                  {system.name}
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: colors.text.secondary,
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
          }}
        >
          The right option depends on your priorities. If you want to see how
          different systems affect the estimate for your specific garage, run them
          through the{' '}
          <Link
            href="/calculator"
            style={{ color: colors.accent.blue, textDecoration: 'underline' }}
          >
            garage flooring cost calculator
          </Link>{' '}
          — it compares options using Calgary market pricing.
        </p>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: '0.75rem',
        fontWeight: '600',
        color: '#64748B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0.375rem',
      }}
    >
      {children}
    </div>
  );
}
