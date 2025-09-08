import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function UNSW() {
  const tasks = [
    {
      text: "Imparted regular tutoring sessions to students in fundamentals of Vanilla JavaScript, React, CSS and UX/UI principles, testing and accessibility. ",
      keywords: ["Vanilla JavaScript", "React", "CSS", "UX/UI principles", "testing", "accessibility"],
    },
    {
      text: "Additionally, my contributions to the course led to direct changes in the course framework such as Assignment criteria / updating lecture content, exam question assessments, by directly collaborating with the Lecturer",
      keywords: ["course framework", "lecture content", "exam question assessment"],
    },
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Tutor - COMP6080 (Web Frontend Programming) <span className="text-AAsecondary">@ UNSW</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Feb 2023 - Dec 2023</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.handbook.unsw.edu.au/undergraduate/courses/2026/comp6080?year=2026", "_blank")}
          >
            Course Handbook
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
