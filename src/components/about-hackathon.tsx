import Image from "next/image";
import ideateHumaaan from "@/assets/humaaans/ideate-humaaans.png";
import collaborateHumaaan from "@/assets/humaaans/collaborate-humaaans.png";
import competeHumaaan from "@/assets/humaaans/compete-humaaans.png";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function About() {
    const content: {
        title: string;
        description: string;
        content?: React.ReactNode|any;
    }[]=[
            {
                title: "About I2C2",
                description: "The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants.",
                content: (<Image src={ideateHumaaan} alt="About I2c2" className="w-full h-full object-contain" width={300} height={300} />)
            },
            {
                title: "Why Participate?",
                description: "You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment.",
                content: (<Image src={competeHumaaan} alt="Why Participate?" className="w-full h-full object-contain" width={300} height={300} />)
            },
            {
                title: "Theme of Hackathon",
                description: "Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer).",
                content: (<Image src={collaborateHumaaan} alt="hackathon theme" className="w-full h-full object-contain" width={300} height={300} />)
            },
        ];

    return (
        <div className="bg-secondary">
            <StickyScroll content={content} />
        </div>
    );
}
