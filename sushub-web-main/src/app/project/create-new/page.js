import ProjectCreateNew from "@/components/pages/project/project-create-new/ProjectCreateNew";
import React from "react";

export const metadata = {
  title: "Create New Project",
  description:
    "Allows creation of a new project on the Sustainability Hub portal.",
};

const NewProjectPage = () => {

  return <ProjectCreateNew />;
};

export default NewProjectPage;
