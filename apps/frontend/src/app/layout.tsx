import type { Metadata } from "next";
import { Merriweather, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gshukla.in"),
  title: {
    default: "Gaurav Shukla | Frontend Developer & Technical Writer",
    template: "%s | Gaurav Shukla",
  },
  description:
    "Gaurav Shukla is a frontend developer based in India, building for the web and writing about CSS, JavaScript, and frontend tooling.",
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
      className={`${merriweather.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
