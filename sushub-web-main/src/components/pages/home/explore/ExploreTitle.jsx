import React from "react";
import { Card } from "@nextui-org/react";
import { exploreHub } from "./ExploreConstants";

const ExploreTitle = () => {
  return (
    <div className=" flex justify-center items-center md:justify-end md:items-end">
      <Card
        isBlurred
        className="border-1 px-4 bg-background/60 dark:bg-default-100/50 w-full md:w-2/3 lg:w-1/2 justify-center items-center md:justify-start md:items-start rounded-3xl md:rounded-l-3xl md:rounded-r-none py-8 opacity-100 hover:opacity-90"
        shadow="xs"
      >
        <div className="text-4xl font-bold tracking-tight text-center text-black sm:text-5xl">
          {exploreHub}
        </div>
      </Card>
    </div>
  );
};

export default ExploreTitle;
