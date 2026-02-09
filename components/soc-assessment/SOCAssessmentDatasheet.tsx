import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

function SOCAssessmentDatasheet() {
  return (
    <Wrapper className=" bg-[lightgray 50%] bg-[url('https://saintfox.azureedge.net/datav2/TPCRM_Datasheet_BG.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center h-auto py-5 ">
      <ReusableDatasheet
        title={"Access the SOC Assessment Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/SOCAssessment/Datasheetimg.png"}
        alt="Security Operations Center_datasheet"
        className={"text-[#1F1F1F]"}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFFFFF] py-3 font-normal rounded-lg  flex items-center justify-center gap-2 text-base  mt-6 "
        }
        modalImageSrc="/images/SOCAssessment/CustomModalSOC Assessment.png"
      />
    </Wrapper>
  );
}

export default SOCAssessmentDatasheet;
