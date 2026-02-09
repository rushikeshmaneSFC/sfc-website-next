import Wrapper from "@/components/atoms/Wrapper";
import { FRAMEWORK_DATA } from "@/constants/SaseCloudSecurityConstant";

export default function SaseCloudVigileFramework() {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] flex justify-center items-center min-h-[469px] bg-no-repeat bg-cover bg-center py-10 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <h2 className=" text-xl md:text-2xl lg:text-2xl font-bold">
          Built on the Proven VIGILE Framework for Cloud Security
        </h2>
        <p className="text-[#1C1C1C]  text-base md:text-lg lg:text-xl font-medium mt-4">
          St. Fox Managed Cloud Security aligns with the VIGILE Framework,
          ensuring comprehensive cloud protection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6 mt-8">
          {FRAMEWORK_DATA.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md p-2 h-[88px] relative"
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

              <div className="ml-20 text-left lg:space-y-2 ">
                <h3 className="text-base text-[#000] font-bold ">
                  {feature.title}
                </h3>
                <p className=" text-sm font-normal text-[#5F5F5F] leading-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
