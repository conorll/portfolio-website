import { ModeToggle } from "./mode-toggle"
import links from "@/links"
import { NavDropdown } from "./nav-dropdown"

export default function Navbar() {
    return (
            <nav className="flex gap-5 items-center p-5 mb-5 border rounded-xl">
            <p className="mr-auto">CL</p>
            <ModeToggle />
            <ul className="hidden sm:flex gap-5">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        <div className="block sm:hidden">
            <NavDropdown />
        </div>
        </nav>
    )
}