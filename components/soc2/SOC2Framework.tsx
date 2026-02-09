"use client";

import Wrapper from "@/components/atoms/Wrapper";

function SOC2Framework() {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Frameworkbg.png')] flex justify-center items-center  bg-no-repeat bg-cover bg-center lg:h-[696px] md:h-[696px] h-auto lg:py-0 md:py-0 py-5">
      <div className=" justify-center items-center text-center ">
        <p className="text-xl md:text-2xl lg:text-2xl font-extrabold ">
          Built on the Proven VIGILE Framework
        </p>
        <p className="text-base md:text-xl lg:text-xl font-medium mt-3">
          Our Managed SOC services align with the VIGILE Framework, a strategic
          approach to enterprise security.
        </p>
        <div className=" mt-[14px]">
          <img
            loading="lazy"
            src="/images/SOC2/soc.webp"
            alt="Security Operations Center2_vigileframework"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default SOC2Framework;
