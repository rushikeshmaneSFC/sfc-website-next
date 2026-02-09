"use client";

import { useState } from "react";
import FAQItem from "@/components/atoms/FAQItem";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Wrapper from "@/components/atoms/Wrapper";
import { EMAIL_FAQ_ICON } from "@/constants/EmailSecurity";

function SaseCloudFAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Managed Cloud Security?",
      answer:
        "Managed Cloud Security provides end-to-end protection for your cloud workloads, applications, and data, ensuring compliance and security.",
      icon: EMAIL_FAQ_ICON,
    },
    {
      question: "How does St. Fox Managed Cloud Security work?",
      answer:
        "It combines AI-powered threat detection, advanced policies, and global threat intelligence to secure your cloud environment from evolving threats.",
      icon: EMAIL_FAQ_ICON,
    },
    {
      question: "What industries benefit from Managed Cloud Security?",
      answer:
        "Our Managed Cloud Security is ideal for industries with sensitive data, including finance, healthcare, technology, and retail.",
      icon: EMAIL_FAQ_ICON,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="bg-[url('/images/SaseCloudsecurity/stfox_Secure_WhiteBg.webp')] lg:h-[595px] md:h-[595px] h-auto bg-no-repeat bg-cover bg-center flex justify-center items-center py-8">
      <div className="grid grid-cols-12 md:grid-cols-2 lg:gap-8">
        <div className="col-span-12 gap-5 space-y-4">
          <div className="space-y-3">
            <h2 className="lg:text-[32px] lg:leading-[40px] text-center text-2xl md:text-3xl font-bold">
              Secure Your Cloud Environment with St. Fox
            </h2>
            <p className="text-gray-600 text-center text-base">
              Proactively protect your cloud workloads, applications, and data
              with our end-to-end cloud security solutions.
            </p>
          </div>
          <div className="text-center">
            <ReusableBtn
              type={"button"}
              name={"Schedule a Free Cloud Security Assessment"}
              className="lg:px-6 lg:py-2 px-4 py-1 border-2 border-solid  border-[#E5E7EB] text-gray-800 rounded-lg lg:text-[13px] text-base font-medium"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="col-span-12 lg:p-6 rounded-lg">
          <h3 className="text-xl text-center lg:text-left font-medium mb-6 lg:mt-0 md:mt-7 mt-7">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 grid">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </Wrapper>
  );
}

export default SaseCloudFAQ;
