import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";
import Wrapper from "@/components/atoms/Wrapper";

const IncidentResponseDatasheet = () => {
  return (
    <Wrapper className="bg-[#071119] bg-[url('https://saintfox.azureedge.net/datav2/IncidentresponseDatasheetbg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:h-[384px] md:h-[384px] h-auto  lg:py-0 md:py-0 py-6">
      <ReusableDatasheet
        title={"Access the Incident Response Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/IncidentResponse/Datasheetimg.png"}
        alt="Incident Response_datasheet"
        className={"text-[#fff] lg:py-10"}
        buttonclassName={
          "py-2 font-normal rounded-lg border-2 border-white text-[#fff] transition flex items-center justify-center gap-2 text-base  mt-6 "
        }
        modalImageSrc="/images/IncidentResponse/CustomModalIncidentResponse.png"
      />
    </Wrapper>
  );
};

export default IncidentResponseDatasheet;
