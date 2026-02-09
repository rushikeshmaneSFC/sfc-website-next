"use client";
// @ts-nocheck

import type { FC, PropsWithChildren } from "react";
import Navbar from "./navbar";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter = true,
}) => {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="flex items-start">
        <MainContent isFooter={isFooter}>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
};

export const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter,
}) => {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

  return (
    <main
      className={classNames(
        "overflow-y-auto overflow-x-hidden relative w-full h-full bg-gray-50 dark:bg-gray-900",
        isSidebarOpen ? "lg:ml-0" : "lg:ml-0",
      )}
    >
      {children}
      {isFooter && (
        <div className="mt-4">
          <MainContentFooter className="hidden lg:block" />
        </div>
      )}
    </main>
  );
};

const NewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
const MainContentFooter: FC<{ className?: string }> = ({}) => {
  const [submitted, setSubmitted] = React.useState(false);
  const pathname = usePathname();
  const date = new Date();
  const currentYear = date.getFullYear();
  useEffect(() => {
    setSubmitted(false);
  }, [pathname]);

  const handleSubmit = async (
    values: { email: string },
    { resetForm }: any,
  ) => {
    try {
      const response = await fetch(
        "https://stfox.com/api/customers/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (response.ok) {
        // console.log("Newsletter submission:", values);
        resetForm();
        setSubmitted(true);
      } else {
        console.error("Failed to submit", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <footer className="bg-[#060d16] text-[#fff] px-0 py-5 -mt-4">
      <div className="max-w-full  grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-20 2xl:gap-8 lg:pl-20 px-4 2xl:-mx-[29px] ">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center text-center order-first md:order-none lg:-mb-8 mb-[-35px]">
          <img
            src="/images/Footer/ST.FOXLOGO.svg"
            className="w-[130px] h-[120px] mb-4"
            alt="Logo"
          />

          <p className="text-[#fff] text-base lg:whitespace-nowrap md:whitespace-nowrap font-normal">
            Innovate Fearlessly <br></br> {""} Protect Relentlessly
          </p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={NewsletterSchema}
            onSubmit={handleSubmit}
            validateOnMount={false}
            validateOnBlur={true}
            validateOnChange={false}
          >
            {(formik) => {
              useEffect(() => {
                formik.resetForm();
                formik.setTouched({});
                setSubmitted(false);
              }, [pathname]);

              return (
                <div className="flex flex-col gap-0 text-[#000]">
                  <form
                    className="flex items-center bg-white rounded-[8px] overflow-hidden w-full h-[30px] max-w-sm"
                    onSubmit={formik.handleSubmit}
                    onReset={() => {
                      formik.resetForm();
                      2;
                      setSubmitted(false);
                    }}
                  ></form>

                  <div className="min-h-[20px]">
                    {formik.errors.email && formik.touched.email && (
                      <div className="text-[#ff2929] text-xs">
                        {formik.errors.email}
                      </div>
                    )}
                    {submitted && !formik.errors.email && (
                      <div className="text-green-400 text-xs">
                        Thank you for subscribing!
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>

        <div className="flex flex-col gap-1.5 px-2 lg:px-0 md:px-0">
          <h2 className="text-sm font-semibold">COMPANY</h2>
          <ul className="flex flex-col gap-1.5 text-sm">
            <li>
              <Link href="/vigile" className="text-[13px] md:text-[14px]">
                VIGILE
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-[13px] md:text-[14px]">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/corporate-sustainability"
                className="text-[13px] md:text-[14px]"
              >
                Corporate Sustainability
              </Link>
            </li>
            <li>
              <Link href="/casestudies" className="text-[13px] md:text-[14px]">
                Insights
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1.5 px-4 lg:px-0 md:px-0">
          <p className="text-sm font-semibold">SERVICES</p>
          <Link href="/managed-services" className="text-[13px] md:text-[14px]">
            Managed Services
          </Link>
          <Link href="/SpecializedService" className="text-[13px] md:text-[14px]">
            Specialised Services
          </Link>
          <Link href="/data-services" className="text-[13px] md:text-[14px]">
            Data Services
          </Link>
          <Link href="/ai-security" className="text-[13px] md:text-[14px]">
            Security For AI
          </Link>
          <Link href="/cloud-engineering" className="text-[13px] md:text-[14px]">
            Cloud Engineering
          </Link>
        </div>
        <div>
          <div className="flex flex-col gap-1.5 px-2 lg:px-0 md:px-0">
            <p className="text-[13px] md:text-[14px] font-semibold ">SALES</p>
            <a
              href="mailto:sales@stfox.com"
              className="text-[13px] md:text-[14px] text-white hover:underline"
            >
              sales@stfox.com
            </a>
            <a
              href="tel:1800-26-ST-FOX"
              className="text-[13px] md:text-[14px] text-white  hover:underline"
            >
              1800-26-ST-FOX
            </a>
          </div>

          <div className="flex flex-col gap-1.5 mt-5 px-2 lg:px-0 md:px-0">
            <p className="text-sm font-semibold ">CAREERS</p>
            <Link href="/careers" className="text-[13px] md:text-[14px]">
              <span>Join the Tribe</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 px-4 lg:px-0 md:px-0">
          <h2 className="text-sm font-semibold ">OFFICES</h2>
          <ul className="space-y-1 text-sm mb-4 ">
            <li>India</li>
            <li>Singapore</li>
            <li>UAE</li>
            <li>USA</li>
          </ul>
        </div>
      </div>

      <div className="mx-4 md:mx-24  mt-4 border-t border-gray-700 pt-4 text-center text-xs text-gray-400 2xl:mx-36">
        <div className="flex flex-col md:hidden gap-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <a
              href="https://www.linkedin.com/company/stfox-com/mycompany/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn page"
            >
              <FaLinkedin className="text-lg cursor-pointer" />
            </a>
            <a
              href="https://x.com/stfox_com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              title="Twitter page"
            >
              <FaXTwitter className="text-lg cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/stfox_com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              title="Instagram page"
            >
              <FaInstagram className="text-lg cursor-pointer" />
            </a>
          </div>
          <p>
            {`Copyright © ${currentYear}`} | Saint Fox Consultancy (P) Ltd. |
            <br /> All rights reserved
          </p>
        </div>

        <div className="hidden md:flex flex-row justify-between items-center gap-4 text-xs">
          <p>
            {`Copyright © ${currentYear}`} | Saint Fox Consultancy (P) Ltd. |
            All rights reserved
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <a
              href="https://www.linkedin.com/company/stfox-com/mycompany/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn page"
            >
              <FaLinkedin className="text-lg cursor-pointer" />
            </a>
            <a
              href="https://x.com/stfox_com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              title="Twitter page"
            >
              <FaXTwitter className="text-lg cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/stfox_com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              title="Instagram page"
            >
              <FaInstagram className="text-lg cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavbarSidebarLayout;
