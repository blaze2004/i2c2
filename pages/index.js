import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Hero from '../src/components/hero';
import Navbar from '../src/components/navbar';
import Faqs from '../src/components/faqs';
import Footer from '../src/components/footer';
import AboutHackathon from '../src/components/aboutHackathon';
import Challenges from '../src/components/challenges';
import banner from '../src/assets/hero-bg.png';
import Speakers from '../src/components/speakers';
import Mentors from '../src/components/mentors';
import Schedule from '../src/components/schedule';
import Sponsors from '../src/components/sponsors';
import { useEffect } from 'react';
import Rewards from '../src/components/rewards';
import WhyJoinUs from '../src/components/whyjoinus';

export default function Home() {
  const theme=useTheme();
  const desktop=useMediaQuery('(min-width:1200px)');

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2rem',
          backgroundImage: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // position: 'sticky',
          // top: 0,
          // zIndex: -1
          // background: 'linear-gradient(0deg, #1cb9f6 0%, #4158d0 49%, #000000 100%)',
          // background: 'linear-gradient(0deg, #1cb9f6 3%, #0061a8 35%, #000000 100%)',
          // background: 'linear-gradient(0deg, #1cb9f6 0%, #4158d0 16%, #000000 100%)'
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
      <Speakers />
      <Mentors />

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
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  )
}