import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FloorQuote - Garage Floor Coating Cost Estimator",
  description: "Get instant, accurate garage floor coating estimates using Calgary market pricing.",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FloorQuote',
  description: 'Intelligent garage floor coating cost estimator and contractor matching platform',
  url: 'https://floorquote.ca',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CAD',
    description: 'Free garage floor coating estimates',
  },
  provider: {
    '@type': 'Organization',
    name: 'FloorQuote',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
