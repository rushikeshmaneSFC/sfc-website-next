interface PatchValidationCardProps {
  title: string;
  description: string;
}

const PatchValidationCard = ({
  title,
  description,
}: PatchValidationCardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2"
      style={{
        borderLeft: "6px solid #1E3A8A",
      }}
    >
      <p className="text-xs font-semibold text-gray-900">{title}</p>

      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PatchValidationCard;
