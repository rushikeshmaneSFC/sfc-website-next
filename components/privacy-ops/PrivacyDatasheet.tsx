import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

const PrivacyDatasheet = () => {
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOdatasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:py-0 py-5">
      <ReusableDatasheet
        title={"Access Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/PrivacyOps/Datasheetimg.png"}
        alt="Privacyops_datasheet"
        className={"text-[#1F1F1F]"}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFF] py-3 font-medium rounded-lg  flex items-center justify-center gap-2 text-[14px] mt-6"
        }
        modalImageSrc="/images/PrivacyOps/CustomModalPrivacyOps.png"
      />
    </Wrapper>
  );
};

export default PrivacyDatasheet;
