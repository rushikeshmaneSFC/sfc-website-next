type Step = {
  title: string;
  description: string;
};

type DottedListProps = {
  steps: Step[];
  className?: string;
};

function DottedList({ steps, className }: DottedListProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative border-l-2 border-gray-300 ">
        {steps.map((step, index) => (
          <div key={index} className={`relative mb-[22px] ${className}`}>
            <div className="absolute top-[4px] -left-[11px] w-5 h-5 bg-[#1A3F7E] rounded-full"></div>
            <div className="ml-8">
              <h3 className="text-lg lg:text-[15px] font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-base lg:text-[13px] text-gray-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DottedList;
