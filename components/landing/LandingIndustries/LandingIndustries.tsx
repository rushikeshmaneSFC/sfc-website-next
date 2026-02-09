// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ProductCard from "@/components/atoms/Card";
import { useEffect, useState } from "react";
import { SUCCESS_DATA } from "../../../Constant/LandingpageConstant";

function LandingIndustries() {
  const [startIndex, setStartIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 640);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? SUCCESS_DATA.length - (isSmallScreen ? 1 : 2)
        : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === SUCCESS_DATA.length - (isSmallScreen ? 1 : 2)
        ? 0
        : prevIndex + 1,
    );
  };

  const visibleProducts = SUCCESS_DATA.slice(
    startIndex,
    startIndex + (isSmallScreen ? 1 : 2),
  );
  return (
    <Wrapper className="bg-[url('/images/VAPT/Whitebackground.png')] bg-no-repeat bg-cover  flex justify-center items-center">
      <div className="flex justify-center items-center my-5">
        <p className="lg:text-2xl text-xl font-bold">
          Proven Success Across Industries
        </p>
      </div>
      <div className="grid sm:grid-cols-[5%,90%,5%] grid-cols-[100%] h-[280px]">
        <div className="sm:flex items-center hidden sm:visible justify-start">
          <GrFormPrevious
            className="h-6 w-6 sm:h-6 sm:w-6 rounded-full cursor-pointer"
            onClick={handlePrevious}
          />
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              imgurl={product.imgurl}
              name={product.name}
              PclassName="w-[200px] text-[11px]"
              title={product.title}
            />
          ))}
        </div>

        <div className="sm:flex items-center hidden sm:visible justify-end">
          <GrFormNext
            className="h-6 w-6 sm:h-6 sm:w-6  hover:bg-gray-300 rounded-full cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <ReusableBtn
          name="Read More Success Stories"
          className="bg-black text-[#fff] items-center font-medium text-base flex h-10 whitespace-nowrap rounded-lg px-2 py-2 gap-4 transition-all duration-200"
          type={"button"}
          icon={undefined}
        />
      </div>
    </Wrapper>
  );
}

export default LandingIndustries;
