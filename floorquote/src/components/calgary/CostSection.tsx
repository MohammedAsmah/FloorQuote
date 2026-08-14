import { Ruler, Hammer, Shovel, Layers, Palette, Droplets, Footprints, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function CostSection() {
  const factors = [
    {
      icon: Ruler,
      title: 'Square footage',
      description:
        'The size of the floor area, and whether steps and stem walls are coated too.',
    },
    {
      icon: Hammer,
      title: 'Concrete condition and preparation',
      description:
        'Grinding, degreasing, and profiling the slab is often the biggest driver of a quote.',
    },
    {
      icon: Shovel,
      title: 'Cracks and repairs',
      description:
        'Crack filling, patching, or injection work before the coating goes down.',
    },
    {
      icon: Layers,
      title: 'Coating system and layers',
      description:
        'Epoxy, polyaspartic, flake, polyurea, quartz, and metallic all price differently, and primers and topcoats add up.',
    },
    {
      icon: Palette,
      title: 'Decorative finish',
      description:
        'Flakes, metallic pigments, or quartz add material and labour on top of the base system.',
    },
    {
      icon: Droplets,
      title: 'Moisture and existing coating',
      description:
        'Vapour testing or mitigation, and removing or profiling an old paint or coating, add to the job.',
    },
    {
      icon: Footprints,
      title: 'Labour and access',
      description:
        'Layout, site access, and the time prep genuinely takes all affect the final number.',
    },
    {
      icon: ClipboardList,
      title: 'Project complexity',
      description:
        'Odd layouts, tight clearances, or extra details mean more time on site.',
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
          What Does Garage Flooring Cost in Calgary?
        </h2>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginBottom: '1.25rem',
          }}
        >
          Pricing is where most garage flooring research starts, and it&apos;s
          also where generic advice gets messy. A number quoted for one Calgary
          garage can be very different from the quote for the one next door.
          That&apos;s because coating is priced per square foot against a long
          list of variables — not as a fixed price per job.
        </p>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: colors.text.secondary,
            maxWidth: '820px',
            marginBottom: '3rem',
          }}
        >
          The honest answer is that any figure you see online is a starting
          point, not a price. A professional estimate accounts for the specific
          condition of your concrete and the system you choose. These are the
          factors that actually move the number:
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

        {/* CTA callout */}
        <div
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: `2px solid ${colors.accent.blue}`,
            borderRadius: '1.5rem',
            padding: '3rem',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '1rem',
            }}
          >
            Get a Personalized Estimate Instead of a Guess
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '620px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
            }}
          >
            Our cost calculator uses Calgary market pricing and accounts for your
            garage size, floor condition, coating type, and more — so you get a
            range that reflects your project, not a national average.
          </p>
          <Link href="/calculator" className="calgary-btn-primary">
            Estimate Your Garage Flooring Cost
          </Link>
        </div>
      </div>
    </section>
  );
}
