import React from "react";
import { Input } from "@nextui-org/react";
import { IoMdMail } from "react-icons/io";

const BasicSectionEmail = ({ email, handleEmailChange, isDisabled, errors }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Input
        isRequired
        isDisabled={isDisabled}
        onChange={handleEmailChange}
        value={email}
        label="Email"
        placeholder="Enter your Email"
        variant="bordered"
        isInvalid={errors.email ? true : false}
        errorMessage={errors.email}
        className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
        startContent={<IoMdMail size={20} />}
        translate="no"
      />
    </div>
  );
};

export default BasicSectionEmail;
