import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import CompanyLogo from "../../../Icons/CompanyLogo";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Atlassian() {
  const tasks = [
    {
      text: "Designed and developed a UI as a 20% improvement project, used for monitoring, tracing & management of deployments for cypress UI tests, using GraphQL" +
      "(using Graphene based Python GraphQL server), React Relay & TypeScript. It is used by 50+ engineering teams on a daily basis.",
      keywords: ["UI", "cypress UI tests", "GraphQL", "Graphene", "Python", "TypeScipt", "React Relay"],
    },
    {
      text: "Worked extensively with Java, Postgres, Algorithms, AWS Kinesis data storage, Splunk, SignalFx to optimize system performance, achieving a 50% improvement in Jira epics page latency.",
      keywords: ["Java", "Postgres", "Algorithms", "AWS Kinesis", "Splunk", "SignalFx", "system performance"],
    },
    {
      text: "Drove OpenTelemetry adoption in Jira in Java, to adopt observability best-practices and for improving the tracing footprint. This involved evaluation of third-party tools as well such as Grafana and Prometheus. This also involved open source contributions to it's Java framework.",
      keywords: ["Jira", "Java", "observability", "OpenTelemetry", "framework", "Grafana", "Prometheus"]
    },
    {
      text: "Collaborated closely with developers, providing technical expertise and insights to enhance the overall system architecture.",
      keywords: ["team collaboration", "technical expertise", "system architecture"],
    },
  ];
    
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        <div className="flex items-center gap-3">
          <CompanyLogo variant="atlassian" className="h-7 w-7 shrink-0" />
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer - Performance <span className="text-AAsecondary">@ Atlassian</span>
          </span>
        </div>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2019 - Feb 2024</span>
        <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.atlassian.com/", "_blank")}
          >
            www.atlassian.com
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