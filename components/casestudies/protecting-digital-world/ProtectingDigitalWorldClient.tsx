"use client";

import Wrapper from "@/components/atoms/Wrapper";

export default function ProtectingDigitalWorldClient() {
  return (
    <Wrapper className="mt-28 flex items-center justify-center md:mt-24">
      <div className="flex w-full max-w-3xl flex-col gap-y-8 px-4 md:px-0">
        {/* Header */}
        <div className="flex flex-col gap-y-2 text-center md:text-left">
          <h1 className="text-xl font-extrabold leading-7 md:text-4xl md:leading-10">
            Protecting Our Digital World
          </h1>
          <p className="text-xs text-[#4169e1] md:text-base">
            By Manoj Nair / November 7, 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-y-6 text-justify text-sm leading-6 md:text-base md:leading-8">
          <img
            className=""
            loading="lazy"
            src="/images/Blog/DigitalWorld.png"
            alt="Protecting Our Digital World"
          />

          <p>
            Today, major Enterprises or Industries (size don&apos;t matter) invest
            tons of $$ in cybersecurity tools, solutions and technologies in
            protecting their own digital assets (known as crown jewels,
            brand…etc.) but unfortunately…. breaches are still happening. To
            prevent breaches and threats there are matured process within
            enterprises especially the enterprises or industries which are
            cybersecurity aware or are mandatorily governed by compliances and
            audits.
          </p>

          <p>
            A recent trend in India shows a rise in cyberattacks on both
            individuals and enterprises, fueled by increasing digitization and
            sophisticated AI-powered scams. While official data does not provide
            a percentage split between attacks on individuals and enterprises,
            available reports suggest a disproportionately high volume of
            attacks targeting individuals, primarily through financial fraud.
          </p>

          <p>
            When it comes to securing our personal Digital World, the question
            is &quot;While navigating our life in this Hyperconnected Digital World&quot;
            - can we adopt few of the matured frameworks like &quot;Zero trust&quot; and
            foundational processes that are already the backbone of any
            cybersecurity aware Enterprises or Industries.
          </p>
        </div>

        {/* Foundational Disciplines */}
        <div className="flex flex-col gap-y-6 text-justify text-sm leading-6 md:text-base md:leading-8">
          <p className="font-black text-[#223780]">
            Foundational discipline or process that individuals can adopt:
          </p>

          <ol className="space-y-6 pl-5">
            <li>
              <strong className="text-[#223780]">
                1. Using Strong Passwords and enabling multi-factor
                authentication (MFA):
              </strong>
              <p className="mt-2">
                Today&apos;s digital world is not just restricted to using personal
                Gmail or Microsoft personal email address. Applications like
                free Google Drive, Microsoft OneDrive, Apple iCloud Drive etc.,
                are all linked to one username which is our email address. If
                our email address is breached, access to all connected
                applications and associated personal data like photos, videos
                etc. stored on such applications, are accessible without any
                restrictions.
              </p>

              <p className="mt-2">
                One example that I can relate to is the risk of not having a
                strong password along with multi-factor authentication is when
                you are installing or upgrading your home PCs or Laptops to
                Windows 11. During the installation process it requires a
                Personal Microsoft Account which in-turn automatically backs-up
                most (unless configured) of the data stored in your local PC or
                Laptops to Microsoft OneDrive associated to your personal email
                account. While this is a good strategy, but it comes with its
                own security risk. If your personal email account is breached,
                your data on OneDrive will also be accessible to Hackers.
              </p>

              <p className="mt-2">
                To increase the security posture, Enabling free multi-factor
                authentication features like Google or Microsoft Authenticator
                along with strong passwords is a best practice. Along with using
                authenticator tools, configuring security features like 2FA
                (phone numbers) within your personal email accounts will help
                further strengthen the security.
              </p>
            </li>

            <li>
              <strong className="text-[#223780]">
                2. Applying Updates to Operating Systems and Applications:
              </strong>
              <p className="mt-2">
                Using current supported Operating systems and applications
                irrespective of the device that we are using (Mobile, PCs,
                Laptops) is one of the foundational processes that Enterprises
                always follow. Taking this strong process into our
                hyperconnected Digital Life is the easiest way we can secure
                ourselves against many latest threats.
              </p>

              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  Microsoft Windows 10 support recently ended on{" "}
                  <strong>October 14th, 2025</strong>. Running your home PCs and
                  Laptops on Windows 10 will put Digital Life on risk.{" "}
                  <a
                    href="https://support.microsoft.com/en-us/windows/windows-10-support-has-ended-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Learn more here
                  </a>
                  .
                </li>
                <li>
                  Every 2nd Tuesday of every month, Microsoft releases security
                  updates across all Windows OS. There should be no reason to
                  delay these updates. Doing so ensures your system remains
                  secure and not vulnerable to known exploits.
                </li>
                <li>
                  As with Operating Systems, when it comes to applications, make
                  sure they are updated and verified. Installing a reliable
                  antivirus/antimalware with features like online protection
                  helps secure our hyperconnected digital life.
                </li>
              </ul>
            </li>

            <li>
              <strong className="text-[#223780]">
                3. Secure home Wi-Fi network:
              </strong>
              <p className="mt-2">
                Ensure visibility, compliance, and encryption across all cloud
                assets.
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  During installation, engineers often use default router
                  credentials printed on the device. Changing the SSID,
                  username, and password should be your first step in securing
                  your home Wi-Fi.
                </li>
                <li>
                  Reconfiguring the Wi-Fi router can be tricky for non-technical
                  users, but there are many online guides and videos that make
                  the process simple.
                </li>
              </ul>
              <p className="mt-2">
                Asking a technically skilled friend or family member for help is
                also a good approach to keep your home network secure.
              </p>
            </li>
          </ol>
        </div>

        {/* Zero Trust Section */}
        <div className="flex flex-col gap-y-6 text-justify text-sm leading-6 md:text-base md:leading-8">
          <p className="font-black text-[#223780]">
            Zero Trust Security Framework:
          </p>

          <p>
            The Zero Trust security methodology applies to the personal digital
            world by reinforcing the principle of &quot;never trust, always verify&quot;
            for all online activities, even for devices and users already on a
            home network.
          </p>

          <ol className=" space-y-2 pl-5">
            <li>
              <strong className="text-[#223780]">
                1. Using non-relatable SSIDs, strong and unique passwords:
              </strong>{" "}
              Configure non-relatable SSIDs (no names, flat numbers, etc.) and
              use strong, unique passwords.
            </li>
            <li>
              <strong className="text-[#223780]">
                2. Securing your home Wi-Fi router:
              </strong>{" "}
              with a strong password, keeping firmware updated, and using WPA3
              or at least WPA2/WPA3 transitional mode.
            </li>
            <li>
              <strong className="text-[#223780]">
                3. Being mindful of app permissions:
              </strong>{" "}
              Grant only the minimum required access to apps across all devices.
            </li>
          </ol>
        </div>

        {/* Conclusion */}
        <div className="flex flex-col gap-y-6 text-justify text-sm leading-6 md:text-base md:leading-8">
          <p>
            In summary, the various security awareness trainings which include
            strong cybersecurity hygiene standards and processes conducted by
            enterprises can be easily adopted in our personal life to keep our
            digital world secure.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
