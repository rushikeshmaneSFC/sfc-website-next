import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

interface LandingCardProps {
  title: string;
  description1: string;
  description2: string;
  description3?: string;
  buttonText?: string;
  imageSrc?: string;
  link?: string;
}

const LandingCard: React.FC<LandingCardProps> = ({
  title,
  description1,
  description2,
  description3,
  buttonText,
  imageSrc,
  link,
}) => {
  const navigate = useNavigate();
  const isIntroCard = title === " What We Do Best";

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 2xl:px-5 lg:px-2 md:px-5 px-0 w-full">
      <div
        className={`flex items-center justify-center p-8 rounded-lg w-full max-w-[716px] h-auto min-h-[400px]  lg:w-[716px] 2xl:w-[600px] lg:h-[407px] mac:h-[457px] 2xl:h-[500px] 2xl:py-20 ${
          isIntroCard
            ? "bg-transparent text-[#000]"
            : "bg-[#071828] text-[#fff]"
        }`}
      >
        <div className="flex flex-col w-full h-full justify-between">
          <div>
            <h2 className="text-xl lg:text-[32px] font-semibold mb-4">
              {title}
            </h2>
            <p className="text-base mb-4 font-normal">{description1}</p>
            <p className="text-base mb-4 font-normal">{description2}</p>
            {description3 && (
              <p className="text-base mb-4 font-normal">{description3}</p>
            )}
          </div>

          {!isIntroCard && (
            <div className="flex items-center justify-between">
              {buttonText && (
                <button
                  onClick={handleNavigation}
                  className="group flex items-center gap-1 hover:text-blue-400 transition-all duration-200"
                >
                  <span className="text-[13px] font-medium whitespace-nowrap">
                    {buttonText}
                  </span>
                  <IoIosArrowForward className="text-[13px] group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              )}
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt="Card Icon"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
