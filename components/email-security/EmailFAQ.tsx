"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import FAQItem from "@/components/atoms/FAQItem";
import { EMAIL_FAQ_ICON } from "@/constants/EmailSecurity";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const EmailFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqData = [
    {
      question: "What is Managed Email Security?",
      answer:
        "Managed Email Security provides end-to-end protection against email-based threats like phishing, ransomware, and malware, along with compliance and DLP capabilities.",
      icon: EMAIL_FAQ_ICON,
    },
    {
      question: "How does St. Fox Managed Email Security work?",
      answer:
        "It combines AI-powered threat detection, advanced policies, and global threat intelligence to secure email systems from evolving threats.",
      icon: EMAIL_FAQ_ICON,
    },
    {
      question: "What industries benefit from Managed Email Security?",
      answer:
        "Our Managed Email Security is ideal for industries with sensitive data, including finance, healthcare, technology, and retail.",
      icon: EMAIL_FAQ_ICON,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center bg-[#fff] py-8">
      <div className="grid grid-cols-12 md:grid-cols-2 lg:gap-8">
        <div className="col-span-12 gap-5 space-y-4">
          <div className="space-y-3">
            <h2 className="lg:text-4xl text-center text-xl font-bold">
              Take Control of Your Email Security with St. Fox
            </h2>
            <p className="text-center lg:text-lg text-sm">
              Prevent, Detect, and Mitigate Email-Based Threats with Our
              Advanced Solutions.
            </p>
          </div>
          <div className="text-center">
            <ReusableBtn
              type={"button"}
              name={"Talk to an Email Security Expert"}
              className="lg:px-6 lg:py-2 px-4 py-1 border-2 border-solid  border-[#E5E7EB] text-gray-800 rounded-lg lg:text-[13px] text-[11px] font-[500] lg:leading-[19.5px]"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        <div className="col-span-12 p-6 rounded-lg">
          <h3 className="lg:text-xl text-lg text-center lg:text-left font-medium mb-4">
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
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Talk to an Email Security Expert"}
        />
      </div>
    </Wrapper>
  );
};

export default EmailFAQ;
