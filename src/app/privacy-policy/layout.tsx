import { Metadata } from "next";
import * as React from "react";
import PageBanner from "@/components/utils/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - Wishmeluck",
  description:
    "Read our Privacy Policy to understand how we handle your personal information and data at Wishmeluck.",
  keywords: ["Privacy Policy", "Wishmeluck", "Data Protection", "User Privacy"],
  robots: "index, follow",
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:mt-4">
      <PageBanner heading="Privacy Policy" subHeading="" />
      {children}
    </div>
  );
}
