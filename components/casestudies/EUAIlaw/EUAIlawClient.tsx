"use client";

import Wrapper from "@/components/atoms/Wrapper";

export default function EUAIlawClient() {
  return (
    <Wrapper className="flex justify-center items-center md:mt-24 mt-28">
      <div className="flex flex-col gap-y-2">
        <h1 className="md:text-4xl text-lg font-extrabold leading-6 md:leading-10">
          EU adopts a new AI law
        </h1>
        <p className="md:text-base text-xs text-[#4169e1]">
          By St Fox / March 22, 2024
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-y-2">
        <div className="text-center flex flex-col space-y-2 bg-black bg-opacity-100 bg-[url('https://i0.wp.com/stfox.com/wp-content/uploads/2024/01/MAIN-LOGO-ONLY-W-1.png?fit=1353%2C1009&ssl=1')] bg-center bg-no-repeat bg-cover py-5">
          <p className="text-[#fff] md:text-2xl text-base font-bold">
            Unveiling the future
          </p>
          <p className="text-[#fff] md:text-lg text-xs font-medium">
            Our experts analyze the latest tech trends and industry
            breakthroughs.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-y-2 space-y-4 md:leading-8 leading-6 md:text-base text-sm">
        <p className="font-extrabold md:text-2xl text-lg pb-4">
          EU adopts a new AI law
        </p>
        <p>
          Highlights of the new law adopted by the European parliament around AI{" "}
        </p>
        <img className="" loading="lazy" src="/images/Blog/EUadopts.png" alt="EU adopts a new AI law" />

        <p>
          The Artificial Intelligence Act, championed by Members of the European
          Parliament (MEPs), establishes comprehensive rules aiming to ensure AI
          technologies are developed and used in safe ways, respect fundamental
          rights, democracy, the rule of law, and environmental sustainability,
          while also fostering innovation and positioning Europe as a leader in
          this domain. Here are some of the highlights of the Act based on the
          provisional agreement reached between Parliament and Council
          negotiators:
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-y-2 space-y-4 md:leading-8 leading-6 md:text-base text-sm">
        <div className="flex flex-col space-y-4">
          <p className="text-[#223780] font-black">
            1. Safeguards for General Purpose AI:
          </p>
          <p>
            The Act mandates that general-purpose AI (GPAI) systems, and the
            models they are based on, adhere to transparency requirements
            including technical documentation, compliance with EU copyright law,
            and the dissemination of detailed summaries about the content used
            for training. High-impact GPAI models with systemic risk are subject
            to stricter obligations, such as model evaluations, systemic risk
            assessments, adversarial testing, serious incident reporting,
            cybersecurity assurance, and energy efficiency reporting.
          </p>
          <p className="text-[#223780] font-black">2. Limitations and Bans:</p>

          <p>
            There are significant restrictions on certain uses of AI, including
            the limitation of biometric identification systems by law
            enforcement, and outright bans on social scoring, AI that
            manipulates or exploits vulnerabilities, emotion recognition in
            workplaces and educational settings, and the untargeted scraping of
            facial images to create recognition databases.
          </p>
          <p className="text-[#223780] font-black">
            3. Law Enforcement Exemptions:
          </p>

          <p>
            While establishing stringent safeguards, the Act allows for narrow
            exceptions for law enforcement uses of biometric identification in
            publicly accessible spaces, subject to prior judicial authorization
            and strictly defined criteria related to serious crimes.
          </p>
          <p className="text-[#223780] font-black">
            4. Obligations for High-Risk Systems:
          </p>

          <p>
            AI systems classified as high-risk must fulfill clear obligations,
            including mandatory fundamental rights impact assessments. These
            systems include those used in influencing elections, voter behavior,
            and those with significant potential harm to health, safety,
            fundamental rights, and the environment.
          </p>
          <p className="text-[#223780] font-black">
            5. Support for Innovation and SMEs:
          </p>

          <p>
            The Act encourages the development of AI through regulatory
            sandboxes and real-world testing, particularly benefiting SMEs by
            promoting innovation without undue pressure from industry giants.
          </p>
          <p className="text-[#223780] font-black">
            6. Sanctions for Non-Compliance:
          </p>

          <p>
            Companies not adhering to the Act&apos;s stipulations face fines ranging
            from 35 million euros or 7% of global turnover to 7.5 million euros
            or 1.5% of turnover, based on the infringement&apos;s nature and the
            company&apos;s size.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
