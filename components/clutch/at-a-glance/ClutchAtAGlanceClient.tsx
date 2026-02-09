"use client";

export default function ClutchAtAGlanceClient() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 pt-16 md:pt-20">
        {/* Left - Logos and Header */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-2 flex flex-row md:flex-row items-center gap-4 md:items-start">
            <img
              src="/images/clutch/b_clutch.svg"
              alt="Clutch Logo"
              className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg"
            />
            <img
              src="/images/clutch/Picture121.svg"
              alt="Cisco Secure Access Hero"
              className="w-32 h-32 md:w-48 md:h-48 object-contain mb-2 rounded-lg"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            CLUTCH by St. Fox
          </h1>
        </div>

        {/* Right - Image Placeholder */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/images/clutch/clutch-hero-section.png"
            alt="Cisco Secure Access Hero"
            className="w-full md:w-96 object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-xl font-semibold mb-4">
          About St. Fox Cisco Secure Access - Cross-platform automation solution
        </h2>
        <p className="text-gray-700">
          St. Fox delivers comprehensive, cloud-first security and engineering
          solutions tailored to meet the evolving needs of modern businesses.
          From securing Enterprise customers cloud infrastructure to enabling
          AI-safe environments, our end-to-end custom-built solution and
          services are built for tomorrow&apos;s challenges.
        </p>
        <p className="mt-4 text-gray-700">
          Designed to empower organizations of all sizes and across industries,
          we help customers build, scale, and thrive in a digital-first world
          with confidence and resilience.
        </p>
      </section>

      {/* What we offer Section */}
      <section className="px-6 md:px-16 py-10 bg-[#F8FAFC]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-8 text-[#1A3F7E] text-center w-full max-w-3xl">
            What we offer
          </h2>
          <div className="space-y-4 max-w-8xl w-full text-center">
            <p className="text-gray-700">
              Using St. Fox proprietary{" "}
              <span className="font-bold"> VIGILE </span> IT framework we
              engineered a cross-platform automation solution to streamline the
              deployment of Cisco Secure Access modules across macOS, Windows,
              and Ubuntu systems.
            </p>
            <img
              src="/images/clutch/clutch-vigile.png"
              alt="VIGILE Framework"
              className="w-full h-48 object-contain rounded-lg mx-auto"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2 text-left inline-block">
              <li>
                <strong>
                  Uninstalling old clients and installing updated Cisco SSE
                  modules
                </strong>{" "}
                seamlessly.
              </li>
              <li>
                <strong>Bypassing manual intervention</strong> required for
                selecting and enabling SSE modules on end-user machines.
              </li>
              <li>
                <strong>Custom VPN detection logic</strong> to identify full
                tunnel VPNs, dynamically reactivate Umbrella, and ensure
                continuous protection without overlap.
              </li>
              <li>
                <strong>Deployment on Ubuntu</strong> via a custom solution to
                pull certificates and configure Trusted Network Detection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why St. Fox Section */}
      <section className="px-6 md:px-16 py-16 bg-white grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6 text-[#1A3F7E]">
            Why St. Fox Solutions and Services?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold">Automation</h4>
              <p>
                St. Fox automation solutions ensure consistent policy
                enforcement, secure network transitions, and simplified Cisco
                Secure Access solution deployments at scale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Reduced Manual Effort & Human Error
              </h4>
              <p>
                Our automation eliminates the need for end-users to manually
                select modules, while automating VPN detection and reducing Help
                Desk load.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Faster Deployment Time</h4>
              <p>
                Tools and scripts allow batch deployment across machines,
                drastically cutting setup time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Improved Performance</h4>
              <p>
                Only necessary components are activated, avoiding unnecessary
                performance hits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Hassle-Free User Experience</h4>
              <p>
                End users enjoy seamless protection without needing to
                understand the tools improving satisfaction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Dynamic Security Posture</h4>
              <p>
                Solution adapts to changing network states like VPN
                connect/disconnect, ensuring protection.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image and Highlights */}
        <div className="space-y-6">
          <img
            src="/images/clutch/why-stfox.png"
            alt="Why St. Fox Solutions and Services"
            className="w-full object-contain rounded-lg"
          />

          <div className="bg-[#F8FAFC] p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4  text-[#1A3F7E]">
              St. Fox Solutions and Services
            </h3>
            <ul className="list-decimal ml-5 space-y-2 text-sm">
              <li>
                Expertise across BFSI, Healthcare, Telecom, and Enterprise IT,
                delivering tailored cybersecurity solutions
              </li>
              <li>
                AI-driven security with autonomous SOCs, real-time threat
                detection, and proactive risk mitigation
              </li>
              <li>
                Proven success with a 98% client retention rate and 100%
                compliance achievement
              </li>
              <li>
                Comprehensive services, including Red Teaming, compliance
                audits, and end-to-end cybersecurity solutions
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
