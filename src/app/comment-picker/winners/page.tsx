"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Confetti from "~/assets/lottie/Confetti.json";
import { AvatarTitle } from "@/components/ui/custom/winner-avatar";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Winner as WinnerType } from "@/types/winner";

export default function Winner() {
  const [count, setCount] = useState(10);
  const [showAnimation, setShowAnimation] = useState(false);
  const [result, setResult] = useState<WinnerType[]>([]);
  console.log(result, "resultCheck");
  const [api, setApi] = useState(false);
  const searchParams = useSearchParams();
  const winners = searchParams.get("count");
  console.log(winners, "routerCheck");

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setShowAnimation(true);
    }
  }, [count]);

  useEffect(() => {
    if (!api) {
      const link = localStorage.getItem("postLink");
      axios
        .post(`https://www.wishmealuck.in/api/social/instagram/get-comments`, {
          post_url: link,
        })
        .then((res) => {
          setTimeout(() => {
            axios
              .post(
                `https://www.wishmealuck.in/api/social/instagram/get-winners`,
                {
                  id: res.data.id,
                  winners_count: winners,
                }
              )
              .then((res) => {
                setResult(res.data.winners ?? []);

                console.log("Second API response:", res.data);
              })
              .catch(() => {
                alert("Something Bad Happened with the second API");
              });
          }, 5000);
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
            title={result?.[0]?.ownerUsername ?? "Instagram User"}
            src={result?.[0]?.ownerProfilePicUrl}
          />
          {result.length > 1 && (
            <div className="grid grid-cols-3 gap-10">
              {result.slice(1).map((item) => {
                return (
                  <AvatarTitle
                    key={item.ownerUsername}
                    title={item.ownerUsername ?? "Instagram User"}
                    src={item.ownerProfilePicUrl}
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
