"use client";

export default function ClutchInfographicsClient() {
  const subHeaders = ["", "Gold", "Platinum", "Gold", "Platinum"];

  const data = [
    {
      title: "Recursive DNS-Layer Security",
      children: [
        "Block access to domains with malware, phishing, botnet, and other high-risk items with low latency",
        "Application discovery, monitoring, blocking, and risk scoring",
        "Filtering by domain or category",
      ],
      values: [
        ["●", "●", "", ""],
        ["●", "●", "", ""],
        ["●", "●", "", ""],
      ],
    },
    {
      title: "Application and Network Access/Monitoring",
      children: [
        "All ports and protocols VPNaaS",
        "All ports and protocols client-based ZTNA, clientless ZTNA (HTTP/HTTPS)",
        "Clientless ZTNA (SSH, RDP)",
        "SD-WAN integration and 3rd party support",
        "Use VPN-ID or ISE SGT for granular security policy (well suited for IOT use case)",
        "Experience Insights (DEM) of endpoint and SaaS performance (ThousandEyes based)",
      ],
      values: [
        ["●", "●", "", ""],
        ["●", "●", "●", "●"],
        ["", "●", "", "●"],
        ["●", "●", "●", "●"],
        ["●", "●", "●", "●"],
        ["●", "●", "●", "●"],
      ],
    },
    {
      title: "Secure Web Gateway (SWG)",
      children: [
        "Custom block/allow lists of domains",
        "Custom block/allow lists of URLs",
        "Proxy and inspect web traffic",
        "Secure Malware Analytics (sandbox suspicious files; block malicious files)",
        "Secure Malware Analytics - manual file submission, full glove box and full SMA console access",
      ],
      values: [
        ["●", "●", "", ""],
        ["●", "●", "", ""],
        ["●", "●", "", ""],
        ["500 samples/ day", "●", "500 samples/ day", "●"],
        ["", "●", "", "●"],
      ],
    },
    {
      title: "Roaming Security and Client Support",
      children: [
        "Roaming user protection for DNS traffic and web traffic (via SWG), with Cisco Secure Client roaming module (* = DNS traffic only)",
        "Roaming user protection of traffic over all ports and protocols (via firewall as a service) over a tunnel, supporting Windows, MacOS, iOS, Android, ChromeOS, Linux",
        "Roaming access to private applications via next generation mobile device support for Apple and Samsung",
      ],
      values: [
        ["●", "●", "", ""],
        ["●", "●", "", ""],
        ["", "", "●", "●"],
      ],
    },
    {
      title: "Cloud Access Security Broker (CASB)",
      children: [
        "Advanced visibility and control of cloud app usage (including gen AI, OAuth-approved apps, tenant controls).",
        "Scan and remove malware from cloud-based file storage apps",
        "SaaS security posture management (SSPM) capabilities + Advanced capability via partnership with AppOmni",
      ],
      values: [
        ["●", "●", "", ""],
        ["●", "●", "", ""],
        ["●", "●+", "", ""],
      ],
    },
    {
      title: "Data Loss Prevention (DLP)",
      children: [
        "Integrated inline/SaaS API (cloud) data inspection and blocking to protect against sensitive data loss",
        "AI Access guardrails provide comprehensive control for using supported third-party gen AI apps",
      ],
      values: [
        ["●", "●", "", "●"],
        ["●", "●", "", "●"],
      ],
    },
    {
      title: "Firewall as a Service (FWaaS)",
      children: [
        "Layer 3 and 4 control of IPs, ports, and protocols",
        "Layer 7 control",
        "Intrusion Prevention System (IPS) with decryption",
      ],
      values: [
        ["●", "●", "", ""],
        ["", "●", "", ""],
        ["", "●", "", ""],
      ],
    },
    {
      title: "Remote Browser Isolation (RBI)",
      children: [
        "Isolated browsing provides a virtual air-gapped solution in those instances where users need to safely go to sites that present a risk",
      ],
      values: [["Risky sites only", "●", "", ""]],
    },
    {
      title: "Enterprise Browser",
      children: [
        "Integration with Enterprise Chrome browser for more secure clientless access to private apps",
      ],
      values: [["Coming soon", "Coming soon", "●", "●"]],
    },
    {
      title: "Threat Intelligence",
      children: [
        "Continuously updated threat intelligence from Cisco Talos",
        "Deep domain, IP, and Autonomous System Number (ASN) data for rapid investigations (via Investigate API)",
      ],
      values: [
        ["●", "●", "●", "●"],
        ["●", "●", "●", "●"],
      ],
    },
    {
      title: "SIEM and XDR Interoperability",
      children: [
        "Integrations with multiple tools, includ. Cisco Splunk and XDR",
      ],
      values: [["●", "●", "●", "●"]],
    },
    {
      title: "Management, Reporting, and Support Management",
      children: [
        "Customize block page and warn page options",
        "Reporting and Logging",
        "Real-time activity search, plus API to extract key events",
      ],
      values: [
        ["●", "●", "●", "●"],
        ["●", "●", "●", "●"],
        ["●", "●", "●", "●"],
      ],
    },
  ];

  return (
    <>
      <div className="w-full px-2 md:px-16 py-20 text-sm bg-[#fff]">
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src="/images/clutch/clutch-infographic.png"
            alt="Clutch Infographic"
            className="h-auto rounded-lg shadow-md "
            style={{ maxHeight: "800px" }}
          />
        </div>
      </div>
    </>
  );
}
