import { EmailRounded, FacebookRounded, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
import { Box, Typography, IconButton, Avatar, SvgIcon } from '@mui/material';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <Box sx={{ mt: '2rem' }}>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
                <Avatar alt="i2c2 logo" src={logo.src} />
                <Box sx={{ borderRadius: '1rem', backgroundColor: '#000' }}>
                    <IconButton>
                        <FacebookRounded color="primary" />
                    </IconButton>
                    <IconButton>
                        <Instagram color="primary" />
                    </IconButton>
                    <IconButton>
                        <Twitter color="primary" />
                    </IconButton>
                    <IconButton>
                        <WhatsApp color="primary" />
                    </IconButton>
                    <IconButton>
                        <EmailRounded color="primary" />
                    </IconButton>
                </Box>
            </Box>
            <Typography textAlign="center">Copyright 2022. All rights reserved</Typography>
        </Box>
    );
}