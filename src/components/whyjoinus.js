import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { WhyUsCard } from './cards';
import Sessions from '../assets/sessions.png';
import Support from '../assets/support.png';
import Nft from '../assets/nft.png';
import Project from '../assets/project.png';
import Learn from '../assets/learn.png';
import Intern from '../assets/intern.png';

export default function WhyJoinUs() {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const points=[
        {
            icon: Sessions,
            title: "Interactive Sessions",
            description: "The students shall receive interactive sessions with mentors to learn about the various aspects of Blockchain. Along with that, they shall also receive resource information to guide them along the learning process."
        },
        {
            icon: Support,
            title: "Mentorship Support",
            description: "Mentors will always be available to help with doubt-solving."
        },
        {
            icon: Nft,
            title: "NFTs and Swags",
            description: "After the end of the program, students shall receive certificates, and internship opportunities, and take home some amazing goodies."
        },
        {
            icon: Project,
            title: "Project Building Assistance",
            description: "Alongside the sessions, they shall also receive guidance on building blockchain-based projects."
        },
        {
            icon: Learn,
            title: "Learn and build on the Tezos Platform",
            description: "As part of this program, students can easily access and learn on the Tezos platform."
        },
        {
            icon: Intern,
            title: "Internship and PPO opportunities.",
            description: "You shall get internships and Pre-Placement Opportunities with Tezos based on the evaluation of the project created."
        },
    ];

    return (
        <Box id="faq" sx={{ maxWidth: '800px', mb: '2rem' }}>
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "2rem",
                    background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Why Join Us?
            </Typography>
            <Box sx={{ background: 'grey'}}>
                <Box className={styles.cardsListBorder}>
                    {
                        points.map((info, key) => (
                            <WhyUsCard {...info} key={key} />
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
}