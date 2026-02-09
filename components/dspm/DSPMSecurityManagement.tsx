import Wrapper from "@/components/atoms/Wrapper";
import { DSPM_CARD_DATA } from "@/constants/DSPMConstant";

const DSPMSecurityManagement = () => {
  return (
    <Wrapper className="bg-[#FAFAFA] bg-cover bg-center  flex justify-center items-center">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-[#1F1F1F] lg:text-[28px] text-xl font-bold text-center lg:leading-10">
          End-to-End Data Security Management for Future-Ready Protection
        </h1>

        <p className="text-[#1F1F1F] lg:text-xl text-base font-normal text-center lg:px-14">
          St. Fox DSPM Services provide a robust framework to manage and protect
          your data across hybrid and multi-cloud environments.
        </p>

        <div className="grid grid-cols-12 my-6 gap-x-5 lg:gap-y-5 gap-y-10">
          {DSPM_CARD_DATA.map((item) => (
            <div
              key={item.id}
              className="md:col-span-6 col-span-12 px-10 lg:py-8 py-4 bg-[#fff] rounded-lg border shadow-[0px_0px_2px_0px_rgba(14,31,53,0.12),0px_1px_4px_0px_rgba(14,31,53,0.06)]"
            >
              <div className="flex items-center gap-x-4">
                <img
                  loading="lazy"
                  src="/images/DSPM/DSPMSimplification.png"
                  alt="DSPM simplification"
                  className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
                />
                <div className="space-y-2">
                  <p className="text-[#1F1F1F] text-xl lg:text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[#1C1C1C] text-[15px] font-normal lg:leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DSPMSecurityManagement;
