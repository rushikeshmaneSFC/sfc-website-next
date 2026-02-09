import Wrapper from "@/components/atoms/Wrapper";
import { EMAIL_SECURITY_DETECTION } from "@/constants/EmailSecurity";

const EmailSecurityDetection = () => {
  return (
    <Wrapper className="flex justify-center items-center mt-10">
      <div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="icon"
              className="w-4 h-4 "
            />
            <h3 className="text-[#1A3F7E] font-semibold lg:text-[14px] text-sm lg:leading-[24px]">
              St. Fox Managed Email Security
            </h3>
          </div>

          <h2 className="lg:text-[32px] text-xl font-semibold lg:leading-10 mt-2">
            Advanced Email Protection for a Modern Threat Landscape
          </h2>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-1 gap-6 bg-[#F9F9F9] p-6 rounded-lg shadow-sm mt-4">
          {EMAIL_SECURITY_DETECTION.map((service, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-none text-gray-800 flex  gap-x-5 lg:justify-start lg:items-start justify-center items-center"
            >
              <img
                loading="lazy"
                alt="icon"
                className="lg:w-9 lg:h-9 w-7 h-7 "
                src="/images/EmailSecurity/Detectionimg.webp"
              />
              <h3 className="lg:text-xl text-base font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailSecurityDetection;
