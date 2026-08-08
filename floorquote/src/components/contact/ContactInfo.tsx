'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { colors, shadows, transitions } from '@/src/lib/design-system';

export function ContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@floorquote.ca',
      href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@floorquote.ca'}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Calgary, Alberta, Canada',
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: process.env.NEXT_PUBLIC_CONTACT_PHONE || '(403) 555-0123',
      href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '4035550123'}`,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: '6rem 0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: colors.background.card,
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: shadows.sm,
                border: `1px solid ${colors.border.default}`,
                transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = shadows.sm;
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <info.icon size={24} color={colors.accent.blue} />
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: colors.text.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                {info.label}
              </div>
              {info.href ? (
                <a
                  href={info.href}
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    textDecoration: 'none',
                    transition: `color ${transitions.fast}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent.blue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text.primary;
                  }}
                >
                  {info.value}
                </a>
              ) : (
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                  }}
                >
                  {info.value}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}