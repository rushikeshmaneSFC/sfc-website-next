import Wrapper from "@/components/atoms/Wrapper";

const EmailFrameWork = () => {
  return (
    <Wrapper className=" bg-[url('https://saintfox.azureedge.net/datav2/Frameworkbg.png')] flex justify-center items-center  bg-no-repeat bg-cover bg-center h-[480px] md:h-auto lg:h-[710px]">
      <div className=" justify-center items-center text-center lg:mt-8">
        <p className="text-xl lg:text-2xl font-bold">
          Strategically Built with the VIGILE Framework
        </p>
        <p className="text-sm lg:text-xl font-medium mt-3">
          St. Fox Managed Email Security aligns with the VIGILE Framework,
          delivering strategic, adaptive, and proactive protection.
        </p>
        <div className="lg:mt-16 md:mt-5 mt-8">
          <img
            loading="lazy"
            src="/images/EmailSecurity/Emailsecurityvigile.webp"
            alt="Emailsecurity_vigileframework"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailFrameWork;
