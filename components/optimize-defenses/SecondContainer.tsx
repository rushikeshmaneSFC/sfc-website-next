import Wrapper from "@/components/atoms/Wrapper";
import { HEROSECTIONITEMS } from "@/constants/OptimizeDefenses";

interface TeamBlockProps {
  bgColor: string;
  iconSrc: string;
  title: string;
  description: string;
  textColor: string;
}

const TeamBlock: React.FC<TeamBlockProps> = ({
  bgColor,
  iconSrc,
  title,
  description,
  textColor,
}) => {
  return (
    <div className="my-2">
      <div
        className={`h-10 w-10 ${bgColor} rounded-md flex justify-center items-center`}
      >
        <img
          loading="lazy"
          src={iconSrc}
          alt="icon"
          className="w-6 h-6 rounded-md "
        />
      </div>
      <p
   className={`text-lg font-semibold whitespace-nowrap mt-2 ${textColor}`}
      >
        {title}
      </p>
      <p className="text-[#7a7a7a] text-base font-medium mt-1">{description}</p>
    </div>
  );
};

export default function SecondContainer() {
  return (
    <Wrapper className="flex justify-center items-center h-auto py-5">
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold">
          Comprehensive Red, Purple, and Blue Teaming for Enterprise-Grade
          Security
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
        <TeamBlock
          bgColor="bg-[linear-gradient(135deg,#F46D8A_0%,#A00023_100%)]"
          textColor="text-[#9F2741]"
          iconSrc="/images/OptimizeDefenses/Vigileicon.webp"
          title="Red Teaming (Offensive)"
          description="Assess and improve your organization's ability to detect, respond to, and mitigate attacks."
        />
        <TeamBlock
          bgColor="bg-[linear-gradient(135deg,_#6183F3_0%,_#082997_100%)]"
          textColor="text-[#1B389B]"
          iconSrc="/images/OptimizeDefenses/Vigileicon.webp"
          title="Blue Teaming (Defensive)"
          description="Simulate adversarial tactics to uncover vulnerabilities in your systems and processes."
        />
        <TeamBlock
          bgColor="bg-[linear-gradient(135deg,#D864E1_0%,#80038A_100%)]"
          textColor="text-[#84278B]"
          iconSrc="/images/OptimizeDefenses/Vigileicon.webp"
          title="Purple Teaming (Collaborative)"
          description="Facilitate collaboration between offensive and defensive teams to optimize detection and response strategies."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="flex  justify-center items-center">
          <p className="lg:text-4xl md:text-3xl text-2xl font-bold">
            St. Fox's Teaming Services strengthen security with{" "}
            <span className="text-[#1A3F7E]">offensive</span>,{" "}
            <span className="text-[#1A3F7E]">defensive</span>, and {""}
            <span className="text-[#1A3F7E]">collaborative exercises</span>
          </p>
        </div>
        <div className="flex flex-col">
          {HEROSECTIONITEMS.map((item) => (
            <div
              key={item.title}
              className="flex justify-center items-center gap-4 mb-4"
            >
              <img
                src="/images/ManagedIdentity/Tickimg.webp"
                className="w-5 h-5"
                alt=""
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
