import IncidentIdentifyCard from "@/components/atoms/IncidentIdentifyCard";
import IncidentIdentifyCardRight from "@/components/atoms/IncidentIdentifyCardRight";
import Wrapper from "@/components/atoms/Wrapper";

const IncidentResponseVigileFrameWork = () => {
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] flex justify-center items-center bg-no-repeat bg-cover bg-center h-auto lg:h-[570px] md:h-auto pt-10 lg:pt-4 md:pt-5 p-5">
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-20 md:gap-20 gap-10 items-center">
          <div className="flex flex-col gap-10">
            <IncidentIdentifyCard
              text={"Validate"}
              imageSrc={"/images/IncidentResponse/Validate.webp"}
              description={"Assess and confirm the extent of the breach."}
            />
            <IncidentIdentifyCard
              text={"Identify"}
              imageSrc={"/images/IncidentResponse/Identify.webp"}
              description={
                "Pinpoint the source, method, and impact of the incident."
              }
            />
            <IncidentIdentifyCard
              text={"Guard"}
              imageSrc={"/images/IncidentResponse/Guard.webp"}
              description={"Contain the incident to prevent further spread."}
            />
          </div>

          <div className="flex justify-center items-center text-center lg:mx-7 mr-7">
            <h1 className="text-2xl font-bold text-white">
              Built on the Proven VIGILE Framework
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <IncidentIdentifyCardRight
              text={"Implement"}
              imageSrc={"/images/IncidentResponse/Implement.webp"}
              description={
                "Deploy remediation measures and strengthen defenses."
              }
            />
            <IncidentIdentifyCardRight
              text={"Learn"}
              imageSrc={"/images/IncidentResponse/Learn.webp"}
              description={
                "Analyze the incident to identify lessons and future safeguards."
              }
            />
            <IncidentIdentifyCardRight
              text={"Enhance"}
              imageSrc={"/images/IncidentResponse/Enhance.webp"}
              description={
                "Continuously update incident response plans to address evolving threats."
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden  justify-center items-center">
        <p className="text-xl font-bold text-center">
          Built on the Proven VIGILE Framework
        </p>
        <img
          loading="lazy"
          src="/images/IncidentResponse/Validatevigile.png"
          alt="Incident Response_Framework"
          className="mt-5"
        />
        <img
          loading="lazy"
          src="/images/IncidentResponse/Identifyvigile.png"
          alt="Incident Response_Framework"
          className=""
        />
        <img
          loading="lazy"
          src="/images/IncidentResponse/Guardvigile.png"
          alt="Incident Response_Framework"
          className=""
        />
        <img
          loading="lazy"
          src="/images/IncidentResponse/Implementvigile.png"
          alt="Incident Response_Framework"
          className="mt-10"
        />
        <img
          loading="lazy"
          src="/images/IncidentResponse/Learnvigile.png"
          alt="Incident Response_Framework"
          className=""
        />
        <img
          loading="lazy"
          src="/images/IncidentResponse/Enhancevigile.png"
          alt="Incident Response_Framework"
          className=""
        />
      </div>
    </Wrapper>
  );
};

export default IncidentResponseVigileFrameWork;
