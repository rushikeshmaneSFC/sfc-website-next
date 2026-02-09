import Wrapper from "@/components/atoms/Wrapper";
import {
  ENHANCE_ICON,
  GUARD_ICON,
  IDENTIFY_ICON,
  IMPLEMENT_ICON,
  LEARN_ICON,
  VALIDATE_ICON,
} from "@/constants/DSPMConstant";

const DSPMVigile = () => {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Privacyopsvigilebg2x.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-[#1F1F1F] lg:text-2xl text-xl font-bold text-center">
          Guided by the VIGILE Framework for Data Security Excellence
        </h1>
        <p className="text-[#1F1F1F] lg:text-xl text-base font-medium text-center ">
          St. Fox DSPM Services align with the VIGILE Framework, ensuring a
          structured and effective approach to data security.
        </p>

        <div className="grid grid-cols-12 lg:gap-y-7 gap-y-12 mt-8 pb-8">
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <VALIDATE_ICON className="w-12 h-12 sm:w-8 sm:h-8" />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">
                Validate
              </p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Assess your current data security posture to identify gaps.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <IDENTIFY_ICON />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">
                Identify
              </p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Detect data risks, misconfigurations, and over-access.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <GUARD_ICON className="w-12 h-12 sm:w-8 sm:h-8" />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">Guard</p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Implement controls to protect sensitive data from unauthorized
                access.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <IMPLEMENT_ICON className="w-12 h-12 sm:w-8 sm:h-8" />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">
                Implement
              </p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Deploy automated monitoring and remediation solutions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <LEARN_ICON className="w-12 h-12 sm:w-8 sm:h-8" />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">Learn</p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Use insights to improve security policies and processes.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center flex-col text-center">
              <ENHANCE_ICON className="w-12 h-12 sm:w-8 sm:h-8" />
              <p className="text-[#1F1F1F] text-lg font-semibold mt-4">
                Enhance
              </p>
              <p className="text-[#1C1C1C] text-base font-medium mt-1">
                Adapt to evolving threats and regulations like GDPR and DPDPA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DSPMVigile;
