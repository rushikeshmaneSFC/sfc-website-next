"use client";

interface VAPTItem {
  id: number;
  content: any;
}

export default function VAPTList({ item }: { item: VAPTItem }) {
  return (
    <div className="grid grid-cols-[30%,70%] md:grid-cols-[30%,70%] lg:grid-cols-[25%,75%]">
      <div className="text-center h-[80px]">
        <div className="relative">
          <div className="flex absolute ">
            <div className="w-[40px] lg:w-[50px] md:h-[80px] h-[80px] lg:h-[100px] rounded-l-full"></div>
            <div
              className="w-[40px] lg:w-[50px] md:h-[80px] h-[80px] lg:h-[100px] rounded-r-full"
              style={{
                background:
                  "linear-gradient(92deg, #3B73CC  0%, #1A3F7E  99.61%)",
              }}
            ></div>
          </div>
          <div className="absolute h-[68px] w-[68px] md:h-[68px] lg:h-[85px] lg:w-[85px] top-[6px] left-[5px] lg:top-[7px] lg:left-[6px] ">
            <div
              className="rounded-full bg-white h-[68px] md:h-[68px] lg:h-[85px]"
              style={{
                boxShadow:
                  "0px 0.754px 3.014px 0px rgba(14, 31, 53, 0.12), 0px 3.014px 6.028px 0px rgba(14, 31, 53, 0.08)",
              }}
            >
              <h1 className="leading-[68px] lg:leading-[85px] text-2xl lg:text-[2rem] font-semibold text-[#1C1C1C]">
                {item.id}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[68px] lg:h-[110px] flex items-center ">
        {item.content}
      </div>
    </div>
  );
}
