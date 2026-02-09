"use client";

import FirstContainer from "./FirstContainer";
import VigileCybersecurityResilience from "./VigileCybersecurityResilience";
import VigileFrameWork from "./VigileFrameWork";
import VigileFrameContainer from "./VigileFrameData";
import VigileFrameworkChoose from "./VigileFrameworkChoose";
import VigileSuccessStories from "./VigileSuccessStories";
import Wrapper from "@/components/atoms/Wrapper";

export default function HomeClient() {
  return (
    <>
      <FirstContainer />
      <Wrapper className="flex justify-center items-center  lg:py-16 ">
        <div className="md:hidden  ">
          <VigileCybersecurityResilience />
        </div>
      </Wrapper>
      <VigileFrameWork />
      <VigileFrameContainer />
      <VigileFrameworkChoose />
      <VigileSuccessStories />
    </>
  );
}
