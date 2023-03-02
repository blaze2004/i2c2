import styles from '../styles/Home.module.css';
import { Box, Slide, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import health from '../assets/health.png';
import edu from '../assets/education.png';
import environ from '../assets/environment.png';
import web3 from '../assets/web3.png';
import frontend from '../assets/frontend.png';
import misc from '../assets/miscellaneous.png';
import entrepreneurs from "../assets/entrepreneurship.png";
// import bgMesh from '../assets/red_yellow_mesh.jpg';

export default function Challenges() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const challenges=[
        {
            title: "Gaming",
            description: (<p>Developing an AI-powered game that can learn and adapt player behavior to provide a personalized gaming experience. unique challenges and obstacles based on the player&apos;s strengths and weaknesses.<br /><br />Challenge by <a href="https://trikon.io"><b>Trikon</b></a></p>),
            imgUrl: health,
        },
        {
            title: "Education",
            description: (<p>The problem in EdTech is the lack of effective and personalized learning experiences, as well as the limited accessibility to technology, particularly in low-income areas. The challenge is to develop innovative solutions that provide high-quality, affordable, and accessible education to all learners, regardless of their background or location.<br /><br />Challenge by <a href="https://i2c2.tech"><b>I2C2 Team</b></a></p>),
            imgUrl: edu,
        },
        // {
        //     title: "Environment",
        //     description: "To be announced",
        //     imgUrl: environ,
        // },
        {
            title: "Blockchain",
            description: (<Typography>Build a platform for the users to design their own avatar (e.g. <a href="https://avatarmaker.com" target={"_blank"} rel="noreferrer">https://avatarmaker.com</a>) and mint them as an NFT on Tezos for a price based on the amount of personalization they’ve added to their avatar such as makeup, hair, facial hair, and accessories, etc. A generative NFT collection in short. <br /><br />Challenge by <a href="https://tezos.com"><b>Tezos</b></a> </Typography>),
            imgUrl: web3,
        },
        {
            title: "Frontend Dev",
            description: (<p>Redesign 5irechain&apos;s website with theme inspired from NFT, Dexas and all. You have to submit complete code for the website and not just figma Wireframing.<br /><br />Challenge by <a href="https://www.5ire.org"><b>5ire</b></a><br /><br/><b>Special Prize: </b>5ireChain will provide extra $1000 (If the project is selected by 5ireChain Judges).</p>),
            imgUrl: frontend,
        },
        {
            title: "Entrepreneurship",
            description: (<p>Develop an MVP for a peer-to-peer platform that connects Indian college students with mentors, industry experts, and potential employers. It should include discussion forums, group messaging, file-sharing, event planning, and mentor matching, as well as tools for students to showcase their skills and connect with potential employers. The platform should be user-friendly, accessible on web and mobile, scalable, and prioritise creative ideas to improve students' education and career prospects.<br /><br />Challenge by <a href="https://i2c2.tech"><b>I2C2 Team</b></a></p>),
            imgUrl: entrepreneurs,
        },
        {
            title: "Miscellaneous",
            description: "Bring your own awesome project.",
            imgUrl: misc,
        },
    ];

    return (
        <Box
            id="challenges"
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                pb: "2rem",
                backgroundColor: theme.palette.background.secondary

            }}
        >
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "1rem",
                        color: theme.palette.text.light
                    }}
                >
                    Challenges
                </Typography>
            </Slide>

            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.neutral.primary}
                sx={{
                    mt: "1rem",
                    mb: "2rem",
                }}>
                Choose your field, accept the challenge and get the trophy.
            </Typography>

            <Box className={styles.cardsList}>
                {
                    challenges.map((challenge, key) => (
                        <HoverInfoCard
                            key={key}
                            title={challenge.title}
                            description={challenge.description}
                            img={challenge.imgUrl}
                            person={false}
                            // colorTheme="linear-gradient(147deg, #FFE53B 0%, #FF2525 51%, #f00ed6 100%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}