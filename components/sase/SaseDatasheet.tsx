// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

function SaseDatasheet() {
  return (
    <Wrapper className=" bg-[#DDE1E6] bg-[url('/images/SASE/SaseDatasheet.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:py-5 md:py-5 py-5 ">
      <ReusableDatasheet
        title={"Access the SASE Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/SASE/Datasheetimg.png"}
        alt="SASE_datasheet"
        className={"text-[#1F1F1F]"}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFFFFF] py-3 font-normal rounded-lg  flex items-center justify-center gap-2 text-base  lg:mt-6 md:mt-6 mt-4 "
        }
        modalImageSrc="/images/SASE/CustomModalSASE.png"
      />
    </Wrapper>
  );
}

export default SaseDatasheet;
