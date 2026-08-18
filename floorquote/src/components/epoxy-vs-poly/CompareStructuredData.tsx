export function CompareStructuredData() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://www.floorquoteconnect.com/epoxy-vs-polyaspartic-garage-floor-calgary',
      url: 'https://www.floorquoteconnect.com/epoxy-vs-polyaspartic-garage-floor-calgary',
      name: 'Epoxy vs Polyaspartic Garage Floors in Calgary | FloorQuote',
      description:
        'Compare epoxy and polyaspartic garage flooring in Calgary. See differences in cost, durability, cure time, UV resistance and which system fits your garage.',
      inLanguage: 'en-CA',
      about: {
        '@type': 'Thing',
        name: 'Epoxy vs Polyaspartic Garage Floors in Calgary',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.floorquoteconnect.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Epoxy vs Polyaspartic Garage Floors Calgary',
          item: 'https://www.floorquoteconnect.com/epoxy-vs-polyaspartic-garage-floor-calgary',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is polyaspartic better than epoxy for Calgary garage floors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Polyaspartic is not universally better, but it can be a stronger fit for many Calgary garages because of its fast cure time, UV stability and moisture resistance. Epoxy can still be a practical option for budget-focused projects, high-build applications and situations where longer working time is helpful.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is polyaspartic more expensive than epoxy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the base rate is typically higher. FloorQuote estimates epoxy in the $3\u20138 per square foot range, while polyaspartic typically falls in the $6\u201310 range. The actual estimate also depends on your garage size, concrete condition and finish.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does epoxy take to cure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard epoxy typically requires 24\u201372 hours to cure before regular foot traffic and several days before vehicle traffic. Actual cure time depends on the specific product, ambient temperature and humidity during application.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does polyaspartic take to cure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Polyaspartic coatings generally cure much faster than epoxy, often becoming walkable within a few hours. This faster return to service is one of the main reasons Calgary homeowners choose polyaspartic systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Calgary\'s cold weather affect garage floor coating?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Calgary\'s seasonal temperature swings can affect installation conditions. Some coatings need specific temperature ranges during application. Polyaspartic generally handles lower installation temperatures better than standard epoxy, but the actual range depends on the specific product and manufacturer specifications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can epoxy and polyaspartic be used together?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, hybrid systems are common. A typical approach uses an epoxy base coat for adhesion and build, decorative flakes or aggregate for texture and colour, and a polyaspartic topcoat for UV stability and fast cure. Different layers perform different functions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which coating is better for a garage with road salt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both systems can handle road salt exposure when properly applied, but coating selection and surface preparation matter more in Calgary than in milder climates. The floor needs a system that bonds well to clean, prepared concrete and holds up under repeated salt and moisture exposure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which coating should I choose for my garage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no single best coating for all Calgary garages. The right system depends on your priorities\u2014whether that is upfront cost, fast return to service, UV resistance or long-term durability. Use the FloorQuote calculator to compare estimates based on your actual garage details.',
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
