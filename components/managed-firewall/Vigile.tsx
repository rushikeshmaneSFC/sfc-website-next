import Wrapper from "@/components/atoms/Wrapper";

function Vigile() {
  return (
    <Wrapper className="bg-[url('/images/VAPT/Whitebackground.png')] bg-cover bg-center bg-no-repeat  flex justify-center items-center">
      <div className="flex flex-col items-center justify-center my-5 lg:my-7">
        <h2 className="lg:text-2xl text-xl font-bold text-center mb-2 text-[#1F1F1F]">
          Strategically Designed with the VIGILE Framework
        </h2>
        <p className="lg:text-xl text-base text-center font-medium text-[#1C1C1C]">
          St. Fox Managed Firewall Services are powered by the VIGILE Framework,
          a proven approach to enterprise security.
        </p>
      </div>
      <div className="xl:h-[394px] flex justify-center lg:mb-[-13px] md:-mb-3 -mb-1 ">
        <img
          loading="lazy"
          className="object-cover"
          src="/images/SaseManagedFirewall/FirewallVigile.webp"
          alt="Managedfirewall_vigileframework"
        />
      </div>
    </Wrapper>
  );
}

export default Vigile;
