import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/lib/design-system';

export function Hero() {
  const trustIndicators = [
    { text: 'Free to use' },
    { text: 'No obligation' },
    { text: 'Calgary market pricing' },
  ];

  return (
    <section
      className="calgary-hero"
      style={{
        backgroundColor: colors.background.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 40%, rgba(37, 99, 235, 0.04) 0%, transparent 50%)',
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
          <ol
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.875rem',
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: colors.text.muted, textDecoration: 'none' }}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: colors.text.muted }}>
              /
            </li>
            <li aria-current="page" style={{ color: colors.text.secondary }}>
              Garage Flooring in Calgary
            </li>
          </ol>
        </nav>

        <div className="calgary-hero-grid">
          {/* Copy, CTAs, and trust indicators */}
          <div>
            {/* Badge */}
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
                marginBottom: '1.5rem',
              }}
            >
              <CheckCircle size={16} />
              Serving Calgary, Alberta
            </span>

            <h1
              className="calgary-hero-h1"
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: colors.text.primary,
                maxWidth: '800px',
                marginBottom: '1.5rem',
              }}
            >
              Garage Flooring in Calgary
            </h1>

            <p
              className="calgary-hero-sub"
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: colors.text.secondary,
                maxWidth: '640px',
                marginBottom: '2.5rem',
              }}
            >
              Compare garage floor coating options, understand what affects cost
              in Calgary&apos;s climate, and get a clear estimate before you hire
              anyone. FloorQuote helps Calgary homeowners make confident garage
              floor decisions — free and with no obligation.
            </p>

            {/* CTAs */}
            <div
              className="calgary-hero-buttons"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/quotes" className="calgary-btn-primary">
                Get a Garage Flooring Estimate
                <ArrowRight size={20} />
              </Link>
              <Link href="/calculator" className="calgary-btn-secondary">
                Calculate Your Garage Floor Cost
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginTop: '2.5rem',
              }}
            >
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.text}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <CheckCircle size={20} color={colors.status.success} />
                  <span
                    style={{
                      color: colors.text.secondary,
                      fontSize: '0.9375rem',
                      fontWeight: '500',
                    }}
                  >
                    {indicator.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="calgary-hero-media">
              <Image
                src="/calgary-garage-flooring-hero-img.png"
                alt="Finished garage floor with a protective coating in a Calgary home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                preload={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
