import Wrapper from "@/components/atoms/Wrapper";
import ReusableDatasheet from "@/components/atoms/ReusableDatasheet";

export default function FourthContainer() {
  return (
    <Wrapper className=" flex justify-center items-center lg:h-[384px] md:h-[384px] h-auto bg-[url('https://saintfox.azureedge.net/datav2/OptimizedefensesDatasheetbg.webp')] bg-no-repeat bg-cover bg-center py-5">
      <ReusableDatasheet
        title={"Access Optimize Defenses Datasheet"}
        description={
          "Discover our approach, features, and benefits to secure your business."
        }
        buttonText={"Download Datasheet"}
        imageSrc={"/images/OptimizeDefenses/optimisedefenses_daatsheet.webp"}
        className={"text-[#fff]"}
        buttonclassName={"rounded-md p-2 border text-[#fff] text-base mt-4"}
        modalImageSrc="/images/OptimizeDefenses/CustomModalOptimzeDefenses.png"
      />
    </Wrapper>
  );
}
