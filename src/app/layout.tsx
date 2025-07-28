import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gshukla.vercel.app"),
  title: {
    default: "Gaurav Shukla - Software engineer, creator, and tech enthusiast",
    template: "%s - Gaurav Shukla",
  },
  description:
    "I’m Gaurav, a software engineer and creator based in India. I do front-end development, build awesome projects and share knowledge through articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} antialiased scheme-dark`}
    >
      <body className="bg-gray-950 text-gray-100">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
