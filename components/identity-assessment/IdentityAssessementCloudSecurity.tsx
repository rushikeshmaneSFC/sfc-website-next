import Wrapper from "@/components/atoms/Wrapper";
import { CLOUDSECURITY_ARRAY } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementCloudSecurity = () => {
  return (
    <Wrapper className="flex justify-center items-center  h-auto bg-[#FAFAFA] lg:py-6 md:py-5 py-5">
      <div className=" justify-center items-center">
        <h1 className="lg:text-2xl text-xl text-center font-bold mb-4 md:mb-8">
          Why Choose St. Fox for Identity Assessment?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]  ">
          {CLOUDSECURITY_ARRAY.map((item,index) => (
            <div className="bg-white text-[#1C1C1C] p-6 md:p-4 lg:p-6 rounded-lg shadow-lg  border-l-4 border-[#1A3F7E]" key={index}>
              <h2 className="text-base  font-semibold mb-2 md:mb-2">
                {item.title}
              </h2>
              <p className="text-[15px] font-normal">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default IdentityAssessementCloudSecurity;
