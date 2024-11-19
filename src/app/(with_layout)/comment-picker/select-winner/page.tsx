"use client";
import { GradientFillButton } from "@/components/ui/buttons/gradient-button";
import { ProgressBar } from "@/components/ui/custom/progress-bar";
import { Input } from "@/components/ui/input/text-field";
import { GradientText } from "@/components/ui/typography/GradientText";
import { PostData } from "@/types/postData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SelectWinner() {
  const [postData, setPostData] = useState<PostData>();
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const startTime = useRef<number | null>(null);
  const [winners, setWinners] = useState<string | number>(1);
  const [loadingDots, setLoadingDots] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!completed) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [completed]);

  useEffect(() => {
    const post = window && window.localStorage.getItem("postData");
    const parsedPost = JSON.parse(post ?? "");
    setPostData(parsedPost);

    const animateProgress = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsedTime = timestamp - startTime.current;

      const progressPercentage = Math.min((elapsedTime / 10000) * 100, 100); // 10 seconds duration
      setProgress(progressPercentage);

      if (progressPercentage >= 100) {
        setCompleted(true);
      }

      if (progressPercentage < 100) {
        requestAnimationFrame(animateProgress); // Continue the animation
      }
    };

    requestAnimationFrame(animateProgress); // Start the animation

    return () => {
      startTime.current = null; // Reset on component unmount
    };
  }, []);

  const handleWinner = () => {
    router.push(`/winners?count=${winners}`);
  };

  return postData ? (
    <div className="grid grid-cols-2 justify-center items-center">
      <div className="flex justify-center">
        <div className="border border-1 border-solid border-black pt-8 pl-2  pr-7  mt-10 mb-4 shadow-[8px_8px_0_0_black] mx-5 md:mx-0">
          <div className="border border-1 border-black border-solid overflow-hidden h-[360px] w-[368px]">
            <Image
              src={postData.thumbnail}
              width={370}
              height={299}
              className="object-cover"
              alt="Post Thumbnail"
            />
          </div>
          <div className="flex gap-2 items-center py-3">
            {postData.owner.profile_pic_url ? (
              <Image
                alt="Profile Picture"
                src={postData?.owner?.profile_pic_url}
                className=" rounded-full"
                width={36}
                height={36}
              />
            ) : (
              <div className="h-9 w-9 bg-[#D9D9D9] rounded-full"></div>
            )}

            <h3>{postData.owner.username}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {!completed ? (
          <>
            <ProgressBar progress={progress} />
            <h4 className="font-semibold text-[#0F172A]">
              {Math.round(progress)}%
            </h4>{" "}
          </>
        ) : (
          <></>
        )}

        {!completed ? (
          <div className="flex gap-2 my-2">
            <GradientText
              text={`Comments Loading${loadingDots}`}
              weight="font-semibold"
              size="text-[21px]"
            />
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-xs md:max-w-md justify-center items-center my-6">
            <h3 className="text-[#0F172A] text-3xl font-bold leading-normal">
              {postData?.comments ?? 0}
            </h3>
            <GradientText
              text="Comments Loaded"
              weight="font-semibold"
              size="text-[21px]"
            />
            <h5 className="text-[#5C5C5C] text-sm font-medium leading-normal ">
              We are Ready, lets find the winner
            </h5>
            <Input
              placeholder="Number of winners"
              className="my-3"
              value={winners}
              onChange={(e) => setWinners(e.target.value)}
              type="number"
            />
            {Number(winners) >= 1 && (
              <GradientFillButton text="Find Winner" onClick={handleWinner} />
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}
