import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Faq() {

    const faqs: { question: string; answer: React.ReactNode|string }[]=[

        {
            question: "What is a Hackathon?",
            answer: "I2C2 is a Hackathon where students can come together to brainstorm and develop ideas to tackle significant issues. The format is similar to a workshop and encourages the use of design thinking and collaborative problem-solving techniques. Participants will work independently and in teams to generate innovative solutions."
        },
        {
            question: "Who can participate?",
            answer: "Everyone is welcome to participate, be it, students, professionals, or aliens from a different planet!"
        },
        {
            question: "Are there any fees for I2C2?",
            answer: "No. You are not required to make any payments to anyone. It is entirely free to all."
        },
        {
            question: "Can we form a team?",
            answer: "Yes, you can participate in a team or solo. Participants may form teams of upto 4 members. Each participant must belong to a single team and submit a single project."
        },
        {
            question: "Can we work on old or ongoing projects?",
            answer: "Yes. You can bring your old projects, but you will be judged on the features you add during the hackathon."
        },
        {
            question: "How do I know my registration is confirmed and when to start the development phase?",
            answer: "The organizing team will approve and confirm your participation. Shortlisted teams will receive a confirmation email and it will reflect on the user dashboard."
        },
        {
            question: "Have more questions?",
            answer: (<p><Link href="https://discord.io/i2c2-hackathon" className={buttonVariants({ variant: "link" })}>Join our Discord Community</Link> <br />Get in touch with a bigger community and ask any further queries you may have. Looking forward to welcoming you.</p>)
        }
    ];

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Frequently<br />asked questions</h2>
                        <p className="mt-1 hidden md:block text-gray-400">Answers to the most frequently asked questions.</p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                        <Accordion type="single" collapsible>
                            {
                                faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={index.toString()}>
                                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}