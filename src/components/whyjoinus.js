import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { WhyUsCard } from './cards';
import { useTheme } from '@mui/material/styles';
import Sessions from '../assets/sessions.png';
import Support from '../assets/support.png';
import Nft from '../assets/nft.png';
import Project from '../assets/project.png';
import Learn from '../assets/learn.png';
import Intern from '../assets/intern.png';

export default function WhyJoinUs() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const points=[
        {
            icon: Sessions,
            title: "Informative & Interactive Session"
        },
        {
            icon: Support,
            title: "Mentorship Support"
        },
        {
            icon: Nft,
            title: "NFT's, Certificates  & Swags"
        },
        {
            icon: Project,
            title: "Project Building Experience"
        },
        {
            icon: Learn,
            title: "Learn, Build & Participate"
        },
        {
            icon: Intern,
            title: "Internship & PPO Opportunities"
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: theme.palette.text.primary
            }}
        >
            <Box sx={{ maxWidth: '1000px' }}>
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "2rem",
                        background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Why Join Us?
                </Typography>
                <Box sx={{ background: 'grey' }}>
                    <Box className={styles.cardsListBorder}>
                        {
                            points.map((info, key) => (
                                <WhyUsCard {...info} key={key} />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}