"use client";
import React, { createContext, useState, useEffect } from "react";
import { Opportunity } from "@/app/schema/Opportunity";
import { usePathname } from "next/navigation";
import { opportunitiesData } from "@/utils/OpportunitiesData";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const OpportunityContext = createContext();

export const OpportunityProvider = ({ children }) => {
  const [opportunities, setOpportunities] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      if (
        path === "/profile/moderation" ||
        path === "/events-and-opportunities"
      ) {
        // fetchAllOpportunities();
      } else {
        setLoading(false);
      }
    } else {
      setOpportunities(
        opportunitiesData.opportunities.map((opp) => Opportunity.fromJson(opp))
      );
      setLoading(false);
    }
  }, [fetched, path]);

  return (
    <OpportunityContext.Provider
      value={{
        opportunities,
        loading,
        setOpportunities,
      }}
    >
      {children}
    </OpportunityContext.Provider>
  );
};
