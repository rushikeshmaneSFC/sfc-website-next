// @ts-nocheck
"use client";

import IsoCard from "@/components/atoms/IsoCard";
import Wrapper from "@/components/atoms/Wrapper";
import { ISOCardsData } from "@/constants/ISOConstant";

function SecondComponent() {
  return (
    <Wrapper className=" flex justify-center items-center ">
      <div>
        <IsoCard
          title="Is Your Organization ISO 27001 Ready? "
          imageSrc="/images/ISO/Vector.png"
          cards={ISOCardsData}
        />
      </div>
    </Wrapper>
  );
}

export default SecondComponent;
