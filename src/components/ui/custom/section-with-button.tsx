import Link from "next/link";
import { Button } from "../button";

interface Props {
  heading: string;
  btnText: string;
  href: string;
  btnVariant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost";
}

export const SectionBtn = (props: Props) => {
  const { heading, btnText, btnVariant, href } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-medium leading-6 text-sm ">{heading}</p>
      <Link href={href}>
        <Button variant={btnVariant} className="rounded-full">
          {btnText}
        </Button>
      </Link>
    </div>
  );
};
