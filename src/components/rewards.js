import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { RewardsCard } from './cards';
import gold from '../assets/trophy.png';
import silver from '../assets/trophy2.png';
import bronze from '../assets/trophy3.png';

export default function Rewards() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const rewards=[
        {
            medal: 'Silver',
            img: silver,
            position: 'SECOND PLACE',
            prizes: [
                "Cash Prize ₹5,000",
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc."
            ]
        },
        {
            medal: 'Gold',
            img: gold,
            position: 'FIRST PLACE',
            prizes: [
                "Cash Prize ₹10,000",
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc."
            ]
        },
        {
            medal: 'Bronze',
            img: bronze,
            position: 'THIRD PLACE',
            prizes: [
                "Cash Prize ₹2,000",
                "Goodies & Tshirts",
                "Vouchers worth ₹5k",
                "Food Coupons, domain name etc."
            ]
        },

    ];

    return (
        <Box
            sx={{
                pb: '2rem',
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
                Rewards
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
                Great rewards for everyone!
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