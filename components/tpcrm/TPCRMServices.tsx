"use client";

import CircularProgress from "@/components/atoms/CircularProgress";
import Wrapper from "@/components/atoms/Wrapper";
import { TPCRM_SERVICES } from "@/constants/TPCRM";

interface MetricCardProps {
  percentage: number;
  title: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ percentage, title, description }) => {
  return (
    <div className="shadow-md rounded-md flex flex-col items-center p-4">
      <CircularProgress percentage={percentage} />
      <p className="text-center font-semibold mt-4">{title}</p>
      <p className="text-center text-sm mt-2">{description}</p>
    </div>
  );
};

const TPCRMServices = () => {
  return (
    <Wrapper className=" flex justify-center items-center py-5 bg-white">
      <div className="flex justify-center items-center text-center">
        <p className="text-2xl font-bold mb-5">
          Impact of St. Fox TPCRM Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TPCRM_SERVICES.map((metric, index) => (
          <MetricCard
            key={index}
            percentage={Number(metric.percentage)}
            title={metric.title}
            description={metric.description}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TPCRMServices;
