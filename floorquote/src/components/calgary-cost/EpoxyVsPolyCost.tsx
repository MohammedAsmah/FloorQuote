import { Shield, Zap, Droplets } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

const systems = [
  {
    icon: Shield,
    name: 'Epoxy',
    badge: '$3–8 / sq ft',
    accent: colors.accent.blue,
    pros: ['Lower upfront material cost', 'Strong adhesion and chemical resistance', 'Wide colour selection'],
    cons: ['Slower cure time than polyaspartic', 'Can amber under strong UV exposure', 'More temperature-sensitive during application'],
  },
  {
    icon: Zap,
    name: 'Polyaspartic',
    badge: '$6–10 / sq ft',
    accent: colors.accent.teal,
    pros: ['Fast cure — often walkable the same day', 'Strong UV stability, resists yellowing', 'Excellent moisture resistance'],
    cons: ['Higher material cost', 'Faster working time requires experienced installers', 'Fewer colour options in some product lines'],
  },
  {
    icon: Droplets,
    name: 'Polyurea',
    badge: '$8–12 / sq ft',
    accent: '#6366F1',
    pros: ['Maximum durability and flexibility', 'Industrial-grade impact resistance', 'Best for heavy-use and commercial applications'],
    cons: ['Highest base cost', 'Specialized application equipment needed', 'Overkill for most residential garages'],
  },
];

export function EpoxyVsPolyCost() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Epoxy vs Polyaspartic vs Polyurea: How the System Affects Cost
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '3rem' }}>
          The coating system you choose is one of the biggest drivers of the
          per-square-foot price. These are the base rates FloorQuote&apos;s
          calculator uses for Calgary projects. Your actual estimate also
          includes preparation, condition, and finish adjustments on top of
          these numbers.
        </p>

        <div className="calgary-grid-3" style={{ width: '100%', boxSizing: 'border-box' }}>
          {systems.map((system) => (
            <div
              key={system.name}
              className="calgary-card"
              style={{
                backgroundColor: colors.background.card,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: system.accent }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '0.75rem',
                      backgroundColor: `${system.accent}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <system.icon size={22} color={system.accent} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: colors.text.primary }}>
                    {system.name}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: system.accent,
                    backgroundColor: `${system.accent}10`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                  }}
                >
                  {system.badge}
                </span>
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Advantages
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
                {system.pros.map((item) => (
                  <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Trade-offs
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                {system.cons.map((item) => (
                  <li key={item} style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.25rem', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginTop: '2rem' }}>
          Metallic and quartz systems fall in a similar range to polyurea.
          The right system depends on your budget, how you use the garage, and
          your concrete&apos;s condition — not one system being universally
          &quot;better.&quot; Want a detailed side-by-side comparison? See our{' '}
          <Link
            href="/epoxy-vs-polyaspartic-garage-floor-calgary"
            style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}
          >
            epoxy vs polyaspartic garage floors guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
