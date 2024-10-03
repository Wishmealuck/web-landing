import { Metadata } from "next";
import * as React from "react";
import PageBanner from "@/components/utils/PageBanner";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions of Wishmealuck",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner heading="Terms and Conditions" subHeading="" />
      {children}
    </>
  );
}
