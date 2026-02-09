import Wrapper from "@/components/atoms/Wrapper";
import { PRIVACYOPS_COMPLIANCE } from "@/constants/PrivacyOpsConstant";

const PrivacyOpsSeamlessCompliance = () => {
  return (
    <Wrapper className="flex justify-center items-center">
      <div className="text-center p-5 grid gap-2">
        <h2 className="lg:text-2xl text-xl font-bold lg:leading-[32px]">
          End-to-End Privacy Operations for Seamless Compliance
        </h2>
        <p className="text-base lg:leading-[24px] ">
          St. Fox Privacy Ops Services offers comprehensive solutions to manage
          your data privacy requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 pt-5">
          {PRIVACYOPS_COMPLIANCE.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200  py-5"
            >
              <h3 className="font-semibold text-base lg:leading-[24px] ">
                {feature.title}
              </h3>
              <p className="text-[15px] mt-2 lg:leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyOpsSeamlessCompliance;
