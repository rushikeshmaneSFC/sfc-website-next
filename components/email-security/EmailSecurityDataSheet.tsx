"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import CustomModal from "@/components/atoms/CustomModal";

const EmailSecurityDataSheet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper className="bg-[#071119] bg-[url('https://saintfox.azureedge.net/datav2/Soc2Wave.png')] bg-no-repeat  flex justify-center items-center border lg:h-[384px] md:h-[384px] h-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-[30%,70%]">
        <div className="flex items-center justify-center z-10">
          <img
            loading="lazy"
            src="/images/EmailSecurity/Datasheetimg.png"
            alt="Emailsecurity_datasheet"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-[#fff] items-center text-center md:text-start sm:justify-start sm:items-start lg:py-14 md:py-10 md:-ml-3">
          <div
            className="showdow-sm lg:mt-0 md:mt-0 mt-4  lg:py-10 md:py-10 xl:-ml-4 lg:px-5  md:px-4 border-opacity-15 rounded-[2px]  backdrop-blur-[21px] p-6 bg-[#FFF] border border-opacity-20 border-gray-50"
            style={{
              background:
                "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          >
            <h2 className="text-xl lg:text-2xl md:text-xl leading-8 font-bold mx-4">
              Access the Email Security Datasheet
            </h2>
            <p className="text-base md:text-sm mt-2 mx-4">
              Discover our approach, features, and benefits to secure your
              business.
            </p>
            <div className="flex justify-center items-center sm:justify-start lg:justify-start md:items-start mx-4">
              <ReusableBtn
                className="border-2 border-white
                px-3 py-2
                lg:px-6 lg:py-3 font-medium rounded-lg flex items-center
                justify-center gap-2  mt-6 lg:whitespace-nowrap"
                name="Download Datasheet"
                type="button"
                icon={null}
                onClick={() => setIsModalOpen(true)}
              />
              <CustomModal open={isModalOpen} setOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailSecurityDataSheet;
