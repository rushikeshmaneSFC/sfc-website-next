import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

export default function FifthContainer() {
  return (
    <>
      <Wrapper className="bg-[url('/images/DevSecOps/DevSecOps_Datasheet.webp')] bg-no-repeat bg-cover bg-center md:h-[370px] lg:h-[370px] h-auto py-10 flex items-center justify-center">
        <ReusableDatasheet
          title={"Access the DevSecOps Datasheet"}
          description={
            "Discover our approach, features, and benefits to secure your business."
          }
          buttonText={"Download Datasheet"}
          imageSrc={"/images/DevSecOps/devsecops_datasheet_Img.webp"}
          alt="Devsecops_datasheet"
          buttonclassName={
            "py-2 px-5 mt-4 h-10 rounded-lg bg-gradient-to-tr from-[#3B73CC] to-[#1A3F7E]  hover:bg-[#172e56] text-[#fff] text-sm font-medium capitalize"
          }
          className={undefined}
          modalImageSrc=""
        />
      </Wrapper>
    </>
  );
}
