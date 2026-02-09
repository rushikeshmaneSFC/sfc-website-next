import { ReactNode } from "react";

export default function HeroSection({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      <div className="px-8 sm:px-16 lg:px-48 w-full max-w-screen-xl xl:px-48 mt-20 pb-4 md:pt-0 lg:pt-0">
        {children}
      </div>
    </div>
  );
}
