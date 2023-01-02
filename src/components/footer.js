import { EmailRounded, FacebookRounded, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
import { Box, Typography, IconButton, Avatar, useMediaQuery } from '@mui/material';
import logo from '../assets/logo.png';
import Discord from '../assets/discord.svg';

export default function Footer() {

    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const socials=(
        <Box sx={{ borderRadius: '1rem', backgroundColor: '#000' }}>
            <IconButton onClick={() => window.open("https://www.facebook.com/profile.php?id=100087475219899", '_blank', 'noopener,noreferrer')}>
                <FacebookRounded color="primary" />
            </IconButton>
            <IconButton onClick={() => window.open("https://instagram.com/i2c2hackathon", '_blank', 'noopener,noreferrer')}>
                <Instagram color="primary" />
            </IconButton>
            <IconButton onClick={() => window.open("https://twitter.com/i2c2hackathon", '_blank', 'noopener,noreferrer')}>
                <Twitter color="primary" />
            </IconButton>
            <IconButton onClick={() => window.open("https://chat.whatsapp.com/KtuB2CpU6EH9Sku2xV2igA", '_blank', 'noopener,noreferrer')}>
                <WhatsApp color="primary" />
            </IconButton>
            <IconButton onClick={() => window.open("mailto:contact.i2c2@gmail.com", '_blank', 'noopener,noreferrer')}>
                <EmailRounded color="primary" />
            </IconButton>
            <IconButton onClick={() => window.open("https://discord.io/i2c2-hackathon", '_blank', 'noopener,noreferrer')} >
                <Discord color="#0093E9" />
            </IconButton>
        </Box>
    );

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)`,
                padding: '0.8rem 2rem',
                transition: '0.32s ease-in-out'
            }}
        >
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: smallScreen? 'center':'flex-end', flexDirection: smallScreen? 'column':'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: smallScreen? 'center':'flex-start' }}>
                    <Avatar alt="i2c2 logo" src={logo.src} sx={{ width: 80, height: 80 }} />
                    {smallScreen? socials:null}
                    <Typography textAlign="left">Copyright 2022. All rights reserved</Typography>
                </Box>
                {smallScreen? null:socials}
            </Box>
        </Box>
    );
}