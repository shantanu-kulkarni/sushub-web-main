import React from "react";
import { Input } from "@nextui-org/react";
import { FaRegSquare } from "react-icons/fa6";

const SdgSectionDepartment = ({department, handleDepartmentChange}) => {
  return (
    <div className="w-full py-4 mt-8 flex justify-center">
      <Input
        onChange={handleDepartmentChange}
        value={department}
        label="Department"
        placeholder="Enter the name of your department"
        variant="bordered"
        className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
        startContent={<FaRegSquare size={20} />}
        translate="no"
      />
    </div>
  );
};

export default SdgSectionDepartment;
