import { React } from "react";
import SdgSectionHeader from "./SdgSectionHeader";
import SdgSectionOrganizer from "./SdgSectionOrganizer";
import SdgSectionSdgs from "./SdgSectionSdgs";
import SdgSectionDepartment from "./SdgSectionDepartment";
import OrganizerFormNext from "../form-buttons/OrganizerFormNext";
import OrganizerFormPrevious from "../form-buttons/OrganizerFormPrevious";
const NewOrganizerSdgAndOrgSection = ({
  handleBasicInfoSubmit,
  organizationChips,
  selectedOrgChip,
  toggleOrgChip,
  sdgChips,
  selectSdgChips,
  toggleSdgChip,
  sdgColorMap,
  department,
  handleDepartmentChange,
  validateBasicInfoForm,
  isButtonDisabled,
  handlePreviousClickButton,
}) => {
  return (
    <div className="w-full">
      <SdgSectionHeader />
      <div className="flex flex-col mb-8 text-black w-full">
        <form onSubmit={handleBasicInfoSubmit}>
          <SdgSectionOrganizer
            organizationChips={organizationChips}
            selectedOrgChip={selectedOrgChip}
            toggleOrgChip={toggleOrgChip}
          />
          <SdgSectionSdgs
            sdgChips={sdgChips}
            sdgColorMap={sdgColorMap}
            selectSdgChips={selectSdgChips}
            toggleSdgChip={toggleSdgChip}
          />
          <SdgSectionDepartment
            department={department}
            handleDepartmentChange={handleDepartmentChange}
          />
          <div className="flex justify-center mt-4">
            <div className="w-full md:w-2/3 flex flex-col">
              <OrganizerFormNext
                onClickAction={validateBasicInfoForm}
                isDisabled={isButtonDisabled}
              />
              <OrganizerFormPrevious
                onClickAction={handlePreviousClickButton}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrganizerSdgAndOrgSection;
