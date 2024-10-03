import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LogoBrand } from "../utils/LogoBrand";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { HorizontalSeperator } from "../ui/seperator/horizontal-with-text";
import Hamburger from "../../../public/assets/svg/Hamburger.svg";

const links = [
  {
    label: "Feautures",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
];

export const Header = () => {
  return (
    <div
      className={
        "h-20 w-full fixed top-0 right-0 z-[100] bg-white flex flex-wrap justify-center align-middle place-items-center"
      }
    >
      <div className=" w-[90%] lg:w-[88%] xl:w-[85%] flex justify-center shadow-md px-6 py-4 rounded-full lg:mt-4 mt-1">
        <div className="flex  w-full  justify-between place-items-center">
          <div className="flex items-center align-middle">
            <div className="flex align-middle place-items-center   gap-8">
              <Link href="/">
                <div className="cursor-pointer ">
                  <LogoBrand />
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex gap-6 px-8">
              <Link href="/" className="font-bold leading-6 text-medium  ">
                Features
              </Link>
              <Link href="/" className="font-bold leading-6 text-medium  ">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden z-[105]">
            <Sheet>
              <SheetTrigger asChild>
                <Image src={Hamburger} alt="menu" width={36} height={36} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <LogoBrand />
                  </SheetTitle>
                </SheetHeader>
                <div className="my-4">
                  <HorizontalSeperator />
                </div>
                <div className="grid gap-4 py-4">
                  {links.map((link) => {
                    return (
                      <div key={link.label} className="flex flex-col gap-3">
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="text-sm font-semibold"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>

                        <HorizontalSeperator />
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex items-center gap-3 ">
            <Link href="/" className="font-bold leading-6 text-medium  ">
              Log in
            </Link>
            <Button className="rounded-full">Create an account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
