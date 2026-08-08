import { Navigation } from '@/src/components/landing/Navigation';
import { Hero } from '@/src/components/contact/Hero';
import { ContactForm } from '@/src/components/contact/ContactForm';
import { ContactInfo } from '@/src/components/contact/ContactInfo';
import { Footer } from '@/src/components/landing/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact FloorQuote | Garage Floor Estimates',
  description: 'Contact FloorQuote with questions about garage floor estimates, the calculator, or requesting quotes in Calgary.',
  openGraph: {
    title: 'Contact FloorQuote | Garage Floor Estimates',
    description: 'Contact FloorQuote with questions about garage floor estimates, the calculator, or requesting quotes in Calgary.',
    url: 'https://floorquote.ca/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  );
}