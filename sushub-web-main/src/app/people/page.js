import ProjectsAndPeople from '@/components/pages/people/ProjectsAndPeople'
import React from 'react'

export const metadata = {
  title: 'People',
  description: 'Discover the key individuals involved in sustainability projects. Learn about the experts and contributors working towards a sustainable future on the Sustainability Hub portal.',
  keywords: 'sustainability people, sustainability experts, sustainability hub, green leaders, eco-friendly contributors, sustainability initiatives, uni konstanz, university of konstanz',
  openGraph: {
    title: 'People | Sustainability Hub',
    description: 'Meet the individuals driving sustainability projects and initiatives. Learn about their roles and contributions on the Sustainability Hub portal.',
    url: 'https://www.sustainabilityhub-kn.de/people',
    siteName: 'Sustainability Hub',
    images: [
      {
        url: 'https://www.sustainabilityhub-kn.de/people',
        width: 1200,
        height: 630,
        alt: 'People in Sustainability',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'People | Sustainability Hub',
    description: 'Discover the individuals involved in driving sustainability projects on the Sustainability Hub portal.',
    images: [
      'https://www.sustainabilityhub-kn.de/people',
    ],
  },
  robots: 'index, follow',
};

const People = () => {
  return <ProjectsAndPeople />;
};

export default People;
