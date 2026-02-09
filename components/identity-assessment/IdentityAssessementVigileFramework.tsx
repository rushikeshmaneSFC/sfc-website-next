import Wrapper from "@/components/atoms/Wrapper";
import { VIGILEFRAMEWORK_ARRAY } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementVigileFramework = () => {
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center py-5 lg:py-0 md:py-0">
      <div className="lg:max-w-max md:w-fit">
        <div className=" lg:text-center md:text-center lg:p-8 md:p-4">
          <h2 className="text-2xl  font-bold ">
            Guided by the VIGILE Framework for Identity Security
          </h2>
          <p className="lg:text-xl text-base font-medium mt-2">
            St. Fox Identity Assessment Services leverage the VIGILE Framework
            to deliver structured and actionable identity security evaluations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 ">
            {VIGILEFRAMEWORK_ARRAY.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start text-start gap-1 lg:ml-14 md:ml-10 "
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-[40px] h-[40px] "
                />
                <h3 className="text-xl  font-bold  text-[#1A3F7E]">
                  {item.title}
                </h3>
                <p className="text-base font-medium ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default IdentityAssessementVigileFramework;
