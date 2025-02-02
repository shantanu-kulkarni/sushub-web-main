import EventsAndOpportunities from '@/components/pages/events-and-opportunities/EventsAndOpportunities'
import React from 'react'

export const metadata = {
  title: 'Events and Opportunities',
  description: 'Discover the latest events and opportunities in sustainability. Stay informed with up-to-date opportunities for contributing to a sustainable future on the Sustainability Hub portal.',
  keywords: 'sustainability events, sustainability opportunities, sustainability hub, green initiatives, eco-friendly, sustainable future, sustainability hub, uni konstanz, university of konstanz',
  openGraph: {
    title: 'Events and Opportunities | Sustainability Hub',
    description: 'Discover the latest events and opportunities in sustainability. Stay informed with up-to-date opportunities for contributing to a sustainable future on the Sustainability Hub portal.',
    url: 'https://www.sustainabilityhub-kn.de/events-and-opportunities',
    siteName: 'Sustainability Hub',
    images: [
      {
        url: 'https://www.sustainabilityhub-kn.de/project/list',
        width: 1200,
        height: 630,
        alt: 'Events and Opportunities in Sustainability',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events and Opportunities | Sustainability Hub',
    description: 'Discover the latest events and opportunities in sustainability. Stay informed with up-to-date opportunities for contributing to a sustainable future on the Sustainability Hub portal.',
    images: [
      'https://www.sustainabilityhub-kn.de/project/list',
    ],
  },
  robots: 'index, follow',
};

const Opportunities = () => {
  return <EventsAndOpportunities />;
};

export default Opportunities;
