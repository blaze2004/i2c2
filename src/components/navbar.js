import { Avatar, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";

export default function Navbar() {
    const desktop=useMediaQuery(`(min-width: 1200px)`);
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundImage: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )`,
            borderRadius: '1rem',
            padding: '0.2rem 1rem',
            transition: '0.32s ease-in-out',
        }}>
            <Avatar alt="i2c2 logo" src={'/logo.png'} />
            <Box>
                <NavbarLink href="/#challenges">Challenges</NavbarLink>
                <NavbarLink href="/#rewards">Rewards</NavbarLink>
                <NavbarLink href="/#schedule">Schedule</NavbarLink>
                <NavbarLink href="/#sponsors">Sponsors</NavbarLink>
                <NavbarLink href="/#faq">FAQ</NavbarLink>
            </Box>
            <Button variant="contained" sx={{ borderRadius: '1rem' }}>Register</Button>
        </Box>
    );
}

function NavbarLink({ children, href }) {
    const router=useRouter();
    const theme=useTheme();
    const isActive=router.asPath===href;
    return (
        <Button
            variant="text"
            onPointerDown={() => router.push(href)}
            sx={{ borderRadius: '1rem', color: isActive? theme.palette.text.primary:theme.palette.secondary.main }}
        >
            {children}
        </Button>
    );
}