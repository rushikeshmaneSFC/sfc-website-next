"use client";

export default function ClutchDatasheetClient() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-28">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/clutch/b_clutch.svg"
              alt="Clutch Logo"
              className="w-32 md:w-60 h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            CLUTCH Powered by St. Fox
          </h1>
          <p className="text-lg mb-4">
            Tailored, cloud-first security & engineering solutions for the
            modern digital enterprise. From securing infrastructure to enabling
            AI-safe environments.
          </p>
          <p className="text-lg">
            Empowering organizations of all sizes to scale confidently in a
            digital-first world.
          </p>
        </div>
      </section>

      {/* Industry Challenge */}
      <section className="py-20 px-6 md:px-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#1A3F7E]">
            Industry Challenge
          </h2>
          <p className="text-center text-sm text-gray-700 max-w-2xl mx-auto mb-12">
            Project timelines for deploying security solutions are often
            extended due to manual processes, fragmented toolchains, and
            inconsistent end-user experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                Primary Challenges
              </h3>
              <ul className="space-y-3 text-sm">
                <li>• Multiple tools & complex endpoints</li>
                <li>• Inconsistent access methods</li>
                <li>• Policy sprawl & reduced productivity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                Ideal Solution
              </h3>
              <ul className="space-y-3 text-sm">
                <li>• Leverage automation in deployment & configuration</li>
                <li>• Minimize human effort with scripting</li>
                <li>• Standardize tools across environments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                Desired Outcomes
              </h3>
              <ul className="space-y-3 text-sm">
                <li>• Lower TCO and increase ROI</li>
                <li>• Reduce deployment timelines</li>
                <li>• Increase end-user productivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 md:px-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-[#1A3F7E]">
            Modern Solution Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border p-6 rounded-xl bg-white">
              <h3 className="text-xl font-semibold mb-4 text-[#1A3F7E]">
                Cross-Platform Automation
              </h3>
              <p className="text-sm mb-4">
                Using the proprietary VIGILE framework, St. Fox engineered an
                automation solution to streamline Cisco Secure Access deployment
                across Windows, macOS, and Ubuntu.
              </p>
              <ul className="text-sm space-y-2">
                <li>
                  • ARM based custom template deployment for Cisco Resource
                  Connector in Azure
                </li>
                <li>
                  • Uninstalling old clients and installing updated Cisco SSE
                  modules
                </li>
                <li>• Bypass manual intervention for enabling SSE modules</li>
                <li>
                  • VPN detection logic with fallback to Umbrella protection
                </li>
                <li>
                  • Secure deployment of certificate files using TND on Ubuntu
                </li>
              </ul>
            </div>
            <div className="border p-6 rounded-xl bg-white">
              <h3 className="text-xl font-semibold mb-6 text-[#1A3F7E]">
                Automation Deliverables
              </h3>
              <div className="space-y-6 relative">
                {[
                  "Windows/Mac executable & PS Script",
                  "Custom solution to detect network location and automate services",
                  "Custom build packages for open source environments",
                  "Automated Cisco SA agent deployment scripts",
                  "Azure-ready templates with minimal manual steps",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#1A3F7E] text-[#fff] flex items-center justify-center font-semibold">
                        {idx + 1}
                      </div>
                      {idx < 4 && (
                        <div className="w-px h-10 bg-[#1A3F7E]/30"></div>
                      )}
                    </div>
                    <p className="text-sm pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LTIMindtree Case Study */}
      <section className="py-20 px-6 md:px-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-[#1A3F7E]">
            Customer Case Study
          </h2>
          <p className="text-sm text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Customer streamlined their secure access experience by migrating
            over 80,000 users to Cisco Secure Access using St. Fox automation
            and cloud-native deployment expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-lg font-semibold text-[#1A3F7E] mb-4">
                Challenges
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Multiple endpoints and agents to manage</li>
                <li>• Varying access methods reduced productivity</li>
                <li>• Longer deployment timelines and configuration delays</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-lg font-semibold text-[#1A3F7E] mb-4">
                St. Fox Solution
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Seamless migration from legacy SSE</li>
                <li>• Automated client rollout and certificate scripts</li>
                <li>• Native Azure deployment through scripting</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border  bg-white">
              <h3 className="text-lg font-semibold text-[#1A3F7E] mb-4">
                Impact
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• 80K users onboarded in {">"} 90 days</li>
                <li>• Reduced IT overhead and manual effort</li>
                <li>• Unified user access experience at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
