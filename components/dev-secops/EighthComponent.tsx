"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import FAQItem from "@/components/atoms/FAQItem";
import { QuestionsImg } from "@/constants/Sase";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function EighthComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Managed DevSecOps?",
      answer:
        "Managed DevSecOps integrates security into the development lifecycle, ensuring vulnerabilities are detected and addressed before deployment.",
      icon: QuestionsImg,
    },
    {
      question: "What tools does St. Fox use for DevSecOps?",
      answer:
        "We leverage industry-leading tools for SAST, DAST, IaC scanning, container security, and CI/CD integration.",
      icon: QuestionsImg,
    },
    {
      question: "Does St. Fox offer free trials?",
      answer:
        "As a services company, we do not offer free trials. However, we provide limited free assessments to evaluate your current DevOps and security posture.",
      icon: QuestionsImg,
    },
    {
      question: "What industries benefit from Managed DevSecOps?",
      answer:
        "Our services are ideal for industries like FinTech, healthcare, retail, and technology, where secure and rapid software delivery is critical.",
      icon: QuestionsImg,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="flex justify-center items-center bg-[#FAFAFA] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="flex flex-col mt-10">
          <p className="lg:text-[36px] text-2xl lg:leading-[48px] font-bold">
            Secure Your Development Lifecycle with St. Fox Managed DevSecOps
          </p>
          <p className="text-lg font-normal mt-2">
            Integrate security seamlessly into your CI/CD pipeline for faster,
            safer releases.
          </p>
          <div className="mt-4">
            <ReusableBtn
              className="px-3 py-2 text-[#000] font-medium rounded-md border-2 border-[#E5E7EB] items-center justify-center text-base"
              name="Schedule a Free DevSecOps Assessment"
              type={"button"}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="space-y-4 mt-8">
          <p className="lg:text-xl text-lg font-medium mb-4">
            Frequently Asked Questions
          </p>
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
        title={"Schedule a Free Assessment"}
      />
    </Wrapper>
  );
}

export default EighthComponent;
