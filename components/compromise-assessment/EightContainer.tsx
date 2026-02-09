"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import FAQItem from "@/components/atoms/FAQItem";
import { QuestionsImg } from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function EightContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is a Compromise Assessment?",
      answer:
        "A Compromise Assessment is a proactive investigation to detect hidden threats, unauthorized access, and suspicious activity within your systems.",
      icon: QuestionsImg,
    },
    {
      question: "How does St. Fox conduct compromise assessments?",
      answer:
        "We use AI-powered tools and expert forensic analysis to identify, analyze, and mitigate threats.",
      icon: QuestionsImg,
    },
    {
      question: "What industries benefit from Compromise Assessments?",
      answer:
        "Our services cater to all industries, especially finance, healthcare, retail, and technology, where sensitive data must be protected.",
      icon: QuestionsImg,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="flex justify-center items-center bg-[#FAFAFA]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col justify-center gap-5">
          <div className="space-y-3">
            <h2 className="lg:text-[40px] lg:leading-[48px] text-2xl font-bold">
              Uncover Hidden Threats with St. Fox
            </h2>
            <p className="sm:text-lg text-base">
              Detect, eliminate, and prevent compromises in your environment
              with expert guidance.
            </p>
          </div>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Schedule a Free Compromise Assessment"}
              className="px-6 py-2 rounded-lg border-2 border-[#E5E7EB] text-[13px] font-medium leading-[19.5px]"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        <div className="lg:p-6 p-5">
          <h3 className="lg:text-xl text-base font-semibold mb-4">
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
        title={"Schedule a Free Compromise Assessment"}
      />
    </Wrapper>
  );
}

export default EightContainer;
