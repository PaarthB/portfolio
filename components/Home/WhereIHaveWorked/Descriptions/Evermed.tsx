import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Evermed() {
  const tasks = [
    {
      text: "Part of a 4 person startup, empowering customers across Australia, effectively acting in the capacity of tech lead",
      keywords: ["4 person startup", "tech lead"]
    },
    {
      text: "Led the development of major customer website revamp and development in React.js, SCSS and C#, using AWS ECS Fargate for serverless computing, achieving timely delivery.",
      keywords: ["React.js", "SCSS", "SCSS", "C#", "AWS ECS Fargate", "timely delivery"],
    },
    {
      text: "Worked with AWS, Python, C#/.NET, CSS, Node.js, React.js, Material UI, Nginx for full-stack application development",
      keywords: ["AWS", "Python", "C#/.NET", "CSS", "Node.js", "React.js", "Material UI", "Nginx"],
    },
    {
      text: "Introduced test based approach for IaaC cloud-infra management and front-end applications, outlining testing strategy. Also peformed user experience research.",
      keywords: ["IaaC", "cloud-infra", "MongoDB", "user experience", "testing strategy"],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Engineer <span className="text-AAsecondary">@ Evermed</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2024 - Nov 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://evermed.com.au/", "_blank")}
          >
            www.evermed.com.au
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
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
