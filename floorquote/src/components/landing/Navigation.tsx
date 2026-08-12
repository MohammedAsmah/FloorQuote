'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calculator, BookOpen, Mail, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { colors, shadows, transitions, zIndex } from '@/lib/design-system';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Calculator', href: '/calculator', icon: Calculator },
    { name: 'How It Works', href: '/#how-it-works', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: zIndex.sticky,
        backgroundColor: isScrolled ? colors.background.glass : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? shadows.md : 'none',
        transition: `background-color ${transitions.normal}, backdrop-filter ${transitions.normal}, box-shadow ${transitions.normal}`,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <Image
                src="/floorequote logo.png"
                alt="FloorQuote"
                width={160}
                height={40}
                className="nav-logo"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: colors.text.secondary,
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  transition: `color ${transitions.fast}`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.text.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text.secondary}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-ctas">
            <Link href="/calculator">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.625rem 1.25rem',
                  backgroundColor: colors.accent.blue,
                  color: colors.text.inverse,
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

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? (
              <X size={24} color={colors.text.primary} />
            ) : (
              <Menu size={24} color={colors.text.primary} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              backgroundColor: colors.background.card,
              borderBottom: `1px solid ${colors.border.default}`,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.5rem' }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 0',
                      textDecoration: 'none',
                      color: colors.text.primary,
                      fontSize: '1rem',
                      fontWeight: '500',
                    }}
                  >
                    <link.icon size={20} color={colors.accent.blue} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: colors.accent.blue,
                      color: colors.text.inverse,
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Get My Free Estimate
                  </motion.button>
                </Link>
                <Link href="/quotes" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: 'transparent',
                      color: colors.accent.blue,
                      border: `1px solid ${colors.accent.blue}`,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Request Quotes
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
