import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import YouTube from 'react-youtube';

export default function Hero() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');
    const mobileScreen=useMediaQuery('(max-width: 500px)');
    const videoWidth=mobileScreen? 300:(smallScreen? 400:600)
    const opts={
        height: '390',
        width: videoWidth,
        playerVars: {
            autoplay: 0, //to be changed to 1
            controls: 0,
            loop: 1,
            modestbranding: 1,
        },
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: "2rem", flexDirection: 'column' }}>
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "2rem",
                        // background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
                        // background: 'linear-gradient(303deg, #1cb9f6 0%, #416fd0 75%)',
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent"
                    }}
                >
                    Ideate Innovate Code Compete
                </Typography>
                <Typography
                    variant="h3"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color={theme.palette.text.secondary}
                    sx={{ maxWidth: "600px" }}
                    m={theme.spacing(1, 2)}
                >
                    Go from idea to award with I2C2 Ideathon.
                    {/* I2C2 is a Hackathon organized by Code8, Befikra &amp; Codedu. It is a 24-hour fully online, students-focused hackathon where you&#39;ll delve into your curiosities, learn something new, and build real working stuff. The event starts with showcasing your idea and then coding it as well as competing with others. */}
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: 'large',
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
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", mb: "2rem", mt: "2rem" }}>
                <Box sx={{ backgroundColor: theme.palette.neutral.black, borderRadius: '1rem', width: 'max-content', padding: '5px', height: '400px', width: videoWidth+10 }}>
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
