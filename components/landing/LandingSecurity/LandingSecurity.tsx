import { Link } from "react-router-dom";
import Wrapper from "../../../Atoms/Wrapper";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    icon: "/images/Landingpage/AIicon.webp",
    title: "Security for AI",
    description:
      "Protect AI models and data pipelines with robust governance, threat detection, and compliance controls",
    link: "/ai-security",
    overlay: "dark",
    bg: "/images/Landingpage/Frame1.webp",
  },
  {
    icon: "/images/Landingpage/Managedicon.webp",
    title: "Managed Services",
    description:
      "We simplify operations, optimize costs, and deliver 24x7 support with scalable solutions",
    link: "/managed-services",
    overlay: "light",
    bg: "/images/Landingpage/Frame2.webp",
  },
  {
    icon: "/images/Landingpage/Specializedicon.webp",
    title: "Specialized Services ",
    description:
      "Expert-led solutions tailored for complex, high-impact business challenges across cloud, security, and compliance",
    link: "/SpecializedService",
    overlay: "dark",
    bg: "/images/Landingpage/Frame3.webp",
  },
  {
    icon: "/images/Landingpage/Dataicon.webp",
    title: "Data Services",
    description:
      "Unlock the value of your data through advanced analytics, modern data platforms, and governance frameworks",
    link: "/data-services",
    overlay: "light",
    bg: "/images/Landingpage/Frame4.webp",
  },
  {
    icon: "/images/Landingpage/Cloudicon.webp",
    title: "Cloud Engineering",
    description:
      "Design, build, and scale modern cloud-native architectures that accelerate innovation",
    link: "/cloud-engineering",
    overlay: "dark",
    bg: "/images/Landingpage/Frame5.webp",
  },
];

const LandingSecurity = () => {
  return (
    <div className="flex flex-col items-center sm:gap-8 md:gap-3 lg:gap-10 gap-10 px-4 md:px-8 lg:px-12 py-8 text-[#000]">
      {services.map((service, index) => {
        const isDark = service.overlay === "dark";
        const textColor = isDark ? "text-[#fff]" : "text-black";

        return (
          <div
            key={index}
            className="relative w-full text-[#000] max-w-6xl rounded-xl overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${service.bg})`,
              backgroundSize: window.innerWidth < 768 ? "cover" : "contain",
            }}
          >
            <Wrapper className="relative z-10 text-[#000] py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
              <div
                className="flex flex-col gap-4 sm:gap-6"
                onClick={() => (window.location.href = service.link)}
              >
                <div className=" text-[#000] flex  sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor}`}
                  >
                    {service.title}
                  </h2>
                </div>
                <p
                  className={`text-sm sm:text-base md:text-lg leading-relaxed ${textColor}`}
                >
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-[#1C64F2] text-base font-medium inline-flex items-center gap-2"
                >
                  <span>Learn more</span>
                  <FaArrowRightLong className="mt-[2px]" />
                </Link>
              </div>
            </Wrapper>
          </div>
        );
      })}
    </div>
  );
};

export default LandingSecurity;
