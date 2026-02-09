import Wrapper from "@/components/atoms/Wrapper";
import { VCISORESULT_DATA } from "@/constants/VcisoConstant";

function VcisoImpact() {
  return (
    <Wrapper className=" bg-[url('https://saintfox.azureedge.net/datav2/Servicesbg.webp')] flex items-center justify-center bg-no-repeat bg-cover bg-center py-10 lg:h-[410px] md:h-[410px] h-auto ">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%]  items-center ">
        <div className="flex flex-col text-[#1F1F1F] justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold lg:leading-[56px] text-[#FFF]">
            Impact of St. Fox vCISO Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-8 md:gap-10 mt-8 md:mt-0">
          {VCISORESULT_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="min-w-[40px] min-h-[40px]">
                <p className="text-[#3B73CC] text-3xl lg:text-[36px] font-semibold leading-8">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <p className="text-[#3B73CC] bg-clip-text text-lg  lg:text-base font-semibold leading-5">
                  {item.title}
                </p>
                <p className="text-base  lg:text-sm text-[#FFF] font-normal mt-1 leading-5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default VcisoImpact;
