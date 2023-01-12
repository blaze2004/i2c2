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
import entrepreneurs from "../assets/entrepreneurship.jpg";
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
            description: "One of the main problems facing K-12 education is the achievement gap between low-income and minority students and their more affluent and non-minority peers. This gap is often the result of a lack of access to quality education and resources, and it can lead to significant disparities in educational outcomes and opportunities. Other issues facing K-12 education include inadequate funding, under-qualified teachers, and large class sizes. These factors can make it difficult for schools to provide students with the individualized attention and support they need to succeed.",
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
            description: "One of the main problems facing the e-sports industry is the lack of regulation and standardization. Because e-sports is a relatively new and rapidly evolving industry, there are few established rules and guidelines for teams, players, and organizations to follow. This can lead to confusion and inconsistencies in how competitions are run, and can make it difficult for e-sports to be taken seriously as a legitimate form of competition. Another problem is the lack of clear revenue-sharing models, many professional e-sports players are not making a living wage, this lack of revenue sharing also makes it difficult to form a sustainable business model for teams, organizations, and investors. Another problem facing the e-sports industry is the lack of infrastructure and support for players. Many professional e-sports players are not provided with the same training, resources, and support as traditional athletes, which can make it difficult for them to perform at the highest level.",
            imgUrl: sports,
        },
        {
            title: "Entrepreneurship",
            description: "India has a large and rapidly growing market for technology and internet services, but lacks a significant number of companies that can match the reach and impact of their foreign counterparts, resulting in a trade deficit in the technology sector. The absence of large, successful technology companies in India limits the opportunities for domestic entrepreneurs and engineers and reduces the incentive for foreign companies to invest in the country. This lack of a thriving technology ecosystem hinders India's economic growth, innovation, and ability to fully tap into the potential of its skilled population",
            imgUrl: entrepreneurs,
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
                            colorTheme="linear-gradient(147deg, #FFE53B 0%, #FF2525 51%, #f00ed6 100%)"
                        />
                    ))
                }
            </Box>
        </Box>
    );
}