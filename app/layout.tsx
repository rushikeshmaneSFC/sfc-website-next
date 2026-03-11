import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import ConsentProvider from "@/components/consent/ConsentProvider";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const GTM_INIT_CODE = GTM_ID
  ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});if(w.__gtmInitialized)return;w.__gtmInitialized=true;var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID.replace(/'/g, "\\'")}');`
  : "";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stfox.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "St. Fox - Innovate Fearlessly, Protect Relentlessly",
    template: "%s | St. Fox",
  },
  description:
    "Cybersecurity services by Saint Fox Consultancy Pvt Ltd. Comprehensive managed security, cloud, data, and AI protection.",
  openGraph: {
    siteName: "St. Fox",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "St. Fox - Innovate Fearlessly, Protect Relentlessly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Fox - Innovate Fearlessly, Protect Relentlessly",
    description:
      "Cybersecurity services by Saint Fox Consultancy Pvt Ltd. Comprehensive managed security, cloud, data, and AI protection.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/stfox-favicon.png",
    apple: "/images/stfox-favicon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#1A3F7E",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "St. Fox",
  alternateName: "Saint Fox Consultancy",
  url: BASE_URL,
  logo: `${BASE_URL}/og-default.png`,
  description:
    "Cybersecurity services by Saint Fox Consultancy Pvt Ltd. Comprehensive managed security, cloud, data, and AI protection.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "St. Fox",
  url: BASE_URL,
  description:
    "Cybersecurity services by Saint Fox Consultancy Pvt Ltd. Innovate fearlessly, protect relentlessly.",
  publisher: {
    "@type": "Organization",
    name: "St. Fox",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: GTM_INIT_CODE }}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.colorScheme='light'`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${montserrat.className} font-sans bg-gray-50 antialiased`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height={0}
              width={0}
              style={{ display: "none", visibility: "hidden" }}
              title="GTM noscript"
            />
          </noscript>
        )}
        <AppShell>{children}</AppShell>
        <ConsentProvider />
      </body>
    </html>
  );
}
