import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import speaker from '../assets/speaker1.jpg';

export default function Speakers() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const speakers=[
        {
            title: "Abhilash Jain",
            description: "Web Developer",
            imgUrl: speaker,
        },
        {
            title: "Rajesh Singh",
            description: "iOS App Developer",
            imgUrl: speaker,
        },
        {
            title: "Mayank Rajvansh",
            description: "UI/ UX Designer",
            imgUrl: speaker,
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                // backgroundColor: theme.palette.text.primary
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    background: 'linear-gradient(114deg, #FF3CAC 0%, #784BA0 70%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Speakers
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
                Get to know the speakers of this amazing Hackathon.
            </Typography>

            <Box className={styles.cardsList}>
                {
                    speakers.map((speaker, key) => (
                        <HoverInfoCard
                            key={key}
                            title={speaker.title}
                            description={speaker.description}
                            img={speaker.imgUrl}
                            person={true}
                            colorTheme="linear-gradient(114deg, #FF3CAC 0%, #784BA0 70%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}