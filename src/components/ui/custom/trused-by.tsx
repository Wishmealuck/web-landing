import Image from "next/image";
import { Typography } from "../typography";
import FiveStar from "~/assets/svg/FiveStar.svg";

interface Props {
  text?: string;
  isMobile?: boolean;
}

export const TrustedBy = ({ text = "Trusted By 1000+ Creators", isMobile = false }: Props) => {
  const containerClasses = "mt-8 flex flex-col items-center gap-3";
  const textClasses = "text-center text-xl font-normal leading-6 text-darkGrayText";

  return (
    <div className={`${containerClasses} ${isMobile ? 'lg:hidden' : 'my-4 hidden lg:flex'}`}>
      <Image src={FiveStar} alt="Star Rating" />
      <Typography className={textClasses}>{text}</Typography>
    </div>
  );
};
