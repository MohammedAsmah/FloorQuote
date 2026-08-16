import { Ruler, Hammer, Shovel, Layers, Palette, Droplets, Footprints, ClipboardList, BadgeCheck } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

const factors = [
  { icon: Ruler, title: 'Garage size', description: 'Larger garages use more material and labour, scaling the total directly.' },
  { icon: Hammer, title: 'Concrete condition', description: 'Floors in poor condition need extra prep before coating, which raises the estimate.' },
  { icon: Shovel, title: 'Surface preparation', description: 'Grinding, degreasing, and profiling are often the biggest driver of a quote.' },
  { icon: Layers, title: 'Crack and repair work', description: 'Filling cracks, patching, and damage repair add material and labour before coating begins.' },
  { icon: Palette, title: 'Coating system', description: 'Epoxy, polyaspartic, polyurea, metallic, and quartz all carry different base costs.' },
  { icon: Droplets, title: 'Decorative finish', description: 'Flakes, metallic pigments, or quartz add material and application steps on top of the base system.' },
  { icon: Footprints, title: 'Existing coating', description: 'Removing old paint or epoxy before applying a new system adds time and cost.' },
  { icon: ClipboardList, title: 'Project complexity', description: 'Stem walls, steps, tight clearances, and access all affect the time on site.' },
  { icon: BadgeCheck, title: 'Product quality and warranty', description: 'Higher-grade systems and longer warranties cost more upfront but can last longer.' },
];

export function PriceFactors() {
  return (
    <section id="what-determines-price" className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          What Actually Determines the Price?
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          These are the factors FloorQuote&apos;s calculator uses to estimate
          your project. Each one can move the number, and most of them
          interact — a garage with poor concrete and old paint removal needs more
          work than the same garage in excellent condition.
        </p>

        <div className="calgary-grid-3" style={{ width: '100%', boxSizing: 'border-box' }}>
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
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <factor.icon size={22} color={colors.accent.blue} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.375rem' }}>
                {factor.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: colors.text.secondary, margin: 0 }}>
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
