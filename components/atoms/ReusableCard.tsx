import { useEffect, useState } from "react";

interface ReusableCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
  boxShadowColor?: string;
  ImgClassName?: string;
}

export default function ReusableCard({
  icon,
  title,
  description,
  className,
  boxShadowColor,
  ImgClassName,
}: ReusableCardProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col lg:items-start items-center text-center lg:text-left ${className}`}
    >
      {icon && (
        <div className="rounded-md flex items-center justify-center mb-6 mx-2 mt-10">
          <img
            loading="lazy"
            src={icon}
            alt={icon}
            className={`w-[67px] h-[67px] object-contain ${ImgClassName}`}
          />
        </div>
      )}
      <p
        className="font-semibold text-base lg:text-lg mb-2 pl-2 outline-4"
        style={{
          boxShadow: isLargeScreen
            ? `-2px 0px 0px 0px ${boxShadowColor}`
            : "none",
        }}
      >
        {title}
      </p>
      <p className="lg:text-base text-[14px] px-2">{description}</p>
    </div>
  );
}
