import { Thermometer, Sun, Home, Building2, HardHat, Warehouse } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

export function CalgarySection() {
  const factors = [
    {
      icon: Thermometer,
      title: 'Freeze-thaw cycles',
      description:
        'Calgary swings between mild afternoons and overnight freezes all winter. Concrete expands and contracts each cycle, which is why flexible coating systems and careful prep matter here.',
    },
    {
      icon: Sun,
      title: 'Application timing',
      description:
        'Most coatings have minimum application and cure temperatures. Installers plan the schedule around the weather — spring, summer, and fall are the typical coating seasons.',
    },
    {
      icon: Home,
      title: 'Heated vs. unheated garages',
      description:
        'Attached, heated garages are easier to coat in winter and give coatings more reliable cure conditions. Detached, unheated garages need more careful planning.',
    },
    {
      icon: Building2,
      title: 'Older Calgary slabs',
      description:
        'Homes across Calgary have slabs of different ages and conditions. Older concrete can be coated, but it needs extra prep — and that shows up in the quote.',
    },
    {
      icon: HardHat,
      title: 'Surface preparation',
      description:
        'Salt, moisture, and freeze-thaw stress a coating\u2019s bond, so grinding and profiling matter even more here than in milder climates.',
    },
    {
      icon: Warehouse,
      title: 'Detached garages',
      description:
        'Detached garages see bigger temperature swings and more condensation in winter, so moisture control and prep matter even more there.',
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
          A garage floor in Calgary doesn&apos;t have the same life as one in a
          milder climate. Here&apos;s what&apos;s different about planning and
          installing a coated floor here.
        </p>

        <div
          className="calgary-grid-3"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '1.75rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(15, 118, 110, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <factor.icon size={24} color={colors.accent.teal} />
              </div>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.5rem',
                }}
              >
                {factor.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
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
      </div>
    </section>
  );
}
