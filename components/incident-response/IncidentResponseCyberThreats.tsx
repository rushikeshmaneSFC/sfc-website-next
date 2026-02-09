import Wrapper from "@/components/atoms/Wrapper";
import { CYBER_ARRAY } from "@/constants/IncidentResponseConstant";

const IncidentResponseCyberThreats = () => {
  return (
    <Wrapper className=" flex justify-center items-center  bg-[#FAFAFA] lg:h-[527px] md:h-[527px] h-auto">
      <div className=" flex flex-col justify-center items-center lg:space-y-5 space-y-5">
        <h1 className="lg:text-[28px] lg:leading-[40px] md:text-[20px] text-xl text-center font-bold">
          Comprehensive Support to Contain and Mitigate Cyber Threats
        </h1>
        <p className="lg:text-[16px] md:text-[15px] text-base lg:leading-[24px] text-center lg:px-28">
          St. Fox Incident Response (IR) Services offer a tailored approach to
          help your organization navigate security incidents effectively.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[19px] lg:gap-x-[450px] text-center lg:mt-10">
          {CYBER_ARRAY.map((item, index) => {
            const isLastTwoCentered =
              CYBER_ARRAY.length % 2 === 1 &&
              (index === CYBER_ARRAY.length - 1 ||
                index === CYBER_ARRAY.length - 1);

            return (
              <div
                key={index}
                className={`  bg-white flex flex-col items-center justify-center md:left-28  lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5  rounded-lg shadow-lg lg:h-[119px] lg:w-[432px]  border-t-2 border-[#223780]
        ${
          isLastTwoCentered
            ? "  lg:col-span-2 md:col-span-2   flex flex-col  absolute lg:left-48 md:left-56 justify-center items-center lg:w-[500px] md:w-[220.67px] md:h-[145px]  "
            : ""
        }`}
              >
                <h2 className="text-base font-semibold mb-2 md:mb-2">
                  {item.title}
                </h2>
                <p className="text-[15px] font-normal">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default IncidentResponseCyberThreats;
