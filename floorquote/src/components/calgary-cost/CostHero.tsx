import Link from 'next/link';
import { ArrowRight, ChevronDown, Shield, Clock, MapPin, Car, Hammer, Droplets, Sparkles, CheckCircle } from 'lucide-react';
import { colors, shadows } from '@/lib/design-system';

export function CostHero() {
  return (
    <section
      className="calgary-hero"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #E0E7FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background circles */}
      <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.04)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(15, 118, 110, 0.03)', pointerEvents: 'none' }} />

      <div
        className="cost-hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}
          >
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/" style={{ color: colors.accent.blue, textDecoration: 'underline', textUnderlineOffset: '2px' }}>Home</Link>
              </li>
              <li style={{ color: colors.text.muted }} aria-hidden="true">/</li>
              <li style={{ color: colors.text.primary, fontWeight: '500' }}>Garage Flooring Cost</li>
            </ol>
          </nav>

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
            Calgary Market Pricing
          </div>

          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: colors.text.primary,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            How Much Does Garage Flooring Cost in Calgary?
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: colors.text.secondary,
              marginBottom: '2rem',
              maxWidth: '560px',
            }}
          >
            Garage flooring prices in Calgary vary based on garage size, coating
            system, concrete condition, preparation, and finish. FloorQuote helps
            you understand those factors and get a Calgary-focused estimate
            before requesting quotes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
            <Link href="/calculator" className="calgary-btn-primary">
              Get Your Calgary Garage Flooring Estimate
              <ArrowRight size={20} />
            </Link>
            <a href="#what-determines-price" className="calgary-btn-secondary">
              See What Affects the Cost
              <ChevronDown size={20} />
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              { icon: MapPin, text: 'Calgary market pricing' },
              { icon: Shield, text: 'No obligation' },
              { icon: Clock, text: 'Estimate before requesting quotes' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: colors.text.secondary }}>
                <item.icon size={16} color={colors.accent.teal} />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Estimate Card Visual ── */}
        <div className="cost-hero-visual">
          <div className="cost-card">
            {/* Gradient accent bar */}
            <div className="cost-card-accent" />

            {/* Header */}
            <div className="cost-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div className="cost-card-logo">
                  <Sparkles size={16} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '1.125rem', fontWeight: '700', color: colors.text.primary, lineHeight: 1.2 }}>
                    FloorQuote Estimate
                  </div>
                  <div style={{ fontSize: '0.75rem', color: colors.text.muted, marginTop: '0.125rem' }}>
                    Calgary market pricing
                  </div>
                </div>
              </div>
              <span className="cost-card-badge">LIVE</span>
            </div>

            {/* Input fields */}
            <div className="cost-card-fields">
              {[
                { icon: Car, label: 'Garage size', value: '2-car garage', color: colors.accent.blue },
                { icon: Hammer, label: 'Coating system', value: 'Epoxy', color: colors.accent.teal },
                { icon: Droplets, label: 'Floor condition', value: 'Good', color: '#6366F1' },
              ].map((field, i) => (
                <div
                  key={field.label}
                  className="cost-card-field"
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '0.625rem',
                        backgroundColor: `${field.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <field.icon size={16} color={field.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6875rem', fontWeight: '500', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {field.label}
                      </div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: colors.text.primary, marginTop: '0.125rem' }}>
                        {field.value}
                      </div>
                    </div>
                  </div>
                  <CheckCircle size={18} color={colors.accent.teal} />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${colors.border.default}, transparent)`, margin: '0 1.5rem' }} />

            {/* Estimate result */}
            <div className="cost-card-result">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Estimated range
                </span>
                <span style={{ fontSize: '0.6875rem', fontWeight: '500', color: colors.accent.teal }}>
                  Based on your inputs
                </span>
              </div>
              <div className="cost-card-shimmer">
                <span style={{ fontSize: '1.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #2563EB, #0F766E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                  $X,XXX — $Y,YYY
                </span>
              </div>
              <div style={{ fontSize: '0.8125rem', color: colors.text.muted, marginTop: '0.375rem' }}>
                CAD · varies by project details
              </div>
            </div>

            {/* CTA */}
            <div style={{ padding: '0 1.5rem 1.25rem' }}>
              <Link href="/calculator" className="cost-card-cta">
                Calculate My Estimate
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Grid ── */
        @media (min-width: 1280px) {
          .cost-hero-grid {
            display: grid;
            grid-template-columns: 1fr 480px;
            gap: 4rem;
            align-items: center;
          }
        }
        @media (min-width: 1025px) and (max-width: 1279px) {
          .cost-hero-grid {
            display: grid;
            grid-template-columns: 1fr 420px;
            gap: 3rem;
            align-items: center;
          }
        }
        @media (max-width: 1024px) {
          .cost-hero-grid {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
        }

        /* ── Visual wrapper ── */
        .cost-hero-visual {
          position: relative;
          width: 100%;
        }

        /* ── Card ── */
        .cost-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          border-radius: 1.25rem;
          box-shadow:
            0 4px 6px -1px rgb(0 0 0 / 0.07),
            0 20px 40px -4px rgb(0 0 0 / 0.1),
            0 0 0 1px rgb(0 0 0 / 0.03);
          overflow: hidden;
          animation: costCardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.2s;
        }
        @keyframes costCardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Accent bar ── */
        .cost-card-accent {
          height: 4px;
          background: linear-gradient(90deg, #2563EB, #0F766E, #6366F1);
          animation: accentShimmer 3s ease-in-out infinite;
        }
        @keyframes accentShimmer {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.7; }
        }

        /* ── Header ── */
        .cost-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
        }
        .cost-card-logo {
          width: 36px;
          height: 36px;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgb(37 99 235 / 0.3);
        }
        .cost-card-badge {
          font-size: 0.625rem;
          font-weight: 700;
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
          letter-spacing: 0.05em;
          animation: badgePulse 2s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.8; transform: scale(1.05); }
        }

        /* ── Fields ── */
        .cost-card-fields {
          padding: 0 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .cost-card-field {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #FFFFFF;
          border-radius: 0.75rem;
          border: 1px solid rgb(0 0 0 / 0.05);
          animation: fieldSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes fieldSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Result ── */
        .cost-card-result {
          padding: 1rem 1.5rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.04), rgba(15, 118, 110, 0.04));
        }
        .cost-card-shimmer {
          position: relative;
          display: inline-block;
        }
        .cost-card-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: shimmer 2.5s ease-in-out infinite;
          animation-delay: 1s;
        }
        @keyframes shimmer {
          0%   { left: -100%; }
          100% { left: 200%; }
        }

        /* ── CTA button ── */
        .cost-card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.875rem;
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          color: #ffffff;
          border-radius: 0.75rem;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
          box-shadow: 0 2px 8px rgb(37 99 235 / 0.25);
        }
        .cost-card-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgb(37 99 235 / 0.35);
        }

        /* ── Mobile tweaks ── */
        @media (max-width: 480px) {
          .cost-card { border-radius: 1rem; }
          .cost-card-header { padding: 0.875rem 1.25rem; }
          .cost-card-fields { padding: 0 1.25rem 0.875rem; }
          .cost-card-result { padding: 0.875rem 1.25rem; }
        }
      `}</style>
    </section>
  );
}
