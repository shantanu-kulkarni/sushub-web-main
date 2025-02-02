import React from "react";
import { Input } from "@nextui-org/react";
import { GoOrganization } from "react-icons/go";

const BasicSectionPeopleOrganization = ({ organizationName, handleOrganizationChange, isDisabled, errors }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Input
        isRequired
        isDisabled={isDisabled}
        onChange={handleOrganizationChange}
        value={organizationName}
        label="Organization"
        placeholder="Enter your organization name"
        variant="bordered"
        isInvalid={errors.organizationName ? true : false}
        errorMessage={errors.organizationName}
        className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
        startContent={<GoOrganization size={20} />}
        translate="no"
      />
    </div>
  );
};

export default BasicSectionPeopleOrganization;
