import Image, { StaticImageData } from "next/image";
import gaming from '@/assets/challenges/gaming.png';
import edu from '@/assets/challenges/education.png';
import web3 from '@/assets/challenges/web3.png';
import frontend from '@/assets/challenges/frontend.png';
import misc from '@/assets/challenges/miscellaneous.png';
import entrepreneurs from "@/assets/challenges/entrepreneurship.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Fragment } from "react";


export default function Challenges() {

    const challenges: {
        title: string;
        image: StaticImageData;
        problemStatement: string;
        author: string;
        authorLink: string;
    }[]=[
            {
                title: "Gaming",
                image: gaming,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: ""
            },
            {
                title: "Education",
                image: edu,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: "",
            },
            {
                title: "Blockchain",
                image: web3,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: ""
            },
            {
                title: "Frontend Dev",
                image: frontend,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: "",
            },
            {
                title: "Entrepreneurship",
                image: entrepreneurs,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: ""
            },
            {
                title: "Miscellaneous",
                image: misc,
                problemStatement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                author: "I2C2",
                authorLink: "",
            },
        ];

    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-3 bg-secondary'>
            <div>
                <h1 className='scroll-m-20 text-6xl text-center sm:text-left font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Challenges</h1>
                <p className="mt-5 text-lg text-center sm:text-left text-muted-foreground ml-4">Choose your field, accept the challenge and get the trophy.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                    {
                        challenges.map((challenge, idx) => (
                            <Fragment key={idx}>
                                <Dialog>
                                    <Card className="m-4 flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle>{challenge.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <Image
                                                src={challenge.image.src}
                                                alt={challenge.title}
                                                className="w-full h-full"
                                                width={200}
                                                height={200}
                                            />
                                        </CardContent>
                                        <CardFooter>
                                            <DialogTrigger asChild>
                                                <Button>View Problem Statement</Button>
                                            </DialogTrigger>
                                        </CardFooter>
                                    </Card>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Problem Statement for {challenge.title} challenge</DialogTitle>
                                            <DialogDescription>
                                                {challenge.problemStatement}
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </Fragment>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}