import styles from '../src/styles/Home.module.css';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import sosTech from '../src/assets/sos_tech.png';
import chatraShala from '../src/assets/chatra_shala.jpeg';
import coderEvoke from '../src/assets/coders_evoke.png';
import skillShip from '../src/assets/skillship_logo.png';
import algocs from '../src/assets/algocs.jpeg';
import amitycc from '../src/assets/amity_coding_club.png';
import blockchainsrm from '../src/assets/blockchain_srm.png';
import bubbleup from '../src/assets/bubbleup.jpeg';
import codersEvoke from '../src/assets/coders_evoke.png';
import csg from '../src/assets/csg.png';
import devstation from '../src/assets/dev_station.jpeg';
import gaminggeeks from '../src/assets/gaminggeeks.png';
import inovact from '../src/assets/inovact.png';
import metaworks from '../src/assets/metaworks.jpeg';
import newtons from '../src/assets/newton_school.jpeg';
import ocd from '../src/assets/ocd.png';
import sheBuilds from '../src/assets/she_builds.png';
import web3punjab from '../src/assets/web3_punjab.jpeg';
import youngincentive from '../src/assets/young_incentive.jpeg';
import mentorle from '../src/assets/mentorle.jpeg';
import devorld from '../src/assets/devorld.jpeg';
import mesh from '../src/assets/mesh.jpeg';
import devBoard from '../src/assets/DevBoard_landscape_logo_no_bg.png';
import web3samaj from '../src/assets/web3samaj.png';
import IdcLogo from '../src/assets/idc.jpeg';

export default function Communities() {

    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const communityPartners=[
        {
            title: "DevBoard",
            imgUrl: devBoard,
            link: "https://devboard.bio.link"
        },
        {
            title: 'newtons',
            imgUrl: newtons,
            link: 'https://newtonschool.co',
        },
        {
            title: "Mentorle",
            imgUrl: mentorle,
            link: 'https://discord.gg/Fkm6sDbk'
        },
        {
            title: 'ocd',
            imgUrl: ocd,
            link: '',
        },
        {
            title: "Sos Tech Inc.",
            imgUrl: sosTech,
            link: "https://www.linkedin.com/company/sos-tech-inc/"
        },
        {
            title: "Chatra Shala",
            imgUrl: chatraShala,
            link: "https://chatrashala.com"
        },
        {
            title: "Skillship",
            imgUrl: skillShip,
            link: "https://www.linkedin.com/company/skillship-foundation/"
        },
        {
            title: "Coders Evoke",
            imgUrl: coderEvoke,
            link: "https://www.linkedin.com/company/codersevoke/"
        },
        {
            title: 'algocs',
            imgUrl: algocs,
            link: '',
        },
        {
            title: 'amitycc',
            imgUrl: amitycc,
            link: '',
        },
        {
            title: 'blockchainsrm',
            imgUrl: blockchainsrm,
            link: '',
        },
        {
            title: 'bubbleup',
            imgUrl: bubbleup,
            link: '',
        },
        {
            title: 'codersEvoke',
            imgUrl: codersEvoke,
            link: '',
        },
        {
            title: 'csg',
            imgUrl: csg,
            link: '',
        },
        {
            title: 'devstation',
            imgUrl: devstation,
            link: '',
        },
        {
            title: 'gaminggeeks',
            imgUrl: gaminggeeks,
            link: '',
        },
        {
            title: 'inovact',
            imgUrl: inovact,
            link: '',
        },
        {
            title: 'metaworks',
            imgUrl: metaworks,
            link: '',
        },
        {
            title: 'sheBuilds',
            imgUrl: sheBuilds,
            link: '',
        },
        {
            title: 'web3punjab',
            imgUrl: web3punjab,
            link: '',
        },
        {
            title: 'youngincentive',
            imgUrl: youngincentive,
            link: '',
        },
        {
            title: "Devorld",
            imgUrl: devorld,
            link: ''
        },
        {
            title: 'Mesh',
            imgUrl: mesh,
            link: ''
        },
        {
            title: 'Web3Samaj',
            imgUrl: web3samaj,
            link: 'https://web3samaj.com'
        },
        {
            title: "Ingenious Developers Community",
            imgUrl: IdcLogo,
            link: "https://linktr.ee/ingenious_devs"
        }

    ];

    return (
        <Box>
            <Box>
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "5rem",
                        mb: "1rem",
                        color: theme.palette.text.light
                    }}
                >
                    Community Partners
                </Typography>
                <SponsorGroup title={""} sponsors={communityPartners} />
            </Box>
        </Box>
    )
}


function SponsorGroup({ title, sponsors }) {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const theme=useTheme();

    if (sponsors.length<1) {
        return;
    }
    return (
        <Box
            sx={{
                m: '2rem 1rem',
                p: '1rem 1rem',
                borderRadius: '1rem',
                background: '#999',
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
                width: 'inherit'
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h4":"h2"}
                fontWeight={"bold"}
                sx={{
                    mb: "1rem",
                    color: theme.palette.text.primary
                }}
            >
                {title}
            </Typography>
            <Box className={styles.communityList}>
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
                                <Image src={data.imgUrl} alt={data.title} width={smallScreen? 200:312} />
                            </a>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}