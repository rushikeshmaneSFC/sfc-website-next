import Wrapper from "@/components/atoms/Wrapper";
import { AISECURITY_INNOVATION_ARRAY } from "@/constants/AISecurityConstant";

const AISecurityInnovation = () => {
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center p-7">
      <div className="grid grid-col md:grid-col-[50%,50%] lg:grid-cols-[50%,50%]">
        <div className="flex flex-col gap-3 lg:pt-10">
          <h2 className="lg:text-[32px] md:text-2xl text-xl font-bold lg:leading-10 ">
            Empowering Security Through AI Innovation
          </h2>
          <p className=" lg:text-base md:text-lg sm:text-sm text-base">
            St. Fox&apos;s{" "}
            <span className="text-[#A96432] font-semibold">
              AI for Security
            </span>{" "}
            solutions combine cutting-edge technology with expert strategies to
            deliver unmatched cybersecurity capabilities. Our services span two
            key domains:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[50%,50%]  md:grid-col-[50%,50%] lg:grid-cols-[50%,50%] ">
          {AISECURITY_INNOVATION_ARRAY.map((item, index) => (
            <div
              key={index}
              className={`bg-white px-1 mx-1  py-3 mt-12 lg:mt-20 rounded-lg shadow-lg  clip-path-custom rotate-180  ${item.position}`}
            >
              <div className="content gap-y-4 flex flex-col ">
                <div className="">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt="Feature Icon"
                    className="w-[62px] h-[62px] object-contain"
                  />
                </div>
                <div className=" gap-3 flex flex-col">
                  <p className=" text-lg lg:text-xl sm:text-lg font-semibold  text-[#183359]  ">
                    {item.title}
                  </p>
                  <p className="text-base lg:text-[13px] md:[10px] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AISecurityInnovation;
