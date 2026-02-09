import { ISOCardsData } from "@/constants/ISOConstant";

interface IsoCardProps {
  title: string;
  imageSrc: string;
}

export default function IsoCard({ title, imageSrc }: IsoCardProps) {
  return (
    <div className="max-w-6xl  p-6 text-center ">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center justify-center gap-2">
        {title}
      </h2>
      <div className="flex justify-center items-center lg:pl-64 md:pl-64">
        <img loading="lazy" src={imageSrc} alt="vector" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
        {ISOCardsData.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm   "
            style={{
              borderTop: `3px solid ${card.borderColor}`,
            }}
          >
            <div className="text-center py-5 px-5">
              <p className="lg:text-lg  text-base ">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
