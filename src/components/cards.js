import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Typography, Box, useMediaQuery, IconButton, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useTheme } from '@mui/material/styles';
// import { useRouter } from "next/router";
import { useState } from 'react';

export default function HoverInfoCard({ title, description, img, colorTheme, person=false, links={} }) {

    const [open, setOpen]=useState(false);

    const handleClickOpen=() => {
        setOpen(true);
    };

    const handleClose=() => {
        setOpen(false);
    };
    const theme=useTheme();
    // const router=useRouter();
    const mobileScreen=useMediaQuery('(max-width: 500px)');
    const { github, twitter, linkedin }=links;

    return (
        <Box
            sx={{
                background: 'transparent',
                width: mobileScreen? '280px':'400px',
                height: '300px',
                perspective: '1000px'
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
                        justifyContent: 'center',
                        wordWrap: 'break-word'
                    }}
                >
                    <Typography fontWeight={"bold"} variant={"h3"} gutterBottom>{title}</Typography>
                    {/* <Typography sx={{ opacity: viewProblem? 1:0 }}>{description}</Typography> */}
                    {
                        person? (
                            <Box>
                                <IconButton onPointerDown={() => window.open(github, '_blank', 'noopener,noreferrer')} >
                                    <GitHub />
                                </IconButton>
                                <IconButton onPointerDown={() => window.open(twitter, '_blank', 'noopener,noreferrer')}>
                                    <Twitter />
                                </IconButton>
                                <IconButton onPointerDown={() => window.open(linkedin, '_blank', 'noopener,noreferrer')}>
                                    <LinkedIn />
                                </IconButton>
                            </Box>
                        ):
                            (
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" sx={{ borderRadius: '2rem', maxWidth: 'max-content' }} onClick={handleClickOpen}>
                                        View Problem Statement
                                    </Button>
                                </Box>
                            )
                    }
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" color={theme.palette.neutral.black}>
                            Problem Statement for {title} category
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText color={theme.palette.neutral.black}>
                                {description}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        </Box>
    );
}