import React, { useContext } from "react";
import { Textarea } from "@nextui-org/react";
import { TbFileDescription } from "react-icons/tb";
import { OnboardingStateManagerContext } from "../../OnboardingStateManager";

const SignUpFormDescription = () => {
  const { description, setDescription } = useContext(
    OnboardingStateManagerContext
  );

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-center mt-8">
      <div className="w-2/3 border-white text-white">
        <Textarea
          label="Description (Required)"
          variant="bordered"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter your description"
          disableAnimation
          disableAutosize
          startContent={<TbFileDescription size={20} />}
          classNames={{
            base: "border-white active:border-white hover:border-white group-data-[focus=true]:border-white data-[hover=true]:border-white",
            input:
              "min-h-[40px] group-data-[focus=true]:border-white text-white",
            inputWrapper: " group-data-[focus=true]:border-white text-white",
            label: "text-white",
          }}
          translate="no"
        />
      </div>
    </div>
  );
};

export default SignUpFormDescription;
