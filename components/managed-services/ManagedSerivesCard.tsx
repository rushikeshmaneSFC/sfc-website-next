import ServiceCard from "@/components/atoms/ServiceCard";
import Wrapper from "@/components/atoms/Wrapper";
import { servicesData } from "@/constants/ManagedServicesConstant";

const ManagedSerivesCard = () => {
  return (
    <Wrapper className="flex items-center justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ManagedSerivesCard;
