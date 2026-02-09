import Wrapper from "@/components/atoms/Wrapper";
import { FaCheck } from "react-icons/fa6";
import { DEVSECCOPS_MANAGEMENT } from "@/constants/DevSecOps";

export default function SixthContainer() {
  return (
    <Wrapper className="flex justify-center items-center bg-[#07111A] bg-no-repeat bg-cover bg-center md:h-[464px] lg:h-[464px] h-auto py-10 md:py-0 lg:py-0">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-4 md:gap-2 lg:gap-0">
        <div className="flex justify-center items-center">
          <p className="lg:text-[38px] lg:leading-[48px] md:text-3xl text-2xl font-bold text-[#fff]">
            Why Choose  St. Fox for DevSecOps Management?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {DEVSECCOPS_MANAGEMENT.map((item, index) => (
            <div key={index}>
              <div className="flex lg:gap-2 md:gap-2 gap-4">
                <FaCheck className="text-[#3B73CC] text-2xl" />
                <p className="text-[#3B73CC] text-lg font-semibold">
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
}
