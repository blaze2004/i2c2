import styles from '../styles/Home.module.css';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { RewardsCard } from './cards';
import gold from '../assets/trophy.png';
import silver from '../assets/trophy2.png';
import bronze from '../assets/trophy3.png';
// import bgMesh from '../assets/yelllow_red_purple_mesh.jpg';

export default function Rewards() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const mobileScreen=useMediaQuery('(max-width: 600px)');

    const rewardsData=[
        {
            medal: 'Silver',
            img: silver,
            position: 'SECOND PLACE',
            cash: '₹ 5,000',
            prizes: [
                'Cash Prize: ₹5k',
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc.",
                "* You can see special prizes for a challenge in the challenge section."
            ]
        },
        {
            medal: 'Gold',
            img: gold,
            position: 'FIRST PLACE',
            cash: '₹ 10,000',
            prizes: [
                'Cash Prize: ₹10k',
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc.",
                "* You can see special prizes for a challenge in the challenge section."
            ]
        },
        {
            medal: 'Bronze',
            img: bronze,
            position: 'THIRD PLACE',
            cash: '₹ 2,000',
            prizes: [
                'Cash Prize: ₹2k',
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc.",
                "* You can see special prizes for a challenge in the challenge section."
            ]
        },

    ];

    const rewardsMobile=[rewardsData[1], rewardsData[0], rewardsData[2]];

    const rewards=mobileScreen? rewardsMobile:rewardsData;

    return (
        <Box
            id="rewards"
            sx={{
                pb: '4rem',
                pt: '3rem',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: theme.palette.background.default
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
                Rewards
            </Typography>
            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.neutral.primary}
                sx={{
                    mt: "1rem",
                    mb: "2rem",
                }}>
                Great rewards for everyone!<br />
                ₹2 Lakh+ in cash prizes and goodies!
            </Typography>

            <Box className={styles.cardsList}>
                {
                    rewards.map((reward, key) => (
                        <RewardsCard key={key} reward={reward} />
                    ))
                }
            </Box>
        </Box>
    );
}