import Image from "next/image";
import Link from "next/link";
import Instagram from "../../../public/assets/socials/InstagramBlack.svg";
import X from "../../../public/assets/socials/TwitterBlack.svg";

const socials = [
  {
    name: "Instagram",
    image: Instagram,
    link: "/",
  },
  {
    name: "Twitter",
    image: X,
    link: "/",
  },
];

export const Footer = () => {
  return (
    <div className="flex w-full justify-center py-10">
      <div className="w-[90%] lg:w-[88%] xl:w-[85%]">
        <div className="flex justify-between">
          <div className="lg:flex hidden text-footerText text-sm leading-normal font-medium ">
            © Wish me a luck
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <Link href={"/"}>About us</Link>
            <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
            <Link href={"/privacy-policy"}>Privacy & Policies</Link>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => {
              return (
                <Link key={social.name} href={social.link} scroll={true}>
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex lg:hidden text-footerText justify-center mt-4 text-sm leading-normal font-medium ">
          © Wish me a luck
        </div>
      </div>
    </div>
  );
};
