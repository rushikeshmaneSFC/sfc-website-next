import Wrapper from "@/components/atoms/Wrapper";

const items = [
  {
    text: "Sophisticated cyberattacks can go undetected for months, allowing attackers to exploit systems unnoticed.",
  },
  {
    text: "Many organizations lack the tools or expertise to identify advanced persistent threats (APTs).",
  },
  {
    text: "A Compromise Assessment can uncover these hidden risks and provide actionable remediation plans.",
  },
];

export default function SecondContainer() {
  return (
    <Wrapper className="bg-[#FAFAFA] flex justify-center items-center md:h-[452px] lg:h-[452px] h-auto py-5 lg:py-0 md:py-5 ">
      <div className="text-center lg:mt-0  sm:mt-20">
        <p className="text-base sm:text-2xl font-bold">
          Could Your Systems Be Compromised Without Your Knowledge?
        </p>
        <img
          loading="lazy"
          src="/images/CompromiseAssessment/Compromiseassessment.webp"
          alt="vector"
          className="py-10"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 my-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border flex justify-center items-center rounded-lg p-4"
          >
            <p className="text-base font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
