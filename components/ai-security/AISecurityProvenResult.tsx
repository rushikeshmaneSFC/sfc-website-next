import { FaCheck } from "react-icons/fa6";
import Wrapper from "@/components/atoms/Wrapper";
import { AIPROVEN_ARRAY } from "@/constants/AISecurityConstant";

const AISecurityProvenResult = () => {
  return (
    <Wrapper className="flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/AIResult.webp')] bg-cover bg-center bg-no-repeat py-10 md:py-0 lg:py-0 lg:h-[519px] md:h-[519px] h-auto">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-8">
        <div className="flex flex-col lg:py-14 md:py-44">
          <div className="flex ">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solution1.png"
              alt="Cybersecurity Icon"
              className="w-4 h-4 "
            />
            <h3 className="text-[#3B73CC] font-semibold text-xs lg:text-sm ">
              Why Choose St. Fox?
            </h3>
          </div>

          <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold text-[#fff]">
            Experience, Innovation, and Proven Results
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {AIPROVEN_ARRAY.map((item, index) => (
            <div key={index}>
              <div className="flex lg:gap-2 md:gap-2 gap-2">
                <FaCheck className="text-[#3B73CC] text-2xl" />
                <p className="text-[#3B73CC] text-base font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-[#fff] font-normal text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AISecurityProvenResult;
