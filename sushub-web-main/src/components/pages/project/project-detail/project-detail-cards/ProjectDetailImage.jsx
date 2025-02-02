import React from "react";
import { Image, Card } from "@nextui-org/react";

const ProjectDetailImage = ({ projectImage }) => {
  return (
    <Card
      isPressable
      className="text-black w-full h-auto md:w-1/3 mt-8 rounded-3xl shadow-md bg-gradient-to-t"
    >
      <img
        alt="Project Info Image"
        className="w-full h-full object-cover rounded-3xl transition-all ease-in-out"
        src={projectImage}
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} 
      />
    </Card>
  );
};

export default ProjectDetailImage;