import HeroSection from "@/components/atoms/HeroSection";

export default function Herosection() {
  return (
    <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/Herosectionbg2x.webp')] flex bg-cover bg-center justify-center items-center h-[438px] px-4 text-center">
      <div className="text-[#fff] text-xl lg:text-[40px] font-semibold flex flex-col items-center leading-tight md:text-[40px]">
        <p>Scalable. Secure. Simple.</p>
        <p className="text-[#3B73CC]">Cloud done right</p>
      </div>
    </HeroSection>
  );
}
