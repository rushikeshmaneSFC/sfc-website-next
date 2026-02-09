import { DowndWordArrow, UpWordArrow } from "@/constants/Sase";

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
        className="flex items-center justify-between w-full text-left text-gray-900 font-medium bg-[#F3F4F6] px-3 py-4 rounded-t"
        onClick={toggle}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="w-5 h-5">{icon}</span>}
          <span className="text-base font-medium">{question}</span>
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

export default FAQItem;
