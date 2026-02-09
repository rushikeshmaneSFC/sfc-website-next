// @ts-nocheck
"use client";

import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

function SOCDatasheet() {
  return (
    <Wrapper className="bg-[#071119] bg-[url('/images/SOC/SOC_Datasheertbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5  ">
      <ReusableDatasheet
        title={"Access the SOC 2 Datasheet"}
        description={
          " Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/SOC/SOCDatasheetimg.png"}
        alt="Security Operations Center2_datasheet"
        className={" text-[#fff]"}
        buttonclassName={
          " py-2 font-normal rounded-lg border-2 border-white text-[#fff] transition flex items-center justify-center gap-2 text-[13px]  mt-6 lg:whitespace-nowrap"
        }
        modalImageSrc="/images/SOC/CustomModalSoc.png"
      />
    </Wrapper>
  );
}

export default SOCDatasheet;
