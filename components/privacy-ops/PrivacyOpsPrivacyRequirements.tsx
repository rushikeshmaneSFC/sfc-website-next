import Wrapper from "@/components/atoms/Wrapper";
import { PRIVACYOPS_REQUIREMENTS } from "@/constants/PrivacyOpsConstant";

const PrivacyOpsPrivacyRequirements = () => {
  return (
    <Wrapper className=" flex items-center justify-center sm:py-0 py-6">
      <div className="grid grid-cols-[100%] max-w-6xl w-full items-center md:pb-[28px] md:grid-cols-[50%,50%] ">
        <div className="flex flex-col text-[#1F1F1F] justify-center items-center">
          <h2 className="text-xl text-center lg:text-start lg:text-4xl font-bold  text-[#1F1F1F] ">
            Is Your Organization Struggling to Meet Data Privacy Requirements?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 mt-10 gap-10">
          {PRIVACYOPS_REQUIREMENTS.map((item, index) => (
            <div key={index} className="flex">
              <div className="min-w-[40px] min-h-[40px] ">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-[18px] h-[18px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#1C1C1C] text-base font-medium ">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyOpsPrivacyRequirements;
