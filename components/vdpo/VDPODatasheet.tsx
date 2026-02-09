import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

const VDPODatasheet = () => {
  return (
    <Wrapper className=" bg-[#DDE1E6] bg-[url('/images/ISO/ISOdatasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5 lg:h-[370px] md:h-[370px] h-auto">
      <ReusableDatasheet
        title={"Access the vDPO Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/VDPO/vdpo_datasheet.webp"}
        alt="VDPO_datasheet"
        className={"text-[#1F1F1F] "}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFFFFF] py-3 font-normal rounded-lg  flex items-center justify-center gap-2 text-base  mt-6 "
        }
        modalImageSrc="/images/VDPO/CustomModalVDPO.png"
      />
    </Wrapper>
  );
};

export default VDPODatasheet;
