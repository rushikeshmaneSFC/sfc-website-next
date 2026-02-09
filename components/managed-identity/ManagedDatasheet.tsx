// @ts-nocheck
"use client";

import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

const ManagedDatasheet = () => {
  return (
    <Wrapper className="bg-[url('/images/ManagedIdentity/ManagedDatasheet.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-9">
      <ReusableDatasheet
        title={"Access Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/ManagedIdentity/managed_idenity_datasheet.webp"}
        alt="Managed Identtity_datasheet"
        className={""}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  px-6 py-3 font-medium rounded-lg text-[#fff] flex items-center justify-center gap-2 text-base  mt-6 lg:whitespace-nowrap"
        }
        modalImageSrc="/images/ManagedIdentity/CustomModalManagedIdentity.png"
      />
    </Wrapper>
  );
};

export default ManagedDatasheet;
