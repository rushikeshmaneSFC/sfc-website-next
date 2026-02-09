// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/atoms/Card";
import { BLOGS } from "@/constants/BlogConstant";

function LandingInsights() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 640);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sortedInsights = [...BLOGS].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const visibleProducts = sortedInsights.slice(0, isSmallScreen ? 3 : 3);

  return (
    <div className="flex h-auto items-center justify-center bg-cover bg-center py-5 md:py-0 lg:h-[400px] lg:px-20 lg:py-0">
      <div className="mx-4 my-5 flex flex-col items-center justify-center text-[#fff] md:mx-0 lg:mx-0">
        <h2 className="mb-10 text-left text-xl font-semibold lg:text-center lg:text-4xl">
          Insights
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              imgurl={product.imgurl}
              name={product.name}
              title={product.title}
              icon={product.icon}
              nameBgColor={product.nameBgColor}
              date={product.date}
              subname={product.subname}
              role={product.role}
              text={product.text}
              className={"bg-[#fff] text-[#000]"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingInsights;
