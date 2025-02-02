import React from "react";
import AboutUsHubCard from "./AboutUsHubCard";
import AboutUsVisionCard from "./AboutUsVisionCard";
import AboutUsTeamCard from "./AboutUsTeamCard";
import { Card } from "@nextui-org/react";
import { theHubAboutUsTitle } from "./AboutUsConstants";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-0 pt-12">
      <Card
        isBlurred
        className="border-1 px-4 bg-background/60 dark:bg-default-100/50 md:w-2/3 lg:w-1/2 justify-center items-center md:justify-start md:items-start rounded-3xl md:rounded-r-3xl md:rounded-l-none py-8 opacity-100 hover:opacity-90"
        shadow="sm"
      >
        <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
          {theHubAboutUsTitle}
        </div>
      </Card>
      <div className="px-0 md:px-6 pt-8 sm:pt-8 lg:pt-8">
        <AboutUsHubCard />
        <AboutUsTeamCard />
        <AboutUsVisionCard />
      </div>
    </div>
  );
};

export default AboutUs;
