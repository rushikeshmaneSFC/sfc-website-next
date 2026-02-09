import Wrapper from "@/components/atoms/Wrapper";
import { DLP_LIST } from "@/constants/DLPConstant";
import VAPTList from "@/components/vapt/VAPTList";

const DLPDataRisk = () => {
  return (
    <Wrapper className="bg-[#07111A]  bg-no-repeat bg-cover bg-center lg:h-[515px] h-auto items-center justify-center flex">
      <div className="grid grid-cols-[100%] md:py-[28px] md:grid-cols-[40%,60%] lg:grid-cols-[50%,50%] lg:pt-0 md:pt-8 pt-4 lg:py-0 py-7 ">
        <div className="h-[inherit] flex items-center justify-center text-center lg:text-start md:text-start lg:mb-0 md:mb-0 mb-5">
          <h1 className="text-xl lg:text-4xl lg:leading-[56px] font-semibold text-[#fff]">
            Is Your Sensitive Data at Risk of Being Leaked or Stolen?
          </h1>
        </div>

        <div className="flex flex-wrap flex-col gap-20 md:gap-4 lg:gap-4 mt-10 md:mt-0 text-[#fff]">
          {DLP_LIST.map((item) => (
            <VAPTList item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DLPDataRisk;
