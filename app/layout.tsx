import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
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
      <body className="font-sans bg-gray-50 dark:bg-gray-900 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
