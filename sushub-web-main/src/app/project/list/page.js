import ProjectList from "@/components/pages/project/project-list/ProjectList";
import React from "react";

export const metadata = {
  title: 'Projects',
  description: 'Explore the latest sustainability projects. Stay informed with innovative projects designed to contribute to a sustainable future on the Sustainability Hub portal.',
  keywords: 'sustainability projects, sustainability hub, green initiatives, eco-friendly projects, sustainable future, university projects, uni konstanz, university of konstanz',
  openGraph: {
    title: 'Projects | Sustainability Hub',
    description: 'Discover innovative sustainability projects. Stay informed with projects designed to contribute to a sustainable future on the Sustainability Hub portal.',
    url: 'https://www.sustainabilityhub-kn.de/project/list',
    siteName: 'Sustainability Hub',
    images: [
      {
        url: 'https://www.sustainabilityhub-kn.de/project/list',
        width: 1200,
        height: 630,
        alt: 'Sustainability Projects',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Sustainability Hub',
    description: 'Explore the latest sustainability projects on the Sustainability Hub portal.',
    images: [
      'https://www.sustainabilityhub-kn.de/project/list',
    ],
  },
  robots: 'index, follow',
};

const Projects = () => {
  return <ProjectList />;
};

export default Projects;
