"use client"
import PeopleDetailPage from "@/components/pages/people/PeopleDetailPage";
import React from "react";

const UserProfile = ({params}) => {
  return (<PeopleDetailPage personUserName={params.id}/>);
};

export default UserProfile;
