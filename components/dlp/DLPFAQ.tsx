import Wrapper from "@/components/atoms/Wrapper";
import { DLP_FAQ_ITEM } from "@/constants/DLPConstant";

const DLPFAQ = () => {
  return (
    <Wrapper className="bg-[#FAFAFA] flex justify-center items-center lg:py-20 py-10">
      <div className="flex flex-col space-y-8">
        <p className="lg:text-[28px] text-xl font-bold">
          Frequently Asked Questions
        </p>

        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
          {DLP_FAQ_ITEM.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF] flex-1 rounded-lg shadow-[0px_0px_2px_0px_rgba(14,31,53,0.12),_0px_1px_4px_0px_rgba(14,31,53,0.06)] py-5 px-4 space-y-3"
            >
              <div className="flex items-center gap-x-2">
                <div>{item.icon}</div>
                <p className="text-[#1F1F1F] lg:text-sm text-base font-semibold">
                  {item.question}
                </p>
              </div>

              <div>
                <p className="text-[#1C1C1C] lg:text-sm text-base ">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DLPFAQ;
