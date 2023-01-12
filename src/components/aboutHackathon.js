import { Box, Tabs, Tab, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import banner from '../assets/logo.jpg';
import whyParticipate from '../assets/bird.png';
import crystal from '../assets/crystal.png';
import { SummaryCard } from './cards';
import { useState } from 'react';

function a11yProps(index) {
    return {
        id: `about-hackathon-${index}`,
        'aria-controls': `about-tabpanel-${index}`,
    };
}

export default function AboutHackathon() {

    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    const StyledTabs=styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    });

    const StyledTab=styled((props) => (
        <Tab disableRipple {...props} />
    ))(({ theme }) => ({
        textTransform: 'none',
        borderRadius: '1.5rem',
        background: theme.palette.background.default,
        fontWeight: smallScreen? theme.typography.fontWeightRegular: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }));

    const [value, setValue]=useState(0);

    const handleChange=(event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                background: theme.palette.background.secondary,
                p: '10% 0'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="about hackathon"
                >
                    <StyledTab label="About" {...a11yProps(0)} />
                    <StyledTab label="Why Participate?" {...a11yProps(1)} />
                    <StyledTab label="Theme" {...a11yProps(2)} />
                </StyledTabs>

            </Box>

            <TabPanel value={value} index={0}>
                <SummaryCard
                    title={"About I2C2 Hackathon"}
                    content={
                        "The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants."
                    }
                    image={banner.src}
                />
            </TabPanel>


            <TabPanel value={value} index={1}>
                <SummaryCard
                    title={"Why Participate?"}
                    content={
                        "You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment."
                    }
                    image={whyParticipate.src}
                />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <SummaryCard
                    title={"Theme of Hackathon"}
                    content={
                        "Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer)."
                    }
                    image={crystal.src}
                />
            </TabPanel>

        </Box>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other }=props;

    return (
        <div
            role="tabpanel"
            hidden={value!==index}
            id={`about-hackathon-${index}`}
            aria-labelledby={`about-tabpanel-${index}`}
            {...other}
        >
            {value===index&&children}
        </div>
    );
}