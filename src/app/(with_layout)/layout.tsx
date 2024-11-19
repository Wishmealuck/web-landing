import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SectionBlock from "@/components/utils/SectionBlock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <SectionBlock>{children}</SectionBlock>
      <Footer />
    </>
  );
}
