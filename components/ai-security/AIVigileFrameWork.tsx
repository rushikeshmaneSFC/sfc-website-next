import Wrapper from "@/components/atoms/Wrapper";

const AIVigileFrameWork = () => {
  return (
    <Wrapper className="bg-[url('/images/VAPT/Whitebackground.png')] bg-cover bg-center bg-no-repeat  flex justify-center items-center lg:h-[696px] md:h-[500px] h-[450px]">
      <div className="flex flex-col items-center justify-center text-center lg:gap-1">
        <h1 className="lg:text-2xl md:text-xl text-2xl font-bold ">
          Strategic AI Security, Powered by the VIGILE Framework
        </h1>
        <p className="lg:text-xl md:text-lg text-base font-medium lg:mt-0 md:mt-0 mt-1">
          The VIGILE Framework underpins our AI for Security solutions, ensuring
          a structured and comprehensive approach.
        </p>
        <div className="mt-5">
          <img
            loading="lazy"
            src="/images/AISecurity/AIVigileframework2x.webp"
            alt="AI for security_vigileframework"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default AIVigileFrameWork;
