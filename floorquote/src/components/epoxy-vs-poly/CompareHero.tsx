import Link from 'next/link';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function CompareHero() {
  return (
    <section
      className="calgary-hero"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDFA 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.04)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(15, 118, 110, 0.04)', pointerEvents: 'none' }} />

      <div
        className="compare-hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              borderRadius: '999px',
              fontSize: '0.8125rem',
              fontWeight: '600',
              color: colors.accent.blue,
              marginBottom: '1.5rem',
            }}
          >
            Coating Comparison
          </div>

          <h1
            className="calgary-hero-h1"
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: colors.text.primary,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            Epoxy vs Polyaspartic Garage Floors in Calgary: Which Is Better?
          </h1>

          <p
            className="calgary-hero-sub"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: colors.text.secondary,
              marginBottom: '2rem',
              maxWidth: '580px',
            }}
          >
            Calgary homeowners often compare epoxy and polyaspartic coatings
            because they have different characteristics, costs and installation
            requirements. Neither is automatically the right choice for every
            garage&nbsp;&mdash; the best system depends on your priorities, floor
            condition, and how you use the space.
          </p>

          <div className="calgary-hero-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'flex-start' }}>
            <a href="#quick-comparison" className="calgary-btn-primary">
              Compare My Options
              <ArrowRight size={20} />
            </a>
            <Link href="/calculator" className="calgary-btn-secondary">
              Calculate My Garage Cost
              <ArrowRight size={20} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              { icon: MapPin, text: 'Calgary market pricing' },
              { icon: Shield, text: 'No obligation' },
              { icon: Clock, text: 'Personalized estimate' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: colors.text.secondary }}>
                <item.icon size={16} color={colors.accent.teal} />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Large Comparison Visual ── */}
        <div className="compare-hero-visual">
          <div className="compare-visual-card">
            <div className="compare-visual-accent" />

            <div className="compare-visual-header">
              <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Side-by-Side
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: '600', color: colors.accent.teal, backgroundColor: `${colors.accent.teal}15`, padding: '0.25rem 0.625rem', borderRadius: '999px' }}>
                Calgary Market
              </span>
            </div>

            <div className="compare-visual-columns">
              <div className="compare-visual-col">
                <div className="compare-visual-col-header" style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)' }}>
                  <span className="compare-visual-col-name">Epoxy</span>
                  <span className="compare-visual-col-price">$3&ndash;8 / sq ft</span>
                </div>
                <ul className="compare-visual-list">
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.blue }} />Lower typical base cost</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.blue }} />High-build coating</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.blue }} />Strong adhesion</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.blue }} />Slower cure</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.blue }} />More UV-sensitive</li>
                </ul>
              </div>

              <div className="compare-visual-divider">
                <span>VS</span>
              </div>

              <div className="compare-visual-col">
                <div className="compare-visual-col-header" style={{ background: 'linear-gradient(135deg, #0F766E, #0D9488)' }}>
                  <span className="compare-visual-col-name">Polyaspartic</span>
                  <span className="compare-visual-col-price">$6&ndash;10 / sq ft</span>
                </div>
                <ul className="compare-visual-list">
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.teal }} />Higher typical base cost</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.teal }} />Fast cure</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.teal }} />UV stable</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.teal }} />Moisture resistant</li>
                  <li><span className="compare-dot" style={{ backgroundColor: colors.accent.teal }} />Wider application range</li>
                </ul>
              </div>
            </div>

            <div className="compare-visual-footer">
              <p>Your actual cost depends on your garage&mdash;not just the coating.</p>
              <Link href="/calculator" className="compare-visual-footer-link">
                See your personalized estimate
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1025px) {
          .compare-hero-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 3.5rem;
            align-items: center;
          }
        }
        @media (max-width: 1024px) {
          .compare-hero-grid {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
        }
        .compare-hero-visual {
          width: 100%;
        }
        .compare-visual-card {
          background: ${colors.background.card};
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          border: 1px solid ${colors.border.default};
          overflow: hidden;
        }
        .compare-visual-accent {
          height: 4px;
          background: linear-gradient(90deg, #2563EB 50%, #0F766E 50%);
        }
        .compare-visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid ${colors.border.default};
        }
        .compare-visual-columns {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: stretch;
        }
        .compare-visual-col {
          padding: 1.5rem 2rem;
        }
        .compare-visual-col-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1.25rem;
          gap: 0.375rem;
        }
        .compare-visual-col-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }
        .compare-visual-col-price {
          font-size: 0.9375rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
        }
        .compare-visual-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .compare-visual-list li {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.9375rem;
          color: ${colors.text.secondary};
          line-height: 1.4;
        }
        .compare-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .compare-visual-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.375rem;
          border-left: 1px solid ${colors.border.default};
          border-right: 1px solid ${colors.border.default};
        }
        .compare-visual-divider span {
          font-size: 0.75rem;
          font-weight: 700;
          color: ${colors.text.muted};
          letter-spacing: 0.05em;
        }
        .compare-visual-footer {
          padding: 1rem 2rem;
          text-align: center;
          background: ${colors.background.primary};
          border-top: 1px solid ${colors.border.default};
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .compare-visual-footer p {
          font-size: 0.8125rem;
          color: ${colors.text.muted};
          margin: 0;
        }
        .compare-visual-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: ${colors.accent.blue};
          text-decoration: none;
          transition: color 150ms ease-in-out;
        }
        .compare-visual-footer-link:hover {
          color: ${colors.accent.darkBlue};
        }
        @media (max-width: 768px) {
          .compare-visual-col { padding: 1.25rem 1.5rem; }
          .compare-visual-header { padding: 1rem 1.5rem; }
          .compare-visual-footer { padding: 1rem 1.5rem; }
        }
        @media (max-width: 640px) {
          .compare-visual-columns {
            grid-template-columns: 1fr;
          }
          .compare-visual-col { padding: 1rem 1.25rem; }
          .compare-visual-col-header { flex-direction: row; justify-content: center; gap: 0.75rem; padding: 0.75rem; }
          .compare-visual-divider {
            border-left: none;
            border-right: none;
            border-top: 1px solid ${colors.border.default};
            border-bottom: 1px solid ${colors.border.default};
            padding: 0.5rem;
          }
          .compare-visual-header { padding: 0.875rem 1.25rem; }
          .compare-visual-footer { padding: 0.875rem 1.25rem; }
        }
      `}</style>
    </section>
  );
}
