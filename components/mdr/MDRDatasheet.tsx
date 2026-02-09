// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

const MDRDatasheet = () => {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/vaptdatasheet.png')] bg-[#071119] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5">
      <ReusableDatasheet
        title={" Access the MDR Datasheet"}
        description={
          " Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/MDR/Datasheetimg.png"}
        alt="MDR_datasheet"
        className={"text-[#fff]"}
        buttonclassName={
          "py-2 font-normal rounded-lg border-2 border-white text-[#fff] transition flex items-center justify-center gap-2 text-same  mt-4"
        }
        modalImageSrc="/images/MDR/CustomModalMDR.png"
      />
    </Wrapper>
  );
};

export default MDRDatasheet;
