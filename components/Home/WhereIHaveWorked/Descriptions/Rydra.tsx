import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import CompanyLogo from "../../../Icons/CompanyLogo";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Atlassian() {
  const tasks = [
    {
      text: "Developing the next generation of ordering and delivery systems providng real-time insights to businesses",
      keywords: ["UI", "cypress UI tests", "GraphQL", "Graphene", "Python", "TypeScipt", "React Relay"],
    },
  ];
    
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        <div className="flex items-center gap-3">
          <CompanyLogo variant="rydra" className="h-7 w-7 shrink-0" />
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Co-founder/CTO <span className="text-AAsecondary">@ Rydra</span>
          </span>
        </div>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2026 - Present</span>
        <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.getrydra.com/", "_blank")}
          >
            www.getrydra.com
        </span>
      </div>
        <div className="flex flex-col space-y-4 text-gray-300 md:text-gray-400 text-left md:text-left">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
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
  );
}