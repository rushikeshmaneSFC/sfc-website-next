import Wrapper from "@/components/atoms/Wrapper";
import { EMAIL_THREAT_DATA } from "@/constants/EmailSecurity";

const EmailSecurityThreat = () => {
  return (
    <Wrapper className="flex items-center justify-center py-10">
      <div className="grid grid-cols-1 max-w-6xl w-full items-center md:grid-cols-2 md:pb-[28px]">
        <div className="flex flex-col text-[#1F1F1F] justify-center">
          <div className="flex items-center gap-2 mb-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="icon"
              className="w-4 h-4"
            />
            <h3 className="text-[#1A3F7E] font-semibold text-sm lg:text-sm leading-[20px]">
              The Leading Gateway for Cyber Attacks
            </h3>
          </div>
          <h2 className="text-xl lg:text-4xl font-bold  text-[#1F1F1F]">
            Email: The #1 Entry Point for Cyber Threats
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-5 lg:mt-0 lg:gap-10 gap-5">
          {EMAIL_THREAT_DATA.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#1C1C1C] text-base lg:text-base font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailSecurityThreat;
