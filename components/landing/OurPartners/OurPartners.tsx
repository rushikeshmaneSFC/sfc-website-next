// @ts-nocheck
"use client";

function OurPartners() {
  const ourPartnersLightTheme = [
    { id: 1, image: "/images/Landingpageold/Cisco.webp", alt: "Cisco" },
    {
      id: 2,
      image: "/images/Landingpageold/Checkpoint.webp",
      alt: "Check Point",
    },
    {
      id: 3,
      image: "/images/Landingpageold/Crowdstrike.webp",
      alt: "Crowd Strike",
    },
    { id: 4, image: "/images/Landingpageold/Cymulate.webp", alt: "Cymulate" },
    {
      id: 5,
      image: "/images/Landingpageold/Forcepoint.webp",
      alt: "Forcepoint",
    },
    { id: 6, image: "/images/Landingpageold/Fortinet.webp", alt: "Fortinet" },
    { id: 7, image: "/images/Landingpageold/Lineaje.webp", alt: "Lineaje" },
    {
      id: 8,
      image: "/images/Landingpageold/Privasapien.webp",
      alt: "Privasapien",
    },
    { id: 9, image: "/images/Landingpageold/Retroper.webp", alt: "Retroper" },
    {
      id: 10,
      image: "/images/Landingpageold/Riskrecon.webp",
      alt: "Riskrecon",
    },
    { id: 11, image: "/images/Landingpageold/Saviynt.webp", alt: "Saviynt" },
    {
      id: 12,
      image: "/images/Landingpageold/Skyflow.webp",
      alt: "Skyflow",
    },
    { id: 13, image: "/images/Landingpageold/Splunk.webp", alt: "Splunk" },
    {
      id: 14,
      image: "/images/Landingpageold/Wiz.webp",
      alt: "Wiz",
    },
    {
      id: 15,
      image: "/images/Landingpageold/Manymore.webp",
      alt: "Manymore",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:py-10 bg-[#000] -space-y-10">
      <h2 className="text-center text-xl lg:text-3xl font-semibold text-[#fff] mt-6 mb-10">
        Our Partners
      </h2>
      {/* <p className="text-center text-sm text-[#fff] opacity-90 mb-6">
        Trusted by enterprises worldwide.{" "}
        <a
          href="https://www.linkedin.com/company/stfox-com/mycompany/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#72A7FB] hover:underline"
        >
          Follow us on LinkedIn
        </a>
      </p> */}
      <div className="grid lg:grid-cols-6 md:grid-cols-3  justify-center items-center gap-4 2xl:gap-20 lg:gap-10 lg:px-0  grid-cols-3 ">
        {ourPartnersLightTheme.slice(0, 6).map((logo) => (
          <div
            key={logo.id}
            className="w-[100px] h-[100px] flex justify-center items-center"
          >
            <img
              src={logo.image}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3  justify-center items-center gap-4 lg:gap-10 2xl:gap-20 lg:px-0 grid-cols-3  py-10">
        {ourPartnersLightTheme.slice(6, 12).map((logo) => (
          <div
            key={logo.id}
            className="w-[100px] h-[100px] flex justify-center items-center"
          >
            <img
              src={logo.image}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-3 justify-center items-center gap-4  lg:px-6  sm:gap-6 lg:gap-10 2xl:gap-20 mt-4 sm:mt-6 lg:mt-0">
        {ourPartnersLightTheme.slice(12, 15).map((logo, index) => (
          <div
            key={index + 12}
            className={`
        w-[100px] h-[100px] flex justify-center items-center
        ${index === 0 ? "lg:col-start-3" : ""}
      `}
          >
            <img
              src={logo.image}
              alt={logo.alt}
              className={`object-contain ${
                logo.id === 15
                  ? "w-[100px] h-[60px] lg:mr-14"
                  : "max-w-full max-h-full"
              }`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
