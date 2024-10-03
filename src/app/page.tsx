import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/typography/GradientText";
import Head from "next/head";
import FiveStar from "../../public/assets/svg/FiveStar.svg";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { CraftedWithLove } from "@/components/ui/custom/crafted-with-love";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Head>
        <title>WishMeALuck - Home</title>
      </Head>
      <section className="flex flex-col justify-center items-center ">
        <div className="mt-8 lg:hidden flex flex-col items-center gap-3">
          <Image src={FiveStar} alt="Star Rating" />
          <Typography className="text-center   text-xl font-normal leading-6 text-darkGrayText">
            Trusted By 1000+ Creators
          </Typography>
        </div>
        <div className="flex justify-center my-3 lg:my-20 lg:w-1/2 items-center text-center">
          <GradientText
            text="Make Every Wish a Giveaway"
            size="lg:text-8xl text-5xl"
            weight="font-bold"
            textAlign="center"
          />
        </div>
        <div className="grid grid-rows-2  gap-5 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12">
          <div className="flex flex-col items-center gap-2">
            <p className="font-medium leading-6 text-sm ">
              Select your winner in seconds
            </p>
            <Button variant={"outline"} className="rounded-full">
              Comment Picker
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-medium leading-6 text-sm ">
              Host a giveaway in 1 Minute
            </p>
            <Button className="rounded-full">Create Giveaway</Button>
          </div>
        </div>
        <div className="mt-8 my-4 hidden lg:flex lg:flex-col items-center gap-3">
          <Image src={FiveStar} alt="Star Rating" />
          <Typography className="text-center lg:flex hidden text-xl font-normal leading-6 text-darkGrayText">
            Trusted By 1000+ Creators
          </Typography>
        </div>
        <div className="flex flex-col gap-6 lg:my-0 my-8">
          <Typography className="text-center text-xs leading-4 text-lightGrayText">
            Your privacy matters. We ensure a secure and transparent experience,
            every time.
          </Typography>
          <CraftedWithLove />
        </div>
      </section>
    </main>
  );
}
