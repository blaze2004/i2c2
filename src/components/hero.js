import { Box, Typography } from '@mui/material';

export default function Hero() {

    return (
        <Box>
            <Typography
                textAlign={"center"}
                variant="h1"
                fontWeight={"bold"}
                sx={{
                    mt: "8rem",
                    background: '-webkit-linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Ideate-Innovate-Code-Compete
            </Typography>
            <Box id="teaser-video">
                <video src={"https://www.youtube.com/watch?v=_Z3QKkl1WyM"}></video>
            </Box>
        </Box>
    );
}
