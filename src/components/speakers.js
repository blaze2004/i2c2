import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import speaker from '../assets/speaker1.jpg';
import adityaArora from '../assets/Aditya_arora.jpeg';
import naveenPal from '../assets/naveen_pal.jpeg';
import prateekNarang from '../assets/prateek_narang.jpeg';

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
            title: "Naveen Pal",
            description: "Naveen Pal is an experienced UX/UI designer with 3 years of experience in IT industry, specialized in creating intuitive and seamless technology experiences for diverse range of projects, passionate about innovation and user-friendly design.",
            imgUrl: naveenPal,
            links: {
                linkedin: "https://www.linkedin.com/in/naveen-pal-72435919a"
            }
        },
        {
            title: "Prateek Narang",
            description: (<Typography>Prateek Narang is a software engineer and professional coding instructor, ex-Google SDE and currently works at Scaler and founded, <a href='https://codingminutes.com' target="_blank" rel="noreferrer">CodingMinutes.com</a>. He mentored over 50,000 students in programming as a former co-founder at Coding Blocks.</Typography>),
            imgUrl: prateekNarang,
            links: {
                linkedin: "https://www.linkedin.com/in/prateeknarang27"
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
                    color: theme.palette.text.light
                }}
            >
                Speakers
            </Typography>
            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.text.primary}
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
                            // colorTheme="linear-gradient(114deg, #FF3CAC 0%, #784BA0 70%)"
                            links={speaker.links}
                        />
                    ))
                }
            </Box>
        </Box>
    );
}
