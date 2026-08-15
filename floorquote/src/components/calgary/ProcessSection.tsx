import { colors } from '@/lib/design-system';

export function ProcessSection() {
  const steps = [
    {
      title: 'Inspect & prepare',
      description:
        'The installer checks the concrete\u2019s condition and mechanically grinds or profiles the slab so the coating can bond. Preparation is where a coating is won or lost.',
    },
    {
      title: 'Repair & clean',
      description:
        'Cracks are filled or patched, then dust and debris from grinding are removed so the next layers go down clean.',
    },
    {
      title: 'Apply the coating system',
      description:
        'Primer or base coat, the decorative layer (flakes, metallic, or quartz) if you\u2019ve chosen one, and a protective topcoat \u2014 each given time to cure.',
    },
    {
      title: 'Finish & inspect',
      description:
        'The installer checks coverage, texture, and edges before the garage is handed back.',
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
          How Garage Floor Coating Works
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
          Most professional garage floor projects follow the same four stages.
          Knowing them helps you ask better questions when you get quotes.
        </p>

        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1.5rem',
            width: '100%',
            boxSizing: 'border-box',
          }}
          className="calgary-process-grid"
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                border: `1px solid ${colors.border.default}`,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: colors.accent.blue,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1rem',
                  flexShrink: 0,
                  marginBottom: '1.25rem',
                }}
              >
                {index + 1}
              </div>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '0.5rem',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: colors.text.secondary,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
