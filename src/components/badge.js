import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo.png';
import Image from 'next/image';

export default function Badge({ name, image, badgeRef }) {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    return (
        <Box
            sx={{
                flexShrink: 0,
                width: 300,
                height: 300,
                paddingTop: 27.46875,
                transform: `translateX(${smallScreen? 0:24}%)`,
                boxShadow: "1px 1px 1px 5px rgba(252, 56, 56, 0.8)",
                borderRadius: theme.spacing(3), // 8
                backgroundImage: `url(${image.src? image.src:image})`,
                // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: theme.palette.text.primary,
                overflow: "hidden",
                "&:after": {
                    content: '" "',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                    borderRadius: theme.spacing(8), // 8
                    opacity: 0
                }
            }}
            ref={badgeRef}
        >
            <Box
                sx={{
                    background: "linear-gradient(90deg, #21D4FD 0%, #215dff 100%)",
                    height: 80,
                    borderRadius: '1.5rem',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>

                <Box>
                    <Typography>{name}</Typography>
                    <Typography color={"#000E20"} fontWeight="bold">I2C2 | 10th March-16 April</Typography>

                </Box>
                <Image src={logo.src} width={55} height={60} />
            </Box>

        </Box>
    );
}