"use client";

interface ApproachCardsProps {
  heading: string;
  text: string;
  icon: string;
}

const ApproachCards = ({ heading, text, icon }: ApproachCardsProps) => {
  return (
    <div
      className="flex justify-center backdrop-blur-[21px]  items-center border border-gray-50 rounded-md border-opacity-20 px-2 min-h-[180px] "
      style={{
        background:
          "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    >
      <div
        className=" flex justify-center gap-y-2  items-center flex-col 
      "
      >
        <img loading="lazy" src={icon} alt={heading} className="w-[50] h-[50px]" />
        <p className="text-[#fff] text-lg  font-semibold ">{heading}</p>
        <p
          className={`text-[#fff] tex-[15px] text-center ${
            heading === "Enhance" ? "" : ""
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ApproachCards;
