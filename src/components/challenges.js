import styles from '../styles/Home.module.css';
import { Box, Slide, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import health from '../assets/health.png';
import edu from '../assets/education.png';
import environ from '../assets/environment.png';
import web3 from '../assets/web3.png';
import sports from '../assets/sports.png';
import misc from '../assets/miscellaneous.png';
import entrepreneurs from "../assets/entrepreneurship.png";
// import bgMesh from '../assets/red_yellow_mesh.jpg';

export default function Challenges() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const challenges=[
        {
            title: "Health",
            description: "To be announced",
            imgUrl: health,
        },
        {
            title: "Education",
            description: "To be announced",
            imgUrl: edu,
        },
        {
            title: "Environment",
            description: "To be announced",
            imgUrl: environ,
        },
        {
            title: "Web3 Accessibility",
            description: "To be announced",
            imgUrl: web3,
        },
        {
            title: "Sports",
            description: "To be announced",
            imgUrl: sports,
        },
        {
            title: "Entrepreneurship",
            description: "To be announced",
            imgUrl: entrepreneurs,
        },
        {
            title: "Miscellaneous",
            description: "To be announced",
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
                            // colorTheme="linear-gradient(147deg, #FFE53B 0%, #FF2525 51%, #f00ed6 100%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}