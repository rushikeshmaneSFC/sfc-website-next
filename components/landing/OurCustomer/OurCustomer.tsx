function OurCustomer() {
  const logos = [
    "/images/Landingpage/Ourcustomer/Futuregenerali.webp",
    "/images/Landingpage/Ourcustomer/Arctera.webp",
    "/images/Landingpage/Ourcustomer/Veritas.webp",
    "/images/Landingpage/Ourcustomer/Amdocs.webp",
    "/images/Landingpage/Ourcustomer/LTIMindtree.webp",
    "/images/Landingpage/Ourcustomer/Kytes.webp",
    "/images/Landingpage/Ourcustomer/KPIT.webp",
    "/images/Landingpage/Ourcustomer/Nimhans.webp",
    // "/images/Landingpage/Ourcustomer/Skyflow.webp",
    "/images/Landingpage/Ourcustomer/Secureview.webp",
    "/images/Landingpage/Ourcustomer/Persistent.webp",
    "/images/Landingpage/Ourcustomer/Pattern.webp",
    "/images/Landingpage/Ourcustomer/Zensar.webp",
    "/images/Landingpage/Ourcustomer/IBGroup.webp",
    "/images/Landingpage/Ourcustomer/Emcure.webp",
    "/images/Landingpage/Ourcustomer/Efl.webp",
    "/images/Landingpage/Ourcustomer/Exela.webp",
    "/images/Landingpage/Ourcustomer/FIAT.webp",
  ];

  return (
    <div className="relative lg:py-4 w-full lg:h-[277px] h-[100px] lg:mt-0 md:mt-5">
      <h2 className="flex justify-start items-start lg:justify-center lg:items-center lg:text-center text-start lg:text-lg text-base lg:font-semibold font-medium text-[#fff] px-4">
        Powering Security for Global Brands
      </h2>

      <div className="absolute left-0 top-0 2xl:top-[60px] lg:top-12 md:top-[10px] w-12 h-[100px] bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 2xl:top-[60px] lg:top-12 md:top-[10px] w-12 h-[100px] bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="flex animate-scroll gap-8 w-max lg:mt-6 2xl:mt-9 mt-1">
          {[...logos, ...logos].map((icon, index) => (
            <div key={index} className="w-[100px] inline-block">
              <img
                src={icon}
                alt={`logo-${index}`}
                className=" mx-auto "
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCustomer;
