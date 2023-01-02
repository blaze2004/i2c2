import { Box, useMediaQuery, Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Hero from '../src/components/hero';
import Navbar from '../src/components/navbar';
import Faqs from '../src/components/faqs';
import Footer from '../src/components/footer';
import AboutHackathon from '../src/components/aboutHackathon';
import Challenges from '../src/components/challenges';
// import banner from '../src/assets/mountains.png';
import banner from '../src/assets/hero-bg.png';
import Speakers from '../src/components/speakers';
import Mentors from '../src/components/mentors';
import Schedule from '../src/components/schedule';
import Sponsors from '../src/components/sponsors';
// import { useEffect } from 'react';
import Rewards from '../src/components/rewards';
import WhyJoinUs from '../src/components/whyjoinus';
import AboutUs from '../src/components/aboutus';
import bgMesh from '../src/assets/light_sky_mesh.jpg';

export default function Home() {
  const theme=useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2rem',
          backgroundColor: '#04326a',
          backgroundImage: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box>
          <Navbar />
          <Hero />
        </Box>
      </Box>

      <AboutHackathon />
      <WhyJoinUs />
      <Challenges />
      <Rewards />
      <Schedule />
      <Sponsors />
      <Box
        sx={{
          backgroundColor: '#fff',
          backgroundImage: `url(${bgMesh.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Speakers />
        <Mentors />
      </Box>

      <Box
        sx={{
          flexDirection: 'column',
          backgroundColor: theme.palette.neutral.black,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Faqs />
        <AboutUs />
      </Box>

      <Box>
        <Footer />
      </Box>
      <Fab
        variant="extended"
        // color="green"
        aria-label="add"
        onClick={() => window.open("https://chat.whatsapp.com/KtuB2CpU6EH9Sku2xV2igA", '_blank', 'noopener,noreferrer')}
        sx={{
          position: 'fixed',
          bottom: 48,
          right: 16,
          background: '#25D366'
        }}>
        <WhatsApp sx={{ mr: 1 }} />
        Join WhatsaApp Group
      </Fab>
    </Box>
  )
}