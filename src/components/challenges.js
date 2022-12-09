import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import health from '../assets/1health.png';
import edu from '../assets/2education.png';
import environ from '../assets/3environment.png';
import web3 from '../assets/4web3.jpg';
import sports from '../assets/5sports.jpg';
import misc from '../assets/6Miscel.jpg';

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
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: theme.palette.text.primary
            }}
        >
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