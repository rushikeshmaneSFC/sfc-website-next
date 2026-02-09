import Wrapper from "@/components/atoms/Wrapper";

function FifthContainer() {
  const cloud = [
    {
      title: "Data Privacy & Security",
      subtitle:
        "Safeguarding the privacy and security of client data constitutes a pivotal aspect of our business operations. We employ diverse processes to capture and manage sensitive data across the organization, ensuring the preservation of data confidentiality, integrity, availability, reliability, and security. Our processes are compliant with Indian Personal Data Protection Act, HIPAA, GDPR, CCPA, PIPEDA and other US state data privacy regulations.",
    },
    {
      title: "Prioritizing Sustainability for the Future",
      subtitle:
        "At St. Fox, our deliberate efforts are directed towards maximizing our Environmental, Social, and Governance (ESG) initiatives to create enduring economic, social, and environmental value. Our commitment is steadfast in driving positive societal change and fostering environmental sustainability.",
    },
  ];
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Fifthcontainerbg.webp')] flex bg-cover bg-center justify-center items-center h-auto bg-[#071119] md:py-10 py-10">
      <div className="flex flex-col justify-center">
        {cloud.map((item, index) => (
          <div
            key={index}
            className="p-7 w-auto my-6 rounded-[2px] border border-[rgba(255,255,255,0.15)] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px]"
          >
            <p className="text-[#fff] lg:text-2xl text-xl font-semibold">
              {item.title}
            </p>
            <p className="text-[#fff]  text-base font-normal mt-4">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default FifthContainer;
