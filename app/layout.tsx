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

export const metadata: Metadata = {
  title: "Sarthak Sarangi - Software Engineer",
  description:
    "Portfolio of Sarthak Sarangi, a Software Engineer specializing in React, Next.js, TypeScript, and modern frontend development.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Full Stack Developer",
    "Web Developer India",
    "Responsive Design",
    "UI/UX",
    "Web Accessibility",
    "Performance Optimization",
    "Modern Web Development",
    "Sarthak Sarangi",
  ],
  authors: [{ name: "Sarthak Sarangi" }],
  creator: "Sarthak Sarangi",
  openGraph: {
    title: "Sarthak Sarangi - Software Engineer Portfolio",
    description:
      "Explore the work of Software Engineer Sarthak Sarangi — building modern, fast, and user-focused web experiences.",
    url: "https://sarthaksarangi.com",
    siteName: "Sarthak Sarangi - Portfolio",
    images: [
      {
        url: "https://sarthaksarangi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarthak Sarangi - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Sarangi - Software Engineer",
    description:
      "Explore my projects and expertise in modern frontend and web engineering.",
    creator: "@Ysarthaksatangi_",
    images: ["https://sarthaksarangi.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        {children}
      </body>
    </html>
  );
}
