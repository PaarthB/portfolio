import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paarth Bhasin - Portfolio",
  description: "Powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
{/*         <footer className="mt-64 md:w-[1240px] mx-auto flex flex-col justify-between py-6 sm:flex-row bg-white rounded-lg shadow-sm dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Powered by Next.js, Made with ❤️ - © 2025. All Rights Reserved.</span>
          </div>
        </footer> */}
      </body> 
    </html>
  );
}
