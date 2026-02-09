"use client";

import Wrapper from "@/components/atoms/Wrapper";

function MDRFramework() {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] flex justify-center items-center lg:h-[650px] md:h-[650px] h-auto bg-no-repeat bg-cover bg-center lg:py-0 md:py-0 py-5">
      <div className=" justify-center items-center text-center lg:mt-8">
        <p className="text-xl lg:text-2xl md:text-2xl font-bold ">
          Strategically Designed with the VIGILE Framework
        </p>
        <p className="text-base lg:text-xl md:text-xl font-medium mt-3 ">
          St. Fox MDR services are powered by the VIGILE Framework, a proven
          approach to enterprise security.
        </p>
        <div className=" mt-[20px]">
          <img
            loading="lazy"
            src="/images/MDR/MDRvigile.webp"
            alt="MDR_vigileframework"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default MDRFramework;
