import Wrapper from "@/components/atoms/Wrapper";

function SustainabilityGoals() {
  return (
    <Wrapper className="flex justify-center items-center lg:mt-14">
      <div className="text-center lg:mt-0 mt-6 ">
        <p className="lg:text-2xl text-xl font-bold lg:leading-8">
          Our Sustainability Goals
        </p>
        <p className="lg:text-xl text-base font-medium lg:leading-6 mt-3">
          We are deeply committed to fostering a sustainable future through
          innovative practices. Our dedication revolves around three pivotal
          pillars, as we strive to make a positive and lasting impact on
          society.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4 h-auto">
        {[
          {
            img: "/images/CorporateSustainability/Environmental.webp",
            title: "Environmental Stewardship",
            subtitle:
              "We actively engage in practices that minimize our environmental footprint, working towards a greener and cleaner planet.",
          },
          {
            img: "/images/CorporateSustainability/Socialresponsibility.webp",
            title: "Social Responsibility",
            subtitle:
              "We believe in making a meaningful contribution to society by promoting social welfare, diversity, and community engagement.",
          },
          {
            img: "/images/CorporateSustainability/Economicimpact.webp",
            title: "Economic Impact",
            subtitle:
              "We create economic value responsibly, ensuring our business supports the economy and sustainable development.",
          },
        ].map((text, index) => (
          <div
            key={index}
            className={`bg-white text-[#1f1f1f] p-6 rounded-lg shadow-md flex flex-col items-start  ${
              index === 2 ? "md:col-span-1 md:mx-auto" : ""
            }`}
          >
            <img src={text.img} className="w-14 h-14" alt="" />
            <p className="text-lg text-[#1F1F1F] font-semibold lg:leading-6 mt-5">
              {text.title}
            </p>
            <p className="text-base mt-2 lg:leading-6">{text.subtitle}</p>
          </div>
        ))}
      </div>
      <p className="text-base font-normal lg:leading-6 justify-center items-center text-center mt-8">
        At St. Fox, our policies and strategies are meticulously crafted to
        align with internationally recognized standards and frameworks such as
        the Global Reporting Initiatives (GRI) standards, US SEC regulations,
        and Indian regulatory requirements. Our commitment to transparency and
        accountability extends across various channels, including meetings,
        email communication, and active participation in social media platforms.
        We actively engage with a diverse array of stakeholders, including
        clients, employees, board members, partners, collaborators, vendors,
        regulatory bodies, non-governmental organizations (NGOs), and media.
        Through these multiple channels, we foster meaningful and open dialogue,
        ensuring that our stakeholders are integral participants in our journey
        towards sustainable and responsible business practices.
      </p>
      <div className="justify-center items-center">
        <p className="lg:text-2xl text-xl font-semibold mt-8 text-center">
          Supervising Artificial Intelligence: Emphasizing Fundamental
          Principles
        </p>
        <div className="text-base font-normal text-center">
          <p className="lg:leading-6 mt-4">
            In the realm of artificial intelligence management, it remains
            crucial to uphold foundational principles. Despite the advancements
            in AI technologies, the basics continue to be of paramount
            importance.
          </p>
          <p className="mt-7 mb-6">
            Generative AI, the new sheriff in town, has grabbed technology by
            the reins, ready to reshuffle everything from finance to healthcare.
            While the potential is sky-high, policymakers, academics, and
            industry bigwigs are wrestling with how to unleash the good while
            keeping the bad at bay. But amid the hype, some risks lurk closer,
            within companies&apos; own walls. So, as AI gallops forward, investors
            are wise to ask: are corporations building proper fences? Where do
            current risk management, compliance, privacy, and talent practices
            stand against these AI-fueled frontiers? And how can they be
            reforged to keep the new risks at bay?
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default SustainabilityGoals;
