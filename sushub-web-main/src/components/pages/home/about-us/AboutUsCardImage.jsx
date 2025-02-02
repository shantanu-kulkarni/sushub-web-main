import React from "react";
import { Image } from "@nextui-org/react";

const AboutUsCardImage = (props) => {
  return (
    <Image
      alt={props.cardAltText}
      className="object-cover w-full h-72"
      // height={200}
      shadow="sm"
      src={props.cardImageSource}
      width="100%"
    />
  );
};

export default AboutUsCardImage;
