"use client";

import Wrapper from "@/components/atoms/Wrapper";

export default function EraOfAIClient() {
  return (
    <Wrapper className="flex justify-center items-center md:mt-24 mt-28">
      <div>
        <div className="flex flex-col gap-y-2">
          <h1 className="md:text-4xl text-xl font-extrabold">
            Being Human in era of AI
          </h1>
          <p className="md:text-base text-xs text-[#4169e1]">
            By Rajiv Bahl / November 29, 2024
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-y-2">
          <img loading="lazy" src="/images/Blog/eraofAI.png" alt="eraofAI" />

          <p className="pt-4 md:text-base text-sm md:leading-8 leading-6">
            &quot;Homo sapiens&quot; means &apos;wise man&apos; or &apos;knowledgeable man&apos; (man being
            gender neutral). With the advent of AI and the mushrooming of
            various models, especially after the democratisation of AI with the
            release of ChatGPT in 2022, multiple attempts are being made to
            define &quot;what is acceptable behaviour?&quot;. In this context, the work of
            <a
              href="https://oecd.ai/en/catalogue/tools/aletheia-frameworktm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-2 text-[#4169e1] underline">
                Aletheia Framework™
              </span>
            </a>
            is very relevant. Attacks like Prompt Injection, which consistently
            keep appearing on the top of the charts once again in the recently
            released OWASP&apos;s 2025 Top 10{" "}
            <a
              href="https://genai.owasp.org/llm-top-10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-2 text-[#4169e1] underline">
                {" "}
                Risk & Mitigations for LLMs and Gen AI
              </span>
            </a>{" "}
            Apps makes us think that something more fundamental is required
            which runs across the models even beneath the foundation models as a
            common thread.
          </p>

          <p className="pt-4 md:text-base text-sm  md:leading-8 leading-6">
            Keeping the above context (no pun intended), three ideas are worth
            exploring.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-y-2 space-y-4 md:leading-8 leading-6 md:text-base text-sm">
          <p className="text-[#223780] font-black">
            Concept 1: Establishing a Trusted Computing Base for AI – Reference
            Monitors and Kernels in AI
          </p>

          <p>
            Reference Monitor is that part of the TCB that validates access to
            every resource before granting access requests. A reference monitor
            stands between every subject and object verifying that a request is
            valid and meets the &quot;defined criteria&quot; before being enabled. In this
            case that fundamental criterion would be &quot;Being human&quot;. This would
            ensure that every prompt goes through a set of validations to check
            that it does not violate the &quot;Being human&quot; principles. This would
            mitigate Bias, Discrimination, Stereotyping, hatred, abuse, and
            profanity to a good extent. Instead of struggling to find ways and
            means to mitigate prompt injection in the user space if we are to
            address it in the system space or kernel then it will be much more
            effective.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-y-2 md:leading-8 leading-6 space-y-4 md:text-base text-sm">
          <p className="text-[#223780] font-black">
            Concept 2: Establishing the root of trust in AI
          </p>

          <p>
            Hardware is done by Trusted Platform Module (TPM). Instead of trying
            to attempt to solve the problem in software space if we were to seek
            the same solution in hardware, it would be more fundamental and
            therefore more effective. It will make breaking &quot;trustworthiness in
            AI&quot; more difficult.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-y-2 md:leading-8 leading-6 space-y-4 md:text-base text-sm">
          <p className="text-[#223780] font-black">Concept 3: What is Trust?</p>

          <p>
            Expanding the definition of &quot;Trust&quot; in Trusted Platform Module (TPM)
            to adopt the OECD principle of &quot;trustworthy&quot; by defining what it is
            to be a human in a Human Platform Module (HPM). Going beyond
            classical definition of Trust as access control alone there is a
            need for embedding (no pun intended) principles of trustworthy AI as
            defined by{" "}
            <a
              href="https://oecd.ai/en/ai-principles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#4169e1] underline">
                {" "}
                OECD AI Principles
              </span>
            </a>{" "}
            considering inclusiveness, sustainability, democratic values,
            fairness, accountability, responsibility, privacy, transparency,
            explainability, robustness, security and safety. Embedding these in
            hardware will go a long way in getting the desired behaviour which
            is difficult to compromise in the user space. I am hopeful that some
            of the above ideas will be adopted by innovative and pioneering chip
            makers to make it happen for a better, secure and safe society
            making us truly what we are &quot;wise-man&quot; (gender neutral).
          </p>

          <p>
            I am hopeful that some of the above ideas will be adopted by
            innovative and pioneering chip makers to make it happen for a
            better, secure and safe society making us truly what we are
            &quot;wise-man&quot; (gender neutral).
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
