import type { FC } from "react";

const NotFoundClient: FC = function () {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#002C43]">
      <img
        loading="lazy"
        alt="error"
        src="/images/404 error.png"
        className="w-full sm:w-screen-sm h-full object-contain"
      />
    </div>
  );
};

export default NotFoundClient;
