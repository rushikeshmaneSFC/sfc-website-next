import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

const IdentityAssessementDatasheet = () => {
  return (
    <Wrapper className="bg-[url('/images/IdentityAssessement/Identitydatasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5  ">
      <ReusableDatasheet
        title={"Access the Identity Assessment Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/IdentityAssessement/Datasheetimg.png"}
        alt="Identity Assessment_datasheet"
        className={" text-[#fff] lg:py-10"}
        buttonclassName={
          "py-2 font-normal rounded-lg border-2 border-white text-[#fff] transition flex items-center justify-center gap-2 text-base  mt-6 "
        }
        modalImageSrc="/images/IdentityAssessement/CustomModalIdentityAssessment.png"
      />
    </Wrapper>
  );
};

export default IdentityAssessementDatasheet;
