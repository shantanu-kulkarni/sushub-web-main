import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { theHubDetails } from "./AboutUsConstants";
import AboutUsCardImage from "./AboutUsCardImage";
import AboutUsCardText from "./AboutUsCardText";

const AboutUsHubCard = () => {
  return (
    <Card
      isBlurred
      className="border-1 my-4 bg-background/60 dark:bg-default-100/50 w-full h-full justify-center items-center rounded-3xl opacity-100 hover:opacity-90"
      shadow="sm"
    >
      <CardBody className="p-0 md:p-2">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 p-0 md:px-2 md:py-2 md:col-span-6 lg:col-span-6 xl:col-span-4 lg:px-4 lg:py-4 rounded-3xl">
            <AboutUsCardImage
              cardAltText="About Hub"
              cardImageSource="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=sph"
            />
          </div>
          <AboutUsCardText
            aboutUsCardTitle={theHubDetails.title}
            aboutUsCardDescription={theHubDetails.description}
            aboutUsButtonUrl={theHubDetails.buttonUrl}
            aboutUsButtonText={theHubDetails.buttonText}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutUsHubCard;
