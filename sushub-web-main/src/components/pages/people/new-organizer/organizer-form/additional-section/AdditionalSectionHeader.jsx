import React from "react";
import AdditionalSectionImage from "./AdditionalSectionImage";

const AdditionalSectionHeader = ({imageUrl,setImageUrl}) => {
  return (
    <div>
      {" "}
      <div>
        <div className="global-subtitle">
          {"Additional Information"}
        </div>
        <div className="global-subtitle-description">
          {
            "You're almost done! Select a profile picture and enter a short and sweet description. You can also choose whether you want to be seen by the people."
          }
        </div>
      </div>
      <AdditionalSectionImage imageUrl={imageUrl} setImageUrl={setImageUrl}/>
    </div>
  );
};

export default AdditionalSectionHeader;
