import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function About() {
    return (
        <section className="flex flex-col gap-3" id="about">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">About</h2>
            <div className="border rounded-xl px-5">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Academic Background</AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>Bachelor of Computing Science (Honours) - In Progress</li>
                                <li>University of Technology Sydney</li>
                                <li>2022 - 2025</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Relevant Coursework</AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>Data Structures and Algorithms</li>
                                <li>Theory of Computation</li>
                                <li>Web Systems</li>
                                <li>Object-Oriented Programming</li>
                                <li>Information Systems</li>
                                <li>Discrete Mathematics</li>
                                <li>Linear Algebra</li>
                                <li>Calculus</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Programming Langauges</AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>Java</li>
                                <li>Javascript</li>
                                <li>Python</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Technologies and Frameworks</AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>React</li>
                                <li>NextJS</li>
                                <li>TypeScript</li>
                                <li>Tailwind</li>
                                <li>Git</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}