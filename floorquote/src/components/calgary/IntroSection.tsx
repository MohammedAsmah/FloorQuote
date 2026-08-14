import { Shield, Droplets, Snowflake, Sparkles, Wrench, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function IntroSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Durability',
      description:
        'Protection against daily wear from vehicles, tools, and foot traffic — the kind of use a garage sees year-round.',
    },
    {
      icon: Droplets,
      title: 'Chemical and oil resistance',
      description:
        'A sealed surface that makes oil drips, coolant, and cleaning products much easier to wipe up.',
    },
    {
      icon: Snowflake,
      title: 'Winter and salt',
      description:
        'A smoother, sealed surface that stands up to the salt, sand, and slush Calgary winters drag into the garage.',
    },
    {
      icon: Wrench,
      title: 'Moisture',
      description:
        'A coated floor is less likely to absorb water from melting snow or washing, keeping the slab drier over time.',
    },
    {
      icon: Paintbrush,
      title: 'Appearance',
      description:
        'A finished look that suits workshops, home gyms, storage spaces, or simply a cleaner entry from the car.',
    },
    {
      icon: Sparkles,
      title: 'Easier maintenance',
      description:
        'Sweeping and washing are quicker on a sealed floor, and stains don\u2019t settle into bare concrete.',
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
            marginBottom: '1.25rem',
            maxWidth: '820px',
          }}
        >
          A garage floor works harder than almost any other surface in a home. In
          Calgary it takes daily vehicle traffic, oil and fluid drips, winter salt
          and de-icing chemicals, melting snow, and temperature swings that can
          move from deep freeze to double digits in a single week. Over time, bare
          concrete absorbs stains, holds dust, and gets harder to clean.
        </p>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            marginBottom: '1.25rem',
            maxWidth: '820px',
          }}
        >
          Garage flooring — usually a protective coating or system applied
          directly to the concrete — is one way homeowners keep that surface
          looking good and working well. The right choice depends on how you use
          your garage, your budget, and the condition of your concrete. There is
          no single best system for everyone, which is why it helps to understand
          the options before contacting companies.
        </p>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            marginBottom: '3rem',
            maxWidth: '820px',
          }}
        >
          If you&apos;d like a cost picture before you dig into the details,{' '}
          <Link
            href="/calculator"
            style={{ color: colors.accent.blue, textDecoration: 'underline' }}
          >
            use our garage flooring cost calculator
          </Link>{' '}
          to see how your project compares.
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
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <benefit.icon size={28} color={colors.accent.blue} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.75rem',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
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
      </div>
    </section>
  );
}
