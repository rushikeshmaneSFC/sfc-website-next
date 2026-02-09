import CircularProgress from "@/components/atoms/CircularProgress";
import Wrapper from "@/components/atoms/Wrapper";
import { METRICS } from "@/constants/DevSecOps";

interface MetricCardProps {
  percentage: number;
  title: string;
  description: string;
}

const MetricCard = ({ percentage, title, description }: MetricCardProps) => {
  return (
    <div className="shadow-md rounded-md flex flex-col items-center p-4">
      <CircularProgress percentage={percentage} />
      <p className="text-center text-xl lg:text-base font-semibold mt-4">
        {title}
      </p>
      <p className="text-center text-base lg:text-[13px]  mt-2">
        {description}
      </p>
    </div>
  );
};

export default function SeventhContainer() {
  return (
    <Wrapper className="flex justify-center items-center py-5 bg-white mt-8">
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold mb-5">
          Proven Results with St. Fox Managed DevSecOps
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {METRICS.map((metric, index) => (
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
}
