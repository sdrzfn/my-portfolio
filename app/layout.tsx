import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const siteUrl = "https://sadrakhzp.vercel.app";
const fullName = "Sadrakh Zefanya Putra";

const title = "Sadrakh Zefanya Putra - Programmer, Creative Developer & More";
const description = "Portfolio Sadrakh Zefanya Putra — Developer lulusan Sistem Informasi UPNVJT. Berpengalaman di Next.js, Laravel, IoT, WebGIS & Business Intelligence";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    default: title,
    template: `%s | ${fullName}`,
  },
  description,

  keywords: [
    "Sadrakh Zefanya Putra",
    "Sadrakh",
    "Sadrakh Z.P.",
    "Sistem Informasi",
    "Information System",
    "UPN Veteran Jawa Timur",
    "UPNVJT",
    "upnjatim",
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Machine Learning Engineer",
    "Surabaya Developer",
    "Portfolio",
  ],
  authors: [{ name: fullName, url: siteUrl}],
  creator: fullName,
  publisher: fullName,
  applicationName: "Sadrakh Z.P Portfolio",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    }
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sadrakh Z.P. Portfolio",
    title,
    description,
    firstName: "Sadrakh",
    lastName: "Zefanya Putra",
    username: "sadrakhzp",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${fullName} — Web Developer & Sistem Informasi UPNVJT`,
      },
    ],
  }
};

export const viewport = {
  themeColor: "#f5ead0",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: fullName,
  alternateName: ["Sadrakh", "Sadrakh Z.P.", "sdrzfn"],
  url: siteUrl,
  image: `${siteUrl}/images/Sadrakh.JPG`,
  jobTitle: "Web Developer",
  description:
    "Web Developer & lulusan Sistem Informasi UPN Veteran Jawa Timur (UPNVJT), berfokus pada web development, IoT, WebGIS, dan Business Intelligence.",
  email: "mailto:sadrakhxvid777@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UPN Veteran Jawa Timur",
    alternateName: ["UPNVJT", "UPN 'Veteran' Jawa Timur"],
    sameAs: "https://www.upnjatim.ac.id/",
  },
  knowsLanguage: ["id", "en"],
  knowsAbout: [
    "Web Development",
    "Sistem Informasi",
    "Information Systems",
    "Next.js",
    "Laravel",
    "Internet of Things",
    "WebGIS",
    "Business Intelligence",
    "Machine Learning",
  ],
  sameAs: [
    "https://linkedin.com/in/sadrakh-zefanya-putra",
    "https://github.com/sdrzfn",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Sadrakh Z.P. Portfolio",
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
  author: { "@id": `${siteUrl}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
