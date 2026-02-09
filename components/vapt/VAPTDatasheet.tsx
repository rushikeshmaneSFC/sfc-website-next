"use client";

import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

function VAPTDatasheet() {
  return (
    <Wrapper className=" bg-[url('/images/VAPT/VAPTDatasheetbg.webp')] bg-[#071119] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5 lg:py-5 md:py-5  ">
      <ReusableDatasheet
        title={" Access the VAPT Datasheet"}
        description={
          " Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/VAPT/VAPT_Datasheet.webp"}
        alt="Vulnerability Assessment and Penetration Testing_datasheet"
        className={" text-[#fff]"}
        buttonclassName={
          " py-2 font-normal rounded-lg border-2 border-white text-[#fff] transition flex items-center justify-center  text-base  mt-4 "
        }
      />
    </Wrapper>
  );
}

export default VAPTDatasheet;
