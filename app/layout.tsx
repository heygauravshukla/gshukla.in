import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";

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
  metadataBase: new URL("https://www.gshukla.in"),
  title: {
    default: "Gaurav Shukla - Software engineer, creator, and tech enthusiast",
    template: "%s - Gaurav Shukla",
  },
  description:
    "I’m Gaurav, a software engineer and creator based in India. I do front-end development, build awesome projects and share knowledge through articles.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-white text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
