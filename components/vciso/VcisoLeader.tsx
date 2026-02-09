import Wrapper from "@/components/atoms/Wrapper";
import { VCISOLEADER_DATA } from "@/constants/VcisoConstant";

function VcisoLeader() {
  return (
    <Wrapper className=" bg-[url(/images/ISO/ISOAuditbg.webp)] bg-no-repeat bg-cover bg-center flex items-center justify-center py-10 md:py-5 lg:px-4  lg:py-16 lg:h-[452px] md:h-[452px] h-auto">
      <div className="grid grid-cols-1  items-center justify-center md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%]  lg:gap-2 md:gap-2">
        <div className="flex flex-col text-[#1F1F1F] justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold  text-[#1F1F1F] lg:leading-[48px]">
            Struggling to Manage Cybersecurity Without a Dedicated Leader?
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-10 lg:mt-0 lg:gap-7 md:gap-5 gap-10">
          {VCISOLEADER_DATA.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#1C1C1C] text-base lg:text-base font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default VcisoLeader;
