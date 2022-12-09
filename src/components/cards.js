import { Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function HoverInfoCard({ title, description, img, colorTheme }) {
    const theme=useTheme();
    const mobileScreen=useMediaQuery('(max-width: 500px)');
    return (
        <Box
            sx={{
                background: 'transparent',
                width: mobileScreen? '280px': '400px',
                height: '300px',
                perspective: '1000px',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d',
                    ":hover": {
                        transform: 'rotateY(180deg)',
                    }
                }}
            >
                <Box sx={{
                    borderRadius: '2rem',
                    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                }}>
                </Box>
                <Box
                    sx={{
                        borderRadius: '2rem',
                        background: colorTheme||'linear-gradient(to right, #f284c3, #d574bb, #b865b3, #9957aa, #784ba0)',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundSize: '100% 100%',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography fontWeight={"bold"} variant={"h3"} gutterBottom>{title}</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Box>
        </Box>
    );
}