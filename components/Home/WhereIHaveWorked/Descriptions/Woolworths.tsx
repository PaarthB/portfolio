import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Woolworths() {
  const tasks = [
    {
      text: "E-commerce feature design and development, responsible for the order checkout, rewards/discounts, campaigns and loyalty card features on the website as well as the back-end. This is used by thousands of customers on a daily basis",
      keywords: ["E-commerce", "design", "development", "daily basis"],
    },
    {
      text: "Increasing test coverage of various user walkthrough scenarios in front-end, following TDD in TypeScript, using Jest, Cypress.",
      keywords: ["user wailkthrough", "TDD", "TypeScript", "Jest", "Cypress"],
    },
    {
      text: "Converted Figma designs into client components, enhancing interactivity and aligning design with functionality.",
      keywords: ["website design", "Figma", "interactivity"],
    },
    {
      text: "Collaborated closely with the team in regular meetings, working closely with designers, product managers and external stakeholders.",
      keywords: ["designers", "stakeholders", "product managers"],
    },
    {
      text: "Developed features related to digital customer rewards / loyalty cards. This involves improving business reporting requirements (financial reconciliation and accounting), critical bug-fixes as well as UX/UI improvements, and end to end testing improvements.",
      keywords: ["rewards", "loyalty cards", "business reporting", "critical bug-fixes", "end to end testing", "UX/UI"]
    }
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Senior Engineer - UI / Full Stack <span className="text-AAsecondary">@ Big WX</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">November 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.bigw.com.au/", "_blank")}
          >
            www.bigw.com.au
          </span>
        </div>
        <div className="flex flex-col space-y-4 text-gray-300 md:text-gray-400 text-left md:text-left">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-300 md:text-gray-400 text-left md:text-left"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
