"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { PROMPT_SECURITY } from "@/constants/BlogConstant";

export default function PromptInjectionClient() {
  return (
    <Wrapper className="flex justify-center items-center md:mt-24 mt-28">
      <div>
        <div className="flex flex-col gap-y-2 ">
          <h1 className="md:text-4xl text-lg font-extrabold leading-6 md:leading-8">
            Prompt Injection – Practical Mitigations
          </h1>
          <p className="md:text-base text-xs text-[#4169e1]">
            By Rajiv Bahl / November 6, 2024
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

        <div className="mt-5 flex flex-col gap-y-2 space-y-4 md:leading-8 leading-6 md:text-base text-sm">
          <p className="md:text-xl text-base font-bold">Prompt Injection </p>

          <img
            loading="lazy"
            src="/images/Blog/Mitigations.png"
            alt="Mitigations"
          />

          <p className="md:leading-8 leading-6">
            Prompt Injection occurs when an attacker manipulates a large
            language model (LLM) through crafted inputs, causing the LLM to
            unknowingly execute the attacker&apos;s intentions. This can be done
            directly by &quot;jailbreaking&quot; the system prompt or indirectly through
            manipulated external inputs, potentially leading to data
            exfiltration, social engineering, and other issues. (Ref: OWASP Top
            10 for LLM Applications) Prompt injection consistently has been at
            the top of the vulnerability listed in{" "}
            <span className="font-extrabold"> OWASP Top 10 for LLM </span>
            applications. It finds its mention in MITRE ATLAS under technique
            (AML.T0051). Instead of focusing on the specifics of the attack, we
            focus on practical implementable mitigation steps leading to
            security by design, this keeping defender&apos;s in viewpoint.{" "}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-y-2 space-y-4 md:leading-8 leading-6 md:text-base text-sm">
          <p className="text-[#223780] font-black">
            Prompt Injection Mitigations
          </p>

          <p className="md:leading-8 leading-6">
            GenAI attacks is a relatively new and evolving area, the challenges
            are compounded by the natural language nature of the prompts. Secure
            by design principles can help mitigate the risks associated with
            prompt injection. Some of the mitigations which can be looked at are
            as follows:
          </p>

          <div className="md:leading-8 leading-6 flex flex-col space-y-4">
            {PROMPT_SECURITY.map((tip, index) => (
              <div key={index}>
                <span className="text-[#223780] font-black">{tip.title}</span>
                <span className="pl-1">{tip.description}</span>
              </div>
            ))}

            <p>
              As AI continues to evolve and LLMs are rapidly adopted, the attack
              surface for the Organizations increases. Prompt injection
              represent a key risk introduced by this technological advancement.
              However, these risks can be mitigated to an extend by following
              secure-by-design principles as mentioned.{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
