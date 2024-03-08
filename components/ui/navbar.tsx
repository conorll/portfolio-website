import { ModeToggle } from "./mode-toggle"
import links from "@/links"
import { NavDropdown } from "./nav-dropdown"
import Link from "next/link"

export default function Navbar() {
    return (
            <nav className="flex gap-5 items-center p-5 mb-5 border rounded-xl">
            <Link href="/" className="mr-auto">CL</Link>
            <ModeToggle />
            <ul className="hidden sm:flex gap-5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        <div className="block sm:hidden">
            <NavDropdown />
        </div>
        </nav>
    )
}