import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { theHubVision } from "./AboutUsConstants";
import AboutUsCardImage from "./AboutUsCardImage";
import AboutUsCardText from "./AboutUsCardText";

const AboutUsVisionCard = () => {
  return (
    <Card
      isBlurred
      className="border-1 m-auto my-4 bg-background/60 dark:bg-default-100/50 w-full h-full justify-center items-center rounded-3xl opacity-100 hover:opacity-90"
      shadow="sm"
    >
      <CardBody className="p-0 md:p-2">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 p-0 md:px-2 md:py-2 md:col-span-6 lg:col-span-6 xl:col-span-4 lg:px-4 lg:py-4 rounded-3xl">
            <AboutUsCardImage
              cardAltText="Hub Vision"
              cardImageSource="https://media.istockphoto.com/id/1413647299/vector/sunny-autumn-background-with-leaves-and-highlights.jpg?s=612x612&w=0&k=20&c=zpElduPkLcmAHPlB2q1C0tA-Xg0m9qP2dDMigIJDD6o="
            />
          </div>
          <AboutUsCardText
            aboutUsCardTitle={theHubVision.title}
            aboutUsCardDescription={theHubVision.description}
            aboutUsButtonUrl={theHubVision.buttonUrl}
            aboutUsButtonText={theHubVision.buttonText}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutUsVisionCard;
