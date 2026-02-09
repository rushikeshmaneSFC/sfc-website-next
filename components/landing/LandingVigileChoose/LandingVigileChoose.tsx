import ReusableCard from "@/components/atoms/ReusableCard";
import { CardData } from "@/constants/homeConstant";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { useRouter } from "next/navigation";

const LandingVigileChoose = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center bg-cover bg-center bg-no-repeat item-center lg:h-[357px] md:h-[357px] h-auto 2xl:px-40 2xl:py-7 lg:py-1  lg:px-20 md:py-8 2xl:mt-0 md:px-5 px-4  ">
      <div className="">
        <div className="flex  justify-center items-center text-center gap-6 lg:mt-0 ">
          <div className="flex lg:text-2xl text-xl font-bold justify-center items-center text-center">
            <h2 className="lg:text-2xl text-xl font-bold">Why Choose the VIGILE Framework?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-8 ">
          {CardData.map((card, index) => (
            <ReusableCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className={
                "border-l-2 border-dashed border-gray-300 border-spacing-x-8"
              }
              boxShadowColor={card.boxShadowColor}
              ImgClassName={undefined}
            />
          ))}
        </div>
        <div className=" flex justify-center pb-9">
          <ReusableBtn
            className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-base font-medium py-2 px-[50px] rounded-lg transition flex items-center justify-center gap-2 text-[13px] mt-4 whitespace-nowrap text-[#fff] "
            name="Learn more"
            onClick={() => {
              router.push("/vigile");
            }}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingVigileChoose;
