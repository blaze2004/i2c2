import styles from '../styles/Home.module.css';
import { Box, Slide, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import health from '../assets/1health.png';
import edu from '../assets/2education.png';
import environ from '../assets/3environment.png';
import web3 from '../assets/4web3.jpg';
import sports from '../assets/5sports.jpg';
import misc from '../assets/6Miscel.jpg';
// import bgMesh from '../assets/red_yellow_mesh.jpg';

export default function Challenges() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const challenges=[
        {
            title: "Health",
            description: "How will you solve the problems in health awareness for teenagers?",
            imgUrl: health,
        },
        {
            title: "Education",
            description: "How will you solve problems in the education sector based upon NEP using technology?",
            imgUrl: edu,
        },
        {
            title: "Environment",
            description: "How will you solve the problems in the environment sector in the post - covid world using the latest technologies?",
            imgUrl: environ,
        },
        {
            title: "Web3 Accessibility",
            description: "How can we make web3 space more accessible & improve the user onboarding experience?",
            imgUrl: web3,
        },
        {
            title: "Sports",
            description: "How can you contribute towards Aatmanirbhar Bharat and the growing sports culture of India?",
            imgUrl: sports,
        },
        {
            title: "Miscellaneous",
            description: "",
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
                // backgroundColor: theme.palette.text.primary,
                // backgroundImage:'linear-gradient(0deg, #8EC5FC 0%, #E0C3FC 40%, #ffffff 82%)'
                // backgroundImage: `url(${bgMesh.src})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                backgroundColor: 'hsla(196,92%,53%,1)',
                backgroundImage: "radial-gradient(at 7% 14%, hsla(333,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 13% 76%, hsla(180,100%,65%,1) 0px, transparent 50%),\
                radial-gradient(at 88% 83%, hsla(36,100%,75%,1) 0px, transparent 50%),\
                radial-gradient(at 91% 8%, hsla(194,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 35% 87%, hsla(146,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 98% 5%, hsla(287,100%,61%,1) 0px, transparent 50%),\
                radial-gradient(at 88% 45%, hsla(246,100%,73%,1) 0px, transparent 50%),\
                radial-gradient(at 45% 83%, hsla(24,100%,62%,1) 0px, transparent 50%)"

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
                        background: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 51%, #f00ed6 100%)',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Challenges
                </Typography>
            </Slide>

            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.neutral.black}
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
                            colorTheme="linear-gradient(147deg, #FFE53B 0%, #FF2525 51%, #f00ed6 100%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}