import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import speaker from '../assets/speaker1.jpg';
import adityaArora from '../assets/Aditya_arora.jpeg';
import unnatiChhabra from '../assets/unnati_chhabra.jpeg';

export default function Speakers() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const speakers=[
        {
            title: "Aditya Arora",
            description: "At the age of 25, Aditya has been recognized as a Successful Young Entrepreneur and Achiever on various National and International platforms. Currently, he is the CEO at Faad Network Pvt LTD. and an Angel Investor in 20+ Startups.",
            imgUrl: adityaArora,
            links:{
                linkedin: 'https://www.linkedin.com/in/thefaadguy',
                instagram: 'https://instagram.com/adi__arora'
            }
        },
        {
            title: "Unnati Chhabra",
            description: "Unnati is the founder of CodXCrypt, an open-source community that hosts workshops, mentorship sessions, and hackathons. They have a goal of teaching every student about open-source and have already impacted over 10,000 people through their community.",
            imgUrl: unnatiChhabra,
            links: {
                twitter: "https://twitter.com/Unnati_twts",
                linkedin: "https://www.linkedin.com/in/unnati-chhabra-"
            }
        },
        {
            title: "Mayank Rajvansh",
            description: "UI/ UX Designer",
            imgUrl: speaker,
            links: {
                github: "https://github.com/blaze2004",
                twitter: "https://twitter.com/@blaze06112004",
                linkedin: "https://linkedin.com/blaze2004"
            }
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
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: '2px #999',
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
                            links={speaker.links}
                        />
                    ))
                }
            </Box>
        </Box>
    );
}