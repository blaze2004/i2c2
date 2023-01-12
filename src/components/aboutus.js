import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from 'next/image';
import code8 from '../assets/code8.png';
import befikra from '../assets/befikra.jpeg';
import codedu from '../assets/codedu.png';
import { useTheme } from '@mui/material/styles';

export default function AboutUs() {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const theme=useTheme();

    const communities=[
        {
            name: 'Befikra',
            bio: 'The Befikra Community brings together technology professionals, learners, mentors, and companies from around the world to build a supportive environment for learning, growing, enhancing skills, and building projects.',
            logo: befikra,
            link: 'https://befikracommunity.in'
        },
        {
            name: 'Code8',
            bio: 'Code8 is an experience-based learning platform driven by the energy of code and creativity to churn the wheels of innovation. We are cultivating a culture of project creation to solve real-world problems and an ethos for skill mastering.',
            logo: code8,
            link: 'https://www.codeate.in'
        },
        {
            name: 'Codedu',
            bio: 'Codedu is an Open Source Community that helps tech enthusiasts to grow their self in tech. We are providing FREE Learning Content in the form of Video as well as Notes.',
            logo: codedu,
            link: 'https://codedu.tech'
        },
    ];

    return (
        <Box sx={{ mb: '2rem', }}>
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "2rem",
                    color: theme.palette.text.light
                }}
            >
                Who are We?
            </Typography>
            <Box className={styles.cardsList}>
                {
                    communities.map((community, key) => (
                        <CommunityCard {...community} key={key} />
                    ))
                }
            </Box>
        </Box>
    );
}

function CommunityCard({ name, bio, logo, link }) {
    return (
        <a href={link} style={{ textDecoration: 'none', color: '#fff' }} target="_blank" rel="noreferrer">
            <Box
                sx={{
                    background: 'transparent',
                    width: '350px',
                    height: '300px',
                    perspective: '1000px',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.8s',
                        transformStyle: 'preserve-3d',
                        ":hover": {
                            transform: 'rotateY(180deg)',
                        }
                    }}
                >
                    <Box
                        sx={{
                            p: '22px',
                            borderRadius: '1.2rem',
                            border: '2px solid #272727',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, #c7c7c72e, transparent)',
                            backgroundSize: '100%',
                            textAlign: 'justify',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            boxShadow: '0px 14px 80px rgb(58 64 186 / 17%)',
                            position: 'absolute',
                        }}>
                        <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 2 }}>
                            {name}
                        </Typography>
                        <Typography>
                            {bio}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            borderRadius: '2rem',
                            background: 'linear-gradient(to right, #f284c3, #d574bb, #b865b3, #9957aa, #784ba0)',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            wordWrap: 'break-word'
                        }}
                    >
                        <Image alt="community-logo" src={logo.src} width={80} height={80} />
                    </Box>
                </Box>
            </Box>
        </a>
    );
}