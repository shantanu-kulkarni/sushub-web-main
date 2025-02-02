import React from "react";
import { Button, Input } from "@nextui-org/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const AddFeaturedButtons = ({
  createFeaturedSection,
  errorState,
  createFeaturedSectionState,
}) => {
  return (
    <div>
      {createFeaturedSection ? (
        <div className="mt-2">
          <Button
            variant="bordered"
            onClick={() => {
              errorState();
              createFeaturedSectionState();
            }}
            className=" text-black border-black font-semibold w-full rounded-xl h-12"
            startContent={<IoIosArrowRoundBack size={20} />}
          >
            View All Featured Content
          </Button>
        </div>
      ) : (
        <div className="mt-2">
          <Button
            variant="flat"
            onClick={() => {
                createFeaturedSectionState();
            }}
            className="bg-black text-white w-full rounded-xl h-12"
            startContent={<IoMdAddCircleOutline size={20} />}
          >
            Create New Featured Content
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddFeaturedButtons;
