"use client";

import { useState } from "react";
import FAQItem from "@/components/atoms/FAQItem";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import Wrapper from "@/components/atoms/Wrapper";
import { QuestionsImg } from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const ManagedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Managed Identity?",
      answer:
        "Managed Identity simplifies and secures user access to enterprise systems, ensuring that only the right people have access to the right resources.",
      icon: QuestionsImg,
    },
    {
      question: "How does St. Fox ensure compliance with regulations?",
      answer:
        "We align our solutions with global and regional compliance standards, including GDPR, HIPAA, and ISO 27001.",
      icon: QuestionsImg,
    },
    {
      question: "Can Managed Identity integrate with our existing tools?",
      answer:
        "Yes, we provide seamless integration with popular platforms like Azure AD, Okta, AWS, and more.",
      icon: QuestionsImg,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper className="flex justify-center items-center lg:h-[501px] md:h-[501px] h-auto bg-[#fff] lg:py-0 md:py-0 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="grid gap-5">
          <div className="space-y-2 lg:mt-5 mt-0 md:mt-2 ">
            <h2 className="lg:text-[34px] md:text-3xl lg:leading-[40px] text-xl font-bold">
              Take Control of Your Identities Today
            </h2>
            <p className="text-base">
              Secure your systems, empower your users, and enhance compliance
              with St. Fox Managed Identity.
            </p>
          </div>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Schedule a Free Consultation"}
              className="px-6 py-2 bg-[#ffff] border border-[#E5E7EB] text-gray-800 rounded-lg shadow hover:bg-gray-300 text-base font-normal "
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="grid lg:p-6 rounded-lg ">
          <h3 className="lg:text-xl text-lg font-semibold mb-6">
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
        title={"Schedule a Free Consultation"}
      />
    </Wrapper>
  );
};

export default ManagedFAQ;
