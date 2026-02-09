import Wrapper from "@/components/atoms/Wrapper";
import { FaCheck } from "react-icons/fa6";
import { VDPO_SERIVECES } from "@/constants/VDPOConstant";

const VDPOServices = () => {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/vDPO_services.webp')] flex justify-center items-center  bg-no-repeat bg-cover  h-auto py-5 md:py-5 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-8">
        <div className="flex justify-center items-center">
          <p className="lg:text-[40px] lg:leading-[48px] md:text-3xl text-2xl font-bold text-[#fff]">
            Why Choose St. Fox for vDPO Services?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center lg:gap-8 md:gap-5 gap-10">
          {VDPO_SERIVECES.map((item, index) => (
            <div key={index}>
              <div className="flex lg:gap-2 md:gap-2 gap-2">
                <FaCheck className="text-[#3B73CC] text-2xl" />
                <p className="text-[#3B73CC] text-lg font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-[#fff] font-normal text-base lg:mt-3 md:mt-2 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default VDPOServices;
