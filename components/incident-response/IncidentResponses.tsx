import Wrapper from "@/components/atoms/Wrapper";
import { RESPONSES_LIST } from "@/constants/IncidentResponseConstant";

const IncidentResponses = () => {
  return (
    <Wrapper className=" justify-center flex items-center md:h-[628px] lg:h-[650px] h-[1170px]">
      <div className="relative justify-center flex">
        <div className="absolute lg:-top-[320px] md:-top-[280px] -top-[565px]">
          <h1
            className="text-VAPTFeatureColor text-[32px] md:text-[54px] lg:text-[64px] font-medium 
          text-center tracking-[-1px]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
          >
            Why St. Fox for IR?
          </h1>
        </div>
        <div
          className=" absolute rounded-lg border-2 border-[rgba(222,225,236,0.49)] 
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)] 
           lg:backdrop-blur-[1.8px]
          p-4  lg:p-12 -top-[540px] md:-top-[240px] lg:-top-[270px]"
        >
          <h2 className=" text-center  lg:text-2xl md:text-xl text-xl font-bold mb-8">
            What we offer for Incident Response
          </h2>
          <div className="grid grid-cols-[100%] md:grid-cols-3 gap-4 md:gap-8">
            {RESPONSES_LIST.map((item) => (
              <div key={item.id} className="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center h-[150px] md:h-[auto] ">
                <h2 className=" text-[#1C1C1C] text-[1rem] md:text-[1rem] font-bold mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="text-[#1C1C1C] text-[15px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default IncidentResponses;
