import Wrapper from "@/components/atoms/Wrapper";

function VcisoFramework() {
  return (
    <Wrapper className=" flex justify-center items-center lg:h-[628px]   h-auto">
      <div className="flex flex-col justify-center items-center text-center lg:gap-4 md:gap-2 gap-2">
        <p className="text-xl lg:text-2xl font-bold ">
          Guided by the Proven VIGILE Framework
        </p>
        <p className="text-base lg:text-base font-medium">
          St. Fox vCISO Services are powered by the VIGILE Framework, ensuring a
          structured and effective approach to cybersecurity leadership.
        </p>
        <div className="mt-4 ">
          <img
            loading="lazy"
            src="/images/VCISO/Vigile.webp"
            alt="vCISO_vigileframework"
            width={2212}
            height={806}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default VcisoFramework;
