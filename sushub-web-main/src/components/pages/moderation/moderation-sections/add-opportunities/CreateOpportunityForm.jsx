import React from "react";
import { IoStar } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { Input, Button, Textarea, Progress } from "@nextui-org/react";
import { TbFileDescription } from "react-icons/tb";
const CreateOpportunityForm = ({
  opportunityName,
  opportunityDescription,
  opportunityUrl,
  errors,
  opportunitySubmissionLoading,
  handleOpportunityNameChange,
  handleOpportunityDescriptionChange,
  handleOpportunityUrlChange,
  handleOpportunitySubmit,
  validateOpportunityForm,
}) => {
  return (
    <form onSubmit={handleOpportunitySubmit}>
      <div className="w-full mt-4 flex justify-center ">
        <Input
          isRequired
          onChange={handleOpportunityNameChange}
          value={opportunityName}
          label="Title"
          placeholder="Enter the title of the opportunity"
          variant="bordered"
          isInvalid={errors.opportunityName ? true : false}
          errorMessage={errors.opportunityName}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0"
          startContent={<IoStar size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Textarea
          isRequired
          disableAnimation
          disableAutosize
          classNames={{
            base: "",
            input: "resize-y min-h-[40px]",
          }}
          onChange={handleOpportunityDescriptionChange}
          value={opportunityDescription}
          label="Description"
          placeholder="Enter the description of the opportunity"
          variant="bordered"
          isInvalid={errors.opportunityDescription ? true : false}
          errorMessage={errors.opportunityDescription}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<TbFileDescription size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Input
          isRequired
          onChange={handleOpportunityUrlChange}
          value={opportunityUrl}
          label="URL"
          placeholder="Enter the link for the opportunity details"
          variant="bordered"
          isInvalid={errors.opportunityUrl ? true : false}
          errorMessage={errors.opportunityUrl}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<BsGlobeAmericas size={20} />}
          translate="no"
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-2/3 flex flex-col">
          <div className="w-full mt-4 flex justify-center">
            {!opportunitySubmissionLoading ? (
              <Button
                className="bg-black text-white w-full"
                variant="flat"
                type="submit"
                onClick={validateOpportunityForm}
              >
                Create New Opportunity
              </Button>
            ) : (
              <Progress
                size="md"
                isIndeterminate
                aria-label="Loading..."
                classNames={{
                  base: "max-w-md",
                  indicator: "bg-gradient-to-r from-black to-black",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateOpportunityForm;
