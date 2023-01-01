import styles from '../styles/Home.module.css';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import devfolio from '../assets/Devfolio_Logo-Black.png';
import polygon from '../assets/Polygon_Logo-Dark.png';
import solana from '../assets/Solana-Colored.png';
import replit from '../assets/Replit-light-background.png';
import filecoin from '../assets/Filecoin Coloured White Text.png';
import streamyard from '../assets/StreamYard_2021.png';
import befikra from '../assets/befikra.jpeg';
import echo3d from '../assets/echo3D.png';
import Image from 'next/image';
import taskade from '../assets/logo_taskade_black.png';
import { useState } from 'react';
import cybrancee from '../assets/logo_cybrancee.png';
// import bgMesh from '../assets/light_mesh.jpg';

export default function Sponsors() {
    const [value, setValue]=useState(0);

    const handleChange=(newValue) => {
        setValue(newValue);
    };

    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const sponsors={
        premium: [
            {
                title: "DevFolio",
                imgUrl: devfolio,
                link: "https://devfolio.co/"
            },
            {
                title: "Polygon",
                imgUrl: polygon,
                link: "https://polygon.technology"
            }
        ],
        economy: [
            {
                title: "Solana",
                imgUrl: solana,
                link: "https://solana.com"
            },
            {
                title: "Filecoin",
                imgUrl: filecoin,
                link: "https://filecoin.io"
            },
            {
                title: 'replit',
                imgUrl: replit,
                link: 'https://replit.com'
            },
        ],
        standard: [

        ],
        others: [
            {
                title: "streamyard",
                imgUrl: streamyard,
                link: 'https://streamyard.com'
            },
            {
                title: "echo3d",
                imgUrl: echo3d,
                link: "https://www.echo3d.com"
            },
            {
                title: "taskade",
                imgUrl: taskade,
                link: "https://taskade.com"
            },
            {
                title: 'cybrancee',
                imgUrl: cybrancee,
                link: 'https://cybrancee.com'
            }
        ]
    };

    const communityPartners=[
        {
            title: "Befikra Community",
            imgUrl: befikra,
            link: "https://befikracommunity.in"
        },
    ];

    return (
        <Box
            id="sponsors"
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                // backgroundColor: theme.palette.text.primary,
                // backgroundImage: 'linear-gradient(180deg, #ffcc70 13%, #e64e4e 100%)',
                // backgroundImage: `url(${bgMesh.src})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                backgroundColor: "hsla(196,92%,53%,1)",
                backgroundImage: "radial-gradient(at 69% 100%, hsla(104,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 6% 99%, hsla(88,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 32% 99%, hsla(304,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 93% 99%, hsla(304,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 22% 49%, hsla(149,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 7% 6%, hsla(124,0%,100%,1) 0px, transparent 50%),\
                radial-gradient(at 100% 49%, hsla(183,100%,65%,1) 0px, transparent 50%),\
                radial-gradient(at 95% 6%, hsla(39,100%,75%,1) 0px, transparent 50%),\
                radial-gradient(at 73% 20%, hsla(197,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 52% 58%, hsla(290,100%,61%,1) 0px, transparent 50%),\
                radial-gradient(at 63% 72%, hsla(249,100%,73%,1) 0px, transparent 50%),\
                radial-gradient(at 38% 67%, hsla(27,100%,62%,1) 0px, transparent 50%)"

            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    // color: 'transparent',
                    background: 'linear-gradient(300deg, #21D4FD 0%, #B721FF 73%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: '2px #999',
                }}
            >
                Sponsors &amp; Partners
            </Typography>

            <Box sx={{ justifyContent: 'space-around', display: 'flex', flexDirection: smallScreen? 'column':'row', alignItems: 'center', width: 'inherit' }}>
                <Button variant="contained" sx={{ borderRadius: '2rem', fontSize: 25, m: 2 }} onPointerDown={() => handleChange(0)} >Our Sponsors</Button>
                <Button variant="contained" sx={{ borderRadius: '2rem', fontSize: 25, m: 2 }} onPointerDown={() => handleChange(1)} >Community Partners</Button>
            </Box>

            <LogoGroup value={value} index={0}>
                <Box
                    sx={{
                        mt: '2rem',
                        p: '1rem 2rem',
                        display: 'flex',
                        flexDirection: smallScreen? 'column':'row',
                    }}
                >
                    <Typography variant="h4" color="#4d4c4c" sx={{ m: 1 }}>
                        Interested in Sponsoring
                    </Typography>
                    <Button
                        variant='contained'
                        onClick={() => window.open("mailto:contact.i2c2@gmail.com?subject=Regarding%20Sponsoring%20I2C2%20Hackathon%20&body=Hi%20there%20%F0%9F%91%8B%2C%0D%0AHope%20you%20are%20having%20a%20great%20day.%0D%0A%0D%0AJust%20visited%20your%20hackathon%20website%20and%20got%20excited%20to%20know%20more%20about%20this.%0D%0AWe%20at%20%5BOragnisation%5D%20would%20like%20to%20sponsor%20your%20hackathon.%0D%0ABefore%2C%20that%20let%20us%20know%20more%20about%20the%20hackathon%20you%20are%20organising.%0D%0A%0D%0AWaiting%20for%20your%20reply%20!%0D%0A%5BOtrganisation%5D", '_blank', 'noopener,noreferrer')}
                        sx={{ borderRadius: '1rem', m: 1, fontSize: 'large' }}
                    >
                        Sponsor Us
                    </Button>
                </Box>
                <SponsorGroup title={"Premium Sponsors"} sponsors={sponsors.premium} />
                <SponsorGroup title={"Economy Sponsors"} sponsors={sponsors.economy} />
                <SponsorGroup title={"Standard Sponsors"} sponsors={sponsors.standard} />
                <SponsorGroup title={"Digital Sponsors"} sponsors={sponsors.others} />
            </LogoGroup>

            <LogoGroup value={value} index={1} >
                <Box
                    sx={{
                        mt: '2rem',
                        p: '1rem 1rem',
                        display: 'flex',
                        flexDirection: smallScreen? 'column':'row',
                    }}
                >
                    <Typography variant="h4" color="#4d4c4c" sx={{ m: 1 }}>
                        Become a partner
                    </Typography>
                    <Button
                        variant='contained'
                        onClick={() => window.open("mailto:contact.i2c2@gmail.com?subject=Regarding%20Partnering%20I2C2%20Hackathon%20&body=Hi%20there%20%F0%9F%91%8B%2C%0D%0AHope%20you%20are%20having%20a%20great%20day.%0D%0A%0D%0AJust%20visited%20your%20hackathon%20website%20and%20got%20excited%20to%20know%20more%20about%20this.%0D%0AWe%20at%20%5BOragnisation%5D%20would%20like%20to%20partner%20with%20you%20for%20the%20above%20mentioned%20hackathon.%0D%0ABefore%2C%20that%20let%20us%20know%20more%20about%20the%20hackathon%20you%20are%20organising.%0D%0A%0D%0AWaiting%20for%20your%20reply%20!%0D%0A%5BOtrganisation%5D", '_blank', 'noopener,noreferrer')}
                        sx={{ borderRadius: '1rem', m: 1, fontSize: 'large' }}
                    >
                        Mail us
                    </Button>
                </Box>
                <Box className={styles.cardsList}>
                    {
                        communityPartners.map((data, key) => (
                            <Box
                                key={key}
                                sx={{
                                    m: '5px',
                                    transition: "0.3s",
                                    borderRadius: '1rem',
                                    padding: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    // boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                        // transform: "translateY(-3px)",
                                        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                                    },
                                }}
                            >
                                <a href={data.link} target="_blank" rel="noreferrer">
                                    <Image src={data.imgUrl} alt={data.title} width={312} />
                                </a>
                            </Box>
                        ))
                    }
                </Box>
            </LogoGroup>

        </Box>
    );
}


function LogoGroup({ children, value, index }) {
    return (
        value===index&&(
            children
        )
    );
}

function SponsorGroup({ title, sponsors }) {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    if (sponsors.length<1) {
        return;
    }
    return (
        <Box
            sx={{
                m: '2rem 1rem',
                p: '1rem 1rem',
                borderRadius: '1rem',
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h3":"h2"}
                fontWeight={"bold"}
                sx={{
                    mb: "1rem",
                    background: 'linear-gradient(300deg, #21D4FD 0%, #B721FF 73%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    // color: 'transparent',
                    // backgroundImage: 'url(https://media.giphy.com/media/l4FGmfnKZRGwtJ4v6/giphy.gif)',
                    // backgroundPosition: 'center',
                    // WebkitBackgroundClip: 'text'
                }}
            >
                {title}
            </Typography>
            <Box className={styles.cardsList}>
                {
                    sponsors.map((data, key) => (
                        <Box
                            key={key}
                            sx={{
                                m: '5px',
                                transition: "0.3s",
                                borderRadius: '1rem',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                // boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    // transform: "translateY(-3px)",
                                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                                },
                            }}
                        >
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <Image src={data.imgUrl} alt={data.title} width={312} />
                            </a>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}