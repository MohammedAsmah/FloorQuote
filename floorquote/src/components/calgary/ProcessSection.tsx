import { colors, shadows } from '@/lib/design-system';

export function ProcessSection() {
  const steps = [
    {
      title: 'Inspection',
      description:
        'The installer checks the concrete: condition, cracks, stains, moisture, and any existing coatings.',
    },
    {
      title: 'Surface preparation',
      description:
        'The floor is mechanically ground or profiled so the coating can bond. This is the most important step in the project.',
    },
    {
      title: 'Concrete repairs',
      description:
        'Cracks are filled, patched, or injected where needed before anything is applied.',
    },
    {
      title: 'Cleaning',
      description:
        'Dust and debris from grinding are removed so the next layers go down clean.',
    },
    {
      title: 'Primer or base system',
      description:
        'Where the system calls for it, a primer or base coat is applied first to anchor the finish.',
    },
    {
      title: 'Decorative layer',
      description:
        'If you\u2019ve chosen flakes, metallic, or quartz, this is where the design goes in.',
    },
    {
      title: 'Topcoat',
      description:
        'A protective topcoat is applied and given time to cure.',
    },
    {
      title: 'Final inspection',
      description:
        'The installer checks coverage, texture, and edges before calling the job complete.',
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
          Every installation is a little different, but most professional garage
          floor coating projects follow the same general sequence. Knowing the
          steps helps you ask better questions when you get quotes.
        </p>

        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
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
                }}
              >
                {index + 1}
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
              </div>
            </li>
          ))}
        </ol>

        <div
          className="calgary-card"
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: `2px solid ${colors.accent.blue}`,
            borderRadius: '1.5rem',
            padding: '2rem',
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
            <strong style={{ color: colors.text.primary }}>
              Preparation is where a job lives or dies.
            </strong>{' '}
            A coating is only as good as the surface beneath it, which is why a
            detailed quote should always account for how your concrete is
            prepared — not just the coating itself. Keep in mind that not every
            system uses every step; fast-cure systems, for example, can shorten
            the timeline significantly.
          </p>
        </div>
      </div>
    </section>
  );
}
