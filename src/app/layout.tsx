import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "速艺伎 - 让创作更简单",
  description: "速艺伎 - 让创作更简单",
  metadataBase: new URL("https://www.speed-kit.com"),
  openGraph: {
    title: "速艺伎 - 让创作更简单",
    description: "速艺伎 - 让创作更简单",
    url: "https://www.speed-kit.com",
    siteName: "速艺伎 - 让创作更简单",
    images: [
      {
        url: "https://www.speed-kit.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "速艺伎 - 让创作更简单",
    description: "速艺伎 - 让创作更简单",
    creator: "@speed_kit",
    images: [
      {
        url: "https://www.speed-kit.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [
    {
      name: "speed-kit",
      url: "https://github.com/speed-kit",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    other: {
      yandex: "yandex",
    },
    yahoo: "yahoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
