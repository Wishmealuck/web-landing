import Image from "next/image";
import Hoodie from "~/assets/svg/HoodieGuy.svg";

export const AvatarTitle = ({
  title,
  src,
  mainWinner,
}: {
  title: string;
  src?: string;
  mainWinner?: boolean;
}) => {
  const metrics = mainWinner ? 180 : 100;
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <Image
        className="rounded-badge"
        src={src ?? Hoodie}
        width={metrics}
        height={metrics}
        alt="Avatar"
      />
      <h6 className="text-base ">{title}</h6>
    </div>
  );
};
