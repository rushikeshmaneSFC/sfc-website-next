"use client";

const CloudEvaluation = () => {
  return (
    <div className="relative w-full">
      <div className="hidden md:block relative w-full">
        <img
          src="/images/Cloudsecurity/Cloud_Security.png"
          alt="Cloud Security Evaluation"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-start justify-center pt-10 px-4">
          <p className="text-[#fff] text-xl lg:text-2xl font-bold text-center mt-10 ">
            Comprehensive Cloud Security Evaluation for a <br />
            Resilient Future
          </p>
        </div>
      </div>

      <div className="block md:hidden w-full m-0 p-0">
        <div className="w-full">
          <img
            src="/images/Cloudsecurity/Resilient_Future.png"
            alt="Cloud Security Evaluation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CloudEvaluation;
