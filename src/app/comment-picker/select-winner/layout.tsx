import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Number of Winners - Wishmeluck",
  description:
    "Easily choose how many winners you want to pick from your post's comments with our Comment Picker tool. Ensure a fair selection process for your giveaways and contests on Wishmeluck.",
  keywords: [
    "Select Winners",
    "Comment Picker",
    "Random Comment Picker",
    "Giveaway Tool",
    "Wishmeluck",
    "Contest Winner",
    "Pick Multiple Winners",
  ],
};

export default function SelectWinnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
