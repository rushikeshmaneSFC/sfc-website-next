"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ProductCard from "@/components/atoms/Card";
import { BLOGS } from "@/constants/BlogConstant";

export default function BlogClient() {
  const [startIndex, setStartIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallScreen(window.innerWidth < 640);
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const sortedBlogs = [...BLOGS].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const visibleProducts = sortedBlogs.slice(startIndex);

  return (
    <Wrapper className="mt-14 flex items-center justify-center">
      <div className="my-5 flex items-center justify-center">
        <p className="text-xl font-bold lg:text-2xl">Blog and Insights</p>
      </div>
      <div className="grid grid-cols-[100%] sm:grid-cols-[100%]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id ?? index}
              imgurl={product.imgurl}
              name={product.name}
              title={product.title}
              icon={product.icon}
              subname={product.subname}
              text={product.text}
              nameBgColor={product.nameBgColor}
              date={product.date}
              className=""
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
