import { Snowflake, Thermometer, Car, Shovel, Waves, HardHat } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

export function CalgarySection() {
  const factors = [
    {
      icon: Snowflake,
      title: 'Winter weather and snow',
      description:
        'Every winter, cars bring snow, ice, and slush into Calgary garages. Melted water sitting on an unsealed floor can slowly penetrate concrete.',
    },
    {
      icon: Thermometer,
      title: 'Freeze-thaw cycles',
      description:
        'Mild afternoons followed by overnight freezes make concrete expand and contract. That is one reason surface preparation and coating flexibility matter here.',
    },
    {
      icon: Car,
      title: 'Road salt and de-icing materials',
      description:
        'Salt, sand, and de-icing chemicals get tracked in from city streets. A sealed floor that resists chemicals is much easier to manage in February.',
    },
    {
      icon: Shovel,
      title: 'Temperature variation',
      description:
        'Big temperature swings can affect how coatings cure. Installers plan application around the weather, and attached, heated garages make the job easier.',
    },
    {
      icon: Waves,
      title: 'Concrete condition',
      description:
        'Newer slabs prep differently than older, stained, or cracked concrete. The condition of your floor shapes both the cost and the outcome.',
    },
    {
      icon: HardHat,
      title: 'Surface preparation',
      description:
        'Grinding or diamond profiling is the difference between a coating that bonds for years and one that peels. It is the step homeowners most often underrate.',
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
          Calgary-Specific Considerations for Garage Floors
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
          A garage floor in Calgary does not have the same life as one in a
          milder climate. The conditions that make Calgary&apos;s weather part of
          everyday conversation are the same ones that matter for a coated floor.
        </p>

        <div
          className="calgary-grid-3"
          style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}
        >
          {factors.map((factor) => (
            <div
              key={factor.title}
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
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(15, 118, 110, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <factor.icon size={28} color={colors.accent.teal} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {factor.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  margin: 0,
                }}
              >
                {factor.description}
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
          }}
        >
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: '1.7',
              color: colors.text.secondary,
              margin: 0,
            }}
          >
            These aren&apos;t reasons to avoid a coated floor — they&apos;re
            reasons to choose the right system, work with someone who understands
            local conditions, and budget for proper preparation. When you request
            a quote, the details about your Calgary garage (attached or detached,
            heated or not, how it&apos;s used) help contractors give you
            something more realistic than a blanket number.
          </p>
        </div>
      </div>
    </section>
  );
}
