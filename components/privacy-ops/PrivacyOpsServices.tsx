import Wrapper from "@/components/atoms/Wrapper";
import { SERVICES_STATS } from "@/constants/PrivacyOpsConstant";

const PrivacyOpsServices = () => {
  return (
    <Wrapper className="bg-[url('/images/PrivacyOps/Privacyopsservicesbg.webp')] flex items-center justify-center bg-no-repeat bg-cover bg-center lg:py-0 py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:h-[410px]">
        <div className="flex flex-col text-[#1F1F1F] justify-center  md:text-left">
          <h2 className="lg:text-[48px] lg:leading-[56px] text-xl lg:text-left  font-bold text-[#1F1F1F]">
            Impact of St. Fox Privacy Ops Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-10 mt-8 md:mt-0 lg:ml-4">
          {SERVICES_STATS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col  md:items-start  md:text-left"
            >
              <div className="min-w-[40px] min-h-[40px]">
                <p
                  className="lg:text-4xl text-3xl lg:text-left  font-semibold "
                  style={{
                    background:
                      "linear-gradient(92deg, #223780 0%, #070B1A 99.61%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </p>
              </div>
              <div className="flex flex-col lg:mt-2">
                <p
                  className="text-lg  font-semibold"
                  style={{
                    background:
                      "linear-gradient(92deg, #223780 0%, #070B1A 99.61%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.label}
                </p>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyOpsServices;
