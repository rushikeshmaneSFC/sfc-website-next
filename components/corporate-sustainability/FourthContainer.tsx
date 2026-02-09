import Wrapper from "@/components/atoms/Wrapper";

function FourthContainer() {
  return (
    <Wrapper className="flex justify-center items-center">
      <div className=" justify-center items-center text-center py-5">
        <p className="text-xl lg:text-2xl font-bold lg:leading-8">
          Companies across the AI value chain may need better guardrails and
          privacy provisions
        </p>
        <img
          src="/images/CorporateSustainability/privacyprovisions.webp"
          width="2166"
          height="1062"
          className="mt-7"
          alt=""
        />
      </div>
    </Wrapper>
  );
}

export default FourthContainer;
