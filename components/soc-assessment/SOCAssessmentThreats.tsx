import Wrapper from "@/components/atoms/Wrapper";
import { THREATS_DATA } from "@/constants/SOCAssessmentConstant";

function SOCAssessmentThreats() {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center  lg:px-4  md:py-0 lg:py-0 py-4  lg:h-[452px] md:h-[452px] h-auto">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 md:pb-[28px]">
        <div className="flex flex-col text-[#1F1F1F] justify-center text-center lg:text-start md:text-start">
          <h2 className="text-xl md:text-[28px] lg:text-3xl font-bold  text-[#1F1F1F]">
            Is Your SOC Prepared to Handle Today&apos;s Advanced Threats?
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-10 lg:mt-0 gap-10">
          {THREATS_DATA.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#1C1C1C] text-base font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SOCAssessmentThreats;
