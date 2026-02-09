"use client";

import CircularProgress from "@/components/atoms/CircularProgress";
import Wrapper from "@/components/atoms/Wrapper";
import { socdata } from "@/constants/socConstant";

const SOCImpact = () => {
  return (
    <Wrapper className="flex justify-center items-center mt-10">
      <div className="bg-gray-50 py-10 px-5 text-center ">
        <h2 className="lg:text-2xl text-[20px] font-bold text-black mb-8">
          The Impact of St. Fox SOC 2 Assessment Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {socdata.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
            >
              <CircularProgress percentage={item.percentage} />
              <h3 className="lg:text-lg text-lg font-semibold mt-4 leading-[19.959px] ">
                {item.title}
              </h3>
              <p className="text-base font-[400] leading-[19.959px] text-gray-600 mt-2 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SOCImpact;
