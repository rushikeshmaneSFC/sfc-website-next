import Wrapper from "@/components/atoms/Wrapper";
import VAPTList from "@/components/vapt/VAPTList";

function ThirdContainer() {
  const list = [
    {
      id: 1,
      content: (
        <p className="text-base font-medium lg:leading-6">
          <span className="text-[#1A3F7E] font-medium">
            Zero-Trust Vigilance:
          </span>{" "}
          Multi-layered security, threat detection, and continuous assessments
          to safeguard your data.
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p className="text-base font-medium lg:leading-6">
          <span className="text-[#1A3F7E] font-medium">
            Compliance Nirvana:
          </span>{" "}
          Seamless support across GDPR, HIPAA, and more to ensure audit-ready
          compliance.
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p className="text-base font-medium lg:leading-6">
          <span className="text-[#1A3F7E] font-medium">Proactive Defense:</span>{" "}
          We detect and fix threats before they strike—protecting your systems
          and reputation.
        </p>
      ),
    },
  ];
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] bg-no-repeat bg-cover bg-center lg:h-[553px] md:h-[553px] h-auto items-center justify-center flex">
      <div className="grid grid-cols-[100%] md:py-[28px] md:grid-cols-[40%,60%] lg:grid-cols-[50%,50%] lg:pt-0 md:pt-8 pt-4 lg:py-0 py-7">
        <div className="h-[inherit] flex items-center justify-center text-center lg:text-start md:text-start lg:mb-0 md:mb-0 ">
          <h1 className="text-xl lg:text-[32px] font-bold lg:leading-[56px]">
            Fortress-Grade Security
          </h1>
        </div>

        <div className="flex flex-wrap flex-col gap-20 md:gap-24 lg:gap-9 mt-20 md:mt-0">
          {list.map((item) => (
            <VAPTList item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ThirdContainer;
