import { React, useState, useContext } from "react";
import toast from "react-hot-toast";
import AddOpportunitiesButtons from "./AddOpportunitiesButton";
import CreateOpporunityAnimation from "./CreateOpportunityAnimation";
import ShowOpportunities from "./ShowOpportunities";
import CreateOpportunityForm from "./CreateOpportunityForm";
import { OpportunityContext } from "@/context/OpportunityContext";
import { Opportunity } from "@/app/schema/Opportunity";

const AddOpportunities = () => {
  const [createOpportunitySection, setCreateOpportunitySection] = useState(false);
  const [opportunityName, setOpportunityName] = useState("");
  const [opportunityDescription, setOpportunityDescription] = useState("");
  const [opportunityUrl, setOpportunityUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [opportunitySubmissionLoading, setOpportunitySubmissionLoading] = useState(false); // Loading state
  const { opportunities, setOpportunities } = useContext(OpportunityContext);

  const opportunityObject = (id, name, description, link) => {
    return {
      opportunity_id: id,
      opportunity_name: name,
      opportunity_description: description,
      opportunity_link: link,
    };
  };

  const handleOpportunityNameChange = (e) => {
    setOpportunityName(e.target.value);
  };
  const handleOpportunityDescriptionChange = (e) => {
    setOpportunityDescription(e.target.value);
  };
  const handleOpportunityUrlChange = (e) => {
    setOpportunityUrl(e.target.value);
  };

  const validateOpportunityForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!opportunityName) {
      formIsValid = false;
      errors["opportunityName"] = "Opportunity Name is required";
    }
    if (!opportunityDescription) {
      formIsValid = false;
      errors["opportunityDescription"] = "Opportunity Description is required";
    }
    if (!opportunityUrl) {
      formIsValid = false;
      errors["opportunityUrl"] = "Opportunity URL is required";
    } else {
      try {
        new URL(opportunityUrl);
      } catch (e) {
        formIsValid = false;
        errors["opportunityUrl"] = "Invalid URL";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleOpportunityFormSubmit = (e) => {
    e.preventDefault();
    if (validateOpportunityForm()) {
      setOpportunitySubmissionLoading(true);
      const opportunityInstance = new Opportunity({
        opportunity_id: 0,
        opportunity_name: opportunityName,
        opportunity_description: opportunityDescription,
        opportunity_link: opportunityUrl,
      }).toJson();

      Opportunity.addOpportunity(opportunityInstance)
        .then((updatedOpportunityList) => {
          setOpportunities(updatedOpportunityList);
          notify();
          setOpportunityName("");
          setOpportunityDescription("");
          setOpportunityUrl("");
          setCreateOpportunitySection(false);
        })
        .catch((e) => {
          console.error("There was some problem", e);
          toast.error("Failed to create the opportunity. Please try again.");
        })
        .finally(() => {
          setOpportunitySubmissionLoading(false);
        });
    } else {
      //console.log("Validation Failed");
    }
  };

  const notify = () => {
    toast(`Opportunity ${opportunityName} has been created!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };

  return (
    <div className="mt-4">
      <AddOpportunitiesButtons
        createOpportunitySection={createOpportunitySection}
        errorState={() => setErrors({})}
        createOpportunitySectionState={() =>
          setCreateOpportunitySection(!createOpportunitySection)
        }
      />
      <div className="mt-2">
        {createOpportunitySection ? (
          <div className="mt-8">
            <div className="w-full flex flex-col justify-center items-center">
              <CreateOpporunityAnimation />
              <div className="mt-8 text-left flex-row w-full text-black">
                <CreateOpportunityForm
                  opportunityName={opportunityName}
                  opportunityDescription={opportunityDescription}
                  opportunityUrl={opportunityUrl}
                  errors={errors}
                  opportunitySubmissionLoading={opportunitySubmissionLoading}
                  handleOpportunityNameChange={handleOpportunityNameChange}
                  handleOpportunityDescriptionChange={
                    handleOpportunityDescriptionChange
                  }
                  handleOpportunityUrlChange={handleOpportunityUrlChange}
                  handleOpportunitySubmit={handleOpportunityFormSubmit}
                  validateOpportunityForm={validateOpportunityForm}
                />
              </div>
            </div>
          </div>
        ) : (
          <ShowOpportunities listOfItems={opportunities} />
        )}
      </div>
    </div>
  );
};

export default AddOpportunities;
