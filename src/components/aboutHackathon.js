import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import banner from '../assets/logo.jpg';
import whyParticipate from '../assets/bird.png';
import crystal from '../assets/crystal.png';
import {SummaryCard} from './cards';

export default function AboutHackathon() {
    return (
        <Box
            sx={{
                // background: 'linear-gradient(to bottom, #1cb9f6, #35c3f8, #4bcef9, #60d7fa, #74e1fb, #8ce6fc, #a1eafe, #b5efff, #cef1ff, #e5f4ff, #f5f9ff, #ffffff)',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: 'hsla(196,92%,53%,1)',
                backgroundImage: "radial-gradient(at 8% 94%, hsla(333,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 83% 14%, hsla(180,100%,65%,1) 0px, transparent 50%),\
                radial-gradient(at 100% 46%, hsla(36,100%,75%,1) 0px, transparent 50%),\
                radial-gradient(at 91% 88%, hsla(194,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 93% 41%, hsla(146,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 98% 5%, hsla(287,100%,61%,1) 0px, transparent 50%),\
                radial-gradient(at 88% 45%, hsla(246,100%,73%,1) 0px, transparent 50%),\
                radial-gradient(at 100% 57%, hsla(24,100%,62%,1) 0px, transparent 50%)"
            }}
        >

            <SummaryCard
                title={"About I2C2 Hackathon"}
                content={
                    "The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants."
                }
                image={banner.src}
            />

            <SummaryCard
                title={"Why Participate?"}
                content={
                    "You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment."
                }
                image={whyParticipate.src}
                flexDirection="row-reverse"
            />
            <SummaryCard
                title={"Theme of Hackathon"}
                content={
                    "Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer)."
                }
                image={crystal.src}
            />
        </Box>
    );
}