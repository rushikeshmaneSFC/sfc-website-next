"use client";

import Link from "next/link";
import type { FC } from "react";
import { HiChevronLeft } from "react-icons/hi";

const MaintenanceClient: FC = function () {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <img
        alt="Under Maintenance"
        loading="lazy"
        src="/images/illustrations/maintenance.svg"
        className="lg:max-w-md"
      />
      <h1 className="mb-3 mt-6 w-4/5 text-center text-4xl font-bold dark:text-white">
        Under Maintenance
      </h1>
      <p className="mb-6 w-4/5 max-w-3xl text-center text-lg text-gray-500 dark:text-gray-300">
        Sorry for the inconvenience but we&apos;re performing some maintenance at the
        moment. If you need to you can always&nbsp;
        <a href="#" className="text-primary-700 dark:text-primary-300">
          contact us
        </a>
        , otherwise we&apos;ll be back online shortly!
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

export default MaintenanceClient;
