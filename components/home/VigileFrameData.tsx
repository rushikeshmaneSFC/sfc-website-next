"use client";
// @ts-nocheck

import Link from "next/link";
import Accordion from "@/components/atoms/Accordion";
import Wrapper from "@/components/atoms/Wrapper";
import { VigileFrameData } from "@/constants/homeConstant";

interface VigileFrameProps {
  imgurl: string;
  title: string;
  description: string;
  points: { text: string; route: string }[];
}

const VigileFrame = ({
  imgurl,
  title,
  description,
  points,
}: VigileFrameProps) => {
  return (
    <div className="group w-[70px] p-3 transition-all duration-500 ease-in-out hover:w-[370px] border rounded-lg overflow-hidden h-[420px] bg-white">
      <div className="flex gap-4 relative">
        <img
          loading="lazy"
          src={imgurl}
          alt={title}
          className="w-8 h-8 group-hover:mt-2 ml-1.5 mx-4"
        />
        <div className="invisible hidden group-hover:visible group-hover:block absolute left-10 top-0 w-72 ml-2">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <p className="flex font-semibold text-xl transform rotate-90 group-hover:rotate-0 group-hover:hidden transition-all duration-500 mt-24">
        {title}
      </p>
      <div className="invisible group-hover:opacity-100 group-hover:visible mt-8 pl-1.5 ">
        <ul className="list-decimal font-medium p-4 leading-[16px]">
          {points.map((point, index) => (
            <li key={index} className="mb-4">
              <Link href={point.route} className="text-sm">
                {point.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const VigileFrameContainer = () => {
  return (
    <>
      <Wrapper className="flex justify-center items-center pb-10 px-4 lg:py-16">
        <div className="flex justify-center items-center px-4 lg:block hidden">
          <div className="flex flex-col justify-center items-center my-4 ">
            <h1 className="text-center text-base lg:text-2xl font-bold mb-4 md:mb-8">
              VIGILE Framework
            </h1>
            <div className="flex justify-center gap-[34px]">
              {VigileFrameData.map((item, index) => (
                <VigileFrame
                  key={index}
                  imgurl={item.imgurl}
                  title={item.title}
                  description={item.description}
                  points={item.points}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex justify-center items-center pb-10 px-4 lg:py-16 lg:hidden block">
        <div className="lg:visible">
          <h1 className="text-center text-xl lg:text-2xl font-bold mb-4 md:mb-8">
            VIGILE Framework
          </h1>
          <div className="grid grid-col-1 gap-4">
            {VigileFrameData.map((item, index) => (
              <Accordion
                key={index}
                title={
                  <div className="flex gap-4 relative">
                    <img
                      loading="lazy"
                      src={item.imgurl}
                      alt={item.title}
                      className="w-10 h-10 mt-2 ml-1.5 mx-4"
                    />
                    <div>
                      <p className="text-base lg:text-xl font-semibold">
                        {item.title}
                      </p>
                      <p className="text-xs">{item.description}</p>
                    </div>
                  </div>
                }
              >
                <div className="mt-4 pl-1.5 px-5 py-2">
                  <ul className="list-decimal  text-sm mb-4 mx-8">
                    {item.points.map((point, index) => (
                      <li key={index} className="mb-2">
                        <Link href={point.route} className="">
                          {point.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default VigileFrameContainer;
