import Wrapper from "@/components/atoms/Wrapper";

const DSPMPosture = () => {
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center lg:py-8 ">
      <div className="flex flex-col">
        <div className="pt-10">
          <img
            loading="lazy"
            src="/images/DSPM/DSPM.webp"
            width={1955}
            height={702}
            alt="Compliance failures"
            className=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default DSPMPosture;
