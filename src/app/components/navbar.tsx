'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonClasses = `text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300`
  const buttons = (
    <>
      <Link href="/projects" className="mx-2 hover:text-gray-300">Projects</Link>
      <Link href="/experience" className="mx-2 hover:text-gray-300">Experience</Link>
      <Link href="/about" className="mx-2 hover:text-gray-300">About</Link>
      <Link href="/contact" className="mx-2 hover:text-gray-300">Contact</Link>
    </>
  ) 

  return (
    <nav className="bg-gray-800 text-white p4 sm:p-4 md:flex md:justify-between 
    md:items-center w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">Paarth Bhasin</a>
      </div>
      <div className="hidden md:block">
        <div className='flex ml-10 items-baseline space-x-2'>
          {buttons}
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="fill-gray-100" type="button">
          {
            !isOpen ? 
              (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              )
          }
        </button>
      </div>
      {
        isOpen && (
          <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
            {buttons}
          </div>
        )
      }
    </nav>
  )
}