import { FaLinkedinIn } from "react-icons/fa6";

const FounderPage = () => {
  const founders = [
    {
      name: "Sunil Tak",
      title: "Co - Founder & CEO",
      image: "/images/Aboutus/sunilsir.webp",
      bio: "INSEAD | Wharton School | +26Yrs | Ex-Cisco | Ex-Microsoft | Ex- PA | Ex-CrowdStrike | +$500Mn",
      linkedin: "https://www.linkedin.com/in/suniltak/",
    },
    {
      name: "Rajeshwar Rao",
      title: "Co - Founder & CDO",
      image: "/images/Aboutus/rajeshwarsir.webp",
      bio: "ISO 27701 Lead Auditor | DSCI Certified (DPO) | +20Yrs | Ex-Wipro | Ex-LTIM | Security Compliance | Cybersecurity",
      linkedin:
        "https://www.linkedin.com/in/rajeshwar-rao-thatiparthy-9a490714/",
    },
    {
      name: "Ronak Maniar",
      title: "Founder & MD",
      image: "/images/Aboutus/ronaksir.webp",
      bio: "CCIEx3 Sec, ISP, R&S | +20Yrs | Ex-IBM | Ex-Cisco | $+100Mn | Mergers | Business Architect | 9+ Yrs in Business",
      linkedin: "https://www.linkedin.com/in/ronakmaniar/",
    },
  ];

  const team = [
    {
      name: "Rajiv Bahl",
      title: "SVP – CPO",
      image: "/images/Aboutus/rajiv_bahl.webp",
      bio: "IIM | IIT | Cyber Defense Expert | CISSP | CEH Master | AI-Labs | EC Council Cyber Security Mentor | +28 Yrs | Ex-Wipro | Ex-EY",
      linkedin: "https://www.linkedin.com/in/rajiv-bahl-269a671/",
    },
    {
      name: "Manoj Nair",
      title: "Director – Field CTO",
      image: "/images/Aboutus/manoj.webp",
      bio: "CompTIA Security+ | Ex-Microsoft | Ex-CheckPoint | AWS SA | Azure SA | Cloud Architect Masters | +24 Yrs",
      linkedin: "https://www.linkedin.com/in/manojnair09/",
    },

    {
      name: "Chetan Sharma",
      title: "Director – Sales Operations",
      image: "/images/Aboutus/chetan_sir.webp",
      bio: "17+ Yrs | Ex-Redington | Ex-Tata Tele | Large Transactions | Duty & Taxes | Cross-Border Bookings",
      linkedin: "https://www.linkedin.com/in/chetan-r-sharma/",
    },
    {
      name: "Vinod Gorwadkar",
      title: "Finance Head",
      image: "/images/Aboutus/vinodsir.webp",
      bio: "12+ Yrs | Ex-Redington | Credit Management | Cashflow | Strategic financial planning | Risk Assessment",
      linkedin: "https://www.linkedin.com/in/vinod-gorwadkar-257446264/",
    },

    {
      name: "Aaishwarya Kadam",
      title: "Lead – People and Culture",
      image: "/images/Aboutus/aaishwarya.webp",
      bio: "Culture | Ex-SecurityHQ | 10 to 1000 Scale  | People & process | POSH Train the Trainer",
      linkedin: "https://www.linkedin.com/in/aaishwarya-kadam-39b65a210/",
    },
    {
      name: "Rahul Dhiman",
      title: "Marketing Head",
      image: "/images/Aboutus/rahul.webp",
      bio: "15+ Yrs | Sales | Marketing | Emcee | USA | EU | BDM | Ex-Accenture | Ex-AuthBridge | Co-Founder LifePlugin",
      linkedin: "https://www.linkedin.com/in/ardee65/",
    },
  ];

  const companyLogos = [
    {
      src: "/images/Aboutus/indian_institute_of_technology_kharagpur.webp",

      withContainer: true,
    },
    { src: "/images/Aboutus/Insead.webp" },
    { src: "/images/Aboutus/iibm.webp" },
    { src: "/images/Aboutus/soil_n_management.webp" },
    { src: "/images/Aboutus/savitribai_phule.webp" },
    { src: "/images/Aboutus/wharton_logo.webp" },
  ];

  const certificate_logos = [
    {
      src: "/images/Aboutus/Cehmaster.webp",

      withContainer: true,
    },
    { src: "/images/Aboutus/iso.webp" },
    { src: "/images/Aboutus/Ccieswitching.webp" },
    { src: "/images/Aboutus/Cciesecurity.webp" },
    { src: "/images/Aboutus/Ccieserviceprovider.webp" },
    { src: "/images/Aboutus/CISSP.webp" },
  ];

  const logos = [
    "/images/OurCustomer/Futuregenerali.svg",
    "/images/OurCustomer/Arcteranew.svg",
    "/images/Landingpage/veritas1.svg",
    "/images/OurCustomer/Amdocsnew.svg",
    "/images/OurCustomer/LTImindtree.svg",
    "/images/OurCustomer/Kytesnew.svg",
    "/images/OurCustomer/Kpitnew.svg",
    "/images/OurCustomer/Nimhansnew.svg",
    "/images/OurCustomer/Skyflow.svg",
    "/images/OurCustomer/Secureview.svg",
    "/images/Landingpage/Presistent.svg",
    "/images/OurCustomer/Patternnew.svg",
    "/images/OurCustomer/Zensarnew.svg",
    "/images/OurCustomer/IBGroup.svg",
    "/images/OurCustomer/Emcurenew.svg",
    "/images/OurCustomer/Exela.svg",
    "/images/OurCustomer/FIAT.svg",
  ];

  return (
    <div className="bg-[url('https://saintfox.azureedge.net/datav2/FoundersBg.webp')] bg-no-repeat bg-cover bg-center object-contain text-[#fff] lg:px-20 py-20 px-5 md:px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
        <p className="text-gray-400 mb-16">
          Our foundation is built on decades of global leadership in
          cybersecurity, cloud, and digital transformation. With experience
          across Fortune 500 companies, billion-dollar ventures, and complex
          enterprise ecosystems, our founders bring unmatched vision, depth, and
          execution capabilities. Together, they&apos;ve laid the groundwork for a
          company that&apos;s bold, secure, and future-focused.
        </p>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-10 md:gap-5 mx-10 lg:0 md:mx-0 2xl:mx-0">
          {founders.map((f, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 text-center flex flex-col items-center justify-between
                 w-full max-w-[320px] h-[500px] mx-auto
                 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-1 rounded-br-1
                 border-[7px] border-white bg-opacity-10 backdrop-blur-sm"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-44 h-44 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{f.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{f.title}</p>
              <p className="text-sm text-gray-300 mb-6 px-0 min-h-[80px]">
                {f.bio}
              </p>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className=" underline text-center w-[24px] h-[24px] text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold mb-3">Executive Team</h3>
        <p className="mb-10 lg:px-20 2xl:px-96">
          Our executive leadership brings rich experience across cybersecurity,
          cloud, people ops, marketing, finance, and sales—building and scaling
          businesses across geographies and sectors.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((t, index) => (
            <div
              key={index}
              className="p-4 flex items-center gap-4 rounded-[2px] border"
              style={{
                borderColor: "rgba(255, 255, 255, 0.15)",
                background:
                  "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
                backdropFilter: "blur(21px)",
                WebkitBackdropFilter: "blur(21px)",
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-[141px] h-[150px] rounded"
              />
              <div className="text-left ">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400 mb-2">{t.title}</p>
                <p className="text-sm text-gray-300 mb-4">{t.bio}</p>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative lg:left-72 2xl:left-[640px] left-28 underline text-center w-[24px] h-[24px] text-lg"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 ">
        <h1 className="mb-6 font-bold">Alma Mater</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-wrap justify-center flex-wrap gap-8 2xl:gap-16 items-center text-center">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className={`2xl:h-[62px] 2xl:w-[190px] lg:h-[60px] lg:w-[125px] flex items-center justify-center`}
            >
              <img src={logo.src} alt={("alt" in logo && (logo as { alt?: string }).alt) ? (logo as { alt: string }).alt : `Alma mater ${index + 1}`} className=" " />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 ">
        <h1 className="mb-6 font-bold">Professional Certifications</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-wrap justify-center flex-wrap gap-8 2xl:gap-16 items-center text-center">
          {certificate_logos.map((logo, index) => (
            <div
              key={index}
              className="2xl:h-[62px] 2xl:w-[190px] lg:h-[60px] lg:w-[125px] flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={`Certificate ${index + 1}`}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <div>
          <h1 className="mb-6 font-bold">
            Trusted by Industry Leaders Across the Globe
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#040C14] to-transparent z-10"></div>

          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#040C14] to-transparent z-10"></div>

          <div className="whitespace-nowrap">
            <div className="flex animate-scroll gap-8 w-max py-4">
              {[...logos, ...logos, ...logos].map((icon, index) => (
                <div key={index} className="w-[100px] inline-block">
                  <img
                    src={icon}
                    alt={`logo-${index}`}
                    className="h-[80px] w-[100px] mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
