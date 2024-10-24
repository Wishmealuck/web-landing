"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Confetti from "~/assets/lottie/Confetti.json";
import { AvatarTitle } from "@/components/ui/custom/winner-avatar";
import axios from "axios";
import { CommentPicker } from "@/types/commentPicker";
import { useSearchParams } from "next/navigation";

export default function Winner() {
  const [count, setCount] = useState(5);
  const [showAnimation, setShowAnimation] = useState(false);
  const [result, setResult] = useState<CommentPicker[]>([]);
  const [api, setApi] = useState(false);
  const searchParams = useSearchParams();
  const winners = searchParams.get("count");
  console.log(winners, "routerCheck");

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 600);

      return () => clearInterval(intervalId);
    } else {
      setShowAnimation(true);
    }
  }, [count]);

  useEffect(() => {
    if (!api) {
      const post = localStorage.getItem("postData");
      const parsedPost = JSON.parse(post ?? "");
      axios
        .get(`https://api-qa.likester.com/api/scrape/comments`, {
          params: {
            post_id: parsedPost.id,
            shortcode: parsedPost.shortcode,
            winners: winners ?? 1,
          },
        })
        .then((res) => {
          setResult(res.data);
        })
        .catch(() => {
          alert("Something Bad Happend");
        })
        .finally(() => {
          setApi(true);
        });
    }
  }, [api]);

  return (
    <div className="relative flex justify-center items-center h-screen text-9xl text-white font-bold overflow-hidden">
      {count > 0 ? (
        count
      ) : (
        <div className="grid grid-row-2 gap-6">
          <AvatarTitle
            mainWinner
            title={result?.[0]?.user?.username ?? "Instagram User"}
            src={result?.[0]?.user?.profile_pic_url}
          />
          {result.length > 1 && (
            <div className="grid grid-cols-3 gap-10">
              {result.slice(1).map((item) => {
                return (
                  <AvatarTitle
                    key={item.pk}
                    title={item.user.username ?? "Instagram User"}
                    src={item.user.profile_pic_url}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
      {showAnimation && (
        <div className="absolute inset-0">
          <Lottie animationData={Confetti} loop={true} />
        </div>
      )}
    </div>
  );
}
