import { Menu } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen]=useState(false);
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const handleDrawerToggle=() => {
        setDrawerOpen(!drawerOpen);
    };

    const registerButton=(<Button variant="contained" sx={{ borderRadius: '1rem', background: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)' }}>Register</Button>);

    const navbarButtons=(
        <>
            <Box sx={{ display: 'flex', flexDirection: smallScreen? 'column':'row' }}>
                <NavbarLink href="/#challenges">Challenges</NavbarLink>
                <NavbarLink href="/#rewards">Rewards</NavbarLink>
                <NavbarLink href="/#schedule">Schedule</NavbarLink>
                <NavbarLink href="/#sponsors">Sponsors</NavbarLink>
                <NavbarLink href="/#faq">FAQ</NavbarLink>
                {smallScreen? registerButton:null}
            </Box>
            {smallScreen? null:registerButton}
        </>
    );

    const drawer=(
        <Box>
            {navbarButtons}
        </Box>
    );

    return (
        <Box sx={{
            backgroundImage: `linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)`,
            borderRadius: '1rem',
            padding: '0.2rem 1rem',
            transition: '0.32s ease-in-out',
            zIndex: 9999
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Avatar alt="i2c2 logo" src={'/logo.png'} />
                {
                    smallScreen?
                        (
                            <IconButton onPointerDown={handleDrawerToggle}>
                                <Menu />
                            </IconButton>
                        ):
                        (navbarButtons)
                }
            </Box>
            {
                (smallScreen&&drawerOpen)? (drawer):null
            }

        </Box>
    );
}

function NavbarLink({ children, href }) {
    const router=useRouter();
    const theme=useTheme();
    const isActive=router.asPath===href;
    return (
        <>
            <Button
                variant={isActive? "contained":"text"}
                onPointerDown={() => router.push(href)}
                sx={{ borderRadius: '1rem', color: theme.palette.text.primary }}
            >
                {children}
            </Button>
        </>
    );
}