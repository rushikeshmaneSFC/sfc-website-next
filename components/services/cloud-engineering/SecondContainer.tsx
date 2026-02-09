import Wrapper from "@/components/atoms/Wrapper";
import { CloudAgility } from "@/constants/CloudEnginneringConstant";

export default function SecondContainer() {
  return (
    <Wrapper className="flex justify-center items-center lg:py-5 md:py-10 py-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="lg:text-[32px] text-xl font-bold text-center mb-6 lg:leading-[40px]">
          Unleash Cloud Agility
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[19px] lg:gap-x-[450px] text-center lg:mt-10">
          {CloudAgility.map((item, index) => {
            const isLastTwoCentered =
              CloudAgility.length % 2 === 1 &&
              (index === CloudAgility.length - 1 ||
                index === CloudAgility.length - 1);

            return (
              <div
                key={index}
                className={`bg-white flex flex-col items-center justify-center md:left-28  lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5 rounded-lg shadow-lg lg:h-[179px] lg:w-[432px] md:w-[194px] md:h-[352px] h-[200px]  hover:border-t-2 hover:border-t-[#223780] transition-all duration-300  
${
  isLastTwoCentered
    ? "  lg:col-span-2 md:col-span-2 flex flex-col  absolute lg:left-44 md:left-56 justify-center items-center lg:w-[500px] md:w-[145px] h-[160px]"
    : ""
}`}
              >
                <p className="text-[#223780] lg:text-2xl text-xl font-medium ">
                  {item.title}
                </p>
                <p className="text-base font-normal mt-2">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
