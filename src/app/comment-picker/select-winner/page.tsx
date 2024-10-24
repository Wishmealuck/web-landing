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
  const router = useRouter();
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
    router.push(`/comment-picker/winners?count=${winners}`);
  };

  return postData ? (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="border border-1 border-solid border-black pt-8 pl-2 pb-20 pr-7  mt-20 mb-10 shadow-[8px_8px_0_0_black] mx-5 md:mx-0">
          <div className="border border-1 border-black border-solid ">
            <Image
              src={postData.thumbnail}
              width={370}
              height={303}
              alt="Post Thumbnail"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-3">
        <ProgressBar progress={progress} />
        <h4 className="font-semibold text-[#0F172A]">
          {Math.round(progress)}%
        </h4>{" "}
      </div>

      {!completed ? (
        <div className="flex gap-2 my-2">
          <GradientText
            text={String(postData.comments)}
            size="text-lg"
            weight={"font-bold"}
          />
          <h3 className="text-lg font-medium text-[#404040] ">
            Comments Loading
          </h3>
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-xs md:max-w-md justify-center items-center my-6">
          <GradientText
            text="All Comments Loaded"
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
  ) : (
    <></>
  );
}
