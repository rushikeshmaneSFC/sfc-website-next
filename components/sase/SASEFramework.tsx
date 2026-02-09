"use client";

import Wrapper from "@/components/atoms/Wrapper";

function SASEFramework() {
  return (
    <Wrapper
      className=" bg-[url('https://saintfox.azureedge.net/datav2/Frameworkbg.png')] flex justify-center lg:h-[696px] md:h-[696px] h-auto items-center
    bg-no-repeat bg-cover bg-center lg:py-0 md:py-0 py-5"
    >
      <div className=" justify-center items-center text-center">
        <p className="text-xl lg:text-2xl font-bold">
          A Strategic SASE Solution Built on the VIGILE Framework
        </p>
        <p className="text-base lg:text-xl font-medium mt-2">
          St. Fox Managed SASE aligns with the VIGILE Framework, ensuring
          comprehensive protection and optimization.
        </p>
        <div>
          <img
            loading="lazy"
            src="/images/SASE/sase_vf.webp"
            alt="SASE_vigileframework"
            className="mt-8"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default SASEFramework;
