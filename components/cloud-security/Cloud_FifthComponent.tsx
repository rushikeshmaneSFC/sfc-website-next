// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

function Cloud_FifthComponent() {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Datasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5 ">
      <ReusableDatasheet
        title={"Access the Cloud Security Datasheet"}
        description={
          " Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/Cloudsecurity/Datasheetimg.png"}
        alt="Cloud Security Posture Assessment_datasheet"
        className={"text-[#fff]"}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  py-2 font-normal rounded-lg text-[#fff] transition flex items-center justify-center gap-2 text-base  mt-4"
        }
        modalImageSrc="/images/Cloudsecurity/CustomModalCloudSecurity.png"
      />
    </Wrapper>
  );
}

export default Cloud_FifthComponent;
