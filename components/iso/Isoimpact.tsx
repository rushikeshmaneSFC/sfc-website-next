"use client";

import CircularProgress from "@/components/atoms/CircularProgress";
import Wrapper from "@/components/atoms/Wrapper";
import { Isodata } from "@/constants/ISOConstant";

const Isoimpact = () => {
  return (
    <Wrapper className="flex justify-center items-center  ">
      <div className="bg-gray-50 py-10 px-5 text-center ">
        <h2 className="lg:text-2xl text-2xl font-bold text-black mb-8">
          Impact of St. Fox ISO Audit Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {Isodata.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
            >
              <CircularProgress percentage={item.percentage} />
              <h3 className="lg:text-[16px] text-lg  font-semibold mt-4  ">
                {item.title}
              </h3>
              <p className="lg:text-sm text-base font-normal  text-gray-600 mt-2 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Isoimpact;
