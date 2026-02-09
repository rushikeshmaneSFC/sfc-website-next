"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { MDR_BENEFITS_ICONS, MDRbenefits } from "@/constants/MDRConstant";

const MDRThreatDetection = () => {
  return (
    <Wrapper className="bg-[#03101B] flex justify-center items-center lg:h-[556px] md:h-[556px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center text-[#fff]">
        <div className=" flex flex-col gap-4">
          <h2 className="lg:text-2xl md:text-2xl text-xl font-bold ">
            Protect Your Business with Advanced Threat Detection and Response
          </h2>
          <p className=" text-base mb-6">
            St. Fox Managed Detection and Response (MDR) combines cutting-edge
            technology and human expertise to:
          </p>
          <ul className="space-y-4">
            {MDRbenefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-green-400 text-xl">
                  <MDR_BENEFITS_ICONS />
                </span>
                <p className="text-base">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1  gap-10 relative bg-[url('https://saintfox.azureedge.net/datav2/Threat.png')] bg-contain bg-no-repeat">
          <div className="space-y-8 flex flex-col ">
            <div className="flex justify-start items-start  ">
              <p
                className=" border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF]  py-3 px-5 rounded-full lg:text-base md:text-base text-sm"
              >
                Real-Time Threat Monitoring
              </p>
            </div>
            <div className="flex justify-end items-end ">
              <p
                className=" border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF]  py-3 px-5 rounded-full lg:text-base md:text-base text-sm"
              >
                AI-Driven Behavioral Analytics
              </p>
            </div>
            <div className="flex justify-start items-start  lg:ml-7 ">
              <p
                className=" border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF]  py-3 px-5 rounded-full lg:text-base md:text-base text-sm"
              >
                Expert Incident Response
              </p>
            </div>
            <div className="flex justify-end items-end ">
              <p
                className=" border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF]  py-3 px-5 rounded-full lg:text-base md:text-base text-sm "
              >
                Regulatory Compliance Reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MDRThreatDetection;
