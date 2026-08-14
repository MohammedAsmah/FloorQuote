import { Wallet, ShieldCheck, Palette, Car, FlaskConical, Sparkles, Thermometer, Target } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

export function ChooseSection() {
  const factors = [
    {
      icon: Wallet,
      title: 'Budget',
      description:
        'What you\u2019re comfortable spending — including preparation, which is often the hidden cost.',
    },
    {
      icon: ShieldCheck,
      title: 'Durability',
      description:
        'How many vehicles, and how heavy the day-to-day use really is.',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description:
        'Solid colour, flake, metallic, or something understated.',
    },
    {
      icon: Car,
      title: 'Vehicle traffic',
      description:
        'Daily drivers in and out, or mostly parking.',
    },
    {
      icon: FlaskConical,
      title: 'Chemical resistance',
      description:
        'Oil changes, lawn equipment, and solvent storage in the garage.',
    },
    {
      icon: Sparkles,
      title: 'Maintenance',
      description:
        'How much effort you want to put into cleaning and care.',
    },
    {
      icon: Thermometer,
      title: 'Installation conditions',
      description:
        'Attached or detached, heated or not, and how much downtime you can tolerate.',
    },
    {
      icon: Target,
      title: 'Long-term goals',
      description:
        'How long you plan to own the home, and whether resale value matters.',
    },
  ];

  const questions = [
    'What surface preparation is included in the quote?',
    'Which system and how many coats?',
    'What happens if my concrete has moisture issues?',
    'What warranty is offered, and what does it cover?',
    'How long will my garage be out of commission?',
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
          Rather than hunting for &ldquo;the best&rdquo; coating, start with what
          your garage actually needs. Work through these points and the right
          category usually narrows itself down.
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

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginBottom: '2rem',
          }}
        >
          Two people with the same garage can make different, equally correct
          choices. The goal is a system that fits your use, your preparation
          needs, and your budget — not the most expensive option on a brochure.
        </p>

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
          <h3
            style={{
              fontSize: '1.375rem',
              fontWeight: '600',
              color: colors.text.primary,
              marginBottom: '1rem',
            }}
          >
            Questions worth asking any contractor
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {questions.map((question) => (
              <li
                key={question}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  fontSize: '1rem',
                  color: colors.text.secondary,
                }}
              >
                <span style={{ color: colors.accent.blue, fontWeight: '700' }}>
                  •
                </span>
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
