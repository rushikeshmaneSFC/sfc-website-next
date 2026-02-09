"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { TurningLogslist } from "@/constants/SOC2Constant";

function Soc2TurningLogs() {
  return (
    <Wrapper className="justify-center flex md:h-[555px] h-[850px] lg:h-[630px]  lg:py-7 md:py-6 py-6">
      <div className="relative justify-center flex gap-0 ">
        <div className="">
          <h1
            className="text-VAPTFeatureColor text-[20px] md:text-[44px] lg:text-[58px] font-medium 
             tracking-[-1px] "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
          >
            SIEM Engineering Excellence
          </h1>
        </div>
        <div
          className=" absolute rounded-lg border-2 border-[rgba(222,225,236,0.49)] 
            bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)] 
            lg:backdrop-blur-[1.8px]
            p-4 md:p-8 lg:p-12 top-[14px] md:top-[40px] lg:top-[50px]"
        >
          <h1 className="text-center text-[1.25rem] md:text-[1.5rem] font-semibold mb-4 md:mb-8">
            Turning Logs into Actionable Insights
          </h1>

          <div className="grid grid-cols-[100%] md:grid-cols-2 gap-4 md:gap-8">
            {TurningLogslist.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center h-[150px] md:h-[auto]"
              >
                <h2 className=" text-[#1C1C1C] text-[1rem] md:text-[1rem] font-bold mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="text-[#1C1C1C] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Soc2TurningLogs;
