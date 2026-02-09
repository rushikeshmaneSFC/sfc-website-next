interface ImpactCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

function ImpactCard({ title, description, image, className }: ImpactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md   space-y-2 border border-gray-200 justify-start items-start">
      <div className="grid grid-col sm:grid-cols-1 lg:grid-cols-1">
        <div className="flex justify-center items-center ">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className={`w-full h-[187px] ${className}`}
          />
        </div>

        <div className="flex flex-col justify-start items-start px-2  py-7 gap-4 ">
          <h3 className="font-semibold text-base  ">{title}</h3>
          <p className="text-gray-600 text-[13px] ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImpactCard;
