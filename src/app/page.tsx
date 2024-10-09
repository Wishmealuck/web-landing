import { GradientText } from "@/components/ui/typography/GradientText";
import Head from "next/head";
import { Typography } from "@/components/ui/typography";
import { CraftedWithLove } from "@/components/ui/custom/crafted-with-love";
import { SectionBtn } from "@/components/ui/custom/section-with-button";
import { TrustedBy } from "@/components/ui/custom/trused-by";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Head>
        <title>WishMeLuck - Home</title>
      </Head>
      <section className="flex flex-col justify-center items-center ">
        <TrustedBy isMobile />
        <div className="flex justify-center my-3 lg:px-0 px-2 lg:my-20 lg:w-1/2 items-center text-center ">
          <GradientText
            text="Make Every Wish a Giveaway"
            size="lg:text-8xl text-5xl "
            weight="font-bold"
            textAlign="center"
            className="leading-tight lg:leading-[6.65rem]"
          />
        </div>
        <div className="grid grid-rows-2  gap-5 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12">
          <SectionBtn
            btnText="Comment Picker"
            heading="Select your winner in seconds"
            btnVariant="outline"
            href="/comment-picker"
          />
          <SectionBtn
            btnText="Create Giveaway"
            heading="Host a giveaway in 1 minute "
            href="/"
          />
        </div>
        <TrustedBy />
        <div className="flex flex-col gap-6 lg:my-0 my-8">
          <Typography className="text-center lg:px-0 px-2 text-xs leading-4 text-lightGrayText">
            Your privacy matters. We ensure a secure and transparent experience,
            every time.
          </Typography>
          <CraftedWithLove />
        </div>
      </section>
    </main>
  );
}
