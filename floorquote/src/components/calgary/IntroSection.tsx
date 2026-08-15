import { Snowflake, Droplets, Shield, FlaskConical, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function IntroSection() {
  const benefits = [
    {
      icon: Snowflake,
      title: 'Winter and salt',
      description:
        'Resists the salt, sand, and slush Calgary winters drag into the garage on tires and boots.',
    },
    {
      icon: Droplets,
      title: 'Moisture',
      description:
        'A sealed surface stays drier as snow melts off the car, protecting the slab over time.',
    },
    {
      icon: Shield,
      title: 'Durability',
      description:
        'Stands up to daily vehicle traffic, tools, and foot traffic without staining or dusting.',
    },
    {
      icon: FlaskConical,
      title: 'Chemicals and oil',
      description:
        'Oil drips, coolant, and de-icing chemicals wipe up instead of soaking into bare concrete.',
    },
    {
      icon: Sparkles,
      title: 'Easier to clean',
      description:
        'Sweep or rinse the floor down — no stains, no dust, and no constant scrubbing.',
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
          Why Calgary Homeowners Consider Garage Flooring
        </h2>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            marginBottom: '3rem',
            maxWidth: '820px',
          }}
        >
          A garage floor takes daily vehicle traffic, winter salt, melting snow,
          and big temperature swings \u2014 and bare concrete shows it. A
          protective coating keeps that surface looking good and working well.
        </p>

        <div
          className="calgary-grid-3"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
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
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <benefit.icon size={24} color={colors.accent.blue} />
              </div>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.5rem',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  margin: 0,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginTop: '2.5rem',
          }}
        >
          Want a cost picture first?{' '}
          <Link
            href="/calculator"
            style={{ color: colors.accent.blue, textDecoration: 'underline' }}
          >
            Estimate your garage flooring cost
          </Link>{' '}
          before digging into the details.
        </p>
      </div>
    </section>
  );
}
