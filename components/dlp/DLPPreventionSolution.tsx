import { DLP_PREVENTION } from "@/constants/DLPConstant";

const DLPPreventionSolution = () => {
  return (
    <div className="bg-[#FAFAFA] max-w-6xl mx-auto lg:py-12 px-4 text-center">
      <h2 className="text-lg lg:text-[28px] lg:leading-10 font-bold">
        End-to-End Data Loss Prevention Solutions Tailored to Your Needs
      </h2>
      <p className="text-base lg:text-xl lg:px-24 mt-2">
        St. Fox DLP Services provide a comprehensive approach to protect
        sensitive data from accidental or intentional loss.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 md:gap-6 lg:mt-16 md:mt-16 mt-20 gap-10">
        {DLP_PREVENTION.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center "
          >
            <div className="relative bottom-14 lg:left-24 md:left-8 left-24 w-28  h-28 rounded-full bg-white flex items-center justify-center ">
              <img
                loading="lazy"
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="-mt-16">
              <h3 className="text-lg lg:text-[15px] lg:leading-6 font-semibold">
                {item.title}
              </h3>
              <p className="text-sm lg:text-[13px] lg:leading-5 mt-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:px-44 md:px-20 md:grid-cols-2 lg:gap-6 md:gap-6 lg:mt-16 md:mt-16 gap-10 mt-10">
        {DLP_PREVENTION.slice(3).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
          >
            <div className="relative bottom-14 lg:left-24 md:left-16 left-24 w-28  h-28 rounded-full bg-white flex items-center justify-center ">
              <img
                loading="lazy"
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="-mt-16">
              <h3 className="text-lg lg:text-[15px] lg:leading-6 font-semibold">
                {item.title}
              </h3>
              <p className="text-sm lg:text-[13px] lg:leading-5 mt-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DLPPreventionSolution;
