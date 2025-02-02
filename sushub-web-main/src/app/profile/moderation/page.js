import Moderation from "@/components/pages/moderation/Moderation";
import React from "react";

export const metadata = {
  title: 'Moderation Panel',
  description: 'Allows managing events, opportunities, projects, organizers and much more in a single and compact view.',
}

const Page = () => {
    return <Moderation />;  
};

export default Page;
