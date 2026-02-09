import Wrapper from "@/components/atoms/Wrapper";
import CircularProgress from "@/components/atoms/CircularProgress";
import { SERVICES_ARRAY } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementServices = () => {
  return (
    <Wrapper className=" flex justify-center items-center  h-auto ">
      <div className="bg-gray-50 lg:py-4 md:py-4 py-10 text-center ">
        <h2 className="text-2xl  font-bold text-black mb-8">
          Impact of St. Fox Identity Assessment Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {SERVICES_ARRAY.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center "
            >
              <CircularProgress percentage={item.percentage} />
              <h3 className="text-base  font-semibold mt-4  ">{item.title}</h3>
              <p className="text-[15px] font-normal leading-[19.959px] text-gray-600 mt-2 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default IdentityAssessementServices;
