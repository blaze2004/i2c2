import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

export default function Faqs() {
    const faqs=[
        {
            summary: "What is I2C2?",
            description: "I2C2 : Ideate, Innovate, Code, Compete is an ideathon."
        },
        {
            summary: "Do I need to pay for the registration of the bootcamp ?",
            description: "No, It is free for everyone."
        },
        {
            summary: "Do I need to pay for the registration of the bootcamp ?",
            description: "No, It is free for everyone."
        }
    ];

    return (
        <Box>
            <Typography variant="h2" fontWeight={"bold"} sx={{textAlign: 'center', margin: '20px 0'}}>Frequently Asked Questions</Typography>
            {
                faqs.map((faq, key) => (
                    <StyledAccordion key={key} summary={faq.summary}>
                        {faq.description}
                    </StyledAccordion>
                ))
            }
        </Box>
    );
}

function StyledAccordion({ children, summary }) {
    const theme=useTheme();

    return (
        <Accordion sx={{ background: '#27364D' }}>
            <AccordionSummary expandIcon={<ArrowDropDownCircleOutlined sx={{ color: theme.palette.text.primary }} />}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}