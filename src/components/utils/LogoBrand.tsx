import Image from "next/image";
import { Typography } from "../ui/typography";
import Logo from "../../../public/assets/branding/Logo.svg";

export const LogoBrand = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={Logo} width={36} height={36} alt="Logo" />
      <div className="flex flex-col">
        <Typography className="text-xs font-bold text-textColor">
          Wish me 
        </Typography>
        <Typography className="text-xs font-bold text-textColor">
          luck.
        </Typography>
      </div>
    </div>
  );
};
