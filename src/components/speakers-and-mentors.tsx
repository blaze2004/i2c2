import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "./ui/icons";
import { Skeleton } from "./ui/skeleton";
import { EvervaultCard } from "./ui/evervault-card";
import ToBeAnnounced from "./to-be-announced";

interface People {
    id: number;
    name: string;
    bio: string;
    image: string;
    socials: {
        X?: string; // formerly twitter
        LinkedIn: string;
    }
}

const PeopleGrid=({ people }: { people: People[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10 gap-3">
            {
                people.map(person => (
                    <Card className="max-w-[350px] flex flex-col justify-between" key={person.id}>
                        <CardHeader>
                            <CardTitle>{person.name}</CardTitle>
                            <CardDescription>{person.bio}</CardDescription>
                        </CardHeader>
                        <CardContent className="mx-auto">
                            <Image className="rounded-lg bg-white w-full h-full" width={350} height={350} src={person.image} alt={person.name} />
                        </CardContent>
                        <CardFooter className="flex justify-center items-center space-x-4">
                            {
                                person.socials.X&&(
                                    <a href={`https://x.com/${person.socials.X}`} rel="noopener noreferrer" target="_blank">
                                        <XIcon className="w-6 h-6 text-gray-600 hover:text-white transition-colors duration-300" />
                                    </a>
                                )
                            }
                            {
                                person.socials.LinkedIn&&(
                                    <a href={person.socials.LinkedIn} rel="noopener noreferrer" target="_blank">
                                        <LinkedInLogoIcon />
                                    </a>
                                )
                            }
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    );
};

export default function SpeakersAndMentors() {

    // const speakers: People[]=[];
    // const mentors: People[]=[];

    return (
        <div className="bg-secondary">
            <div className="bg-slate-900 min-h-screen flex items-center justify-center p-8 rounded-b-[5rem] py-16">
                <div>
                    <h1 className="uppercase scroll-m-20 text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">Speakers</h1>
                    <p className="scroll-m-20 text-center sm:text-left text-xl tracking-tight">Get to know the speakers of this amazing Hackathon.</p>
                    {/* <PeopleGrid people={speakers} /> */}
                    <ToBeAnnounced />
                    <h1 className="uppercase scroll-m-20 text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl mt-6">Mentors</h1>
                    <p className="scroll-m-20 text-center sm:text-left text-xl tracking-tight">Grab the opportunity to learn from great mentors.</p>
                    {/* <PeopleGrid people={mentors} /> */}
                    <ToBeAnnounced />
                </div>
            </div>
        </div>
    );
}