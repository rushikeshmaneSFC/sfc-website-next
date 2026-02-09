import Wrapper from "@/components/atoms/Wrapper";
import { RESULT_DATA } from "@/constants/SaseCloudSecurityConstant";

function SaseCloudResults() {
  return (
    <Wrapper className="bg-[url('/images/SaseCloudsecurity/resultbg.webp')] lg:h-[410px] md:h-[410px] h-auto flex items-center justify-center bg-no-repeat bg-cover bg-center py-10 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        <div className="flex flex-col text-[#1F1F1F] justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold lg:leading-[56px] text-[#1F1F1F]">
            Proven Results of Managed Cloud Security
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-0">
          {RESULT_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="min-w-[40px] min-h-[40px]">
                <p className="text-[#223780] lg:text-4xl md:text-4xl text-3xl font-semibold leading-8">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <p className="text-[#223780]  text-lg md:text-base lg:text-base font-semibold leading-5">
                  {item.title}
                </p>
                <p className="text-base md:text-sm lg:text-sm text-[#1F1F1F] font-normal mt-1 leading-5">
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

export default SaseCloudResults;
