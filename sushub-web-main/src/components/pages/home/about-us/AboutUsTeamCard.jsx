import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { theHubTeam } from "./AboutUsConstants";
import AboutUsCardImage from "./AboutUsCardImage";
import AboutUsCardText from "./AboutUsCardText";

const AboutUsTeamCard = () => {
  return (
    <Card
      isBlurred
      className="border-1 my-4 bg-background/60 dark:bg-default-100/50 w-full h-full justify-center items-center rounded-3xl opacity-100 hover:opacity-90"
      shadow="sm"
    >
      <CardBody className="p-0 md:p-2">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="md:hidden relative col-span-6 p-0 md:px-2 md:py-2 md:col-span-6 lg:col-span-6 xl:col-span-4 lg:px-4 lg:py-4 rounded-3xl">
            <AboutUsCardImage
              cardAltText="About Team"
              cardImageSource="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg"
            />
          </div>
          <AboutUsCardText
            aboutUsCardTitle={theHubTeam.title}
            aboutUsCardDescription={theHubTeam.description}
            aboutUsButtonUrl={theHubTeam.buttonUrl}
            aboutUsButtonText={theHubTeam.buttonText}
          />
          <div className="hidden md:block relative col-span-6 p-0 md:px-2 md:py-2 md:col-span-6 lg:col-span-6 xl:col-span-4 lg:px-4 lg:py-4 rounded-3xl">
            <AboutUsCardImage
              cardAltText="About Team"
              cardImageSource="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutUsTeamCard;
