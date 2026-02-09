import Wrapper from "@/components/atoms/Wrapper";
import { COMPREHENSIVE_THREAT } from "@/constants/CompromiseAssessment";

export default function ThirdContainer() {
  return (
    <Wrapper className="flex justify-center items-center ">
      <div className="text-center mb-5">
        <p className="text-xl sm:text-2xl font-bold">
          Comprehensive Threat Discovery and Mitigation
        </p>
        <p className="text-base font-normal mt-2">
          St. Fox DSPM Services provide a robust framework to manage and protect
          your data across hybrid and multi-cloud environments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 py-5">
        {COMPREHENSIVE_THREAT.slice(0, 3).map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <img
              loading="lazy"
              className="w-[78px] h-[78px]"
              src={item.imgSrc}
              alt={item.title}
            />
            <p className="text-lg font-semibold mt-4">{item.title}</p>
            <p className="text-base font-normal">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-0 lg:mx-28">
        {COMPREHENSIVE_THREAT.slice(3).map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <img
              loading="lazy"
              className="w-[78px] h-[78px]"
              src={item.imgSrc}
              alt={item.title}
            />
            <p className="text-lg font-semibold mt-4">{item.title}</p>
            <p className="text-base font-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
