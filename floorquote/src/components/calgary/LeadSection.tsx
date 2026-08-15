import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows } from '@/lib/design-system';

export function LeadSection() {
  return (
    <section
      className="calgary-section"
      style={{
        backgroundColor: colors.background.card,
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
          bottom: 0,
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(15, 118, 110, 0.05) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: colors.background.card,
            borderRadius: '2rem',
            padding: '4rem 3rem',
            boxShadow: shadows.xl,
            border: `1px solid ${colors.border.default}`,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: colors.accent.blue,
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '2rem',
            }}
          >
            <Zap size={16} />
            Free • No Obligation • Instant Results
          </span>

          <h2
            className="calgary-h2"
            style={{
              fontWeight: '700',
              color: colors.text.primary,
              marginBottom: '1.25rem',
              lineHeight: '1.15',
            }}
          >
            Ready to Estimate Your Calgary Garage Floor?
          </h2>

          <p
            style={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '640px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6',
            }}
          >
            FloorQuote doesn&apos;t install floors — we help you understand your
            project and get it done smarter. Get a cost estimate based on Calgary
            market pricing, compare your options, and connect with local flooring
            professionals who can give you a real quote.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/calculator" className="calgary-btn-primary">
              Calculate Your Garage Flooring Cost
              <ArrowRight size={20} />
            </Link>
            <Link href="/quotes" className="calgary-btn-secondary">
              Request a Garage Flooring Quote
            </Link>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/about"
              style={{
                fontSize: '0.9375rem',
                color: colors.text.secondary,
                textDecoration: 'underline',
              }}
            >
              Learn more about how FloorQuote works
            </Link>
            <Link
              href="/contact"
              style={{
                fontSize: '0.9375rem',
                color: colors.text.secondary,
                textDecoration: 'underline',
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
