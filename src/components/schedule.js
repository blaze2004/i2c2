import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';

export default function Schedule() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const steps=[
        {
            text: 'Hackathon starts along with the idea phase',
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
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: theme.palette.text.primary
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    background: 'linear-gradient(303deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Schedule
            </Typography>
            {/* <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.neutral.black}
                sx={{
                    mt: "1rem",
                    mb: "2rem",
                }}>
            </Typography> */}

            <Box>
                <Timeline position="alternate">
                    {
                        steps.map((step, key) => (
                            <TimelineItem key={key}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="#999"
                                >
                                    {step.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography
                                        textAlign={"center"}
                                        fontWeight={"bold"}
                                        fontSize={"x-large"}
                                        color={theme.palette.neutral.black}
                                        sx={{
                                            mt: "1rem",
                                            mb: "2rem",
                                        }}>
                                        {step.text}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Box>
        </Box>
    );
}