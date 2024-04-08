import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "./ui/icons";

interface People {
    id: number;
    name: string;
    role: string;
    image: string;
    socials: {
        X?: string; // formerly twitter
        LinkedIn: string;
    }
}

export default function SpeakersAndMentors() {
    const people: People[]=[];

    const speakers: People[]=[];
    return (
        <div>
            <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl text-center font-extrabold tracking-tight text-white">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8 sm:p-24">
                {
                    people.map(person => (
                        <Card className="max-w-[350px]" key={person.id}>
                            <CardHeader>
                                <CardTitle>{person.name}</CardTitle>
                                <CardDescription>{person.role}</CardDescription>
                            </CardHeader>
                            <CardContent className="mx-auto">
                                <Image className="rounded-lg bg-white" width={350} height={350} src={person.image} alt={person.name} />
                            </CardContent>
                            <CardFooter className="flex justify-center items-center space-x-4">
                                {
                                    person.socials.X&&(
                                        <a href={`https://x.com/${person.socials.X}`} rel="noopener noreferrer" target="_blank">
                                            <XIcon className="w-6 h-6 text-gray-600 hover:text-white transition-colors duration-300" />
                                        </a>
                                    )
                                }
                                <a href={person.socials.LinkedIn} rel="noopener noreferrer" target="_blank">
                                    <LinkedInLogoIcon />
                                </a>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}