import Wrapper from "@/components/atoms/Wrapper";
import { COMPROMISEASSESSMENT_TEXT } from "@/constants/CompromiseAssessment";

const renderDescription = (description: { text: string; bold?: boolean }[]) => {
  return description.map((part, index) => {
    if (part.bold) {
      return (
        <span key={index} className="font-semibold">
          {part.text}
        </span>
      );
    }
    return <span key={index}>{part.text}</span>;
  });
};

export default function SeventhContainer() {
  return (
    <Wrapper className=" flex justify-center items-center py-10 ">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="lg:text-2xl text-[20px] font-bold text-center mb-6 ">
          Impact of St. Fox Compromise Assessment Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {COMPROMISEASSESSMENT_TEXT.map((item, index) => (
            <div
              key={index}
              className="border relative hover:border-t-2 hover:border-t-[#223780] transition-all duration-300 rounded-lg p-6 shadow-md backdrop-blur-[21px]"
            >
              <p className="lg:text-[22px] lg:leading-8 text-xl font-semibold">
                {item.title}
              </p>
              <p className="text-base lg:text-[20px] font-normal mt-2">
                {renderDescription(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
