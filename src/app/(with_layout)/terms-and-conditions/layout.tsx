import { Metadata } from "next";
import * as React from "react";
import PageBanner from "@/components/utils/PageBanner";

export const metadata: Metadata = {
  title: "Terms and Conditions - Wishmeluck",
  description:
    "Read the Terms and Conditions of Wishmeluck to understand the rules and guidelines governing your use of our platform.",
  keywords: [
    "Terms and Conditions",
    "Wishmeluck",
    "Platform Guidelines",
    "User Agreement",
    "Legal Terms",
  ],
  openGraph: {
    title: "Terms and Conditions - Wishmeluck",
    description:
      "Understand the legal terms and conditions for using Wishmeluck, including user guidelines and responsibilities.",
    url: "https://www.wishmeluck.com/terms-and-conditions",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Wishmeluck",
    description:
      "Review the rules and terms of service for using Wishmeluck's platform and its features.",
  },
  robots: "index, follow",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:mt-4 ">
      <PageBanner heading="Terms and Conditions" subHeading="" />
      {children}
    </div>
  );
}
