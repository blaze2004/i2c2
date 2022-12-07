import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Hero from '../src/components/hero';
import Navbar from '../src/components/navbar';
import Faqs from '../src/components/faqs';

export default function Home() {
  const theme=useTheme();
  const desktop=useMediaQuery('(min-width:1200px)');
  return (
    <Box
      sx={{
        paddingTop: '2rem',
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ padding: theme.spacing(0, '18%', 0) }}>
        <Navbar />
        <Hero />
        <Faqs />
        <Faqs />
        <Faqs />
        <Faqs />
        <Faqs />
      </Box>
    </Box>

  )
}
