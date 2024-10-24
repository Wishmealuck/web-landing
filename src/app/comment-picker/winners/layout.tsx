import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winners of the Giveaway - Wishmeluck",
  description:
    "Discover the winners of our latest giveaway using the Comment Picker tool on Wishmeluck. Celebrate the lucky winners and ensure fair contests.",
  keywords: [
    "Giveaway Winners",
    "Wishmeluck",
    "Comment Picker",
    "Contest Winners",
    "Fair Giveaways",
  ],
};

export default function WinnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-custom-gradient h-screen w-full">{children}</div>;
}
