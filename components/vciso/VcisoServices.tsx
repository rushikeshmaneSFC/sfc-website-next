import Wrapper from "@/components/atoms/Wrapper";
import { SERVICE_LIST } from "@/constants/VcisoConstant";

function VcisoServices() {
  return (
    <Wrapper className=" mb-0 justify-center flex lg:h-[700px]  md:h-[700px] h-[1170px]">
      <div className="relative justify-center flex lg:bottom-20 md:bottom-12 bottom-2">
        <div className="absolute lg:top-[115px] md:top-[80px] top-[37px] ">
          <h1
            className="text-VAPTFeatureColor text-[22px] md:text-[32px] lg:text-[40px] font-medium 
            text-center tracking-[-1px]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
          >
            Why St. Fox for vCISO Services?
          </h1>
        </div>
        <div
          className=" absolute rounded-lg border-2 border-[rgba(222,225,236,0.49)] 
            bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)] 
             lg:backdrop-blur-[1.8px]
            p-4 md:p-8 lg:p-12 top-[55px] md:top-[110px] lg:top-[148px]"
        >
          <div className="grid grid-cols-[100%] md:grid-cols-3 gap-4 md:gap-8">
            {SERVICE_LIST.map((item) => (
              <div key={item.id} className="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center  border-t-4 border-[#223780]">
                <h2 className=" text-[#1C1C1C] text-[1rem] md:text-[1rem] font-bold mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="text-[#1C1C1C]  text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default VcisoServices;
