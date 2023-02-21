import { Box, Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Hero from '../src/components/hero';
import Navbar from '../src/components/navbar';
import Faqs from '../src/components/faqs';
import Footer from '../src/components/footer';
import AboutHackathon from '../src/components/aboutHackathon';
import Challenges from '../src/components/challenges';
import Speakers from '../src/components/speakers';
import Mentors from '../src/components/mentors';
import Schedule from '../src/components/schedule';
import Sponsors from '../src/components/sponsors';
import Rewards from '../src/components/rewards';
import WhyJoinUs from '../src/components/whyjoinus';
import AboutUs from '../src/components/aboutus';
import JoinUs from '../src/components/joinus';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const theme=useTheme();

  const [variant, setVariant]=useState('extended');
  const [scrollStatus, setScrollStatus]=useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  const handleScroll=useCallback(() => {
    setScrollStatus((prev) => {
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top>prev.scrollPos
            ? "up"
            :"down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });

    if (scrollStatus.scrollDirection==="down") {
      setVariant("circular");
    }
    else {
      setVariant("extended");
    }
  }, [scrollStatus.scrollDirection]);

  useEffect(() => {
    document.removeEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Box>
      <Navbar />
      <Hero />
      <AboutHackathon />
      <WhyJoinUs />
      <Challenges />
      <Rewards />
      <Schedule />
      <Sponsors />
      <JoinUs />
      <Box
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
        variant={variant}
        // color="green"
        aria-label="join whatsapp group"
        onClick={() => window.open("https://chat.whatsapp.com/GWUyDCZ0qlfKqrYelHLp3t", '_blank', 'noopener,noreferrer')}
        sx={{
          position: 'fixed',
          bottom: 48,
          right: 16,
          background: '#25D366',
          transition: 'ease-in-out'
        }}>
        <WhatsApp sx={{ mr: variant==="extended"? 1:0 }} />
        {
          variant==="extended"? "Join WhatsApp Group":null
        }
      </Fab>
    </Box>
  )
}
