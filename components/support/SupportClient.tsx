"use client";

import ScheduleModal from "@/components/atoms/ScheduleModal";

export default function SupportClient() {
  return (
    <div className="py-24 min-h-screen bg-[url('/images/Experiencedbreach.webp')] bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-center px-4 py-12 lg:py-24 lg:h-[700px]">
      <div className="w-full lg:w-1/2 px-4 mb-8  text-[#fff]">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-6">
          We&apos;ve got your back after a breach
        </h2>
        <p className="text-base mb-6">
          With expert response teams just a click away, regain control and
          confidence.
        </p>
        <ul className="list-disc list-inside text-base lg:text-xl space-y-2">
          <li>24/7 breach investigation and containment</li>
          <li>Personalised recovery and risk mitigation</li>
          <li>Support with legal & regulatory obligations</li>
        </ul>
      </div>

      <div className="w-full lg:w-1/2 max-w-xl bg-white rounded-lg shadow-md p-6">
        <ScheduleModal
          open={true}
          setOpen={() => {}}
          title="Connect with Us"
          from="breach"
          isInline={true}
        />
      </div>
    </div>
  );
}
