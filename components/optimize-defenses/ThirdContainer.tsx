import Wrapper from "@/components/atoms/Wrapper";
import { VIGILE_SECTION } from "@/constants/OptimizeDefenses";

export default function ThirdContainer() {
  return (
    <Wrapper className=" flex justify-center items-center  h-auto bg-[url('/images/ISO/ISOAuditbg.webp')] bg-no-repeat bg-cover bg-center py-5 ">
      <div className="text-center">
        <p className="text-2xl font-bold ">
          Strategically Designed Using the VIGILE Framework
        </p>
        <p className="lg:text-xl md:text-xl text-base font-medium mt-2">
          St. Fox Teaming Services align with the VIGILE Framework, offering a
          structured, proactive approach to cybersecurity.
        </p>
      </div>
      <div className="lg:py-10 md:py-8 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:max-0 lg:mx-10 mx-0 py-4 ">
          {VIGILE_SECTION.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className={`flex justify-center items-center p-4 gap-5 border rounded-[160px] w-[340px] bg-white my-4 ${
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
                <p className="text-sm font-normal">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="flex items-center">
            {VIGILE_SECTION.slice(2, 3).map((section, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 gap-5 border rounded-[160px] w-[340px] bg-white"
              >
                <img
                  loading="lazy"
                  src={section.imageSrc}
                  alt={section.alt}
                  className="h-12 w-12"
                />
                <div>
                  <p className="text-base font-semibold">{section.title}</p>
                  <p className="text-sm font-normal">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="h-[180px] w-[180px]  shadow-md rounded-full flex justify-center items-center text-center border bg-white hidden md:block lg:block">
              <p className="h-[180px] w-[180px] flex justify-center items-center text-center">
                VIGILE
              </p>
            </div>
          </div>

          <div className="flex items-center">
            {VIGILE_SECTION.slice(3, 4).map((section, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 gap-5 border rounded-[160px] w-[340px] bg-white"
              >
                <img
                  loading="lazy"
                  src={section.imageSrc}
                  alt={section.alt}
                  className="h-12 w-12"
                />
                <div>
                  <p className="text-base font-semibold">{section.title}</p>
                  <p className="text-sm font-normal">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:max-0 lg:mx-10 mx-0 py-4">
          {VIGILE_SECTION.slice(4).map((section, index) => (
            <div
              key={index}
              className={`flex justify-center items-center p-4 gap-5 border rounded-[160px] w-[340px] bg-white my-4 ${
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
                <p className="text-sm font-normal">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
