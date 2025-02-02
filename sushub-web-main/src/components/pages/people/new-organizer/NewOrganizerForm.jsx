"use client";
import { React, useState, useEffect, useContext } from "react";
import { useRouter } from "next-nprogress-bar";
import NewOrganizerBackButton from "./NewOrganizerBackButton";
import NewOrganizerHeader from "./NewOrganizerHeader";
import createSDG from "@/utils/ProjectSdgsData";
import NewOrganizerRequestSubmitted from "./NewOrganizerRequestSubmitted";
import NewOrganizerFormHeader from "./organizer-form/NewOrganizerFormHeader";
import NewOrganizerFormSlider from "./organizer-form/NewOrganizerFormSlider";
import NewOrganizerBasicSection from "./organizer-form/basic-section/NewOrganizerBasicSection";
import NewOrganizerSdgAndOrgSection from "./organizer-form/sdg-org-section/NewOrganizerSdgAndOrgSection";
import NewOrganizerAdditionalInfoSection from "./organizer-form/additional-section/NewOrganizerAdditionalInfoSection";
import AdditionalSectionImage from "./organizer-form/additional-section/AdditionalSectionImage";
import BasicSectionFullName from "./organizer-form/basic-section/BasicSectionFullName";
import BasicSectionEmail from "./organizer-form/basic-section/BasicSectionEmail";
import SdgSectionDepartment from "./organizer-form/sdg-org-section/SdgSectionDepartment";
import AdditionalSectionTextArea from "./organizer-form/additional-section/AdditionalSectionTextArea";
import BasicSectionPeopleOrganization from "./organizer-form/basic-section/BasicSectionPeopleOrganization";
import SdgSectionOrganizer from "./organizer-form/sdg-org-section/SdgSectionOrganizer";
import SdgSectionSdgs from "./organizer-form/sdg-org-section/SdgSectionSdgs";
import OrganizerFormModeratorSubmit from "./organizer-form/form-buttons/OrganizerFormModeratorSubmit";
import { OrganizerContext } from "@/context/OrganizerContext";
import { UserContext } from "@/context/UserContext";
import { Organizer } from "@/app/schema/Organizer";
import AdditionalSectionFeaturedCheck from "./organizer-form/additional-section/AdditionalSectionFeaturedCheck";
import { People } from "@/app/schema/People";
import { PeopleContext } from "@/context/PeopleContext";
import { AuthContext } from "@/context/AuthContext";

