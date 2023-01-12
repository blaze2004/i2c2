import styles from "../styles/Home.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HoverInfoCard from "./cards";
import { red } from "@mui/material/colors";
import speaker from "../assets/speaker1.jpg";
 
export default function Mentors() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(`(max-width: 800px)`);
  const pri = "#111";
  // const mentors=[
  //     {
  //         title: "Abhilash Jain",
  //         description: "Web Developer",
  //         imgUrl: speaker,
  //         links: {
  //             github: "https://github.com/blaze2004",
  //             twitter: "https://twitter.com/@blaze06112004",
  //             linkedin: "https://linkedin.com/blaze2004"
  //         }
  //     },
  //     {
  //         title: "Rajesh Singh",
  //         description: "iOS App Developer",
  //         imgUrl: speaker,
  //         links: {
  //             github: "https://github.com/blaze2004",
  //             twitter: "https://twitter.com/@blaze06112004",
  //             linkedin: "https://linkedin.com/blaze2004"
  //         }
  //     },
  //     {
  //         title: "Mayank Rajvansh",
  //         description: "UI/ UX Designer",
  //         imgUrl: speaker,
  //         links: {
  //             github: "https://github.com/blaze2004",
  //             twitter: "https://twitter.com/@blaze06112004",
  //             linkedin: "https://linkedin.com/blaze2004"
  //         }
  //     },
  // ];
 
  return (
    <Box
      sx={{
        pb: "2rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: theme.palette.text.primary
      }}
    >
      <Typography
        textAlign={"center"}
        variant={smallScreen ? "h2" : "h1"}
        fontWeight={"bold"}
        sx={{
          mt: "5rem",
          mb: "1rem",
          background: "linear-gradient(90deg, #21D4FD 0%, #215dff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "2px #999",
        }}
      >
        Mentors
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"x-large"}
        color={theme.palette.neutral.black}
        sx={{
          mt: "1rem",
          mb: "0.4rem",
        }}
      >
        Grab the opportunity to learn from great mentors.
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"xxx-large"}
        color={pri}
        className="mentors-text"
        sx={{
          mt: "1rem",
          mb: "3rem",
          color: "white",
          background: "rgb(35, 64, 280)",
          padding: "10px 4%",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
          borderRadius: "15px",
        }}
      >
        To be announced soon{" "}
      </Typography>
 
      {/* <Box className={styles.cardsList}>
                {
                    mentors.map((mentor, key) => (
                        <HoverInfoCard
                            key={key}
                            title={mentor.title}
                            description={mentor.description}
                            img={mentor.imgUrl}
                            colorTheme="linear-gradient(90deg, #21D4FD 0%, #215dff 100%)"
                            person={true}
                            links={mentor.links}
                        />
                    ))
                }
            </Box> */}
    </Box>
  );
}