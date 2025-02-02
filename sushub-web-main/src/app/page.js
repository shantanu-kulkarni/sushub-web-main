import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicHomePage = dynamic(() => import("@/components/pages/home/Home"), {
  ssr: false,
});

export const metadata = {
  title: "Sustainability Hub",
  description:
    "Explore the Sustainability Hub, your go-to platform for the latest sustainability events, projects, and opportunities. Join the movement and contribute to a sustainable future.",
  keywords: 'sustainability hub, sustainability events, sustainability projects, green initiatives, eco-friendly opportunities, sustainable future, uni konstanz, university of konstanz',
  openGraph: {
    title: "Sustainability Hub | Sustainability Events, Projects & Opportunities",
    description: "Discover sustainability events, projects, and opportunities on the Sustainability Hub. Contribute to a sustainable future and join the movement.",
    url: 'https://www.sustainabilityhub-kn.de',
    siteName: 'Sustainability Hub',
    images: [
      {
        url: 'https://www.sustainabilityhub-kn.de',
        width: 1200,
        height: 630,
        alt: 'Sustainability Hub Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sustainability Hub | Sustainability Events, Projects & Opportunities",
    description: "Explore the Sustainability Hub for the latest sustainability events, projects, and opportunities. Be part of the change.",
    images: [
      'https://www.sustainabilityhub-kn.de',
    ],
  },
  robots: 'index, follow',
};

const Home = () => {
  return <DynamicHomePage />;
};

export default Home;
