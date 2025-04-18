import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p4 sm:p-4 md:flex md:justify-between 
    md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">Paarth Bhasin</a>

      </div>
      <div className="hidden md:flex">
        <Link href="/" className="mx-2 hover:text-gray-300">Home</Link>
        <Link href="/about" className="mx-2 hover:text-gray-300">About</Link>
        <Link href="/contact" className="mx-2 hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  )
}