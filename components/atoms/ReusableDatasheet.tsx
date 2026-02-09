import { useState } from "react";
import ReusableBtn from "./ReusableBtn";
import CustomModal from "./CustomModal";

interface ReusableDatasheetProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  className?: string;
  buttonclassName?: string;
  alt?: string;
  modalImageSrc?: string;
}

const ReusableDatasheet: React.FC<ReusableDatasheetProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  className,
  buttonclassName,
  alt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%,30%]  md:gap-0 gap-4">
      <div
        className={`flex flex-col justify-center  items-center text-center md:text-start sm:justify-start sm:items-start lg:py-20 md:py-20 ${className}`}
      >
        <div>
          <h2 className="text-lg lg:text-2xl md:text-2xl font-bold">{title}</h2>
          <p className="text-base lg:text-xl mt-2">{description}</p>
        </div>
        <div>
          <ReusableBtn
            className={` ${buttonclassName}`}
            name={buttonText}
            type="button"
            icon={undefined}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img loading="lazy" src={imageSrc} alt={alt} className="rounded-lg" />
      </div>
      <CustomModal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
};

export default ReusableDatasheet;
