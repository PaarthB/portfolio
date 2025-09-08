import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Odecee() {
  const tasks = [
    {
      text: "Full Stack Developer for development of an e-commerce website and back-end tests. ",
      keywords: ["e-commerce", "unit tests"],
    },
    {
      text: "Worked in an Agile Scrum team of 5, having fortnightly sprints and gained experience in Agile. Used React.js, Redux & Spring MVC/Data.",
      keywords: ["Scrum", "Agile", "Redux", "React.js", "Spring MVC/Data"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Engineer <span className="text-AAsecondary">@ Odecee</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2018 - Dec 2018</span>
        </div>
        <div className="flex flex-col space-y-4 md:text-gray-400 text-left md:text-left">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="md:text-gray-400 text-left md:text-left"
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
