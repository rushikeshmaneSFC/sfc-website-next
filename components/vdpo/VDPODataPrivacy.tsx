import Wrapper from "@/components/atoms/Wrapper";
import { VDPO_DATAPRIVACY } from "@/constants/VDPOConstant";

const VDPODataPrivacy = () => {
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')] flex justify-center items-center lg:h-[540px] md:h-[540px] h-auto bg-no-repeat bg-cover bg-center py-5 lg:py-0 md:py-0">
      <div className="flex flex-col items-center text-center">
        <h2 className=" text-xl lg:text-2xl md:text-2xl font-bold">
          Guided by the VIGILE Framework for Data Privacy
        </h2>
        <p className="text-[#1C1C1C]  text-base lg:text-xl md:text-xl font-medium mt-4">
          St. Fox vDPO Services leverage the VIGILE Framework to ensure a
          structured and proactive approach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {VDPO_DATAPRIVACY.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md p-2 relative"
            >
              <div
                className="absolute left-0 top-0 w-20 h-20  bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${feature.imgurl})` }}
              >
                <img
                  loading="lazy"
                  src={feature.iconImg}
                  className=" w-8 h-8 mr-4 mb-2"
                  alt="icon"
                />
              </div>

              <div className="ml-20 text-left">
                <h3
                  className={`text-base font-bold ${feature.textColor}`}
                >
                  {feature.title}
                </h3>
                <p className=" text-sm font-normal text-[#5F5F5F]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default VDPODataPrivacy;
