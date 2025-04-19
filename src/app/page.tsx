import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-amber-50 h-full">
      <Navbar />
      <section className="p-20 font-black text-black bg-repeat bg-cover bg-bottom bg-bannerImg w-full h-screen">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter flex px-2">
          Experience Summary{" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 justify-items-center p-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
            <div className="mx-auto float-right me-2 mb-2">
              <a href="/pdf/cv_p_bhasin.pdf" download="resume">
                <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
                  <svg className="size-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <b className="pl-1">Download Resume</b>
                </button>
              </a>
            </div>
        </h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="fill-[#6fe3d0]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.35 105.4">
                  {/* <defs>
                    <style>.cls-1{fill:#6fe3d0;}
                    </style>
                  </defs> */}
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M89.89,90a52.7,52.7,0,1,1,0-74.53l.13.12a9.16,9.16,0,0,1-.1,12.91h0l-30.7,30.7a9.2,9.2,0,0,1-13,0h0a9.2,9.2,0,0,1,0-13l23.29-23.3h0a34.29,34.29,0,1,0,7.37,54.1h0l61.57-61.51h0a52.7,52.7,0,1,1,0,74.52l-.06-.06a9.25,9.25,0,0,1,.09-13l30.65-30.64a9.2,9.2,0,0,1,13,0h0a9.2,9.2,0,0,1,0,13L158.84,82.56h0a34.29,34.29,0,1,0-7.38-54.1l0,0L89.9,90Z"/>
                    </g>
                  </g>
                </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Senior Full Stack Engineer<span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-black italic"><b>Evermed</b> - May, 2024 - Present</time>
                <div className="mb-4 text-base font-normal text-gray-500 content-between gap-y-4">
                  <ul className="list-disc">                    
                    <li>
                      Rollout of new e-commerce web & back-end features, optimizing 
                      existing features, reducing tech-debt and improving operations 
                      in a fast-paced environment., with lots of pair-programming.
                    </li>
                    <li>
                      Working with <b>AWS, Python, C#/.NET, CSS, Node.js, React.js, Nginx</b> for{" "}
                      <i>full-stack application development</i>. Introduced test based approach 
                      cloud-infra and front-end applications, outlining testing strategy
                    </li>
                  </ul>
                </div>
            </li>

            <li className="mb-10 ms-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-50 rounded-full -start-3 ring-8 ring-white">
                  <svg width="40px" height="40px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <defs>
                          <linearGradient x1="99.6865531%" y1="15.8007988%" x2="39.8359011%" y2="97.4378355%" id="linearGradient-1">
                              <stop stopColor="#0052CC" offset="0%"></stop>
                              <stop stopColor="#2684FF" offset="92.3%"></stop>
                          </linearGradient>
                      </defs>
                      <g>
                          <path d="M75.7929022,117.949352 C71.973435,113.86918 66.0220743,114.100451 63.4262382,119.292123 L0.791180865,244.565041 C-0.370000214,246.886207 -0.24632242,249.643151 1.11803323,251.85102 C2.48238888,254.058889 4.89280393,255.402741 7.48821365,255.402516 L94.716435,255.402516 C97.5716401,255.468706 100.19751,253.845601 101.414869,251.262074 C120.223468,212.37359 108.82814,153.245434 75.7929022,117.949352 Z" fill="url(#linearGradient-1)">

                          </path>
                          <path d="M121.756071,4.0114918 C86.7234975,59.5164098 89.0348008,120.989508 112.109989,167.141287 L154.170383,251.262074 C155.438703,253.798733 158.031349,255.401095 160.867416,255.401115 L248.094235,255.401115 C250.689645,255.401339 253.10006,254.057487 254.464416,251.849618 C255.828771,249.64175 255.952449,246.884805 254.791268,244.563639 C254.791268,244.563639 137.44462,9.83670492 134.492768,3.96383607 C131.853481,-1.29371311 125.14944,-1.36519672 121.756071,4.0114918 Z" fill="#2681FF">

                          </path>
                      </g>
                  </svg>                
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Senior Software Engineer / SRE</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-black italic"><b>Atlassian Inc.</b> - Jan, 2019 - Jan 2024</time>
                <div className="mb-4 text-base font-normal text-gray-500 content-between gap-y-4">
                  <ul className="list-disc">                    
                    <li>Led initiative for performance optimization of a widely used user-facing endpoint serving millions of customers,
                      by algorithm redesign & SQL query optimisation, improving endpoint latency by 50% on average, eg 91s → 35s.
                    </li>
                    <li>
                      Made multi-region databases in a globally distributed system, resilient to failovers, by <b>TCP/IP settings</b> via <b>OS level programming</b>{" "}
                      and optimising application database connection pool management in <b>JDBC Java Driver</b>.
                    </li>
                    <li>
                      Delivered core features to an internal terraform provider in <b>Golang</b> using <b>HashiCorp SDK</b>.
                    </li>
                    <li>
                      Developed a user interface (UI) used for monitoring, and management of deployments (history, deploying/re-deploying, error tracing), of synthetic checks, using <b>GraphQL</b>, <b>React Relay</b> and <b>TypeScript</b>, used by 50+ Engineering teams on a daily basis
                    </li>
                  </ul>
                </div>
            </li>

        </ol>
      </section>

    </main>
);
}
