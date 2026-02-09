"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { MDR_DATA } from "@/constants/MDRConstant";

function MDRCyberThreats() {
  return (
    <Wrapper className="flex items-center justify-center md:py-0   lg:h-[452px] md:h-[452px] h-auto py-5">
      <div className="grid grid-cols-1  items-center md:grid-cols-2 ">
        <div className="flex flex-col text-[#1F1F1F] justify-center">
          <div className="flex items-center gap-2 mb-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="icon"
              className="w-4 h-4"
            />
            <h3 className="text-[#1A3F7E] font-semibold text-sm  ">
              Ready to Tackle Evolving Cyber Threats?
            </h3>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-[#1F1F1F]">
            Are You Prepared to Handle the Growing Sophistication of Cyber
            Threats?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {MDR_DATA.map((item, index) => (
            <div key={index} className="flex items-start mt-4">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#1C1C1C] text-base  font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default MDRCyberThreats;
