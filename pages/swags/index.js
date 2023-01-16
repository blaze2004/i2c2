import { Box, Fab, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../../src/components/navbar';
import Hero from '../../src/components/hero';

const index = () => {
    const smallScreen=useMediaQuery('(max-width: 650px');
  return (
    <div>
        <Box>
            <Navbar />
            <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        color: '#33C0F6',
                        fontSize: smallScreen? 100:250,
                        WebkitTextStroke: '3px #33C0F6',
                    }}
                >
                   Swags
                </Typography>
            <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "-18.1rem",
                        mr: "2rem",
                        color: 'transparent',
                        fontSize: smallScreen? 10:250,
                        WebkitTextStroke: '3px #33C0F6',
                    }}
                >
                   Swags
                </Typography>

        </Box>
    </div>
  )
}

export default index
