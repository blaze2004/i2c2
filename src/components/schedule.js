import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
// import bgMesh from '../assets/orange_light_mesh.jpg';

export default function Schedule() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const steps=[
        {
            text: 'Idea Deadline Approaching - Idea Phase',
            date: '10 March 2023',
        },
        {
            text: 'Idea Submission',
            date: '16 March 2023',
        },
        {
            text: 'Idea Result Announcement',
            date: '18 March 2023',
        },
        {
            text: 'UI/ UX Phase starts with a workshop',
            date: '19 March 2023',
        },
        {
            text: 'UI/ UX Phase ends',
            date: '25 March 2023',
        },
        {
            text: 'Developement Phase starts with a workshop',
            date: '26 March 2023',
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
                                        </Box>)
                                        :<TimelineDot color="primary" />
                                    }
                                    {
                                        key===9? null:(<TimelineConnector sx={{backgroundColor: '#000'}} />)
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