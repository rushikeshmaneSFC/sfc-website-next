import { LANDING_THREATDATA } from "@/constants/LandingpageConstant";

function LandingThreats() {
  return (
    <div className="bg-center bg-cover bg-no-repeat flex  items-center justify-center 2xl:px-28  lg:px-20 lg:h-[350px] md:h-[398px] h-auto  md:px-5 px-4 max-w-[100vw] py-10">
      <div className="grid grid-cols-1 max-w-full w-full justify-center items-center 2xl:grid-[50%,50%] md:grid-cols-2 md:pb-[28px] 2xl:gap-10">
        <div className="flex flex-col text-[#fff] justify-center lg:text-start md:text-start text-center ">
          <div className="flex lg:items-start lg:justify-start lg:text-start md:justify-start md:text-start   gap-2 justify-center items-center text-center">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="Cybersecurity Icon"
              className="lg:w-[40px] lg:h-[40px] mt-2 w-[28px] h-[28px]"
            />
            <h2 className="text-[#fff] lg:font-bold font-semibold 2xl:text-[36px] lg:text-4xl md:text-2xl text-xl lg:leading-[20px] lg:mt-4 mt-1">
              Why Choose St. Fox
            </h2>
          </div>
          <p className="text-base 2xl:text-[268x] lg:text-[28px] font-medium text-[#fff] lg:leading-[48px] mt-4">
            <span className=" text-[#fff]">Our expertise, Innovation,</span> and{" "}
            <span className=" text-[#fff]">AI-driven security </span>
            make us the top choice for businesses facing evolving threats.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-5 lg:mt-0 gap-5">
          {LANDING_THREATDATA.map((item, index) => (
            <div key={index} className="flex   items-center">
              <div className="min-w-[40px] min-h-[40px] mt-1">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-3 w-5 h-5"
                />
              </div>
              <p className="text-[#fff] text-base font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingThreats;
