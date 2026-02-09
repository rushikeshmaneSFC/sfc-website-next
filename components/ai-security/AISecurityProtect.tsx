import Wrapper from "@/components/atoms/Wrapper";
import { AISECURTIY_PROTECT_ARRAY } from "@/constants/AISecurityConstant";

const AISecurityProtect = () => {
  return (
    <Wrapper className="flex justify-center items-center mt-10 ">
      <div className=" justify-center items-center ">
        <div className="flex items-center justify-center gap-2">
          <img
            loading="lazy"
            src="/images/ManagedIdentity/Solution.png"
            alt="icon"
            className="w-4 h-4"
          />
          <h3 className="text-[#1A3F7E] font-semibold text-sm ">
            Key Capabilities of St. Fox AI for Security
          </h3>
        </div>
        <h1 className="lg:text-2xl text-2xl text-center font-bold mb-4 md:mb-8">
          How We Use AI to Secure and Protect
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]  ">
          {AISECURTIY_PROTECT_ARRAY.map((item) => (
            <div key={item.title} className="bg-white text-[#1C1C1C] p-6 md:p-4 lg:p-6 rounded-lg shadow-md border-l-4 border-[#1A3F7E]">
              <h2 className="text-lg font-semibold mb-2 md:mb-2">
                {item.title}
              </h2>
              <p className="text-base font-normal">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AISecurityProtect;
