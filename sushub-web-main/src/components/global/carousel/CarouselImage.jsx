import React from "react";
import { Image } from "@nextui-org/react";

const CarouselImage = (props) => {
  return (
    <Image
      removeWrapper
      alt="Explore Card"
      className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
      src={props.cardUrl}
    />
  );
};

export default CarouselImage;
