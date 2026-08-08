'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { colors } from '@/src/lib/design-system';

export function Hero() {
  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0 4rem',
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
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
            }}
          >
            <MessageSquare size={40} color={colors.accent.blue} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              lineHeight: '1.1',
              color: colors.text.primary,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            How Can We Help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: colors.text.secondary,
            }}
          >
            Have a question about your estimate, the calculator, or requesting quotes? Send us a message and we'll get back to you.
          </motion.p>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section h1 {
            font-size: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}