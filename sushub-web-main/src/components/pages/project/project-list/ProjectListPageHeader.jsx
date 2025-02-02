import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { MdEvent } from "react-icons/md";
import { useRouter } from "next-nprogress-bar";
import {
  projectPageHeaderTitle,
  projectPageHeaderDescription,
  projectPageHeaderButtonLabel,
} from "./ProjectListConstants";
import { AuthContext } from "@/context/AuthContext";
const ProjectListPageHeader = () => {
  const {currentUser} = useContext(AuthContext);
  const router = useRouter();
  return (
    <div className=" flex flex-col xs:flex-col md:flex-row">
      <div className="w-full flex-col">
        <div className="w-full xs:w-full s:w-full md:w-2/3 text-black flex items-center text-xl xs:text-xl s:text-xl md:text-3xl font-bold pt-2 xs:pt-2 md:pt-4">
          {projectPageHeaderTitle}
        </div>
        <div className="text-black/30 flex items-center text-sm xs:text-sm s:text-sm md:text-md font-semibold pb-4 pt-1 w-full xs:w-full md:w-2/3">
          {projectPageHeaderDescription}
        </div>
      </div>
      <div className="w-full xs:w-full s:w-full md:w-1/3 flex justify-end items-center py-4">
        {currentUser ? <Button
          className="border-black selection:border-black text-black w-full xs:w-full"
          variant="bordered"
          startContent={<MdEvent size={20} className="text-black" />}
          onClick={()=> router.push("my-previous-projects")}
        >
          {projectPageHeaderButtonLabel}
        </Button>: null }
      </div>
    </div>
  );
};

export default ProjectListPageHeader;
