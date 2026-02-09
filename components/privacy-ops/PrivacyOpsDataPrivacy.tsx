import Wrapper from "@/components/atoms/Wrapper";

const PrivacyOpsDataPrivacy = () => {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Privacyopsvigilebg2x.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="  py-8 px-4 text-center">
        <h2 className="text-xl lg:text-2xl font-bold">
          Empowered by the VIGILE Framework for Data Privacy
        </h2>
        <p className="text-base lg:text-xl mt-2">
          St. Fox Privacy Ops Services align with the VIGILE Framework to
          provide a structured and proactive approach to data privacy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Validate_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Validate.webp"
                className="bg-white rounded-lg p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Validate
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1">
                Assess current privacy policies, practices, and risks.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-col-reverse justify-center items-center text-center ">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Identify_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Identify.webp"
                className="bg-white rounded-lg  p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Identify
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1">
                Discover and classify sensitive data across all environments.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Guard_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Guard.webp"
                className="bg-white rounded-lg  p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Guard
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1 tracking-tighter">
                Implement controls to secure data and ensure compliance.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-col-reverse justify-center items-center text-center">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Implement_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Implement.webp"
                className="bg-white rounded-lg  p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Implement
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1">
                Automate DSAR workflows and regulatory compliance processes.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Learn_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Learn.webp"
                className="bg-white rounded-lg  p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Learn
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1">
                Use insights from audits and impact assessments to refine
                strategies.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-col-reverse justify-center items-center text-center">
            <div className="lg:h-[125px]">
              <img
                loading="lazy"
                alt="Enhance_img"
                src="/images/PrivacyOps/PrivacyOps_DataPrivacy_Enhance.webp"
                className="bg-white rounded-lg  p-10 shadow-[0px_0px_2px_rgba(14,31,53,0.12),0px_1px_4px_rgba(14,31,53,0.06)]"
              />
            </div>
            <div className="h-[125px]">
              <h3 className="text-lg lg:text-[15px] font-semibold lg:leading-6 lg:mt-0 mt-3">
                Enhance
              </h3>
              <p className="text-base lg:text-[12px] leading-5 lg:mt-0 mt-1">
                Continuously update privacy practices for GDPR, DPDPA
                compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyOpsDataPrivacy;
