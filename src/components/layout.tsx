import { ReactLenis, useLenis } from "lenis/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ReactLenis root />
      <Header />
      {children}
      <Footer />
    </>
  );
}
