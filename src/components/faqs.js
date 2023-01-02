import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Faqs() {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const [expanded, setExpanded]=useState(false);

    const handleChange=(panel) => (event, isExpanded) => {
        setExpanded(isExpanded? panel:false);
    };

    const faqs=[
        {
            summary: "What is a Hackathon?",
            description: "A hackathon is social coding event where programmers, designers, and developers collaborate to solve a problem and compete for cash prizes. It's one part party, one part work-your-butt-off overnight battle against the clock and the competition."
        },
        {
            summary: "Who can participate?",
            description: "Everyone is welcome to participate, be it, students, professionals, or aliens from a different planet!"
        },
        {
            summary: "Are there any fees for I2C2?",
            description: "No. You are not required to make any payments to anyone. It is entirely free to all."
        },
        {
            summary: "Can we form a team?",
            description: "Yes, it is required that each participant be a part of a team. Participants may form teams of 4 participants from the same institution/university. Every squad is required to include at least one female player. Each participant must belong to a single team and submit a single project."
        },
        {
            summary: "Can we work on old or ongoing projects?",
            description: "Yes. You can bring your old projects, but you will be judged on the features you add during the hackathon."
        },
        {
            summary: "How do I know my registration is confirmed and when to start the development phase?",
            description: "The organizing team will approve and confirm your participation. Shortlisted teams will receive a confirmation email and it will reflect on the user dashboard."
        },
        {
            summary: "Have more questions?",
            description: (<Typography>Join our <Link href="https://discord.com" style={{ textDecoration: 'none', color: '#21D4FD' }}>Discord Community</Link> Get in touch with a bigger community and ask any further queries you may have. Looking forward to welcoming you.</Typography>)
        }
    ];

    return (
        <Box id="faq" sx={{ maxWidth: '800px', mb: '2rem' }}>
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "2rem",
                    background: 'linear-gradient(180deg, #215dff 0%, #21D4FD 100%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: '2px white',
                }}
            >
                Frequently Asked Questions
            </Typography>
            {
                faqs.map((faq, key) => (
                    <StyledAccordion key={key} summary={faq.summary} panelnum={`panel${key+1}`} expanded={ expanded} handleChange={handleChange} >
                        {faq.description}
                    </StyledAccordion>
                ))
            }
        </Box>
    );
}

function StyledAccordion({ children, summary, panelnum , expanded, handleChange}) {
    const theme=useTheme();

    return (
        <Accordion expanded={expanded===panelnum} onChange={handleChange(panelnum)} sx={{ background: '#27364D' }}>
            <AccordionSummary expandIcon={<ArrowDropDownCircleOutlined sx={{ color: theme.palette.text.primary }} />}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}