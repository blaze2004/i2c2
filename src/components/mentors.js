import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import speaker from '../assets/speaker1.jpg';

export default function Mentors() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const mentors=[
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
                    background: 'linear-gradient(90deg, #21D4FD 0%, #215dff 100%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Mentors
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
                Grab the opportunity to learn from great mentors.
            </Typography>

            <Box className={styles.cardsList}>
                {
                    mentors.map((mentor, key) => (
                        <HoverInfoCard
                            key={key}
                            title={mentor.title}
                            description={mentor.description}
                            img={mentor.imgUrl}
                            colorTheme="linear-gradient(90deg, #21D4FD 0%, #215dff 100%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}