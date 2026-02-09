import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

function VcisoDatasheet() {
  return (
    <Wrapper className="bg-black bg-[url('/images/VCISO/VCISODatasheet.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:py-0 py-5 ">
      <ReusableDatasheet
        title={"Access the vCISO Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/VCISO/Datasheetimg.png"}
        alt="vciso_datasheet"
        className={" text-[#fff]"}
        buttonclassName={
          "border-2 border-white py-2 font-normal rounded-lg text-[#fff] transition flex items-center justify-center gap-2 text-[13px]  mt-6 lg:whitespace-nowrap"
        }
        modalImageSrc="/images/VCISO/CloudModalVCISO.png"
      />
    </Wrapper>
  );
}

export default VcisoDatasheet;
