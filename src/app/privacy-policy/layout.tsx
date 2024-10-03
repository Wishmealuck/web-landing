import { Metadata } from "next";
import * as React from "react";
import PageBanner from "@/components/utils/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Wishmealuck",
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner heading="Privacy Policy" subHeading="" />
      {children}
    </>
  );
}
