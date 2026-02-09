"use client";

import Link from "next/link";
import type { FC } from "react";
import { HiChevronLeft } from "react-icons/hi";

const ServerErrorClient: FC = function () {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <img
        alt="illustrations"
        loading="lazy"
        src="/images/illustrations/500.svg"
        className="lg:max-w-md"
      />
      <h1 className="mb-3 w-4/5 text-center text-2xl font-bold dark:text-white md:text-5xl">
        Something has gone seriously wrong
      </h1>
      <p className="mb-6 w-4/5 text-center text-lg text-gray-500 dark:text-gray-300">
        It&apos;s always time for a coffee break. We should be back by the time you
        finish your coffee.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <div className="mr-1 flex items-center gap-x-2">
          <HiChevronLeft className="text-xl" /> Go back home
        </div>
      </Link>
    </div>
  );
};

export default ServerErrorClient;
