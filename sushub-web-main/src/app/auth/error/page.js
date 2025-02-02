import AccessRestricted from "@/components/global/error-pages/AccessRestricted";
import React from "react";

export const metadata = {
  title: 'Error',
  description: 'Displays error in case access restricted.',
}

const UserAccessRestricted = () => {
  return <AccessRestricted />;
};

export default UserAccessRestricted;
