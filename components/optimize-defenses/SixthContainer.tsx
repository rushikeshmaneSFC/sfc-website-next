import Wrapper from "@/components/atoms/Wrapper";
import { TEAMING_SERVICES } from "@/constants/OptimizeDefenses";

export default function SixthContainer() {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[410px] md:h-[410px] h-auto bg-[url('https://saintfox.azureedge.net/datav2/Servicesbg.webp')] bg-no-repeat bg-cover bg-center lg:py-0 md:py-0 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <p className="text-[#fff] font-bold lg:text-[40px] md:text-3xl text-2xl lg:leading-[56px]">
            Impact of St. Fox Teaming Services
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 lg:mt-0 md:mt-0">
            {TEAMING_SERVICES.map((teaming, index) => (
              <div key={index} className="text-[#fff]">
                <p className="text-4xl text-[#3B73CC] font-semibold">
                  {teaming.percentage}
                </p>
                <p className="text-base text-[#3B73CC] font-semibold">
                  {teaming.title}
                </p>
                <p className="text-sm font-normal text-[#fff]">
                  {teaming.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
