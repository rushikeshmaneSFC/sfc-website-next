import Wrapper from "@/components/atoms/Wrapper";
import { FIREWALLMANAGED_DATA } from "@/constants/ManagedFirewallConstant";

function FirewallManagement() {
  return (
    <Wrapper className="bg-[#FAFAFA] flex justify-center items-center mt-5 lg:mt-10">
      <div className="grid w-full max-w-5xl">
        <div className="text-xl lg:text-[32px] font-bold lg:leading-10 text-center lg:mb-8">
          Why Choose St. Fox for Firewall Management?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-4 lg:mt-2">
          {FIREWALLMANAGED_DATA.map((item, index) => (
            <div key={index} className="px-4 lg:py-2 py-4">
              <p className="text-base lg:text-lg font-semibold text-[#1A3F7E] lg:mb-2">
                {item.title}
              </p>
              <p className="text-sm lg:text-base font-normal ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default FirewallManagement;
