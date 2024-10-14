import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment Picker - Wishmeluck",
  description:
    "Use our Comment Picker tool to randomly select a winner from your post's comments. Ensure fair giveaways and contests on Wishmeluck.",
  keywords: [
    "Comment Picker",
    "Random Comment Picker",
    "Giveaway Tool",
    "Wishmeluck",
    "Contest Winner",
  ],
};

export default function CommentPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
