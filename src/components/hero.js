import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import cssstyles from '../styles/crackers.module.css';

export default function Hero() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    return (
        <Box sx={{ m: '12% 0', overflow: 'hidden'}} >

            <Box className={cssstyles.pyro}>
                <Box className={cssstyles.before}></Box>
                <Box className={cssstyles.after}></Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: "2rem",
                    flexDirection: 'column',
                    zIndex: 10,
                }}
            >
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "2rem",
                        color: '#33C0F6',
                        fontSize: smallScreen? 100:250,
                        WebkitTextStroke: '3px #33C0F6',
                    }}
                >
                    I2C2
                </Typography>
                <Typography
                    variant="h4"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color={theme.palette.text.primary}
                    sx={{ maxWidth: "600px" }}
                    m={theme.spacing(1, 2)}
                >
                    Ideate Innovate Code Compete
                </Typography>

                <Typography
                    textAlign={"center"}
                    variant="body1"
                    sx={{
                        mb: 2
                    }}
                >
                    Go from Idea to Prototype with I2C2 Hackathon!
                </Typography>

                <div
                    className="apply-button"
                    data-hackathon-slug="i2c2-hackathon"
                    data-button-theme="light"
                    style={{ height: '44px', width: '312px' }}
                ></div>
            </Box>
        </Box>
    );
}
