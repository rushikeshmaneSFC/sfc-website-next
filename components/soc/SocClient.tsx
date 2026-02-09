"use client";

import Wrapper from "@/components/atoms/Wrapper";
import Main from "./Main";
import SocMenu from "./SocMenu";
import SocCard from "./SocCard";

function SocClient() {
  return (
    <>
      <Main />
      <Wrapper className="flex justify-center items-center ">
        <div className="md:hidden sm:mt-[95px] mt-0 md:mt-0 ">
          <SocCard />
        </div>
      </Wrapper>
      <SocMenu />
    </>
  );
}

export default SocClient;
