import { useEffect, useRef } from "react";

const LandingPageSecuringSector = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleTouchStart = () => el.classList.add("pause-animation");
    const handleTouchEnd = () => el.classList.remove("pause-animation");

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const handleCardHover = (hovering: boolean) => {
    const el = scrollRef.current;
    if (!el || window.innerWidth < 1024) return;
    if (hovering) {
      el.classList.add("pause-animation");
    } else {
      el.classList.remove("pause-animation");
    }
  };
  return (
    <div className="relative text-[#fff]  bg-cover bg-center bg-no-repeat text-white 2xl:px-40 lg:px-4 py-10 md:px-5 px-4  lg:h-[398px] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="2xl:text-[36px] lg:text-4xl md:text-2xl text-xl font-semibold mb-6">
          Securing Every Sector
        </h2>
        <p className="2xl:mx-20 lg:mx-20 md:mx-10 mb-12 2xl:text-xl lg:text-lg  md:text-xl text-base lg:font-semibold font-medium">
          From critical infrastructure to consumer-facing platforms, we
          customize cloud security and engineering solutions to meet the unique
          needs of every industry we touch.
        </p>

        <div ref={scrollRef} className="flex gap-6 animate-scrollll w-max">
          {cards.map((card, index) => (
            <Card key={index} {...card} onHoverChange={handleCardHover} />
          ))}
          {cards.map((card, index) => (
            <Card
              key={`repeat-${index}`}
              {...card}
              onHoverChange={handleCardHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
  onHoverChange?: (hovering: boolean) => void;
}) => (
  <div
    className="flex flex-col justify-center p-6 rounded-[8px] border-white/1 backdrop-blur-[21px] h-[142px] w-[398px] space-y-2 shrink-0"
    style={{
      background:
        "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)",
    }}
  >
    <div className="flex items-center gap-4 px-2">
      <img src={icon} alt={title} className="w-8 h-8" />
      <h3 className="text-base font-semibold text-left">{title}</h3>
    </div>
    <p className="lg:text-[13px] text-sm font-medium text-left px-2">
      {description}
    </p>
  </div>
);

const cards = [
  {
    icon: "/images/Landingpage/Telecom_Media.webp",
    title: "Telecom & Media",
    description:
      "Ensuring secure and scalable digital infrastructure for high-traffic content delivery, streaming, and connectivity services.",
  },
  {
    icon: "/images/Landingpage/Banking_Finance.webp",
    title: "Banking, Finance & Insurance",
    description:
      "Fortifying financial systems with zero-trust security, regulatory compliance, and real-time threat intelligence.",
  },
  {
    icon: "/images/Landingpage/Healthcare.webp",
    title: "Healthcare & Life Sciences",
    description:
      "Protecting patient data and research systems with HIPAA-compliant, privacy-focused cloud environments.",
  },
  {
    icon: "/images/Landingpage/Manufacturing.webp",
    title: "Manufacturing",
    description:
      "Securing OT/IT integration and supply chains with robust cloud frameworks and anomaly detection systems.",
  },
  {
    icon: "/images/Landingpage/Retail_E-Commerce.webp",
    title: "Retail & E-Commerce",
    description:
      "Guarding customer data, payment systems, and inventory workflows while ensuring 24/7 operational uptime.",
  },
  {
    icon: "/images/Landingpage/Agro_Industries.webp",
    title: "Agro and F&B Industries",
    description:
      "Enabling traceability, IoT data protection, and digital supply chain resilience for agri-tech and food ecosystems.",
  },
];

export default LandingPageSecuringSector;
