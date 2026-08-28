import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://michadasis.com";
const siteTitle = "Portfolio | Ioannis Michadasis";
const siteDescription =
  "Portfolio of Ioannis Michadasis, a Computer Science student and full stack developer building web, mobile and desktop projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Ioannis Michadasis", url: siteUrl }],
  creator: "Ioannis Michadasis",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ioannis Michadasis",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ioannis Michadasis, Computer Science student and full stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ioannis Michadasis",
  alternateName: "John Michadasis",
  url: siteUrl,
  image: `${siteUrl}/mich.png`,
  jobTitle: "Computer Science Student",
  description: siteDescription,
  email: "mailto:johnmichadasis@gmail.com",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Western Macedonia",
    url: "https://cs.uowm.gr/",
  },
  knowsAbout: [
    "Full Stack Development",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "C++",
    "Linux",
  ],
  sameAs: [
    "https://github.com/michadasis",
    "https://linkedin.com/in/johnmichadasis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
