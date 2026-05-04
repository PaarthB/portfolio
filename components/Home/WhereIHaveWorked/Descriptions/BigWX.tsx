// components/Experience/EnergyInstitute.js (or wherever you place it)

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
import CompanyLogo from "../../../Icons/CompanyLogo";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType"; // Adjust path

export default function BigWX() {
  const tasks = [
    {
      text: "Leading the development of the Statistical Review of World Energy (EI's largest project) and the upcoming Powerful Women initiative.",
      keywords: ["Leading", "Statistical Review of World Energy", "development", "PowerFul women"],
    },
    {
      text: "Guiding the overall technical strategy, managing the Azure-based DevOps pipeline, and spearheading the creation of its globally-renowned annual data visualizations.",
      keywords: ["technical strategy", "Azure-based DevOps", "data visualizations", "globally-renowned"],
    },
    {
      text: "Overseeing the full Azure environment, including hosting, resource allocation, and providing critical support for Power Platform developers.",
      keywords: ["Azure Management", "hosting", "Power Platform", "resource allocation"],
    },
    {
      text: "Pioneering innovative digital tools, such as an AI-powered automation agent, to significantly enhance operational efficiency.",
      keywords: ["AI-powered automation agent", "Next.js", "GPT-4o", "Innovation", "operational efficiency"],
    },
    {
      text: "Implementing crucial security and functionality enhancements like SSO (Auth0/Okta) within the Squiz Matrix CMS and proactively conducting penetration testing.",
      keywords: ["SSO", "Auth0", "Okta", "Squiz Matrix CMS", "Penetration Testing", "Security"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <div className="flex items-center gap-3">
            <CompanyLogo variant="bigw" className="h-7 w-7 shrink-0" />
            <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
              Senior Front-End Engineer <span className="text-AAsecondary">@ Big W</span>
            </span>
          </div>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.bigw.com.au/", "_blank")}
          >
            www.bigw.com.au
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} /> {/* Or your preferred color */}
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
