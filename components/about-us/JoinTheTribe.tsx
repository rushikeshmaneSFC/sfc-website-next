"use client";

import { useRouter } from "next/navigation";
import ReusableBtn from "@/components/atoms/ReusableBtn";

const JoinTheTribe = () => {
  const router = useRouter();
  return (
    <div className="bg-gray/200 w-full flex justify-center items-center min-h-[640px] md:h-[689px] lg:h-[580px] relative px-4">
      <h1
        className="text-VAPTFeatureColor text-[32px] md:text-[52px] lg:text-[64px] font-medium
            text-center tracking-[-1px] lg:-mt-[400px] -mt-[590px] md:-mt-[420px]"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}
      >
        Join the Tribe
      </h1>
      <div
        className=" absolute md:max-w-5xl lg:w-full lg:mx-0 md:mx-7 mx-20  rounded-lg border-2 border-[rgba(222,225,236,0.49)]
            bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(248,249,251,0.20)_0%,_rgba(248,249,251,0)_100%)]
             lg:backdrop-blur-[1.8px]
            p-6 md:p-8 lg:p-12 text-center"
      >
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold mb-6 text-black">
          Where Talent Meets Purpose. And Growth Never Stops.
        </h2>

        <p className="text-[#1C1C1C] mb-4">
          We&apos;re not just building secure systems—we&apos;re building a secure future,
          and that starts with people. At our core, the Tribe is a home for
          problem-solvers, risk-takers, innovators, and lifelong learners who
          want to create real impact in the world of cybersecurity, cloud, and
          AI.
        </p>
        <p className="text-[#1C1C1C] mb-6">
          Whether you&apos;re an experienced professional or a curious newcomer, we
          offer more than just a job—we offer a journey.
        </p>
        <ReusableBtn
          type="button"
          className="rounded-md bg-[#000] text-[#fff] text-[13px] px-7 py-2 mt-7 lg:mt-6 lg:w-auto w-[280px]"
          name="Join the Tribe"
          onClick={() => router.push("/careers")}
        />
      </div>
    </div>
  );
};

export default JoinTheTribe;
