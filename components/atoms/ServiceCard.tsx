import { FaArrowRightLong } from "react-icons/fa6";
import ReusableBtn from "./ReusableBtn";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ title, description, link }: ServiceCardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm flex flex-col"
      onClick={() => link}
    >
      <Link href={link}>
        <div className="h-32 sm:h-[127px] bg-gradient-to-t from-[#102C46] to-[#07111A] flex items-end px-4 pb-4">
          <h3 className="text-[#fff] text-lg sm:text-xl lg:text-[22px] lg:leading-[28px] font-semibold">
            {title}
          </h3>
        </div>
        <div className="px-4 py-4 flex flex-col justify-between flex-1">
          <p className="text-sm sm:text-base lg:text-[13px] lg:leading-[20px] font-medium flex-1 mb-4">
            {description}
          </p>

          <div className="flex justify-end">
            <ReusableBtn
              as="span"
              icon={<FaArrowRightLong />}
              name="Learn More"
              className="flex text-[#1C64F2] text-sm gap-2 font-medium"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
