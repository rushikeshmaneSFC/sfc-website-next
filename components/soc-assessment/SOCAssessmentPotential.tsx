import Wrapper from "@/components/atoms/Wrapper";
import { TESTING_DATA } from "@/constants/SOCAssessmentConstant";

function SOCAssessmentPotential() {
  return (
    <Wrapper className="flex justify-center items-center h-auto ">
      <div className="justify-center items-center text-center">
        <p className="lg:text-[28px] lg:leading-[40px] text-xl font-bold lg:mt-12 md:mt-5">
          Unlock the Full Potential of Your SOC
        </p>
        <p className="text-base font-normal mt-2">
          St. Fox SOC Assessment Services provide a detailed evaluation of your
          SOC capabilities, processes, and technologies to:
        </p>
        <div className="mt-10">
          <img
            loading="lazy"
            src="/images/SOCAssessment/SOCPotential.webp"
            width={1844}
            height={756}
            alt="Security Operations Center_potential"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 max-w-6xl w-full items-center md:grid-cols-2 md:pb-[28px] lg:gap-[21px] mt-16 lg:p-6 p-5">
        <div className="flex flex-col text-[#1F1F1F] justify-center text-center lg:text-start md:text-start">
          <div className="flex items-center gap-2 mb-2 lg:justify-start lg:text-start justify-center text-center">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="Cybersecurity Icon"
              className="w-4 h-4"
            />
            <h3 className="text-[#1A3F7E] font-semibold text-sm ">
              Expert Insights
            </h3>
          </div>
          <h2 className="text-xl lg:text-4xl lg:leading-[48px] font-bold  text-[#1F1F1F]">
            <span className="text-[#1A3F7E]">
              Evaluate, optimize and enhance
            </span>{" "}
            your SOC with in-depth assessments and real-world testing
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-10 lg:mt-0 gap-4">
          {TESTING_DATA.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#1C1C1C] tex-base font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SOCAssessmentPotential;
