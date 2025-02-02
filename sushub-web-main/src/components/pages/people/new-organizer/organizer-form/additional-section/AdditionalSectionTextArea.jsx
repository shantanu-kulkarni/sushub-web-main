import React from "react";
import { Textarea } from "@nextui-org/react";
import { TbFileDescription } from "react-icons/tb";

const AdditionalSectionTextArea = ({
  description,
  handleDescriptionChange,
  errors,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-2/3">
        <Textarea
          aria-label="description"
          isRequired
          label="Description"
          variant="bordered"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter your description"
          isInvalid={errors.description ? true : false}
          errorMessage={errors.description}
          disableAnimation
          disableAutosize
          startContent={<TbFileDescription size={20} />}
          classNames={{
            base: "",
            input: "resize-y min-h-[40px]",
          }}
          translate="no"
        />
      </div>
    </div>
  );
};

export default AdditionalSectionTextArea;
