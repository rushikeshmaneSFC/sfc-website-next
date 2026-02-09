import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";

export default function FirstContainer() {
  return (
    <HeroSection className="flex justify-center items-center md:h-[648px] lg:h-[648px] h-auto bg-[url('https://saintfox.azureedge.net/datav2/CompromiseAssessmentHerosection2x.webp')] bg-no-repeat bg-cover bg-center py-28">
      <div className="text-center text-[#fff]">
        <p className="lg:text-[28px] lg:leading-[40px] md:text-2xl text-xl font-bold mb-2">
          Uncover Hidden Threats with St. Fox Compromise Assessment Services
        </p>
        <p className="text-base font-normal mb-4">
          Detect and Eliminate threat actors lurking in your network before they
          cause damage.
        </p>
        <ReusableBtn
          type={"button"}
          name={"Talk to a Threat Hunting Expert"}
          className={
            "bg-[#1A3F7E] py-2 rounded-md mt-2 sm:text-[13px] text-base"
          }
        />
      </div>
    </HeroSection>
  );
}
