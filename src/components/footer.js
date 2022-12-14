import { EmailRounded, FacebookRounded, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
import { Box, Typography, IconButton, Avatar, SvgIcon } from '@mui/material';
import logo from '../assets/logo.jpg';
import Discord from '../assets/discord.svg';

export default function Footer() {
    return (
        <Box sx={{ mt: '2rem' }}>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
                <Avatar alt="i2c2 logo" src={logo.src} />
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
                    {/* <IconButton>
                        <SvgIcon color="primary">
                            {discord.src}
                        </SvgIcon>
                    </IconButton> */}
                    <IconButton onClick={() => window.open("https://discord.io/i2c2-hackathon", '_blank', 'noopener,noreferrer')} >
                        <Discord color="#0093E9" />
                    </IconButton>

                </Box>
            </Box>
            <Typography textAlign="center">Copyright 2022. All rights reserved</Typography>
        </Box>
    );
}