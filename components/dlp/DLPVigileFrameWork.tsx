import Wrapper from "@/components/atoms/Wrapper";
import { DLP_VIGILE_SECTION } from "@/constants/DLPConstant";

const DLPVigileFrameWork = () => {
  return (
    <Wrapper className="flex justify-center items-center text-[#fff] bg-[#07111A] bg-no-repeat bg-cover bg-center py-5 lg:mt-0  mt-5 ">
      <div className="text-center">
        <p className="text-xl lg:text-2xl font-bold ">
          Built on the VIGILE Framework for Data Protection
        </p>
        <p className="text-base lg:text-xl font-medium mt-2">
          St. Fox DLP Services align with the VIGILE Framework, ensuring a
          proactive and strategic approach to data loss prevention.
        </p>
      </div>
      <div className="py-4 lg:py-10 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-0 lg:mx-10 mx-0 ">
          {DLP_VIGILE_SECTION.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className={`flex justify-center items-center p-4 gap-4  rounded-[160px] w-[340px] border border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] my-4 ${
                index === 1 ? "ml-0 md:ml-8 lg:ml-14" : ""
              }`}
            >
              <img
                loading="lazy"
                src={section.imageSrc}
                alt={section.alt}
                className="h-12 w-12"
              />
              <div>
                <p className="text-lg lg:text-base font-semibold">
                  {section.title}
                </p>
                <p className="text-base lg:text-[13px] lg:leading-[16.9px] font-normal">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="flex items-center">
            {DLP_VIGILE_SECTION.slice(2, 3).map((section, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 gap-4  rounded-[160px] w-[340px] border border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px]"
              >
                <img
                  loading="lazy"
                  src={section.imageSrc}
                  alt={section.alt}
                  className="h-12 w-12"
                />
                <div>
                  <p className="text-lg lg:text-base font-semibold">
                    {section.title}
                  </p>
                  <p className="text-base lg:text-[13px] lg:leading-[16.9px] font-normal">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="h-[180px] w-[180px] shadow-md rounded-full flex justify-center items-center text-center  border border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] hidden md:block lg:block">
              <p className="h-[180px] w-[180px] text-4xl font-bold  text-[#3B73CC] flex justify-center items-center text-center">
                VIGILE
              </p>
            </div>
          </div>

          <div className="flex items-center">
            {DLP_VIGILE_SECTION.slice(3, 4).map((section, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 gap-4  rounded-[160px] w-[340px] border border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px]"
              >
                <img
                  loading="lazy"
                  src={section.imageSrc}
                  alt={section.alt}
                  className="h-12 w-12"
                />
                <div>
                  <p className="text-lg lg:text-base font-semibold">
                    {section.title}
                  </p>
                  <p className="text-base lg:text-[13px] lg:leading-[16.9px] font-normal">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-0 lg:mx-10 mx-0 py-4">
          {DLP_VIGILE_SECTION.slice(4).map((section, index) => (
            <div
              key={index}
              className={`flex justify-center items-center p-4 gap-5  rounded-[160px] w-[340px] border border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] my-4 ${
                index === 1 ? "ml-0 md:ml-8 lg:ml-14" : ""
              }`}
            >
              <img
                loading="lazy"
                src={section.imageSrc}
                alt={section.alt}
                className="h-12 w-12"
              />
              <div>
                <p className="text-base font-semibold">{section.title}</p>
                <p className="text-base lg:text-[13px] lg:leading-[16.9px] font-normal">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DLPVigileFrameWork;
