import React from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next-nprogress-bar";
import {
  detailPageBackButtonLabel,
  detailPageBackButtonUrl,
} from "../ProjectDetailConstants";

const ProjectDetailBackButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="global-box-layout">
        <div className="flex justify-start items-center">
          <Button
            color="default"
            variant="light"
            startContent={<IoIosArrowRoundBack size={20} />}
            onClick={() => router.back()}
            className="text-black/60 mb-4 font-semibold"
          >
            {detailPageBackButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailBackButton;
