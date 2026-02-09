import Wrapper from "@/components/atoms/Wrapper";

export default function FourthContainer() {
  return (
    <>
      <Wrapper className="flex justify-center items-center md:h-[625px] lg:h-[625px]  h-auto bg-[url('https://saintfox.azureedge.net/datav2/Vigileframework2x.webp')] bg-center bg-no-repeat bg-cover py-10">
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="/images/CompromiseAssessment/VigileThreadDetection.webp"
            alt="Compromise Assessment_vigileframework"
          />
        </div>
      </Wrapper>
    </>
  );
}
