import { ReactNode } from "react";

interface WrapperProps {
  className?: string;
  children: ReactNode;
}

function Wrapper({ className = "", children }: WrapperProps) {
  return (
    <div className={`${className}`}>
      <div className="px-4 sm:px-16 lg:px-52 w-full max-w-screen-xl  2xl:px-56 py-1 md:py-3">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
