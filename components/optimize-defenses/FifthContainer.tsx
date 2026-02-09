import Wrapper from "@/components/atoms/Wrapper";
import { RPB_TEAMING } from "@/constants/OptimizeDefenses";

export default function FifthContainer() {
  return (
    <Wrapper className=" justify-center flex md:h-[730px] lg:h-[700px] h-[1280px] py-5 ">
      <div className="relative justify-center flex">
        <div className="absolute lg:top-[5px] md:top-[5px] top-[16px]">
          <h1
            className="text-VAPTFeatureColor text-2xl md:text-[40px] lg:text-[52px] font-medium 
            text-center tracking-[-1px]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
          >
            Red, Purple, and Blue Teaming
          </h1>
        </div>
        <div
          className=" absolute rounded-lg border-2 border-[rgba(222,225,236,0.49)] 
            bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)] 
             lg:backdrop-blur-[1.8px]
            p-4 md:p-8 lg:p-12 top-[32px] md:top-[20px] lg:top-[20px]"
        >
          <h1 className="text-center text-[1.25rem] md:text-[1.5rem] font-semibold mb-4 md:mb-8">
            What we offer?
          </h1>

          <div className="grid grid-cols-[100%] md:grid-cols-3 gap-4 md:gap-8">
            {RPB_TEAMING.map((item) => (
              <div className="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center h-auto w-auto" key={item.id}>
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
}
