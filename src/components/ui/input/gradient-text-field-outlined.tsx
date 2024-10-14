"use client";
import { useState } from "react";
import { GradientFillButton } from "../buttons/gradient-button";
import { extractInstaPostId } from "@/utils/extractInstaPostId";
import axios from "axios";

export const GradientTextField = () => {
  const [link, setLink] = useState("");
  function handleOnClick() {
    const extractedId = extractInstaPostId(link);
    axios
      .get(`https://verifyshare.com/api/post`, {
        params: {
          hash: extractedId,
        },
      })
      .then((res) => {
        console.log(res.data, "datachecking");
      })
      .catch((err) => {
        console.log(err, "errorChecking");
      });
  }
  return (
    <div className="bg-custom-gradient flex p-[1px] rounded-full">
      <div className="flex gap-2 p-2 bg-white rounded-full">
        <input
          type="text"
          placeholder="Enter your instagram url"
          className="bg-white rounded-l-full flex placeholder:text-placeholderGray placeholder:font-medium placeholder:leading-6 p-2 focus:outline-none"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <GradientFillButton
          onClick={handleOnClick}
          rounded={true}
          text="Find winner"
        />
      </div>
    </div>
  );
};
