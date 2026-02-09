import HeroSection from "@/components/atoms/HeroSection";

const DataServicesHeroSection = () => {
  return (
    <HeroSection
      className="bg-[url('https://saintfox.azureedge.net/datav2/Impact_IR.webp')] bg-[#071119] bg-no-repeat bg-cover bg-center
        md:h-[405px] lg:h-[405px] h-auto items-center justify-center flex lg:py-0 md:py-0 py-7"
    >
      <div className="text-center justify-center items-center gap-y-4">
        <h1 className="text-xl lg:text-[34px] md:text-2xl mb-2 text-[#FFFFFF] font-bold  lg:leading-[40px]">
          Data Services
        </h1>
        <p className="mb-4 text-base lg:text-[26px] md:text-xl font-normal lg:leading-[39.2px] text-[#FFFFFF]">
          Proactive Security, Compliance, and Risk Management Built for
          Resilience, Delivered by Experts.
        </p>
      </div>
    </HeroSection>
  );
};

export default DataServicesHeroSection;
