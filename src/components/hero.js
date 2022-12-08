import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import YouTube from 'react-youtube';

export default function Hero() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    const opts={
        height: '390',
        width: smallScreen? '400':'600',
        playerVars: {
            autoplay: 0, //to be changed to 1
            controls: 0,
            loop: 1,
            modestbranding: 1,
        },
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', mb: "2rem", flexDirection: 'column' }}>
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "2rem",
                        background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
                        // background: '-webkit-linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Ideate Innovate Code Compete
                </Typography>
                <Typography
                    textAlign={"justify"}
                    fontSize={"large"}
                    color={theme.palette.text.primary}
                    sx={{ maxWidth: "600px" }}
                    mb="1rem"
                >
                    I2C2 is a Hackathon organized by Code8, Befikra &amp; Codedu. It is a 24-hour fully online, students-focused hackathon where you'll delve into your curiosities, learn something new, and build real working stuff. The event starts with showcasing your idea and then coding it as well as competing with others.
                </Typography>

                <Button variant="contained" sx={{ borderRadius: '1rem', background: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)' }}>Register</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:"center", mb: "2rem", mt: "2rem" }}>
                <Box sx={{ backgroundColor: theme.palette.neutral.black, borderRadius: '1rem', width: 'max-content', padding: '5px', height: '400px', width: smallScreen? '400px':'600px' }}>
                    <YouTube
                        title='I2C2 Teaser Video'
                        videoId='7oEQgzMTwi8'
                        opts={opts}
                        onReady={() => { }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
