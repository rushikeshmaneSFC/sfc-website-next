"use client";

import Wrapper from "@/components/atoms/Wrapper";
import VAPTList from "./VAPTList";

function SecondContainer() {
  const list = [
    {
      id: 1,
      content: (
        <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
          Over <span className="text-[#1A3F7E] font-bold">75%</span> of
          successful cyberattacks exploit unpatched vulnerabilities.
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
          Manual or incomplete assessments leave your critical systems exposed.
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
          Real-world attack simulations are essential to test your defenses
          against evolving threats.
        </p>
      ),
    },
  ];

  return (
    <Wrapper
      className="bg-[url('/images/ISO/ISOAuditbg.webp')]  bg-no-repeat bg-cover bg-center
        lg:h-[515px] md:h-[515px] h-aut0 items-center justify-center flex"
    >
      <div className="grid grid-cols-[100%] md:py-[28px] md:grid-cols-[40%,60%] lg:grid-cols-[50%,50%] lg:pt-0 md:pt-8 pt-4 lg:py-0 py-7 ">
        <div className="h-[inherit] flex items-center justify-center text-center lg:text-start md:text-start lg:mb-0 md:mb-0 mb-5">
          <h1 className="text-xl lg:text-[2.25rem] font-semibold lg:leading-[56px]">
            Are Hidden Vulnerabilities Putting Your Organization at Risk?
          </h1>
        </div>

        <div className="flex flex-wrap flex-col  gap-12 md:gap-4 lg:gap-4 mt-4 md:mt-0">
          {list.map((item) => (
            <VAPTList key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SecondContainer;
