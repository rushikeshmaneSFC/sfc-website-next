interface IncidentIdentifyCardProps {
  text: string;
  imageSrc: string;
  description: string;
}

const IncidentIdentifyCard = ({
  text,
  imageSrc,
  description,
}: IncidentIdentifyCardProps) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-gradient-to-br from-[#3B73CC] to-[#1A3F7E] px-4 py-2 rounded flex  lg:left-24 left-16 md:left-10 items-center  lg:w-[220.10px] md:w-[180px] w-[220.10px] relative">
        <div className="text-base font-bold text-[#fff] ">{text}</div>
        <div className="absolute -top-1 right-0 bg-gradient-to-br from-[#3B73CC] to-[#1A3F7E] p-2 rounded-lg  shadow-md ">
          <div className="bg-gradient-to-br from-[#3B73CC] to-[#1A3F7E] ">
            <img
              loading="lazy"
              src={imageSrc}
              alt=""
              className="lg:w-[48px] lg:h-[48px]  md:w-[44px] md:h-[44px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white text-[15px] font-normal p-4 rounded shadow-md lg:w-[300px] md:w-[180px] tracking-tighter lg:h-[67.253px] w-[220.10px]  ">
        {description}
      </div>
    </div>
  );
};

export default IncidentIdentifyCard;
