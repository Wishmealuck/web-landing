import { Metadata } from "next";
import * as React from "react";
import SectionBlock from "@/components/utils/SectionBlock";
import PageBanner from "@/components/utils/PageBanner";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Condition Page",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <PageBanner heading="Terms and Conditions" subHeading=""  />
        {children}
      </SectionBlock>
    </>
  );
}
