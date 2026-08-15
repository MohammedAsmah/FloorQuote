import { Wallet, ShieldCheck, Palette, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function ChooseSection() {
  const factors = [
    {
      icon: Wallet,
      title: 'Budget',
      description:
        'What you\u2019re comfortable spending \u2014 including preparation, which is often the hidden cost.',
    },
    {
      icon: ShieldCheck,
      title: 'Durability & vehicle traffic',
      description:
        'How many vehicles, and how heavy the day-to-day use really is.',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description:
        'Solid colour, flake, or metallic \u2014 how you want the garage to look.',
    },
    {
      icon: FlaskConical,
      title: 'Climate & chemical resistance',
      description:
        'Winters, road salt, and oil changes \u2014 sealed surfaces handle all three far better than bare concrete.',
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
          How to Choose a Garage Flooring System
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
          Start with what your garage actually needs. Four questions narrow down
          the right category.
        </p>

        <div
          className="calgary-grid-2"
          style={{ width: '100%', boxSizing: 'border-box', marginBottom: '3rem' }}
        >
          {factors.map((factor) => (
            <div
              key={factor.title}
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
                <factor.icon size={24} color={colors.accent.blue} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '0.375rem',
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
            </div>
          ))}
        </div>

        {/* Calculator CTA */}
        <div
          className="calgary-card"
          style={{
            backgroundColor: colors.background.card,
            border: `2px solid ${colors.accent.blue}`,
            borderRadius: '1.5rem',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '0.75rem',
            }}
          >
            Not sure which system fits?
          </h3>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: '1.6',
              color: colors.text.secondary,
              maxWidth: '620px',
              margin: '0 auto 1.75rem',
            }}
          >
            Use the calculator to compare options for your specific garage, with
            Calgary market pricing \u2014 before you contact any company.
          </p>
          <Link href="/calculator" className="calgary-btn-primary">
            Estimate Your Options
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
