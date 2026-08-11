'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import { colors, shadows, transitions } from '@/src/lib/design-system';
import { contactSchema, type ContactFormData } from '@/src/lib/validations/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      style={{
        backgroundColor: colors.background.card,
        padding: '6rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: colors.background.primary,
                  borderRadius: '1.5rem',
                  padding: '4rem 3rem',
                  boxShadow: shadows.xl,
                  border: `1px solid ${colors.border.default}`,
                  textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 163, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                  }}
                >
                  <CheckCircle size={40} color={colors.status.success} />
                </motion.div>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: colors.text.primary,
                    marginBottom: '1rem',
                  }}
                >
                  Message Sent
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: colors.text.secondary,
                    marginBottom: '2rem',
                    lineHeight: '1.6',
                  }}
                >
                  Thanks for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button variant="primary" onClick={() => setSubmitStatus('idle')}>
                    Send Another Message
                  </Button>
                  <Link href="/calculator">
                    <Button variant="secondary">
                      Get My Free Estimate
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: colors.text.primary,
                      marginBottom: '1rem',
                    }}
                  >
                    Send Us a Message
                  </h2>
                  <p style={{ fontSize: '1.125rem', color: colors.text.secondary }}>
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Input
                      id="contact-name"
                      label="Full Name"
                      placeholder="John Doe"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    <Input
                      id="contact-email"
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Input
                      id="contact-subject"
                      label="Subject"
                      placeholder="How can we help you?"
                      error={errors.subject?.message}
                      {...register('subject')}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                  >
                    <div>
                      <label
                        htmlFor="contact-message"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          marginBottom: '0.5rem',
                          color: colors.text.primary,
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Tell us more about your question or request..."
                        rows={6}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: colors.background.card,
                          border: `1px solid ${errors.message ? colors.status.error : colors.border.default}`,
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          color: colors.text.primary,
                          resize: 'vertical',
                          transition: `border-color ${transitions.fast}, box-shadow ${transitions.fast}`,
                        }}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: colors.status.error }}>
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: `1px solid ${colors.status.error}`,
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <XCircle size={20} color={colors.status.error} />
                      <span style={{ fontSize: '0.9375rem', color: colors.status.error }}>
                        Something went wrong. Please try again.
                      </span>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      disabled={!isValid || isSubmitting}
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          section > div > div > div > div > div:last-child {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}