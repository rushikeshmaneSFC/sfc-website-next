import CircularProgress from "@/components/atoms/CircularProgress";
import Wrapper from "@/components/atoms/Wrapper";
import { INCIDENT_SERVICES_ARRAY } from "@/constants/IncidentResponseConstant";

interface MetricCardProps {
  percentage: number;
  title: string;
  description: string;
}

const MetricCard = ({ percentage, title, description }: MetricCardProps) => {
  return (
    <div className="shadow-md rounded-md  border-opacity-20 border-gray-50 border flex flex-col items-center p-4 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px]">
      <CircularProgress percentage={percentage} />
      <p className="text-center font-semibold mt-4 ">{title}</p>
      <p className="text-center text-sm mt-2">{description}</p>
    </div>
  );
};

const IncidentResponseServices = () => {
  return (
    <Wrapper className=" flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/Impactbg.webp')]  bg-cover bg-center lg:h-[544px] md:-[544px] h-auto  text-[#fff] lg:py-0 md:py-10 py-10">
      <div className="flex justify-center items-center text-center ">
        <p className="text-2xl font-bold mb-10">
          Impact of St. Fox Incident Response Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {INCIDENT_SERVICES_ARRAY.map((metric, index) => (
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

export default IncidentResponseServices;
