import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Hero from '../src/components/hero';
import Navbar from '../src/components/navbar';
import Faqs from '../src/components/faqs';
import Footer from '../src/components/footer';
import AboutHackathon from '../src/components/aboutHackathon';

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
          backgroundImage: "url('/hero-bg.png')",
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

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Faqs />
          <Faqs />
          <Faqs />
          <Faqs />
          <Faqs />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.neutral.black,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '1rem',
        }}
      >
        <Footer />
      </Box>
    </Box>

  )
}
