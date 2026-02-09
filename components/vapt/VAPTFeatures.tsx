"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { list } from "@/constants/vaptConstant";

export default function VAPTFeatures() {
  return (
    <Wrapper className=" justify-center  flex md:h-[740px] h-[1200px] lg:h-[689px]">
      <div className="relative justify-center flex">
        <div className="absolute lg:top-[46px] md:top-[30px] top-[35px]">
          <h1
            className="text-VAPTFeatureColor text-[24px] md:text-[40px] lg:text-[40px] font-medium 
            text-center tracking-[-1px]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
          >
            Why Choose St. Fox for VAPT?
          </h1>
        </div>
        <div
          className=" absolute rounded-lg border-2 border-[rgba(222,225,236,0.49)] 
            bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)] 
             lg:backdrop-blur-[1.8px] backdrop-blur-[1px]
            p-4 md:p-8 lg:p-12 top-[55px] md:top-[60px] lg:top-[80px]"
        >
          <h1 className="text-center text-[1.25rem] md:text-[1.5rem] font-bold mb-4 md:mb-8">
            VAPT Designed for Modern Cyber Threats
          </h1>

          <div className="grid grid-cols-[100%] md:grid-cols-3 gap-4 md:gap-8">
            {list.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center  md:h-[auto]"
              >
                <h2 className=" text-[#1C1C1C] text-[1rem] md:text-[1rem] font-bold mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="text-[#1C1C1C] text-[15px] ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
