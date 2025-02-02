import React from "react";
import { Input } from "@nextui-org/react";
import { IoStar } from "react-icons/io5";

const BasicSectionTitle = ({ title, handleTitleChange }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Input
        onChange={handleTitleChange}
        value={title}
        label="Title of person/organization"
        placeholder="Enter your title"
        variant="bordered"
        className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
        startContent={<IoStar size={20} />}
        translate="no"
      />
    </div>
  );
};

export default BasicSectionTitle;
