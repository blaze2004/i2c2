import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function AboutHackathon() {
    const theme=useTheme();

    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #1cb9f6, #35c3f8, #4bcef9, #60d7fa, #74e1fb, #8ce6fc, #a1eafe, #b5efff, #cef1ff, #e5f4ff, #f5f9ff, #ffffff)',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                paddingTop: '2rem'
            }}
        >

            <Typography
                variant='h2'
                fontWeight={"bold"}
                sx={{
                    background: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Why Join Us ?
            </Typography>

            <Typography
                textAlign={"justify"}
                fontSize={"large"}
                fontWeight="bold"
                padding='1rem'
                color={theme.palette.neutral.black}
                sx={{ maxWidth: "800px" }}
            >
                The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants.
            </Typography>

            {/* <Box sx={{ borderRadius: '2rem', background: '#fff' }}>
                <Box
                    sx={{
                        background: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
                        borderBottom: "1px solid #000",
                        borderTopLeftRadius: '2rem',
                        borderTopRightRadius: '2rem',
                        padding: '1rem'
                    }}
                >

                </Box>
            </Box> */}

            <SummaryCard title='Why Join us?'>Hi</SummaryCard>

        </Box>
    );
}


function SummaryCard({ children, title }) {
    const theme=useTheme();
    return (
        <Box sx={{ borderRadius: "2rem", display: 'flex', alignItems: 'center', mb: '2rem', mt: '2rem', p: '1rem' }}>
            <Box sx={{ height: '300px', weight: '300px',  backgroundColor: 'red' }}></Box>
            <Card>
                <CardContent>
                    <Typography
                        fontWeight={"bold"}
                        fontSize={"large"}
                        color={theme.palette.neutral.black}
                    >
                        {title}
                    </Typography>
                    <Typography
                        color={theme.palette.neutral.black}
                    >
                        {children}
                    </Typography>
                </CardContent>
            </Card>

        </Box>
    );
}