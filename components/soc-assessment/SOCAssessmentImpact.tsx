import Wrapper from "@/components/atoms/Wrapper";
import { SERVICES_DATA } from "@/constants/SOCAssessmentConstant";

function SOCAssessmentImpact() {
  return (
    <Wrapper className=" flex items-center justify-center lg:h-[410px] md:h-[410px] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        <div className="flex flex-col text-[#1F1F1F] justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold lg:leading-[56px] text-[#1F1F1F]">
            Impact of SOC Assessment Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-0">
          {SERVICES_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="min-w-[40px] min-h-[40px]">
                <p className="text-[#1A3F7E] text-3xl lg:text-[36px] font-semibold leading-8">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <p className="text-[#1A3F7E] text-lg font-semibold leading-5">
                  {item.title}
                </p>
                <p className="text-base  text-[#1C1C1C] font-normal mt-1 leading-5">
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

export default SOCAssessmentImpact;
