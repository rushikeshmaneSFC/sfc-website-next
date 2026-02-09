import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

function SaseCloudDatasheet() {
  return (
    <Wrapper className="bg-[url('/images/SaseCloudsecurity/ManagedDatasheet.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-5">
      <ReusableDatasheet
        title={"Access the Cloud Security Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/SaseCloudsecurity/cloud_security_datasheet.webp"}
        alt="SASE_datasheet"
        className={""}
        buttonclassName={
          "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  px-6 py-3 font-medium rounded-lg text-[#fff] flex items-center justify-center gap-2 text-base mt-6"
        }
        modalImageSrc="/images/SaseCloudsecurity/CustomModalSaseCloudSecurity.png"
      />
    </Wrapper>
  );
}

export default SaseCloudDatasheet;
