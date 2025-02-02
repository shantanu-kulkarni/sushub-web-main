import React from "react";
import OrganizerFormPrevious from "../form-buttons/OrganizerFormPrevious";
import OrganizerFormSubmit from "../form-buttons/OrganizerFormSubmit";
import AdditionalSectionHeader from "./AdditionalSectionHeader";
import AdditionalSectionTextArea from "./AdditionalSectionTextArea";
import AdditionalSectionFeaturedCheck from "./AdditionalSectionFeaturedCheck";

const NewOrganizerAdditionalInfoSection = ({
  handleAdditionalInfoSubmit,
  description,
  imageUrl,
  setImageUrl,
  handleDescriptionChange,
  errors,
  showPeople,
  setShowPeople,
  validationAdditionalInfoForm,
  handlePreviousClickButton,
  additionalInfoLoading,
}) => {
  return (
    <div className="w-full">
      <AdditionalSectionHeader imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <div className="flex flex-col my-8 text-black">
        <form onSubmit={handleAdditionalInfoSubmit}>
          <AdditionalSectionTextArea
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            errors={errors}
          />
          <AdditionalSectionFeaturedCheck
            showPeople={showPeople}
            setShowPeople={setShowPeople}
          />
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-2/3 flex flex-col">
              <OrganizerFormSubmit
                onClickAction={validationAdditionalInfoForm}
                additionalInfoLoading={additionalInfoLoading}
              />
              {!additionalInfoLoading ? (
                <OrganizerFormPrevious
                  onClickAction={handlePreviousClickButton}
                />
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrganizerAdditionalInfoSection;
