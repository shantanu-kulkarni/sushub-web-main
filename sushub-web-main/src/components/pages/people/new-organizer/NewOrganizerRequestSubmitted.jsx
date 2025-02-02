import React from "react";
import { Button } from "@nextui-org/react";
import Lottie from "lottie-react";
import animationRequestSentData from "/public/lottie/request-sent.json";
import { Users, Send } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
const NewOrganizerRequestSubmitted = ({onClickPeopleButton, onClickEmailButton}) => {
  const sendEmailToGreenOffice = () => {
    window.location = "mailto:greenoffice.sustainabilityhub@uni-konstanz.de";
  };
  const router = useRouter();
  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center h-auto lg:h-[60vh]">
    <div className="w-2/3 md:w-1/3">
      <Lottie
        animationData={animationRequestSentData}
        autoPlay={true}
        loop={true}
        height={50}
      />
    </div>
    <div className="text-center w-full flex justify-center items-center flex-col">
      <div className="text-black global-title flex items-center justify-center">
        {"Request Submitted!"}
      </div>
      <div className="my-4 global-title-description">
        {
          "Your project request has been send to the moderator for approval! Please wait until the request is approved. You can explore our project offerings till your request gets approved."
        }
      </div>
      <div className="flex justify-center w-full">
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="w-full flex justify-center">
            <Button
              aria-labelledby="new-created-back"
              className="bg-black text-white w-full"
              startContent={
                <Users size={20} className="text-white" />
              }
              variant="flat"
              onClick={() => router.push("/people")}
            >
              View People
            </Button>
          </div>
          <div className="w-full mt-4 flex justify-center">
            <Button
              aria-labelledby="new-created-email"
              startContent={
                <Send size={20} className="text-black" />
              }
              className="border-black text-black w-full mb-8"
              variant="bordered"
              onClick={sendEmailToGreenOffice}
            >
              Have Troubles? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NewOrganizerRequestSubmitted;
