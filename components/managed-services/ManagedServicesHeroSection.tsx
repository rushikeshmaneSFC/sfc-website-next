import HeroSection from "@/components/atoms/HeroSection";

const ManagedServicesHeroSection = () => {
  return (
    <HeroSection
      className="bg-[url('https://saintfox.azureedge.net/datav2/CompromiseAssessment.webp')] bg-[#0A1927] bg-no-repeat bg-cover bg-center
        md:h-[405px] lg:h-[405px] h-auto items-center justify-center flex lg:py-0 md:py-0 py-7"
    >
      <div className="text-center justify-center items-center gap-y-4">
        <h1 className="text-xl lg:text-[34px] md:text-2xl mb-2 text-[#FFFFFF] font-bold  lg:leading-[40px]">
          Managed Services
        </h1>
        <p className="mb-4 text-base lg:text-2xl md:text-xl font-normal text-[#FFFFFF]">
          End-to-End Managed Cybersecurity to Protect, Detect, and Respond
          Everywhere Your Business Operates.
        </p>
      </div>
    </HeroSection>
  );
};

export default ManagedServicesHeroSection;
