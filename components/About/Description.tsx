"use client";
import { getAboutData } from "@/lib/About";
import { link } from "fs";
import { useLocale } from "next-intl";
import { useState } from "react";
import Markdown from "react-markdown";

function Description() {
  const localeActive = useLocale();
  const AboutData = getAboutData(localeActive);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded
    ? AboutData.des
    : [
        `${AboutData.des.join(" ").slice(0, 280)}${
          AboutData.des.join(" ").length > 280 ? "..." : ""
        }`,
      ];
  return (
    <div>
      <div className="flex flex-col gap-4">
        {displayText.map((item, index) => (
          <div key={index}>
            <Markdown>{item}</Markdown>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <span
          onClick={handleToggle}
          className="underline text-black cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      </div>
    </div>
  );
}

export default Description;
