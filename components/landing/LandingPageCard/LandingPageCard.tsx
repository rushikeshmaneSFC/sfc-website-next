// @ts-nocheck
"use client";
import { useRef, useLayoutEffect } from "react";
import LandingCard from "@/constants/LandingCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const cardDatas = [
  {
    id: 0,
    title: " What We Do Best",
    description1:
      "We deliver comprehensive, cloud-first security and engineering solutions tailored to meet the evolving needs of modern businesses. From securing your cloud infrastructure to enabling AI-safe environments, our end-to-end services are built for tomorrow's challenges.",
    description2:
      "Designed to empower organizations of all sizes and across industries, we help you build, scale, and thrive in a digital-first world with confidence and resilience.",
  },

  {
    id: 1,
    title: "Security for AI",
    description1:
      "Safeguard your AI models and data pipelines with enterprise-grade security.",
    description2:
      "We implement robust governance frameworks, real-time threat detection, and regulatory compliance controls to protect against evolving AI-specific risks.",
    description3:
      "From training to deployment, we ensure your AI systems remain secure, reliable, and trustworthy.",
    buttonText: "Learn More",
    imageSrc: "/images/Landingpage/Security_AI.webp",
    link: "/ai-security",
  },

  {
    id: 2,
    title: "Specialized Services",
    description1:
      "Our Specialized Services tackle complex, mission-critical challenges across cloud, cybersecurity and regulatory compliance.",
    description2:
      "Led by seasoned experts, we deliver tailored strategies and hands-on execution to meet your unique needs.",
    description3:
      "From security audits to compliance mandates or custom architectures—we’ve got you covered.",
    buttonText: "Learn More",
    imageSrc: "/images/Landingpage/Specialized_Services.webp",
    link: "/SpecializedService",
  },
  {
    id: 3,
    title: "Managed Services",
    description1:
      "Our Managed Services streamline your cloud operations, reduce overheads, and ensure seamless performance at scale. ",
    description2:
      "We provide 24x7 monitoring, proactive maintenance, and rapid issue resolution to keep your infrastructure running smoothly.",
    description3: "With us, your team can focus on innovation.",
    buttonText: "Learn More",
    imageSrc: "/images/Landingpage/Managed_Services.webp",
    link: "/managed-services",
  },

  {
    id: 4,
    title: "Cloud Engineering",
    description1:
      "Accelerate innovation with cloud-native architectures built for performance. ",
    description2:
      "Our Cloud Engineering services help you design, deploy, and optimize infrastructure tailored to your business goals.",
    description3:
      "Whether you're migrating to the cloud or modernizing existing systems, we ensure a seamless, future-ready transformation.",
    buttonText: "Learn More",
    imageSrc: "/images/Landingpage/Cloud_Engineering.webp",
    link: "/cloud-engineering",
  },
  {
    id: 5,
    title: "Data Services",
    description1:
      "Transform your data into a strategic asset with our end-to-end data services.",
    description2:
      "We help you harness advanced analytics, build modern data platforms, and implement robust governance frameworks.",
    description3:
      "From data integrity to actionable insights, we ensure your data drives real business value.",
    buttonText: "Learn More",
    imageSrc: "/images/Landingpage/Data_Services.webp",
    link: "/data-services",
  },
];

const LandingPageCard = ({ customCss }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const totalScrollWidth = container.scrollWidth;
      const horizontalScrollLength = totalScrollWidth - window.innerWidth + 250;

      gsap.to(container, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className={`
    w-full h-[100vh] overflow-hidden
    bg-no-repeat
    2xl:bg-cover 2xl:bg-right
    ${customCss}
  `}
        style={{
          backgroundImage: `url('${
            window.innerWidth < 768
              ? "/images/Landingpage/mobile-bg-bottom-img.webp"
              : "/images/Landingpage/horizhontal-scroll-2nd-img.webp"
          }')`,
        }}
      >
        <div
          id="progress-bar"
          className="fixed top-0 left-0 h-1  z-50"
          style={{ width: "0%" }}
        />

        <div
          ref={containerRef}
          className="flex w-max h-full items-center px-4 gap-3"
        >
          {cardDatas.map((data, idx) => (
            <div
              key={idx}
              className="shrink-0  mt-9 snap-start max-w-[400px] lg:max-w-[600px] 2xl:max-w-[1000px]  "
            >
              <LandingCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPageCard;
