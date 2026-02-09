import Wrapper from "@/components/atoms/Wrapper";
import { SOCASSESSMENTFRAMEWORK_DATA } from "@/constants/SOCAssessmentConstant";
import ApproachCards from "@/components/managed-identity/ApproachCards";

function SOCAssessmentFramework() {
  return (
    <Wrapper className="  bg-[url('https://saintfox.azureedge.net/datav2/SOCVigilebg.webp')] bg-cover bg-center flex items-center justify-center  lg:h-[710px] md:h-auto h-auto lg:py-0 md:py-4 py-5">
      <h1 className="text-[#fff] lg:text-2xl text-xl font-bold text-center ">
        Guided by the VIGILE Framework for Identity Security
      </h1>
      <p className="text-[#FFF] text-base  text-center">
        St. Fox Identity Assessment Services leverage the VIGILE Framework to
        deliver structured and actionable identity security evaluations.
      </p>
      <div className="grid grid-cols-12 lg:gap-2 md:gap-4 gap-5 pt-10 ">
        {SOCASSESSMENTFRAMEWORK_DATA.map((item) => (
          <div
            key={item.id}
            className="lg:col-span-4 md:col-span-6 col-span-12"
          >
            <ApproachCards
              heading={item.heading}
              text={item.text}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default SOCAssessmentFramework;
