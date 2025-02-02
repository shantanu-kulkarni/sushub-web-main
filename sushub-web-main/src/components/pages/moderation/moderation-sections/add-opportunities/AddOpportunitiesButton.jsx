import React from "react";
import { Button } from "@nextui-org/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const AddOpportunitiesButtons = ({
  createOpportunitySection,
  errorState,
  createOpportunitySectionState,
}) => {
  return (
    <div>
      {createOpportunitySection ? (
        <div className="mt-2">
          <Button
            variant="bordered"
            onClick={() => {
              errorState();
              createOpportunitySectionState();
            }}
            className=" text-black border-black font-semibold w-full rounded-xl h-12"
            startContent={<IoIosArrowRoundBack size={20} />}
          >
            View All Opportunities
          </Button>
        </div>
      ) : (
        <div className="mt-2">
          <Button
            variant="flat"
            onClick={() => {
                createOpportunitySectionState();
            }}
            className="bg-black text-white w-full rounded-xl h-12"
            startContent={<IoMdAddCircleOutline size={20} />}
          >
            Create New Opportunity
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddOpportunitiesButtons;
