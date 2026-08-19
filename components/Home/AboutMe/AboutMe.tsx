import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Next.js/React", "TypeScript/JavaScript", "Tailwind CSS", "Azure DevOps", "AWS/Azure"],
    ["Node.js", "C#/.NET", "Python", "Observability", "Figma"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
            I am a <span className="text-AAsecondary">Systems / Full Stack Engineer</span> by profession, but I am also into <span className="text-AAsecondary">few others things..</span> 
            
            <br/><br/>I like to build software, with the most common to the most special of needs.

            This unique background allows me to look at systems from a user’s perspective, always looking at what the user might like vs not so much, and how processes can be improved for developers.

            <br/><br/>Recently, I have also gained experience in <span className="text-AAsecondary">geo-spatial intelligence tools</span> where I worked on a government funded project, as a frontend developer integrating various parts to the frontend: from AI to databases to UX/UI to systems (like Martin Vector Tile Server). This was one of the projects where I had to upskill and learn a lot from scratch.

            I have worked on multiple initiatives both on personal and professional projects, to improve <span className="text-AAsecondary">developer productivity</span>. I have a keen eye to design <span className="text-AAsecondary">sharp and performant user interfaces</span>, and also <span className="text-AAsecondary">backend apps</span>. I like to think about systems at scale, simplify them and also make them more <span className="text-AAsecondary">performant</span> and <span className="text-AAsecondary">reliable</span>.

            I like to sometimes dabble deep into the <span className="text-AAsecondary">Operating system</span>, troubleshooting network layer problems, which also helps me understand why systems behave the way they do.
            <br/><br/>Outside of this, I enjoy <span className="text-AAsecondary">travelling</span>, playing <span className="text-AAsecondary">basketball</span>, <span className="text-AAsecondary">swimming</span> and <span className="text-AAsecondary">surfing</span>. I am an active <span className="text-AAsecondary">surf life saver</span> and <span className="text-AAsecondary">crew</span>.<br/>
            <br/>I love to cook and take pride in my <span className="text-AAsecondary">culinary</span> skills too.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary flex-none"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="block">
            <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
              <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
              <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
                <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-0 duration-300 rounded overflow-hidden"></div>
                <Img
                  src={"/img/me-2.jpg"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
            </div>
            <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
              <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
                <Img
                  src={"/img/surf-crew.jpeg"}
                  className={"object-contain rounded-lg"}
                  alt="Surf Crew"
                />
              </div>
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="block">
            <div className="relative w-full h-48 md:hidden flex justify-center items-center">
              <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
              <div className="absolute w-48 h-full rounded overflow-hidden">
                <Img
                  src={"/img/me-2.png"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
              <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
