"use client";

import { useState } from "react";
import FAQItem from "@/components/atoms/FAQItem";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import Wrapper from "@/components/atoms/Wrapper";
import { QuestionsImg } from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function FortifyNetwork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ManagedFirewall = [
    {
      id: 1,
      title: "What is Managed Firewall?",
      description:
        "Managed Firewall provides comprehensive management of your firewall, including real-time monitoring, threat detection, and policy optimization, to protect your network.",
    },
    {
      id: 2,
      title: "What types of firewalls does St. Fox manage?",
      description:
        "We support NGFWs, UTM firewalls, and hybrid cloud firewall solutions from leading vendors.",
    },
    {
      id: 3,
      title: "What industries benefit most from Managed Firewall Services?",
      description:
        "Our Managed Firewall Services are ideal for industries such as retail, finance, healthcare, and manufacturing that require robust network security.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className=" bg-[url('/images/VAPT/Whitebackground.png')] flex justify-center items-center bg-cover bg-center bg-no-repeat">
      <>
        <div className="grid mt-5">
          <div className="text-xl lg:text-[40px] font-bold lg:leading-[48px] text-center lg:mb-1">
            Fortify Your Network with St. Fox Managed Firewall Services
          </div>
          <p className="text-center text-base lg:text-lg font-normal mt-2 lg:mt-0">
            Protect your business with proactive, real-time firewall management.
          </p>
          <div className="flex items-center justify-center mt-4">
            <ReusableBtn
              className="border-2 border-[#E5E7EB]
                px-[10px] py-[5px]
                lg:px-[20px] lg:py-[10px]
                font-medium rounded-md
                lg:text-[14px] text-[12px]
                lg:whitespace-nowrap"
              name="Talk to a Firewall Expert"
              type="button"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="grid my-4">
          <h3 className="lg:text-xl text-xl text-center lg:text-left font-medium mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 grid">
            {ManagedFirewall.map((ele, index) => (
              <FAQItem
                key={ele.id}
                question={ele.title}
                answer={ele.description}
                icon={QuestionsImg}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
          <ScheduleModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            title={"Talk to a Firewall Expert"}
          />
        </div>
      </>
    </Wrapper>
  );
}

export default FortifyNetwork;
