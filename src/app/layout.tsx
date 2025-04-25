import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Baskervville } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});


const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400"
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
        className={`${geistSans.variable} ${lato.variable} ${baskervville.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <footer
        className="fixed bottom-0 bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/50 lg:text-left w-full">
        <div className="bg-black/5 p-3 pt-1.5 text-center">
          <span>© 2025 Copyright:</span>
          <p className="font-semibold" >Made with ❤️ in <b className="font-extrabold underline">Next.js</b></p>
        </div>
      </footer>      
    </body> 
    </html>
  );
}
