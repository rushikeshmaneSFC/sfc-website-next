import Wrapper from "@/components/atoms/Wrapper";
import { VDPO_REGULATION } from "@/constants/VDPOConstant";

const VDPORegulation = () => {
  return (
    <Wrapper className=" flex justify-center items-center  bg-cover bg-no-repeat bg-center lg:mt-32 md:mt-20 mt-[470px]">
      <div className="flex flex-col items-center justify-center lg:py-10 md:py-16 py-5">
        <h2 className="lg:text-2xl md:text-2xl text-xl font-bold text-center mb-6 ">
          Are You Struggling to Meet Data Privacy Regulations?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[19px] lg:gap-x-[450px] text-center lg:mt-10">
          {VDPO_REGULATION.map((item, index) => {
            const isLastTwoCentered =
              VDPO_REGULATION.length % 2 === 1 &&
              (index === VDPO_REGULATION.length - 1 ||
                index === VDPO_REGULATION.length - 1);

            return (
              <div
                key={index}
                className={` bg-white flex flex-col items-center justify-center md:left-28  lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5  rounded-lg shadow-lg lg:h-[119px] lg:w-[432px] h-[145px] md:h-auto  hover:border-t-2 hover:border-t-[#223780] transition-all duration-300
${
  isLastTwoCentered
    ? "l lg:col-span-2 md:col-span-2   flex flex-col  absolute lg:left-44 md:left-56 justify-center items-center lg:w-[500px] md:w-[220.67px] md:h-[145px] h-[160px]  "
    : ""
}`}
              >
                <p className="text-base font-normal">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default VDPORegulation;
