"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
     <div className="flex items-center">
       <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
       <Link href="/">
        <li className={`mr-3  cursor-pointer ${pathname === "/" ? "text-blue-300" : "text-white"}`}>Home</li></Link>
        <Link href="/about">
        <li className={`mr-3  cursor-pointer ${pathname === "/about" ? "text-blue-300" : "text-white"}`}>About</li></Link>
        <Link href="/about/profile">
        <li className={`mr-3  cursor-pointer ${pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}>profile</li></Link>
      </ul>
     </div>
     <div>
      <button
      onClick={() => router.push("/login")}
      className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm cursor-pointer">Login</button>
     </div>
    </nav>
  );
}
