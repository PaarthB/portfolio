import { Navbar } from "../components/navbar"

import Image from 'next/image'


export default function About() {
    return (
        <main>
            <Navbar />
            <section className="p-20 bg-gray-50 text-black font-serif">
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About me 🧑</h1>
                <Image className="items-center justify-items-center block mx-auto" src={`/avatars/me.jpg`} alt={"me"} width="200" height="200" />
                <p className="mb-4">
                    <br/><br/>An engineer based in Sydney, Australia 🌊 🌉, with a passion for bunch of things - sports ⚽, surfing 🏄, travelling & cooking, and a genuine and warm person always 🤗.
                    <br/><br/>I am a problem solver at heart and love to help others (not limited to engineers!) in need. I thrive in a collaborative work environment, and try to improve it with my excellent networking and communication skills.
                    <br/><br/>
                </p>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Technical Skills 👨🏻‍💻</h1>
                <p className="mb-4">
                    I'm a <b>Full Stack Engineer,</b> with a rare combination of skills in <u>DevOps / Site Reliability Engineering</u> and Backend / Frontend. <br/><br/>I have a keen eye to design sharp and performant user interfaces, and also backend apps {'</>'}. 
                    I like to think about systems at scale, simplify them and also make them more performant and reliable.
                    <br/><br/>I like to sometimes dabble deep into the OS, troubleshooting network layer problems, which also helps me understand why systems behave the way they do. 
                </p>
                {/* <div className="my-8">
                    <div>
                        <a className="flex flex-col space-y-1 mb-4" href="/blog/vim">
                            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">April 9, 2024</p>
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">Embracing Vim: The Unsung Hero of Code Editors</p>
                            </div>
                        </a>
                        <a className="flex flex-col space-y-1 mb-4" href="/blog/spaces-vs-tabs">
                            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">April 8, 2024</p>
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">Spaces vs. Tabs: The Indentation Debate Continues</p>
                            </div>
                        </a>
                        <a className="flex flex-col space-y-1 mb-4" href="/blog/static-typing">
                            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">April 7, 2024</p>
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">The Power of Static Typing in Programming</p>
                            </div>
                        </a>
                    </div>
                </div> */}
            </section>        
        </main>
    )
}