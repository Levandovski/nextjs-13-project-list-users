import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="bg-slate-400 mb-4 flex justify-between px-10 p-7 font-bold text-black">
            <Link  href='/'>
                Home
            </Link>
            <ul>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}