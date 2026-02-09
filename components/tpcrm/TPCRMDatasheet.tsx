// @ts-nocheck
"use client";

import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

const TPCRMDatasheet = () => {
  return (
    <Wrapper className=" bg-[lightgray 50%] bg-[url('/images/ISO/ISOdatasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5 ">
      <ReusableDatasheet
        title={"Access the TPCRM Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/TPCRM/Datasheetimg.png"}
        alt="Third-Party Cyber Risk Management_datasheet"
        className={"text-[#1F1F1F]"}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFFFFF] py-3 font-normal rounded-lg  flex items-center justify-center gap-2 text-base  mt-3 "
        }
        modalImageSrc="/images/TPCRM/CloudModalTPCRM.png"
      />
    </Wrapper>
  );
};

export default TPCRMDatasheet;
