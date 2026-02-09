"use client";
// @ts-nocheck

import { useEffect, useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ProductCard from "@/components/atoms/Card";
import { useRouter } from "next/navigation";
import { products } from "@/constants/homeConstant";
import ReusableBtn from "@/components/atoms/ReusableBtn";

function VigileSuccessStories() {
  // SSR-safe: default to false (desktop view), update on client
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only access window on client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };

      // Set initial value
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const visibleProducts = products.slice(0, isSmallScreen ? 2 : 2);

  return (
    <Wrapper className="flex justify-center items-center">
      <div className="flex justify-center items-center my-5">
        <p className="lg:text-2xl text-xl font-bold">
          Customer Success Stories
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
            className={undefined}
          />
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <ReusableBtn
          className="px-2 py-2 bg-black text-[#fff] font-medium rounded-lg transition sm:justify-center sm:items-center flex items-center justify-center gap-2 text-base mt-4 whitespace-nowrap"
          name="Read All Blogs"
          type={"button"}
          onClick={() => router.push("/casestudies")}
        />
      </div>
    </Wrapper>
  );
}

export default VigileSuccessStories;
