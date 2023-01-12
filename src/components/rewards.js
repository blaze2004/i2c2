import styles from "../styles/Home.module.css";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RewardsCard } from "./cards";
import gold from "../assets/trophy.png";
import silver from "../assets/trophy2.png";
import bronze from "../assets/trophy3.png";
// import bgMesh from '../assets/yelllow_red_purple_mesh.jpg';

export default function Rewards() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(`(max-width: 800px)`);
  const mobileScreen = useMediaQuery("(max-width: 600px)");

  const rewardsData = [
    {
      medal: "Gold",
      img: gold,
      position: "FIRST PLACE",
      prizes: [
        "Cash Prize: ",
        <Button
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"small"}
          key={0}
          className="rewards-text"
          sx={{
            //   mt: "1rem",
            m:"0px",
            mb: "1rem",
            mt: "-3rem",
            ml:"6rem",
            color: "white",
            background: "rgb(35, 64, 280)",
            padding: "2px 4px",
            boxShadow: "5px 5px 4px 0px rgba(0,0,0,0.65);",
            borderRadius: "10px",
          }}
        >
          To be announced soon{" "}
        </Button>,

        "Goodies & Tshirts",
        "Vouchers worth ₹5k",
        "Food Coupons, domain name etc.",
      ],
    },
    {
      medal: "Silver",
      img: silver,
      position: "SECOND PLACE",
      prizes: [
        "Cash Prize: ",
        <Button
        key={1}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"small"}
        className="rewards-text"
        sx={{
          //   mt: "1rem",
          m:"0px",
          mb: "1rem",
          mt: "-3rem",
          ml:"6rem",
          color: "white",
          background: "rgb(35, 64, 280)",
          padding: "2px 4px",
          boxShadow: "5px 5px 4px 0px rgba(0,0,0,0.65);",
          borderRadius: "10px",
        }}
      >
        To be announced soon{" "}
      </Button>,

        "Goodies & Tshirts",
        "Vouchers worth ₹5k",
        "Food Coupons, domain name etc.",
      ],
    },
    {
      medal: "Bronze",
      img: bronze,
      position: "THIRD PLACE",
      prizes: [
        "Cash Prize:",
        <Button
        key={2}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"small"}
        className="rewards-text"
        sx={{
          //   mt: "1rem",
          m:"0px",
          mb: "1rem",
          mt: "-3rem",
          ml:"6rem",
          color: "white",
          background: "rgb(35, 64, 280)",
          padding: "2px 4px",
          boxShadow: "5px 5px 4px 0px rgba(0,0,0,0.65);",
          borderRadius: "10px",
        }}
      >
        To be announced soon{" "}
      </Button>,

        "Goodies & Tshirts",
        "Vouchers worth ₹5k",
        "Food Coupons, domain name etc.",
      ],
    },
  ];

  const rewardsMobile = [rewardsData[0], rewardsData[1], rewardsData[2]];

  const rewards = mobileScreen ? rewardsMobile : rewardsData;

  return (
    <Box
      id="rewards"
      sx={{
        pb: "4rem",
        pt: "3rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: "#26004d",
        // backgroundImage: 'linear-gradient(0deg, #4158D0 1%, #8ec5fc 80%)',
        // backgroundImage: `url(${bgMesh.src})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundColor: "hsla(196,92%,53%,1)",
        backgroundImage:
          "radial-gradient(at 31% 59%, hsla(180,100%,65%,1) 0px, transparent 50%),\
                radial-gradient(at 93% 4%, hsla(36,100%,75%,1) 0px, transparent 50%),\
                radial-gradient(at 91% 8%, hsla(194,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 17% 9%, hsla(146,100%,77%,1) 0px, transparent 50%),\
                radial-gradient(at 9% 88%, hsla(287,100%,61%,1) 0px, transparent 50%),\
                radial-gradient(at 88% 86%, hsla(246,100%,73%,1) 0px, transparent 50%),\
                radial-gradient(at 72% 16%, hsla(24,100%,62%,1) 0px, transparent 50%)",
        // backgroundImage: 'radial-gradient(at 83% 7%, hsla(29, 91%, 63%, 1) 0, hsla(29, 91%, 63%, 0) 50%),radial-gradient(at 3% 98%, hsla(112, 85%, 52%, 1) 0, hsla(112, 85%, 52%, 0) 50%),radial-gradient(at 64% 41%, hsla(302, 90%, 51%, 1) 0, hsla(302, 90%, 51%, 0) 50%),radial-gradient(at 5% 39%, hsla(147, 87%, 55%, 1) 0, hsla(147, 87%, 55%, 0) 50%),radial-gradient(at 0% 23%, hsla(153, 85%, 53%, 1) 0, hsla(153, 85%, 53%, 0) 50%),radial-gradient(at 71% 8%, hsla(25, 91%, 67%, 1) 0, hsla(25, 91%, 67%, 0) 50%),radial-gradient(at 43% 62%, hsla(139, 90%, 70%, 1) 0, hsla(139, 90%, 70%, 0) 50%)'
      }}
    >
      <Typography
        textAlign={"center"}
        variant={smallScreen ? "h2" : "h1"}
        fontWeight={"bold"}
        sx={{
          mt: "5rem",
          mb: "1rem",
          background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          // background: 'linear-gradient(90deg, #21D4FD 0%, #215dff 100%)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "2px #999",
        }}
      >
        Rewards
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"x-large"}
        color={theme.palette.neutral.black}
        sx={{
          mt: "1rem",
          mb: "2rem",
        }}
      >
        Great rewards for everyone!
      </Typography>

      <Box className={styles.cardsList}>
        {rewards.map((reward, key) => (
          <RewardsCard key={key} reward={reward} />
        ))}
      </Box>
    </Box>
  );
}
