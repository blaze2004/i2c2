import { Menu } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import { useState } from "react";
import logo from '../assets/logo.png';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen]=useState(false);
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const handleDrawerToggle=() => {
        setDrawerOpen(!drawerOpen);
    };

    const registerButton=(
        <Button
            variant="contained"
            sx={{
                borderRadius: '50px',
                // margin: '20px',
                // height: '55px',
                textAlign: 'center',
                border: 'none',
                backgroundSize: '300% 100%',
                boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)',
                backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)',
                transition: 'all .4s ease-in-out',
                WebkitTransition: 'all .4s ease-in-out',
                ":hover": {
                    backgroundPosition: '100% 0',
                    transition: 'all .4s ease-in-out',
                    WebkitTransition: 'all .4s ease-in-out',
                },
                ":focus": {
                    outline: 'none'
                },
            }}
        >
            Register
        </Button>
    );

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
                <Avatar alt="i2c2 logo" src={logo.src} />
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
                variant={"text"}
                onPointerDown={() => router.push(href)}
                sx={{ borderRadius: '1rem', color: isActive? theme.palette.text.secondary:theme.palette.text.primary }}
            >
                {children}
            </Button>
        </>
    );
}