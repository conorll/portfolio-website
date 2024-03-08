import { ContactForm } from "@/components/ui/contact-form"

export default function Contact() {
    return (
        <section className="flex flex-col gap-3" id="contact">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Contact Me</h2>
            <div className="p-5 border rounded-xl">
                <ContactForm />
            </div>
        </section>
    )
}