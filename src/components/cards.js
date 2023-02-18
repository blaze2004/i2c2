import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import {
    Typography,
    Box,
    useMediaQuery,
    IconButton,
    Button,
    Dialog,
    Divider,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Card,
    CardContent,
    CardMedia
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
// import { useRouter } from "next/router";
import Image from 'next/image';
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
    const { github, twitter, linkedin, instagram }=links;

    const challengeDetailBox=(
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
    );

    return (
        <Box
            sx={{
                background: 'transparent',
                width: mobileScreen? '280px':'400px',
                height: '350px',
                perspective: '1000px',
                overflow: 'hidden',
                backgroundImage: `url(${img.src})`,
                backgroundSize: person? 'cover':(mobileScreen? '100% 100%':'cover'),
                // backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '2rem',
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    ":hover": {
                        transform: 'translateY(-350px)',
                    }
                }}
            >
                <Box
                    sx={{
                        borderRadius: '2rem',
                        background: colorTheme||'linear-gradient(90deg, #21D4FD 0%, #215dff 100%)',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        // WebkitBackfaceVisibility: 'hidden',
                        // backfaceVisibility: 'hidden',
                        transform: 'translateY(350px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        wordWrap: 'break-word',
                        p: 2
                    }}
                >
                    <Typography fontWeight={"bold"} variant={"h4"} gutterBottom>{title}</Typography>
                    {/* <Typography sx={{ opacity: viewProblem? 1:0 }}>{description}</Typography> */}
                    {
                        person? (
                            <>
                                {description}
                                <Box>
                                    {
                                        github===undefined? null:
                                            (
                                                <IconButton onPointerDown={() => window.open(github, '_blank', 'noopener,noreferrer')} >
                                                    <GitHub />
                                                </IconButton>
                                            )
                                    }
                                    {
                                        linkedin===undefined? null:
                                            (
                                                <IconButton onPointerDown={() => window.open(linkedin, '_blank', 'noopener,noreferrer')}>
                                                    <LinkedIn />
                                                </IconButton>
                                            )
                                    }
                                    {
                                        twitter===undefined? null:
                                            (
                                                <IconButton onPointerDown={() => window.open(twitter, '_blank', 'noopener,noreferrer')}>
                                                    <Twitter />
                                                </IconButton>
                                            )
                                    }
                                    {
                                        instagram===undefined? null:
                                            (
                                                <IconButton onPointerDown={() => window.open(instagram, '_blank', 'noopener,noreferrer')}>
                                                    <Instagram />
                                                </IconButton>
                                            )
                                    }
                                </Box>
                            </>
                        ):
                            (
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" sx={{ borderRadius: '2rem', maxWidth: 'max-content' }} onClick={handleClickOpen}>
                                        View Problem Statement
                                    </Button>
                                    {challengeDetailBox}
                                </Box>
                            )
                    }
                </Box>
            </Box>
        </Box>
    );
}

export function RewardsCard({ reward }) {

    const [open, setOpen]=useState(false);

    const handleClickOpen=() => {
        setOpen(true);
    };

    const handleClose=() => {
        setOpen(false);
    };

    const theme=useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                p: 2,
                alignItems: 'center',
                background: "linear-gradient(90deg, #21D4FD 0%, #215dff 100%)",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
            }}
        >
            <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ pb: 2 }}>
                {reward.medal}
            </Typography>
            <Image src={reward.img} alt="rewards" width={250} height={250} />

            <Typography fontWeight={"bold"} variant={"h4"} gutterBottom sx={{ mt: 2 }}>{reward.cash==0? "To be announced":reward.cash}</Typography>

            <Button sx={{ borderRadius: '1rem' }} variant={'contained'} onClick={handleClickOpen}>More Prizes</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color={theme.palette.neutral.black}>
                    Prizes for {reward.medal} Medallist
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color={theme.palette.neutral.black}>
                        {
                            reward.prizes.map((prize, key) => (
                                <Box key={key} >
                                    <Typography fontSize={"large"}>
                                        {prize}
                                    </Typography>
                                    <Divider />
                                </Box>
                            ))
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}


export function WhyUsCard({ icon, title }) {

    const theme=useTheme();

    return (
        <Box
            sx={{
                p: 2,
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                ':hover': {
                    filter: 'blur(0.5px)',
                    color: theme.palette.text.secondary
                }
            }}
        >
            <Image src={icon} width={50} alt="why join us" height={50} />
            <Typography fontWeight={"bold"} variant={"h4"} gutterBottom>{title}</Typography>
        </Box>
    );
}

export function SummaryCard({ title, content, button, image, flexDirection="row-reverse", link="" }) {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const tranformValue=flexDirection&&flexDirection==="row-reverse"? '24':'-24';
    const contentPadding=flexDirection&&flexDirection==="row-reverse"? 8:1;

    return (
        <Card
            sx={{
                borderRadius: theme.spacing(8), // 8px
                transition: "0.3s",
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                width: "80%",
                position: "relative",
                maxWidth: 1000,
                mt: '2rem',
                mb: '2rem',
                marginLeft: "auto",
                marginRight: 'auto',
                overflow: "initial",
                background: "#ffffff",
                display: "flex",
                flexDirection: flexDirection||'row',
                alignItems: "center",
                padding: theme.spacing(2, 0),
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
            }}
        >{
                smallScreen? null:
                    (
                        <CardMedia
                            sx={{
                                flexShrink: 0,
                                width: "40%",
                                paddingTop: "48%",
                                transform: `translateX(${tranformValue}%)`,
                                boxShadow: "4px 4px 20px 1px rgba(252, 56, 56, 0.2)",
                                borderRadius: theme.spacing(8), // 8
                                backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
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
                                    opacity: 0.5
                                }
                            }}

                            image={image}
                        />
                    )
            }

            <CardContent
                sx={{
                    textAlign: smallScreen? 'center':"left",
                    padding: theme.spacing(2, 2, 2, smallScreen? 2:contentPadding)
                }}
            >
                <Typography fontWeight={"bold"} variant={"h3"} gutterBottom color={theme.palette.neutral.black}>
                    {title}
                </Typography>
                <Typography marginBottom={theme.spacing(8)} color={theme.palette.neutral.black}>
                    {content}
                </Typography>
                {
                    button? (
                        <Button
                            variant="contained"
                            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                            sx={{
                                textTransform: 'none',
                                borderRadius: '1.5rem',
                                background: theme.palette.background.default,
                                fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                                fontSize: theme.typography.pxToRem(15),
                                marginRight: theme.spacing(1),
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-selected': {
                                    color: '#fff',
                                },
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'rgba(100, 95, 228, 0.32)',
                                },
                            }}
                        >
                            Join Now
                        </Button>
                    ):null
                }
            </CardContent>

        </Card>
    );
}