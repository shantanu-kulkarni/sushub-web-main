import React from "react";
import ExploreTitle from "./ExploreTitle";
import Carousel from "@/components/global/carousel/Carousel";
import { projects, people, opportunities } from "./ExploreConstants";

const Explore = () => {
  return (
    <div className="px-6 md:px-0 pt-12">
      <ExploreTitle />
      <div className="px-0 md:px-6 pt-8 sm:pt-8 lg:pt-8 flex flex-col md:flex-row">
        <Carousel
          cardTitle={"Projects"}
          cardElements={projects}
          autoScrollEnabled={false}
        />
        <Carousel
          cardTitle={"People"}
          cardElements={people}
          autoScrollEnabled={false}
        />
        <Carousel
          cardTitle={"Opportunities"}
          cardElements={opportunities}
          autoScrollEnabled={false}
        />
      </div>
    </div>
  );
};

export default Explore;
