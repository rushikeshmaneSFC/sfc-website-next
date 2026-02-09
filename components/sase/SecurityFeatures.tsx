"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { features } from "@/constants/Sase";

const SecurityFeatures = () => {
  return (
    <Wrapper className=" flex justify-center items-center  h-auto ">
      <div className="text-center space-y-3">
        <h2 className="lg:text-2xl text-2xl  font-bold ">
          Revolutionize Access Security with St. Fox Managed SASE
        </h2>
        <p className="lg:text-lg text-base ">
          Integrates networking and security into a unified service, ensuring
          secure, fast, and reliable access for your users and devices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:pt-5 md:pt-5 pt-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 "
            >
              <h3 className="font-semibold text-lg lg:px-0 md:px-0 px-2">
                {feature.title}
              </h3>
              <p className="text-base mt-2 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SecurityFeatures;
