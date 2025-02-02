import React from "react";
import { Card } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import OpportunityRemoveButton from "./OpportunityRemoveButton";

const OpportunitiesCard = ({
  currentOpportunity,
  isModeratorView = false,
  isRemoveCard = false,
}) => {
  const router = useRouter();
  return (
    <Card
      translate="no"
      onClick={() =>
        window.open(currentOpportunity.opportunity_link, "_blank", "noopener,noreferrer")
      }
      isPressable
      className="capitalize w-full h-48 aspect-video text-xl font-bold border-2 border-black text-white flex flex-col items-start justify-between p-4 hover:scale-105 shadow-md"
    >
      <div className="w-full flex flex-col h-full justify-between">
        <div className="global-subtitle text-start font-bold line-clamp-1 z-10 text-black">
          {currentOpportunity.opportunity_name}
        </div>
        <div className="flex flex-col z-10">
          <div
            className={`text-sm xs:text-sm md:text-medium font-normal pt-4 text-left text-black/60 ${
              isRemoveCard ? "line-clamp-2" : "line-clamp-3"
            }`}
          >
            {currentOpportunity.opportunity_description}
          </div>
        </div>

        {!isRemoveCard && (
          <Link
            onClick={(event) => event.stopPropagation()}
            target="_blank"
            href={currentOpportunity.opportunity_link}
            className="text-black font-extrabold text-sm underline self-end mt-auto pt-2"
          >
            Learn More
          </Link>
        )}
        {isRemoveCard && (
          <OpportunityRemoveButton opportunity={currentOpportunity} />
        )}
      </div>
    </Card>
  );
};

export default OpportunitiesCard;
