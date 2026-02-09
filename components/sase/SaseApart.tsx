"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import {
  DowndWordArrow,
  QuestionsImg,
  UpWordArrow,
} from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

interface FAQItemProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem = ({ question, answer, icon, isOpen, toggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      <button
        className="flex items-center justify-between w-full text-left text-gray-900 font-medium bg-[#F3F4F6] p-4 rounded-t"
        onClick={toggle}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="w-5 h-5">{icon}</span>}
          <span className="text-base">{question}</span>
        </div>
        <span>{isOpen ? <UpWordArrow /> : <DowndWordArrow />}</span>
      </button>

      {isOpen && (
        <div className="bg-white p-4 text-gray-700 text-base rounded-b-lg border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function SaseApart() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqData = [
    {
      question: "What is SASE?",
      answer:
        "Secure Access Service Edge (SASE) is a cloud-delivered framework that integrates networking and security to provide secure access for distributed users and devices.",
      icon: QuestionsImg,
    },
    {
      question: "How does St. Fox Managed SASE improve network performance?",
      answer:
        "It enhances network security and optimizes connectivity by integrating SD-WAN and security features into a unified cloud service.",
      icon: QuestionsImg,
    },
    {
      question: "What industries benefit from Managed SASE?",
      answer:
        "Industries such as finance, healthcare, retail, and remote workforce organizations can benefit from enhanced security and network efficiency.",
      icon: QuestionsImg,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="flex justify-center items-center lg:h-[501px] md:h-[501px] h-auto bg-[#fff] lg:py-6 md:py-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:p-8">
        <div className="grid gap-5">
          <div className="space-y-2 lg:mt-5 mt-0 md:mt-2">
            <h2 className="lg:text-[34px] md:text-3xl lg:leading-[40px] text-xl font-bold">
              Empower Your Business with St. Fox Managed SASE
            </h2>
            <p className="text-base">
              Secure, Simplify and Accelerate Your Network and Security
              Operations.
            </p>
          </div>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Talk to a SASE Expert"}
              className="px-6 py-2 bg-[#ffff] border border-[#E5E7EB] text-gray-800 rounded-lg shadow hover:bg-gray-300 text-base font-normal"
              icon={undefined}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        <div className="grid lg:p-6 rounded-lg">
          <h3 className="lg:text-xl text-lg font-semibold mb-6">
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
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Talk to a SASE Expert"}
        />
      </div>
    </Wrapper>
  );
}
