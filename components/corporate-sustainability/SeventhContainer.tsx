import Wrapper from "@/components/atoms/Wrapper";

function SeventhContainer() {
  const CloudAgility = [
    {
      title: "Tree Plantation Drives",
      subtitle:
        "Over the period from 2023 to 2024, we planted over 500 trees, contributing to the enhancement of green cover & generating 12 MWh of renewable energy.",
    },
    {
      title: "Awareness Campaigns",
      subtitle:
        "We regularly disseminate awareness posters and mailers to keep employees informed about the significance of environmental conservation.",
    },
    {
      title: "NGO Collaborations",
      subtitle:
        "We actively collaborate with non-governmental organizations (NGOs) dedicated to environmental betterment, aligning our efforts with broader initiatives for a sustainable and greener future.",
    },
  ];
  return (
    <Wrapper className="flex justify-center items-center h-auto py-10 lg:mt-8 mt-12">
      <p className="lg:text-2xl text-xl font-bold text-center">
        Our employee-driven CSR initiatives encompass:
      </p>
      <div className="grid grid-cols-1 gap-[19px] lg:mt-10 mt-3">
        {CloudAgility.map((item, index) => {
          return (
            <div
              key={index}
              className={`bg-white flex flex-col items-start justify-center lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5 rounded-lg shadow-lg lg:h-[179px] h-auto  hover:border-t-2 hover:border-t-[#223780] transition-all duration-300  lg:mt-0  mt-4
      `}
            >
              <p className="text-[#1F1F1F] text-[1rem] lg:text-[1rem] font-semibold ">
                {item.title}
              </p>
              <p className="text-[#1C1C1C] text-[15px] font-normal mt-2">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default SeventhContainer;
