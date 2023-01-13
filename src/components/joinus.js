import { Box, Tabs, Tab, useMediaQuery, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import banner from '../assets/logo.jpg';
import whyParticipate from '../assets/bird.png';
import crystal from '../assets/crystal.png';
import { SummaryCard } from './cards';
import { useState } from 'react';

function a11yProps(index) {
    return {
        id: `join-us-${index}`,
        'aria-controls': `join-us-tabpanel-${index}`,
    };
}

export default function JoinUs() {

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
                p: '2% 0'
            }}
        >
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
                Join Us
            </Typography>
            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.text.primary}
                sx={{
                    mt: "1rem",
                    mb: "2rem",
                }}>
                Let&apos;s make this hackathon a success together.
            </Typography>

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
                    <StyledTab label="Speaker" {...a11yProps(0)} />
                    <StyledTab label="Mentor" {...a11yProps(1)} />
                    <StyledTab label="Campus Champs" {...a11yProps(2)} />
                </StyledTabs>

            </Box>

            <TabPanel value={value} index={0}>
                <SummaryCard
                    title={"Be an I2C2 Speaker"}
                    content={
                        "Want to share your knowledge and expertise in technology? Join us as a speaker and impart your wisdom to the next generation of tech innovators."
                    }
                    image={banner.src}
                    button={true}
                    link="https://bit.ly/i2c2CallForSpeaker"
                />
            </TabPanel>


            <TabPanel value={value} index={1}>
                <SummaryCard
                    title={"Join I2C2 as a Mentor"}
                    content={
                        "Use your expertise to shape the future of technology by mentoring young coders at I2C2. Help guide and support the next generation of hackers to reach their full potential."
                    }
                    image={whyParticipate.src}
                    button={true}
                    link="https://bit.ly/i2c2CallForMentors"
                />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <SummaryCard
                    title={"Campus Ambassador"}
                    content={
                        "Represent I2C2 as a campus ambassador and become the face of the hackathon by promoting it in your campus and encouraging students to participate and win goodies."
                    }
                    image={crystal.src}
                    button={true}
                    link="https://bit.ly/i2c2CallForCampusChamp"
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
            id={`join-us-${index}`}
            aria-labelledby={`join-us-tabpanel-${index}`}
            {...other}
        >
            {value===index&&children}
        </div>
    );
}