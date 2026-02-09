function Strengths() {
  const strengths = [
    {
      img: "/images/Aboutus/Leadership.webp",
      title: "300+ years of leadership experience",
      description: "Across cloud, security, compliance, and enterprise tech.",
    },
    {
      img: "/images/Aboutus/institutes.webp",
      title: "Alumni of premier institutes",
      description:
        "Like IITs, INSEAD, Wharton, and other global centers of excellence.",
    },
    {
      img: "/images/Aboutus/specialists.webp",
      title: "110+ certified specialists",
      description:
        "Holding credentials like CCIE, CEH Master, ISO 27001 Lead Auditor, CISSP and more.",
    },
    {
      img: "/images/Aboutus/exposure.webp",
      title: "Cross-industry exposure",
      description:
        "Telecom, BFSI, Healthcare, Manufacturing, Retail, and AgriTech.",
    },
    {
      img: "/images/Aboutus/culture.webp",
      title: "A culture of learning and innovation",
      description:
        "Regular upskilling, research groups, AI security labs, and hackathons.",
    },
    {
      img: "/images/Aboutus/mindset.webp",
      title: "Customer-first mindset",
      description:
        "We partner, not just service and measure success by the success of our clients.",
    },
  ];

  return (
    <div className="bg-[url('https://saintfox.azureedge.net/datav2/Background.webp')] bg-cover bg-center bg-no-repeat  py-8 px-4 sm:px-6 lg:px-20 lg:h-[575px] h-auto md:h-auto mx-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl lg:text-[28px] font-semibold mb-12">
          Our Strengths
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <img src={item.img} alt={item.title} className="w-12 h-12 " />
              <h3 className="text-base font-semibold lg:leading-6">
                {item.title}
              </h3>
              <p className="text-base lg:leading-6">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-base tfont-medium mt-10 italic">
          At the heart of it all, our Tribe stands committed to{" "}
          <span className="text-base font-semibold">
            pushing the boundaries of security and cloud engineering
          </span>{" "}
          — helping organizations grow fearlessly in a digital-first world.
        </p>
      </div>
    </div>
  );
}

export default Strengths;
