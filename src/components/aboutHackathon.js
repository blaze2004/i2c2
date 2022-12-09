import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import banner from '../assets/logo.png';

export default function AboutHackathon() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #1cb9f6, #35c3f8, #4bcef9, #60d7fa, #74e1fb, #8ce6fc, #a1eafe, #b5efff, #cef1ff, #e5f4ff, #f5f9ff, #ffffff)',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
            }}
        >

            <SummaryCard
                title={"About I2C2"}
                content={
                    "The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants."
                }
                button={true}
                image={banner.src}
            />

            <SummaryCard
                title={"Why Participate?"}
                content={
                    "You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment."
                }
                button={true}
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"}
                flexDirection="row-reverse"
            />
            <SummaryCard
                title={"Theme of Hackathon"}
                content={
                    "Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer)."
                }
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"}
            />
        </Box>
    );
}


function SummaryCard({ title, content, button, image, flexDirection }) {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const tranformValue=flexDirection&&flexDirection==="row-reverse"? '24':'-24';
    const contentPadding=flexDirection&&flexDirection==="row-reverse"? 8:1;

    return (
        <Card
            sx={{
                borderRadius: theme.spacing(8), // 8px
                transition: "0.3s",
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                width: "80%",
                position: "relative",
                maxWidth: 800,
                mt: '2rem',
                mb: '2rem',
                marginLeft: "auto",
                marginRight: 'auto',
                overflow: "initial",
                background: "#ffffff",
                display: "flex",
                flexDirection: flexDirection||'row',
                alignItems: "center",
                padding: theme.spacing(2, 0),
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
            }}
        >{
                smallScreen? null:
                    (
                        <CardMedia
                            sx={{
                                flexShrink: 0,
                                width: "40%",
                                paddingTop: "48%",
                                transform: `translateX(${tranformValue}%)`,
                                boxShadow: "4px 4px 20px 1px rgba(252, 56, 56, 0.2)",
                                borderRadius: theme.spacing(8), // 8
                                backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                                backgroundColor: theme.palette.text.primary,
                                overflow: "hidden",
                                "&:after": {
                                    content: '" "',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                                    borderRadius: theme.spacing(8), // 8
                                    opacity: 0.5
                                }
                            }}

                            image={image}
                        />
                    )
            }

            <CardContent
                sx={{
                    textAlign: smallScreen ? 'center':"left",
                    padding: theme.spacing(2,2,2,contentPadding)
                }}
            >
                <Typography fontWeight={"bold"} variant={"h3"} gutterBottom color={theme.palette.neutral.black}>
                    {title}
                </Typography>
                <Typography marginBottom={theme.spacing(8)} color={theme.palette.neutral.black}>
                    {content}
                </Typography>
                {
                    button?
                        (
                            <Button
                                sx={{
                                    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
                                    boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
                                    borderRadius: 100,
                                    padding: '10px',
                                    color: theme.palette.text.primary,
                                    backgroundSize: '300% 100%',
                                    transition: 'all .4s ease-in-out',
                                    WebkitTransition: 'all .4s ease-in-out',
                                    ":hover": {
                                        backgroundPosition: '100% 0',
                                        transition: 'all .4s ease-in-out',
                                        WebkitTransition: 'all .4s ease-in-out',
                                    },
                                    ":focus": {
                                        outline: 'none'
                                    },
                                }}
                            >
                                Register Now
                            </Button>
                        )
                        :null
                }
            </CardContent>

        </Card>
    );
}