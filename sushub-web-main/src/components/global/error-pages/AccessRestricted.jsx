"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";

const AccessRestricted = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-8">
      <div className="flex items-center justify-center text-black text-5xl">
        Access Restricted
      </div>
      <div className="flex justify-center items-center mt-8">
        <Button onClick={() => router.push("/")}>Go Back To Home</Button>
      </div>
    </div>
  );
};

export default AccessRestricted;
