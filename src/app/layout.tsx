import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/constants/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SectionBlock from "@/components/utils/SectionBlock";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
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
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="public/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="public/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="public/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="public/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="public/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="public/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="public/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="public/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="public/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="public/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png"
        ></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className="h-full min-h-max bg-white  antialiased flex flex-col justify-between">
        <Header />
        <SectionBlock>{children}</SectionBlock>
        <Footer />
      </body>
    </html>
  );
}
