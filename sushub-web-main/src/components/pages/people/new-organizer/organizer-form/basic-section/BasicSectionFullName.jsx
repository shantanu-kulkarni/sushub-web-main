import React from "react";
import { Input } from "@nextui-org/react";
import { IoPerson } from "react-icons/io5";

const BasicSectionFullName = ({ fullName, handleFullNameChange, isDisabled, errors }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Input
        isRequired
        isDisabled={isDisabled}
        onChange={handleFullNameChange}
        value={fullName}
        label="Full Name"
        placeholder="Enter your full name/organization name"
        variant="bordered"
        isInvalid={errors.fullName ? true : false}
        errorMessage={errors.fullName}
        className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
        startContent={<IoPerson size={20} />}
        translate="no"
      />
    </div>
  );
};

export default BasicSectionFullName;
