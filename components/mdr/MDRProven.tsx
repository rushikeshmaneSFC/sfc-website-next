"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { ProvenStats } from "@/constants/MDRConstant";

const MDRProven = () => {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[460px] md:h-[460px] h-auto py-10">
      <div className="flex flex-col items-center gap-[48px]">
        <h2 className="text-[#1c1c1c] text-center lg:text-2xl text-xl md:text-2xl font-bold">
          Proven Results with St. Fox MDR
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 ">
          {ProvenStats.map((item, index) => (
            <div
              key={index}
              className={`p-5 bg-white rounded-lg flex flex-col relative text-[#183359] 
                ${
                  index >= ProvenStats.length - 2
                    ? "absolute lg:left-40 md:left-20 justify-center text-xl"
                    : ""
                }`}
            >
              {item.value && (
                <div className="lg:text-[2.5rem] md:text-[2.2rem] text-4xl font-semibold mb-4">
                  {item.value}
                </div>
              )}
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-base text-[#1f1f1f]">
                {item.desc.split(/(\d+ minutes)/).map((text, i) =>
                  text.match(/\d+ minutes/) ? (
                    <span key={i} className="font-bold">
                      {text}
                    </span>
                  ) : (
                    text
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MDRProven;
