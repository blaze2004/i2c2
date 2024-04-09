import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import code8 from '@/assets/organizers/code8.png';
import codedu from '@/assets/organizers/codedu.png';
import befikra from '@/assets/organizers/befikra.png';
import mentor from '@/assets/roles/mentor.png';
import speaker from '@/assets/roles/speaker.png';
import campusChamp from '@/assets/roles/campus_champ.png';
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TerminalIcon } from "./ui/icons";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function Organizers() {
    const organizers: {
        name: string;
        bio: string;
        logo: StaticImageData;
        link: string;
    }[]=[
            {
                name: 'Befikra',
                bio: 'The Befikra Community brings together technology professionals, learners, mentors, and companies from around the world to build a supportive environment for learning, growing, enhancing skills, and building projects.',
                logo: befikra,
                link: 'https://befikracommunity.in'
            },
            {
                name: 'Code8',
                bio: 'Code8 is an experience-based learning platform driven by the energy of code and creativity to churn the wheels of innovation. We are cultivating a culture of project creation to solve real-world problems and an ethos for skill mastering.',
                logo: code8,
                link: 'https://www.codeate.in'
            },
            {
                name: 'Codedu',
                bio: 'Codedu is an Open Source Community that helps tech enthusiasts to grow their self in tech. We are providing FREE Learning Content in the form of Video as well as Notes.',
                logo: codedu,
                link: 'https://codedu.tech'
            },
        ];

    const positions: {
        title: string;
        content: string;
        image: StaticImageData;
        link: string;
    }[]=[
            {
                title: "Be an I2C2 Speaker",
                content: "Want to share your knowledge and expertise in technology? Join us as a speaker and impart your wisdom to the next generation of tech innovators.",
                image: speaker,
                link: "#"
            },
            {
                title: "Join I2C2 as a Mentor",
                content: "Use your expertise to shape the future of technology by mentoring young coders at I2C2. Help guide and support the next generation of hackers to reach their full potential.",
                image: mentor,
                link: "#"
            },
            {
                title: "Campus Champ",
                content: "Represent I2C2 as a campus ambassador and become the face of the hackathon by promoting it in your campus and encouraging students to participate and win goodies.",
                image: campusChamp,
                link: "#"
            }
        ];

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-secondary">
            <div>
                <h1 className="uppercase scroll-m-20 text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">I2C2 Family</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-3">
                    {
                        organizers.map((organizer, index) => (
                            <Card key={index} className="flex flex-col justify-between max-w-md">
                                <CardHeader className="flex flex-row gap-3">
                                    <Avatar>
                                        <AvatarImage src={organizer.logo.src} />
                                        <AvatarFallback>{organizer.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{organizer.name}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p>{organizer.bio}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={organizer.link} className={buttonVariants({ variant: "link" })}>Learn more</Link>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>

                <Alert>
                    <AlertTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">Join I2C2 family</AlertTitle>
                    <AlertDescription>
                        Let&apos;s make this hackathon a success together.
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-3">
                            {
                                positions.map((position, index) => (
                                    <div key={index} className="rounded-xl h-full" style={{ backgroundImage: `url('${position.image.src}')`, backgroundSize: 'cover', backgroundPosition: "100% 100%" }}>
                                        <Card className="flex h-full flex-col justify-between max-w-md backdrop-blur-sm bg-blue-900/50">
                                            <CardHeader>
                                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{position.title}</h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p>{position.content}</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className='bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white' asChild>
                                                    <Link href={position.link}>
                                                        Join us
                                                        <ChevronRightIcon className="flex-shrink-0 size-4 ml-2 my-4" />
                                                    </Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </AlertDescription>
                </Alert>

            </div>
        </div>
    )
}