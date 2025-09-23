import React from "react";
import CustomWebsite from "@/components/Services/WebsiteDesign";
import ArtificialIntelligence from "@/components/Services/ArtificialIntelligence";
import Ecommerce from "@/components/Services/Ecommerce";
import MobileApp from "@/components/Services/MobileApp";
import Support from "@/components/Services/Support";

import UserExperience from "@/components/Services/UserExperience";

const page = () => {
  return (
    <div>
      <div className="w-screen bg-lightBlack overflow-hidden">
        {/* <BreadCrumb url={"Services"} /> */}
      </div>
      <CustomWebsite />
      <ArtificialIntelligence />
      <Ecommerce />
      <MobileApp />
      <Support />
      <UserExperience />
    </div>
  );
};

export default page;
