import { useState } from "react";

interface CloudshapeProps {
  title: string;
  icon: string;
  hoverText: string;
  mdr: boolean;
}

const Cloudshape = ({ title, icon, hoverText, mdr }: CloudshapeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${mdr ? "rounded-none " : "rounded-hexagon-container"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="hexagon-container ">
        {!mdr && isHovered ? (
          <p className="text-sm p-[10px] text-[#fff] font-medium">
            {hoverText}
          </p>
        ) : (
          <>
            <img
              loading="lazy"
              src={icon}
              alt={title}
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm p-[10px] font-medium text-[#fff]">{title}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cloudshape;
