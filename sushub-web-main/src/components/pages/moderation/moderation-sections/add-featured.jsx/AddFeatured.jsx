import { React, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import CreateFeaturedAnimation from "./CreateFeaturedAnimation";
import AddFeaturedButtons from "./AddFeaturedButtons";
import ShowFeaturedContent from "./ShowFeaturedContent";
import CreateFeaturedContentForm from "./CreateFeaturedContentForm";
import { FeaturedContext } from "@/context/FeaturedContext";
import { Featured } from "@/app/schema/Featured";

const AddFeatured = () => {
  const { featuredContent, setFeaturedContent, defaultImageUrl } =
    useContext(FeaturedContext);
  const [createFeaturedSection, setCreateFeaturedSection] = useState(false);
  const [featuredTitle, setFeaturedTitle] = useState("");
  const [featuredDescription, setFeaturedDescription] = useState("");
  const [featuredVisibility, setFeaturedVisibility] = useState(false);
  const [featuredUrl, setFeaturedUrl] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState(defaultImageUrl);
  const [errors, setErrors] = useState({});
  const [featuredSubmissionLoading, setFeaturedSubmissionLoading] = useState(false);

  const handleFeaturedTitleChange = (e) => {
    setFeaturedTitle(e.target.value);
  };
  const handleFeaturedDescriptionChange = (e) => {
    setFeaturedDescription(e.target.value);
  };
  const handleFeaturedVisibilityChange = (value) => {
    setFeaturedVisibility(value);
  };
  const handleFeaturedUrlChange = (e) => {
    setFeaturedUrl(e.target.value);
  };
  const handleFeaturedImageUrlChange = (e) => {
    setFeaturedImageUrl(e.target.value);
  };

  const validateFeaturedContentForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!featuredTitle) {
      formIsValid = false;
      errors["featuredTitle"] = "Featured content title is required";
    }
    if (!featuredDescription) {
      formIsValid = false;
      errors["featuredDescription"] =
        "Featured content description is required";
    }
    if (!featuredUrl) {
      formIsValid = false;
      errors["featuredUrl"] = "Featured content URL is required";
    } else {
      try {
        new URL(featuredUrl);
      } catch (e) {
        formIsValid = false;
        errors["featuredUrl"] = "Invalid URL";
      }
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleFeaturedContentSubmit = (e) => {
    e.preventDefault();
    if (validateFeaturedContentForm()) {
      setFeaturedSubmissionLoading(true);
      const featuredInstance = new Featured({
        featured_id: 0,
        featured_name: featuredTitle,
        featured_description: featuredDescription,
        featured_image: featuredImageUrl,
        featured_link: featuredUrl,
        featured_visibility: featuredVisibility,
      }).toJson();
      
      Featured.addFeaturedContent(featuredInstance)
        .then((allUpdatedFeaturedContent) => {
          setFeaturedContent(allUpdatedFeaturedContent);
          notify();
          setFeaturedTitle("");
          setFeaturedDescription("");
          setFeaturedVisibility(false);
          setFeaturedUrl("");
          featuredImageUrl !== defaultImageUrl ? setFeaturedImageUrl("") : null;
          setCreateFeaturedSection(false);
        })
        .catch((e) => {
          console.error("There was some error with featured content", e);
          toast.error("Failed to create featured content. Please try again.");
        })
        .finally(() => {
          setFeaturedSubmissionLoading(false);
        });
    } else {
      //console.log("Validation Failed");
    }
  };

  const notify = () => {
    toast(`Featured content ${featuredTitle} has been created!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };

  return (
    <div className="mt-4">
      <AddFeaturedButtons
        createFeaturedSection={createFeaturedSection}
        errorState={() => setErrors({})}
        createFeaturedSectionState={() =>
          setCreateFeaturedSection(!createFeaturedSection)
        }
      />
      <div className="mt-2">
        {createFeaturedSection ? (
          <div className="mt-8">
            <div className="w-full flex flex-col justify-center items-center">
              <CreateFeaturedAnimation
                featuredImageUrl={featuredImageUrl}
                setFeaturedImageUrl={setFeaturedImageUrl}
              />
              <div className="mt-8 text-left flex-row w-full text-black">
                <CreateFeaturedContentForm
                  featuredContentTitle={featuredTitle}
                  featuredContentDescription={featuredDescription}
                  featuredContentUrl={featuredUrl}
                  featuredContentImageUrl={featuredImageUrl}
                  featuredContentVisibility={featuredVisibility}
                  errors={errors}
                  featuredSubmissionLoading={featuredSubmissionLoading}
                  handleFeaturedContentTitleChange={handleFeaturedTitleChange}
                  handleFeaturedContentDescriptionChange={handleFeaturedDescriptionChange}
                  handleFeaturedContentUrlChange={handleFeaturedUrlChange}
                  handleFeaturedContentImageUrlChange={handleFeaturedImageUrlChange}
                  handleFeaturedContentVisibility={handleFeaturedVisibilityChange}
                  handleFeaturedContentSubmit={handleFeaturedContentSubmit}
                  validateFeaturedContentForm={validateFeaturedContentForm}
                />
              </div>
            </div>
          </div>
        ) : (
          <ShowFeaturedContent listOfItems={featuredContent} />
        )}
      </div>
    </div>
  );
};

export default AddFeatured;
