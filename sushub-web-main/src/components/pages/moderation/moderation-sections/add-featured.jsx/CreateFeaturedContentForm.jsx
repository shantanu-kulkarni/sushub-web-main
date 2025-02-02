import React from "react";
import { IoStar } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { Input, Button, Textarea, Checkbox, Progress } from "@nextui-org/react";
import { TbFileDescription } from "react-icons/tb";
import { FaRegFileImage } from "react-icons/fa";
const CreateFeaturedContentForm = ({
  featuredContentTitle,
  featuredContentDescription,
  featuredContentUrl,
  featuredContentImageUrl,
  featuredContentVisibility,
  handleFeaturedContentTitleChange,
  handleFeaturedContentDescriptionChange,
  handleFeaturedContentUrlChange,
  handleFeaturedContentImageUrlChange,
  handleFeaturedContentVisibility,
  errors,
  featuredSubmissionLoading,
  handleFeaturedContentSubmit,
  validateFeaturedContentForm,
}) => {
  return (
    <form onSubmit={handleFeaturedContentSubmit}>
      <div className="w-full mt-4 flex justify-center ">
        <Input
          isRequired
          onChange={handleFeaturedContentTitleChange}
          value={featuredContentTitle}
          label="Title"
          placeholder="Enter the title of the featured content"
          variant="bordered"
          isInvalid={errors.featuredTitle ? true : false}
          errorMessage={errors.featuredTitle}
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
          onChange={handleFeaturedContentDescriptionChange}
          value={featuredContentDescription}
          label="Description"
          placeholder="Enter the description of the featured content"
          variant="bordered"
          isInvalid={errors.featuredDescription ? true : false}
          errorMessage={errors.featuredDescription}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<TbFileDescription size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Input
          isRequired
          onChange={handleFeaturedContentUrlChange}
          value={featuredContentUrl}
          label="URL"
          placeholder="Enter the link for the featured content"
          variant="bordered"
          isInvalid={errors.featuredUrl ? true : false}
          errorMessage={errors.featuredUrl}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<BsGlobeAmericas size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <div className="w-2/3 flex justify-start">
          <Checkbox
            isSelected={featuredContentVisibility}
            onValueChange={handleFeaturedContentVisibility}
            color="default"
            className="text-xl font-medium"
          >
            <div className="text-sm text-black/60 ">Show Content</div>
          </Checkbox>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-2/3 flex flex-col">
          <div className="w-full mt-4 flex justify-center">
            {!featuredSubmissionLoading ? (
              <Button
                className="bg-black text-white w-full"
                variant="flat"
                type="submit"
                onClick={validateFeaturedContentForm}
              >
                Create Featured Content
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

export default CreateFeaturedContentForm;
