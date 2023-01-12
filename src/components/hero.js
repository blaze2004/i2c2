import { Box, Avatar, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import devfolio from '../assets/Devfolio_Logo-White.png';
// import YouTube from 'react-youtube';
// import { useEffect } from 'react';

export default function Hero() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');
    // const mobileScreen=useMediaQuery('(max-width: 500px)');
    // const videoWidth=mobileScreen? 300:(smallScreen? 400:600)
    // const opts={
    //     height: '390',
    //     width: videoWidth,
    //     playerVars: {
    //         autoplay: 0,
    //         controls: 0,
    //         loop: 1,
    //         modestbranding: 1,
    //     },
    // };

    // useEffect(() => {
    //     const script=document.createElement('script');
    //     script.src='https://apply.devfolio.co/v2/sdk.js';
    //     script.async=true;
    //     script.defer=true;
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);

    return (
        <Box sx={{ m: '12% 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: "2rem", flexDirection: 'column' }}>
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

            {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", mb: "3rem", mt: "2rem", background: theme.palette.background.secondary }}>
                <Box sx={{ backgroundColor: theme.palette.neutral.black, borderRadius: '1rem', width: 'max-content', padding: '5px', height: '400px', width: videoWidth+10 }}>
                    <YouTube
                        title='I2C2 Teaser Video'
                        videoId='r1qbSJUYJBM'
                        opts={opts}
                        onReady={() => { }}
                    />
                    <video muted={true} autoPlay={true} preload="auto" loop style={{ width: '360px', height: '500px' }} >
                    <source src={'/teaser.m4v'} type='video/mp4' controls={false} />
                </video>
                </Box>
            </Box> */}
        </Box>
    );
}
