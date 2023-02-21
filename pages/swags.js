import { Box, Fab, Typography, useMediaQuery, Card, CardContent, Button, TextField } from '@mui/material';
import { UploadFile, WhatsApp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import edu from '../src/assets/2education.png';
import Badge from '../src/components/badge.js';
import { useEffect, useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { SummaryCard } from '../src/components/cards';
import githubEducation from '../src/assets/github_student_developer_pack.png';

export default function Swags() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    const [variant, setVariant]=useState('extended');
    const [scrollStatus, setScrollStatus]=useState({
        scrollDirection: null,
        scrollPos: 0,
    });

    const handleScroll=useCallback(() => {
        setScrollStatus((prev) => {
            return {
                scrollDirection:
                    document.body.getBoundingClientRect().top>prev.scrollPos
                        ? "up"
                        :"down",
                scrollPos: document.body.getBoundingClientRect().top,
            };
        });

        if (scrollStatus.scrollDirection==="down") {
            setVariant("circular");
        }
        else {
            setVariant("extended");
        }
    }, [scrollStatus.scrollDirection]);

    useEffect(() => {
        document.removeEventListener('scroll', handleScroll);
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Box>
            <Navbar />
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

            </Box>

            <BadgeBuilderCard />

            <SummaryCard
                title={"GitHub Student Developer Pack"}
                content={"GitHub Student Developer Pack is a free program for students to learn how to code and build software. It includes access to GitHub Pro, Azure for Students, and more."}
                image={githubEducation.src}
                button={true}
                buttonText={"Get yours now"}
                link={"https://education.github.com/benefits?utm_source=2023-03-19-I2C2"}
            />

            <Box sx={{ mt: 25 }}>
                <Footer />
            </Box>
            <Fab
                variant={variant}
                // color="green"
                aria-label="join whatsapp group"
                onClick={() => window.open("https://chat.whatsapp.com/KtuB2CpU6EH9Sku2xV2igA", '_blank', 'noopener,noreferrer')}
                sx={{
                    position: 'fixed',
                    bottom: 48,
                    right: 16,
                    background: '#25D366',
                    transition: 'ease-in-out'
                }}>
                <WhatsApp sx={{ mr: variant==="extended"? 1:0 }} />
                {
                    variant==="extended"? "Join WhatsApp Group":null
                }
            </Fab>
        </Box>
    )
}

export function BadgeBuilderCard() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const [name, setName]=useState("");
    const [image, setImage]=useState(edu);
    const [isDownloadable, setIsDownloadable]=useState(false);

    const badgeRef=useRef(null);

    const handleImageDownload=useCallback(() => {
        if (badgeRef.current===null) {
            return;
        }
        toPng(badgeRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link=document.createElement('a')
                link.download='i2c2-badge.png'
                link.href=dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            });

    }, [badgeRef]);

    const title="Digital Badge";
    const description="Fill your name and upload your photo to get a personalized I2C2 badge built for you only.";

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
                background: theme.palette.background.secondary,
                flexDirection: smallScreen? 'column':'row',
                alignItems: "center",
                padding: theme.spacing(2, 0),
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
            }}
        >
            <CardContent
                sx={{
                    textAlign: smallScreen? 'center':"left",
                    padding: theme.spacing(smallScreen? 2:5),
                    alignItems: smallScreen? 'center':'flex-start',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography fontWeight={"bold"} variant={"h3"} gutterBottom color={theme.palette.neutral.white}>
                    {title}
                </Typography>
                <Typography marginBottom={theme.spacing(8)} color={theme.palette.neutral.white} sx={{ maxWidth: 500 }} >
                    {description}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        maxWidth: 'fit-content'
                    }}
                >
                    <TextField
                        required
                        label='Your Name'
                        value={name}
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                        inputProps={{ maxLength: 20 }}
                        sx={{
                            background: theme.palette.background.secondary,
                            outline: 'none',
                        }}
                    />

                    <Button
                        variant="contained"
                        startIcon={<UploadFile />}
                        sx={{
                            textTransform: 'none',
                            borderRadius: '1.5rem',
                            position: 'relative',
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
                        <input
                            style={{ position: 'absolute', height: '100%', width: '100%', opacity: 0, top: 0, left: 0, zIndex: 2 }}
                            type="file"
                            placeholder='Upload Your Image'
                            accept='image/*'
                            onChange={(e) => {
                                const files=e.target.files[0];
                                const fileReader=new FileReader();
                                fileReader.readAsDataURL(files);
                                fileReader.addEventListener("load", function () {
                                    console.log(this.result);
                                    setImage(this.result);
                                    setIsDownloadable(true);
                                });
                            }}
                        />
                        <Typography>
                            Upload Your Image
                        </Typography>
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleImageDownload}
                        disabled={!isDownloadable||name.trim()==""}
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
                        Download
                    </Button>
                </Box>

            </CardContent>

            <Badge badgeRef={badgeRef} name={name.trim()==""? "Your Name":name} image={image} />

        </Card>
    );
}