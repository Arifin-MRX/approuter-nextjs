import Link from "next/link";

export default function AboutLayout({ children }:{children: React.ReactNode}) {
    return (
        <>
            <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
                <ul className="text-white p-5">
                    <li className=""><Link href="/about">About</Link></li>
                    <li className=""><Link href="/about/team">Team</Link></li>
                    <li className=""><Link href="/about/profile">Profile</Link></li>

                </ul>
            </nav>
            <div className="ml-64 p-5">
                {children}
            </div>
        </>
    )
}