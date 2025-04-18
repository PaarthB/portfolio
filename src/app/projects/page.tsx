import { Navbar } from "../components/navbar"

export default function Experience() {
    return (
        <main>
            <Navbar />
            <section className="p-20">
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter flex px-2">
                Projects{" "}
                </h1>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            <svg width="40px" height="40px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <defs>
                                    <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stop-color="#387EB8" offset="0%"/><stop stop-color="#366994" offset="100%"/>
                                    </linearGradient>
                                    <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stop-color="#FFE052" offset="0%"/><stop stop-color="#FFC331" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)"/>
                            </svg>                        
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">LockR (OSS) - a PyPi Library <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on May 21, 2022</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Open source CLI tool which solves the problem of concurrency management for distributed applications in cloud, using <b>Redis</b>.</p>
                        <a href="https://github.com/PaarthB/LockR" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg> View on GitHub
                        </a>
                    </li>
                </ol>
            </section>

        </main>
    )
}