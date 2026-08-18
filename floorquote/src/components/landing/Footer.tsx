'use client';

import { motion } from 'framer-motion';
import { Share2, MessageSquare, Camera, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { colors, transitions } from '@/lib/design-system';

export function Footer() {
  const footerLinks = {
    garageFlooring: [
      { name: 'Garage Flooring in Calgary', href: '/calgary-garage-flooring' },
      { name: 'Garage Flooring Cost in Calgary', href: '/calgary-garage-flooring-cost' },
      { name: 'Epoxy vs Polyaspartic Garage Floors', href: '/epoxy-vs-polyaspartic-garage-floor-calgary' },
      { name: 'Garage Flooring Calculator', href: '/calculator' },
      { name: 'Get Garage Flooring Quotes', href: '/quotes' },
      { name: 'How It Works', href: '/#how-it-works' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
    ],
  };

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Share' },
    { icon: MessageSquare, href: '#', label: 'Message' },
    { icon: Camera, href: '#', label: 'Camera' },
    { icon: Briefcase, href: '#', label: 'Business' },
  ];

  return (
    <footer
      style={{
        backgroundColor: colors.background.card,
        borderTop: `1px solid ${colors.border.default}`,
        padding: '4rem 0 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <Image
                  src="/floorequote logo.png"
                  alt="FloorQuote"
                  width={160}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </Link>
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: '1.6',
                color: colors.text.secondary,
                marginBottom: '1.5rem',
                maxWidth: '300px',
              }}
            >
              Intelligent garage floor coating cost estimator and contractor matching platform for Calgary homeowners.
            </p>
            
          </motion.div>

          {/* FloorQuote Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: colors.text.primary,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Garage Flooring
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.garageFlooring.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      textDecoration: 'none',
                      transition: `color ${transitions.fast}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.accent.blue;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.text.secondary;
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: colors.text.primary,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Company
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: colors.text.secondary,
                      textDecoration: 'none',
                      transition: `color ${transitions.fast}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.accent.blue;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.text.secondary;
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Mail size={20} color={colors.text.secondary} />
            <span style={{ fontSize: '0.9375rem', color: colors.text.secondary }}>
              hello@floorquoteconnect.com
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin size={20} color={colors.text.secondary} />
            <span style={{ fontSize: '0.9375rem', color: colors.text.secondary }}>
              Serving Calgary, Alberta
            </span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            borderTop: `1px solid ${colors.border.default}`,
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.875rem', color: colors.text.muted }}>
            © {new Date().getFullYear()} FloorQuote. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link href="/calculator">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.625rem 1.25rem',
                  backgroundColor: colors.accent.blue,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: `transform ${transitions.fast}`,
                }}
              >
                Get My Free Estimate
              </motion.button>
            </Link>
            <Link href="/quotes">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.625rem 1.25rem',
                  backgroundColor: 'transparent',
                  color: colors.accent.blue,
                  border: `1px solid ${colors.accent.blue}`,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: `transform ${transitions.fast}`,
                }}
              >
                Request Quotes
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          footer > div > div:nth-child(2) {
            flex-direction: column;
            gap: 1rem;
          }
          footer > div > div:last-child {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}