interface HeroCardsProps {
  percentage: string;
  text: string;
  id: string;
  className?: string;
}

const HeroCards = ({ percentage, text, id, className }: HeroCardsProps) => {
  return (
    <div
      key={id}
      className={`flex-1 flex flex-col bg-[rgba(15,62,104,0.07)] border-2 border-solid rounded-md border-[#132332] p-2 ${className}`}
    >
      <p
        className="text-2xl font-bold"
        style={{
          background: "linear-gradient(135deg, #3B73CC 0%, #1A3F7E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {percentage}
      </p>
      <p className="text-base lg:text-[13px] text-[#fff]">{text}</p>
    </div>
  );
};

export default HeroCards;
