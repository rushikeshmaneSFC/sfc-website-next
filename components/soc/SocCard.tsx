"use client";

function SocCard() {
  return (
    <>
      <div className="grid grid-cols md:grid-cols-3  gap-6 text-center mt-0 ">
        {[
          "SOC 2 compliance is critical for demonstrating trust, security, and operational excellence.",
          "Without proper guidance, organizations often struggle with unclear requirements and lengthy audit processes.",
          "A lack of SOC 2 compliance can lead to lost business opportunities and customer mistrust.",
        ].map((text, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center relative  md:top-28 sm:top-[-100px] top-[-100px]  "
          >
            <div>
              <img
                loading="lazy"
                src="/images/SOC/Setting.webp"
                alt="Icon"
                className="w-10 h-10 mb-4"
              />
            </div>
            <p className="lg:text-[18px] text-[14px] leading-[24px] font-[500] ">
              {text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SocCard;
