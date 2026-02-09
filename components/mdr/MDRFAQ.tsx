"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import FAQItem from "@/components/atoms/FAQItem";
import { QuestionsImg } from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const MDRFAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is MDR?",
      answer:
        "Managed Detection and Response (MDR) is a 24/7 service that detects, investigates, and responds to cyber threats in real time.",
      icon: QuestionsImg,
    },
    {
      question: "How does St. Fox MDR differ from traditional tools?",
      answer:
        "St. Fox MDR integrates AI-powered detection, SOAR workflows, and human expertise to provide comprehensive protection and faster response times.",
      icon: QuestionsImg,
    },
    {
      question: "What industries benefit most from MDR?",
      answer:
        "St. Fox MDR is designed to support organizations across all industries, including finance, healthcare, retail, and technology.",
      icon: QuestionsImg,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="flex justify-center items-center bg-[#fff] lg:h-[501px] md:h-[501px] h-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="grid gap-3">
          <div className="space-y-3 lg:pt-10">
            <h2 className="lg:text-[34px] lg:leading-[40px] text-2xl md:text-3xl font-bold">
              Take Control of Your Cybersecurity with St. Fox MDR
            </h2>
            <p className="text-gray-600 lg:text-lg md:text-lg text-base font-normal ">
              Proactively protect your organization with real-time threat
              detection and expert response.
            </p>
          </div>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Schedule a Free Consultation"}
              className="px-6 py-2 border-[#E5E7EB] border text-gray-800 rounded-lg  text-base font-[500] "
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        <div className="grid rounded-lg">
          <h3 className="lg:text-xl text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
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

export default MDRFAQ;
