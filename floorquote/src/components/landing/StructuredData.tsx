export function StructuredData() {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}