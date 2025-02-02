import React from "react";
import { Input, Button } from "@nextui-org/react";
import BasicSectionHeader from "./BasicSectionHeader";
import BasicSectionTitle from "./BasicSectionTitle";
import BasicSectionFullName from "./BasicSectionFullName";
import BasicSectionEmail from "./BasicSectionEmail";
import OrganizerFormNext from "../form-buttons/OrganizerFormNext";
import OrganizerFormPrevious from "../form-buttons/OrganizerFormPrevious";
const NewOrganizerBasicSection = ({
  handleBasicInfoSubmit,
  title,
  handleTitleChange,
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  errors,
  validateBasicInfoForm,
}) => {
  return (
    <div className="w-full">
      <BasicSectionHeader />
      <div className="flex flex-col my-8 text-black">
        <form onSubmit={handleBasicInfoSubmit}>
          <BasicSectionTitle
            title={title}
            handleTitleChange={handleTitleChange}
          />
          <BasicSectionFullName
            fullName={fullName}
            handleFullNameChange={handleFullNameChange}
            isDisabled={false}
            errors={errors}
          />
          <BasicSectionEmail
            email={email}
            handleEmailChange={handleEmailChange}
            isDisabled={false}
            errors={errors}
          />
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-2/3 flex flex-col">
              <OrganizerFormNext onClickAction={validateBasicInfoForm} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrganizerBasicSection;
