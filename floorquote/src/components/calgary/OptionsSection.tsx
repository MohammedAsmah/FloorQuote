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
        'A two-part resin system applied over prepared concrete. The garage standard for decades: hard, chemical-resistant, and budget-friendly.',
      advantages: [
        'Strong adhesion to prepared concrete',
        'Good resistance to chemicals and oil',
        'Wide range of colours, with or without flakes',
      ],
      tradeoffs: [
        'Slower to cure than alternatives',
        'Can amber or yellow with strong UV exposure',
        'Application is temperature-sensitive',
      ],
      bestFor:
        'Proven durability at a moderate cost, when cure time isn\u2019t a problem.',
    },
    {
      icon: Shield,
      accent: colors.accent.teal,
      name: 'Polyaspartic Coating',
      whatItIs:
        'A polyurea-based system that cures very quickly and resists UV yellowing. Popular in Calgary because installers can often finish in a day or two.',
      advantages: [
        'Very fast cure — less downtime',
        'Strong flexibility and UV stability',
        'Can be applied in a wider range of conditions',
      ],
      tradeoffs: [
        'Generally costs more than epoxy',
        'Requires experience to apply well',
        'Fast cure leaves less room to fix mistakes',
      ],
      bestFor:
        'Busy households and attached garages where downtime and sunlight matter.',
    },
    {
      icon: Sparkles,
      accent: colors.accent.indigo,
      name: 'Decorative Flake Systems',
      whatItIs:
        'An epoxy or polyaspartic base with vinyl flakes broadcast into the surface and sealed with a topcoat for a textured, custom finish.',
      advantages: [
        'Texture and slip resistance',
        'Hides dirt and minor floor flaws',
        'Custom colour combinations',
      ],
      tradeoffs: [
        'More material and labour involved',
        'Flakes can shift if not sealed properly',
        'Topcoat quality matters for the final look',
      ],
      bestFor:
        'A custom look with extra grip, in garages used as workshops or show spaces.',
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
          Most Calgary garage projects fall into one of three coating families,
          priced per square foot. Here&apos;s what each one is, its trade-offs,
          and who it tends to suit.
        </p>

        <div
          className="calgary-grid-3"
          style={{ width: '100%', boxSizing: 'border-box' }}
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  backgroundColor: `${option.accent}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <option.icon size={24} color={option.accent} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
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

              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Advantages
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem' }}>
                {option.advantages.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      marginBottom: '0.375rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Trade-offs
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem' }}>
                {option.tradeoffs.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      marginBottom: '0.375rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Best for
              </div>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  margin: 0,
                }}
              >
                {option.bestFor}
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
          Polyurea, quartz, and metallic systems are variations on these themes —
          faster-curing, more textured, or more decorative. To compare options
          against Calgary market pricing for your garage, run them through the{' '}
          <Link
            href="/calculator"
            style={{ color: colors.accent.blue, textDecoration: 'underline' }}
          >
            garage flooring cost calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
