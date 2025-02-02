import React from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { detailPageBackButtonLabel } from "../../project/project-detail/ProjectDetailConstants";
import { useRouter } from "next-nprogress-bar";

const NewOrganizerBackButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-start items-start">
      <Button
        color="default"
        variant="light"
        startContent={<IoIosArrowRoundBack size={20} />}
        onClick={() => router.back()}
        className="text-black/60 font-semibold"
      >
        {detailPageBackButtonLabel}
      </Button>
    </div>
  );
};

export default NewOrganizerBackButton;
