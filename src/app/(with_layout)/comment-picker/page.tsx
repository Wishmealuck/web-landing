import { GradientText } from "@/components/ui/typography/GradientText";
import { Typography } from "@/components/ui/typography";
import { CraftedWithLove } from "@/components/ui/custom/crafted-with-love";
import { TrustedBy } from "@/components/ui/custom/trused-by";
import { SectionBtn } from "@/components/ui/custom/section-with-button";
import { GradientTextField } from "@/components/ui/input/gradient-text-field-outlined";

export default function CommentPicker() {
  return (
    <main className="overflow-x-clip">
      <section className="flex flex-col justify-center items-center ">
        <TrustedBy isMobile />
        <div className="flex justify-center my-3 lg:px-0 px-2 lg:my-10 lg:w-1/2 items-center text-center ">
          <GradientText
            text="Your Winner, Just a Click Away!"
            size="lg:text-7xl text-5xl "
            weight="font-bold"
            textAlign="center"
            className="leading-tight lg:leading-[5rem]"
          />
        </div>
        <div className="flex w-full py-3 lg:py-0 justify-center">
          <GradientTextField />
        </div>
        <TrustedBy />
        <div className="grid grid-rows-1 gap-5 lg:gap-12 lg:my-6">
          <SectionBtn
            btnText="Create Giveaway"
            heading="Host a giveaway in 1 minute "
            href="/"
          />
        </div>
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
