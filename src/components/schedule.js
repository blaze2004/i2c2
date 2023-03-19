import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { useRouter } from "next/router";
// import bgMesh from '../assets/orange_light_mesh.jpg';

export default function Schedule() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const router=useRouter();

    const steps=[
    {
    text: 'Hackathon Begins',
    date:'10 March 2023'
    },
        {
            text: 'Select the Challenge and prepare your project idea.',
            date: '',
            extra: (<Button
                variant='contained'
                onClick={() => router.push('/I2C2_Idea_Phase_Submission_Template.pptx')}
                sx={{
                    textTransform: 'none',
                    borderRadius: '1.5rem',
                    background: theme.palette.text.light,
                    fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                    fontSize: theme.typography.pxToRem(16),
                    color: theme.palette.neutral.black,
                    // color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-selected': {
                        color: '#fff',
                    },
                    ':hover': {
                        background: theme.palette.background.default,
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '&.Mui-focusVisible': {
                        backgroundColor: 'rgba(100, 95, 228, 0.32)',
                    },
                }}
            >
                Idea Submission Template
            </Button>),
        },
        {
            text: "Submit your idea report. Also don&apos;t forget to create your metamask wallet for NFT prizes.",
            date: "",
            extra: (<Button
                variant='contained'
                onClick={() => window.open('https://forms.gle/Hz2Mdxke5rNiib9h8', '_blank', 'noopener,noreferrer')}
                sx={{
                    textTransform: 'none',
                    borderRadius: '1.5rem',
                    background: theme.palette.text.light,
                    fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                    fontSize: theme.typography.pxToRem(16),
                    color: theme.palette.neutral.black,
                    // color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-selected': {
                        color: '#fff',
                    },
                    ':hover': {
                        background: theme.palette.background.default,
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '&.Mui-focusVisible': {
                        backgroundColor: 'rgba(100, 95, 228, 0.32)',
                    },
                }}
            >
                Idea Submission Link
            </Button>),
        },
        {
            text: 'Attend sessions to get insights into ideation, design and development.',
            date: '',
        },
        {
            text: 'Stucked? Get help from mentors having industry experience.',
            date: '',
        },
        {
            text:'Join our discord server and WhatsApp group to stay updated with announcements.',
            date:''
        },
        {
            text: 'Get review on your UI design. Submit your UI design in below link if you want review over your design.',
            date: '',
            extra: (<Button

                variant='contained'

                onClick={() => window.open('https://forms.gle/Hz2Mdxke5rNiib9h8', '_blank', 'noopener,noreferrer')}

                sx={{

                    textTransform: 'none',

                    borderRadius: '1.5rem',

                    background: theme.palette.text.light,

                    fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,

                    fontSize: theme.typography.pxToRem(16),

                    color: theme.palette.neutral.black,

                    // color: 'rgba(255, 255, 255, 0.7)',

                    '&.Mui-selected': {

                        color: '#fff',

                    },

                    ':hover': {

                        background: theme.palette.background.default,

                        color: 'rgba(255, 255, 255, 0.7)',

                    },

                    '&.Mui-focusVisible': {

                        backgroundColor: 'rgba(100, 95, 228, 0.32)',

                    },

                }}

            >

                UI Design Submission Link

            </Button>),
        },
        {
            text: 'Build your solution (project)',
            date: '',
        },
        {
            text: 'Project Submission',
            date: '09 April 2023',
        },
        {
            text: 'Result Announcement (3 Winners per Theme)',
            date: '12 April 2023',
        },
        {
            text: 'Project pitch to sponsors',
            date: '13, 14 April 2023',
        },
        {
            text: 'Final Result (1 Winner per Theme)',
            date: '16 April 2023',
        },
    ];

    return (
        <Box
            id="schedule"
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: theme.palette.background.secondary
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
                Schedule
            </Typography>

            <Box>
                <Timeline position={smallScreen? "right":"alternate"}>
                    {
                        steps.map((step, key) => (
                            <TimelineItem key={key}>
                                <TimelineSeparator>
                                    {/* <TimelineDot /> */}
                                    {smallScreen?
                                        (<Box sx={{
                                            borderRadius: '2rem',
                                            transition: "0.3s",
                                            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: "280px",
                                            // filter: 'blur(5px)',
                                            "&:hover": {
                                                transform: "translateY(-3px)",
                                                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                                            },
                                        }}>

                                            <Typography
                                                sx={{ m: 'auto' }}
                                                textAlign="center"
                                                fontSize={18}
                                                color="#968"
                                            >
                                                {step.date}
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
                                                {step.text}
                                            </Typography>
                                            {step.extra}
                                        </Box>)
                                        :<TimelineDot color="primary" />
                                    }
                                    {
                                        key===9? null:(<TimelineConnector sx={{ backgroundColor: '#000' }} />)
                                    }
                                </TimelineSeparator>
                                {
                                    smallScreen?
                                        (<Box sx={{ height: '350px' }}></Box>)
                                        :(<TimelineContent sx={{
                                            borderRadius: '2rem',
                                            transition: "0.3s",
                                            boxShadow: "0px 14px 80px rgba(0,0,0,0.75)",
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // filter: 'blur(5px)',
                                            "&:hover": {
                                                transform: "translateY(-3px)",
                                                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                                            },
                                        }}>

                                            <Typography
                                                sx={{ m: 'auto' }}
                                                textAlign="center"
                                                fontSize={20}
                                                color="#968"
                                            >
                                                {step.date}
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
                                                {step.text}
                                            </Typography>
                                            {step.extra}
                                        </TimelineContent>)
                                }
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Box>
        </Box>
    );
}
