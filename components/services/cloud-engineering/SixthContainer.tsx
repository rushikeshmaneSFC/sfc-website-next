import Wrapper from "@/components/atoms/Wrapper";

function SixthContainer() {
  return (
    <Wrapper className="flex justify-center items-center lg:py-5 md:py-10 py-10">
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="text-xl lg:text-2xl text-[#212121] font-normal mt-8">
          Beyond{" "}
          <span className="text-[#212121] text-xl lg:text-2xl font-semibold">
            Technology, Partnership
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="text-base lg:text-xl font-normal lg:leading-8 mt-5">
          Imagine scaling your business without infrastructure constraints,
          securing your data like Fort Knox in the sky, and orchestrating your
          entire hybrid cloud environment with the dexterity of a maestro.
        </p>
      </div>
      <div className="grid grid-cols md:grid-cols-3 lg:gap-6 gap-3 text-center">
        {[
          {
            title: "Expert Guidance",
            subtitle:
              "Our cloud architects are not just tech wizards, they're trusted advisors. We collaborate with you, understand your unique needs, and craft a hybrid cloud strategy that scales with your ambitions.",
          },
          {
            title: "Fanatical Support ",
            subtitle:
              " We're not just your vendor, we're your cloud cavalry. Our 24/7 support team is always on standby, ready to tackle any challenge and keep your cloud humming along.",
          },
          {
            title: "Community of Innovation",
            subtitle:
              "We foster a vibrant community of cloud enthusiasts, sharing best practices, insights, and cutting-edge solutions. Together, we push the boundaries of what's possible.",
          },
        ].map((text, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md flex-col items-center mt-8"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-xl text-[#223780] font-semibold">
                {text.title}
              </p>
              <p className="text-base font-normal">{text.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default SixthContainer;
