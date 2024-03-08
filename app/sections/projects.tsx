import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export default function Projects() {
    return (
        <section className="flex flex-col gap-3" id="projects">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border p-5 rounded-xl flex flex-col gap-5">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Java Parser</h3>
                    <Image
                    className="mx-auto"
                    src="/parser.png"
                    height={300}
                    width={300}
                    alt=""
                    priority></Image>
                    <p>Reads in Java code, checks that it is syntactically and lexically correct, and then builds an abstract syntax tree of the code.</p>
                    <Link className={buttonVariants({ variant: "default" })}
                    href="">
                        <Github className="mr-1 h-4 w-4"></Github>
                        Github
                    </Link>
                </div>
                <div className="border p-5 rounded-xl flex flex-col gap-5">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Portfolio Website</h3>
                    <Image
                    className="mx-auto"
                    src="/portfolio.png"
                    height={300}
                    width={300}
                    alt=""
                    priority></Image>
                    <p>You're looking at it right now!</p>
                    <Link className={buttonVariants({ variant: "default" })}
                    href="">
                        <Github className="mr-1 h-4 w-4"></Github>
                        Github
                    </Link>
                    <Link className={buttonVariants({ variant: "default" })}
                    href="">
                        <Globe className="mr-1 h-4 w-4"></Globe>
                        Website
                    </Link>
                </div>
            </div>
        </section>
    )
}