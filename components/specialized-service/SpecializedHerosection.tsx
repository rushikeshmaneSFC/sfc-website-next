import HeroSection from "@/components/atoms/HeroSection";

function SpecializedHerosection() {
  return (
    <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/CompromiseAssessmentHero.webp')] h-auto md:h-[405px] lg:h-[405px] bg-cover bg-center flex justify-center items-center py-10 lg:py-0 md:py-0">
      <div className="justify-center items-center text-center lg:items-start lg:text-start space-y-3">
        <p className="text-xl lg:text-[34px] text-[#fff] font-bold">
          Specialized Services
        </p>
        <p className="text-base lg:text-[28px] font-normal text-[#EDF4FF] lg:leading-[38px] tracking-[0.56px]">
          Proactive Security, Compliance, and Risk Management Built for
          Resilience, Delivered by Experts.
        </p>
      </div>
    </HeroSection>
  );
}

export default SpecializedHerosection;
