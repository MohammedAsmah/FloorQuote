'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function Hero() {
  const trustIndicators = [
    { icon: CheckCircle, text: 'Free' },
    { icon: CheckCircle, text: 'No Obligation' },
    { icon: CheckCircle, text: 'Based on Calgary Pricing' },
  ];

  return (
    <section
      className="hero-section"
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}
      >
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Content */}
          <motion.div>
            <motion.h1
              className="hero-title"
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                lineHeight: '1.1',
                color: colors.text.primary,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Know the Real Cost of Your Garage Floor Project Before You Hire Anyone.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: colors.text.secondary,
                marginBottom: '2.5rem',
                maxWidth: '600px',
              }}
            >
              Get a free estimate in under two minutes using Calgary market pricing and receive quotes from trusted local contractors.
            </motion.p>

            <motion.div
              className="hero-buttons"
              style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}
            >
              <Link href="/calculator">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: colors.accent.blue,
                    color: colors.text.inverse,
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: shadows.glowBlue,
                    transition: `transform ${transitions.fast}`,
                  }}
                >
                  Get My Free Estimate
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/quotes">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'transparent',
                    color: colors.accent.blue,
                    border: `2px solid ${colors.accent.blue}`,
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: `transform ${transitions.fast}`,
                  }}
                >
                  Request Quotes
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="hero-trust"
              style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <indicator.icon size={20} color={colors.status.success} />
                  <span style={{ color: colors.text.secondary, fontSize: '0.9375rem', fontWeight: '500' }}>
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="hero-image"
            style={{ position: 'relative' }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="hero-image-inner"
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: shadows.xl,
                backgroundColor: colors.background.card,
              }}
            >
              <div
                className="hero-image-bg"
                style={{
                  width: '100%',
                  height: '500px',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Abstract garage floor illustration */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
                <div
                  className="hero-image-text"
                  style={{
                    fontSize: '6rem',
                    fontWeight: '700',
                    color: 'rgba(255,255,255,0.1)',
                    textAlign: 'center',
                  }}
                >
                  FLOORQUOTE
                </div>
              </div>
            </motion.div>

            {/* Floating card overlay */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="hero-floating-card"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                backgroundColor: colors.background.card,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: shadows.xl,
                maxWidth: '280px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: colors.accent.teal,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle size={24} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: colors.text.primary }}>
                    Instant Estimate
                  </div>
                  <div style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                    Under 2 minutes
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 5rem !important;
            padding-bottom: 3rem !important;
          }
          .hero-title {
            font-size: 2.25rem !important;
          }
          .hero-subtitle {
            font-size: 1.125rem !important;
          }
          .hero-image-bg {
            height: 350px !important;
          }
          .hero-image-text {
            font-size: 3.5rem !important;
          }
          .hero-floating-card {
            bottom: -1.5rem !important;
            left: -1rem !important;
            max-width: 240px !important;
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding-top: 4rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .hero-buttons > a > button {
            width: 100% !important;
          }
          .hero-trust {
            gap: 1rem !important;
          }
          .hero-image-bg {
            height: 300px !important;
          }
          .hero-image-text {
            font-size: 2.5rem !important;
          }
          .hero-floating-card {
            bottom: -1rem !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto !important;
            max-width: 260px !important;
          }
        }
        @media (max-width: 390px) {
          .hero-section {
            padding-top: 3rem !important;
          }
          .hero-title {
            font-size: 1.75rem !important;
          }
          .hero-image-bg {
            height: 260px !important;
          }
          .hero-image-text {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
