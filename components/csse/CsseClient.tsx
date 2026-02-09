"use client";

export default function CsseClient() {
  return (
    <div className="bg-[#07111A] min-h-screen">
      <section className="text-center px-4 py-32 flex flex-col justify-center items-center min-h-[50vh]">
        <h4 className="text-lg font-bold tracking-widest text-[#fff] mb-2">
          St. Fox Cisco Secure Access
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#fff]">
          Cloud-first. Cross-platform. Automated.
        </h1>
        <p className="max-w-xl mx-auto text-gray-300 text-[#fff]">
          Secure your enterprise infrastructure with St. Fox&apos;s streamlined Cisco Secure Access deployment — built for today&apos;s hybrid environments.
        </p>
      </section>

      <section className="bg-white text-[#000] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">What We Do</h1>
            <p>
              We simplify Cisco Secure Access deployments across macOS, Windows, and Ubuntu using our proprietary VIGILE framework
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#1A3F7E]">Our automation handles:</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>Seamless uninstall & install of SSE modules</li>
              <li>Auto-selection & activation of modules</li>
              <li>Smart VPN detection & reactivation of Cisco Umbrella</li>
              <li>Secure Ubuntu setup with certificate pull from blob storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB]  py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10">Why Choose St. Fox?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Zero Manual Effort</h3>
              <p className="text-black">No user-side interaction needed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Smarter Performance</h3>
              <p className="text-black">Only needed protections stay active</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Faster Rollouts</h3>
              <p className="text-black">Batch scripts reduce deployment time</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Better User Experience</h3>
              <p className="text-black">No confusion, just seamless security</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Adaptive Security</h3>
              <p className="text-black">Dynamically responds to VPN changes</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-[#1A3F7E]">Reduced Support Load</h3>
              <p className="text-black">Automated workflows minimize helpdesk tickets and IT overhead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Trusted by Industry Leaders</h2>
          <h3 className="text-lg font-semibold text-[#1A3F7E] mb-4">
            With expertise in BFSI, Healthcare, Telecom, and Enterprise IT, we deliver:
          </h3>
          <p className="text-black">
            With deep expertise across BFSI, Healthcare, Telecom, and Enterprise IT, St. Fox delivers end-to-end cybersecurity solutions that drive real impact. Our AI-driven security enables real-time threat detection and proactive risk mitigation, supported by a proven 98% client retention rate and 100% compliance success. From compliance audits to advanced red teaming, we offer a full spectrum of services designed to secure and scale modern businesses.
          </p>
        </div>
      </section>

      <section className="bg-[#07111A] text-[#fff] py-12 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-2">Available on</h2>
        <a
          href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/saintfoxconsultancyprivatelimited1749657078750.sfc-saas-offer_01?tab=Overview"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-base hover:text-gray-300 cursor-pointer"
        >
          Microsoft Commercial Marketplace
        </a>
      </section>

    </div>
  );
}