const NewOrganizerForm = ({ isModerator = false }) => {
  const { defaultImageUrl, organizer, setOrganizer } =
    useContext(OrganizerContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [value, setValue] = useState(0.0);
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showPeople, setShowPeople] = useState(false);
  const [errors, setErrors] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedOrgChip, setSelectedOrgChip] = useState([]);
  const [selectSdgChips, setSelectedSdgChips] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [additionalInfoLoading, setAdditionalInfoLoading] = useState(false);
  const [moderatorInfoLoading, setModeratorInfoLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { setUnverifiedOrganizer, setVerifiedOrganizer } =
    useContext(OrganizerContext);
  const { people, setPeople } = useContext(PeopleContext);

  useEffect(() => {
    setImageUrl(defaultImageUrl);
  }, [defaultImageUrl]);

  const currentPersonObject = (
    userId,
    userName,
    userEmail,
    description,
    currentProjects,
    pastProjects,
    isOrganizer,
    notification,
    organizationId,
    isUnverifiedOrganizer,
    sdgs
  ) => {
    return {
      userId,
      userName,
      userEmail,
      description,
      currentProjects,
      pastProjects,
      isOrganizer,
      notification,
      organizationId,
      isUnverifiedOrganizer,
      sdgs,
    };
  };

  const handleSliderChange = () => {
    setSliderValue(value);
  };

  const handleTitleChange = (e) => {
    setErrors({});
    setTitle(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setErrors({});
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setErrors({});
    setEmail(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setErrors({});
    setOrganizationName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setErrors({});
    setDescription(e.target.value);
  };

  const validationAdditionalInfoForm = () => {
    let additionalInfoErrors = {};
    let formIsValid = true;

    if (!description) {
      formIsValid = false;
      additionalInfoErrors["description"] = "Description is required";
    }
    setErrors(additionalInfoErrors);
    return formIsValid;
  };

  const toggleOrgChip = (chip) => {
    setSelectedOrgChip((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  };

  const toggleSdgChip = (chip) => {
    setSelectedSdgChips((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  };

  useEffect(() => {
    if (!isModerator) {
      if (selectedOrgChip.length > 0 && selectSdgChips.length > 0) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    } else {
      if (selectSdgChips.length > 0) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }
  }, [selectSdgChips, selectedOrgChip, setIsButtonDisabled, isModerator]);

  const organizationChips = [
    "UniKonstanz",
    "Individual",
    "Initiative",
    "Education",
    "Administration",
    "Enterprise",
    "CampusGroup",
  ];
  const sdgChips = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const createSDGColorMap = () => {
    const map = {};
    sdgChips.forEach((sdg) => {
      map[sdg] = createSDG(sdg).color;
    });
    return map;
  };

  const sdgColorMap = createSDGColorMap();

  const validateBasicInfoForm = () => {
    //console.log("inside validate", { fullName, email });
    let errors = {};
    let formIsValid = true;

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "Full Name is required";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }

    setErrors(errors);
    return formIsValid;
  };

  const validateModeratorForm = () => {
    // console.log("inside validate", {
    //   fullName,
    //   email,
    //   description,
    //   title,
    //   selectSdgChips,
    //   selectedOrgChip,
    // });
    let errors = {};
    let formIsValid = true;

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "Full Name is required";
    }
    if (!organizationName) {
      formIsValid = false;
      errors["organizationName"] = "Organization Name is required";
    }
    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }
    if (!description) {
      formIsValid = false;
      errors["description"] = "Description is required";
    }
    setErrors(errors);
    return formIsValid;
  };

  const handlePreviousClickButton = (e) => {
    setValue(value - 0.5);
  };

  const handleBasicInfoSubmit = (e) => {
    //console.log("INSIDE HANDLE SUBMIT");
    e.preventDefault();
    if (validateBasicInfoForm()) {
      //console.log("Form Submitted", { title, fullName, email });
      setValue(value + 0.5);
    } else {
      //console.log("Validation Failed");
    }
  };

  const handleAdditionalInfoSubmit = (e) => {
    e.preventDefault();
    if (validationAdditionalInfoForm()) {
      setAdditionalInfoLoading(true);
      Organizer.addUnverifiedOrganizer(
        new Organizer({
          organizer_id: 0,
          organizer_title: title,
          organizer_name: fullName,
          organizer_email: email,
          user_email: userInfo.user_email,
          organizer_type: selectedOrgChip,
          organizer_sdgs: selectSdgChips,
          organizer_department: department,
          organizer_imageUrl: imageUrl,
          organizer_description: description,
          organizer_projects: [],
          organizer_verifiedProjects: [],
          organizer_unverifiedProjects: [],
          organizer_isFeatured: showPeople,
          organizer_projectsMap: {},
        }).toJson(),
        setUserInfo
      )
        .then((getUpdatedOrganizerList) => {
          const { individualData, mergedData } = getUpdatedOrganizerList;
          setOrganizer(mergedData);
          setVerifiedOrganizer(individualData["verified"]);
          setUnverifiedOrganizer(individualData["unverified"]);
          setRequestSubmitted(true);
        })
        .catch((e) => {
          console.error("There was some error in getting organizer list", e);
        })
        .finally(() => {
          setAdditionalInfoLoading(false);
        });
    }
  };

  const handleModeratorInfoSubmit = (e) => {
    e.preventDefault();
    if (validateModeratorForm()) {
      setModeratorInfoLoading(true);
      const peopleInstance = new People({
        people_id: 0,
        people_name: fullName,
        people_pastProjects: {},
        people_isOrganizer: false,
        people_organization: organizationName,
        people_department: department,
        people_description: description,
        people_email: email,
        people_imgURL: imageUrl,
        people_sdgs: selectSdgChips,
      });

      People.addPeople(peopleInstance.toJson())
        .then((updatedPeopleList) => {
          setPeople(updatedPeopleList);
          setRequestSubmitted(true);
        })
        .catch((e) => {
          console.error("There was some error in getting people list", e);
        })
        .finally(() => {
          setModeratorInfoLoading(false);
        });
    }
  };

  const router = useRouter();

  if (!currentUser) {
    return;
  }
  if (userInfo && (userInfo.isOrganizer || userInfo.isUnverifiedOrganizer)) {
    return;
  }

  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        {!isModerator ? (
          <div className="flex justify-center">
            <div className="global-box-layout">
              <NewOrganizerBackButton />
              {!requestSubmitted ? <NewOrganizerHeader /> : null}
              {requestSubmitted ? (
                <NewOrganizerRequestSubmitted
                  onClickPeopleButton={() => router.back()}
                  onClickEmailButton={() =>
                    router.push("mailto:greenoffice@uni-konstanz.de")
                  }
                />
              ) : (
                <div className="rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-4 mt-8 shadow-md">
                  <NewOrganizerFormHeader />
                  <NewOrganizerFormSlider
                    sliderBulletLabel1={"General"}
                    sliderBulletLabel2={"Organization"}
                    sliderBulletLabel3={"Details"}
                    currentSliderValue={value}
                    handleSliderChangeFunction={handleSliderChange}
                  />
                  <div className="flex justify-center">
                    <div className="w-full md:w-2/3 flex-col rounded-3xl bg-default-100/50 px-2 md:px-8 pb-8 pt-4 shadow-md">
                      {value === 0.0 ? (
                        <NewOrganizerBasicSection
                          handleBasicInfoSubmit={handleBasicInfoSubmit}
                          title={title}
                          handleTitleChange={handleTitleChange}
                          fullName={fullName}
                          handleFullNameChange={handleFullNameChange}
                          email={email}
                          handleEmailChange={handleEmailChange}
                          errors={errors}
                          validateBasicInfoForm={validateBasicInfoForm}
                        />
                      ) : value === 0.5 ? (
                        <NewOrganizerSdgAndOrgSection
                          handleBasicInfoSubmit={handleBasicInfoSubmit}
                          organizationChips={organizationChips}
                          selectedOrgChip={selectedOrgChip}
                          toggleOrgChip={toggleOrgChip}
                          sdgChips={sdgChips}
                          selectSdgChips={selectSdgChips}
                          toggleSdgChip={toggleSdgChip}
                          sdgColorMap={sdgColorMap}
                          department={department}
                          handleDepartmentChange={handleDepartmentChange}
                          validateBasicInfoForm={validateBasicInfoForm}
                          isButtonDisabled={isButtonDisabled}
                          handlePreviousClickButton={handlePreviousClickButton}
                        />
                      ) : (
                        <NewOrganizerAdditionalInfoSection
                          handleAdditionalInfoSubmit={
                            handleAdditionalInfoSubmit
                          }
                          description={description}
                          imageUrl={imageUrl}
                          setImageUrl={setImageUrl}
                          handleDescriptionChange={handleDescriptionChange}
                          errors={errors}
                          showPeople={showPeople}
                          setShowPeople={setShowPeople}
                          validationAdditionalInfoForm={
                            validationAdditionalInfoForm
                          }
                          handlePreviousClickButton={handlePreviousClickButton}
                          additionalInfoLoading={additionalInfoLoading}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-black">
            {requestSubmitted ? (
              <NewOrganizerRequestSubmitted
                onClickPeopleButton={() => router.back()}
                onClickEmailButton={() =>
                  router.push("mailto:greenoffice@uni-konstanz.de")
                }
              />
            ) : (
              <div>
                <form onSubmit={handleModeratorInfoSubmit}>
                  <div className="mb-10">
                    <AdditionalSectionImage
                      imageUrl={imageUrl}
                      setImageUrl={setImageUrl}
                    />
                  </div>
                  <BasicSectionFullName
                    fullName={fullName}
                    handleFullNameChange={handleFullNameChange}
                    errors={errors}
                  />
                  <BasicSectionPeopleOrganization
                    organizationName={organizationName}
                    handleOrganizationChange={handleOrganizationChange}
                    errors={errors}
                  />
                  <BasicSectionEmail
                    email={email}
                    handleEmailChange={handleEmailChange}
                    errors={errors}
                  />
                  <SdgSectionDepartment
                    department={department}
                    handleDepartmentChange={handleDepartmentChange}
                  />
                  <AdditionalSectionTextArea
                    description={description}
                    handleDescriptionChange={handleDescriptionChange}
                    errors={errors}
                  />
                  <SdgSectionSdgs
                    sdgChips={sdgChips}
                    selectSdgChips={selectSdgChips}
                    sdgColorMap={sdgColorMap}
                    toggleSdgChip={toggleSdgChip}
                  />
                  <div className="flex justify-center">
                    <div className="w-2/3 mt-8">
                      <OrganizerFormModeratorSubmit
                        onClickAction={validateModeratorForm}
                        isDisabled={isButtonDisabled}
                        moderatorInfoLoading={moderatorInfoLoading}
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewOrganizerForm;
