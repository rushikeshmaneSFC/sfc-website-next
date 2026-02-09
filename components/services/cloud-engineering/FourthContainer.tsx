import Wrapper from "@/components/atoms/Wrapper";

function FourthContainer() {
  return (
    <Wrapper className="flex flex-col items-center py-10">
      <p className="text-xl lg:text-2xl font-bold text-center">
        Orchestral Harmony
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-center w-full max-w-6xl px-4">
        {[
          {
            title: (
              <>
                Visibility <br className="hidden lg:inline" /> Symphony
              </>
            ),
            subtitle:
              "No more cloud sprawl chaos. Our unified dashboard paints a crystal-clear picture of your entire hybrid landscape, giving you complete control with a single glance.",
          },
          {
            title: "Automate the Mundane",
            subtitle:
              "Forget tedious configuration and patching. We automate routine tasks, freeing your IT crew to focus on strategic initiatives that drive business growth.",
          },
          {
            title: "Cost Optimization Concerto",
            subtitle:
              "We fine-tune your cloud consumption, identifying wasteful spending and suggesting intelligent cost-saving strategies. Let the music of efficiency play on.",
          },
        ].map((text, index) => (
          <div
            key={index}
            className={`bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center  ${
              index === 2 ? "md:col-span-1 md:mx-auto  " : ""
            }`}
          >
            <p className="text-lg text-[#223780] font-semibold">{text.title}</p>
            <p className="text-base font-normal mt-2">{text.subtitle}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default FourthContainer;
