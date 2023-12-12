import { Avatar, Box, Button, Container, Paper, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import fist from '../../assets/fist.jpg';
import plant from '../../assets/plant.jpg';
import womanWDog from '../../assets/womanWDog.jpg';

const Home = () => {
  const [a, setA] = useState('');

  useEffect(() => {
    setA('a');
  }, []);

  const isXSmallScreen = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const isMediumScreen = useMediaQuery('(min-width:1280px)');
  const topMargin = isXSmallScreen ? 7.5 : 25;

  const images = [fist, plant, womanWDog];

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        my: topMargin,
        mr: isMediumScreen ? 5 : 0,
        ml: isMediumScreen ? 5 : 0,
      }}>
      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }}>
        <Box
          component='img'
          src={images[0]}
          sx={{
            width: { xs: '100%', sm: '100%', md: '30%' }, // Set the initial width of the image
            flex: '1 1 auto', // Allow the image to grow and shrink
            maxWidth: { md: '650px' }, // Set a maximum width on medium screens
          }}
        />
        <Box
          sx={{
            ml: { xs: 0, md: 15 },
            marginTop: { xs: 3, md: 0 },
            width: '100%',
            maxWidth: { md: isMediumScreen ? '450px' : '200px' },
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            variant='h5'
            sx={{
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              textAlign: 'center', // Add this line
              fontFamily: 'serif',
              fontSize: isMediumScreen ? 60 : 20,
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Naole's Angels Gives Back
          </Typography>
          <Typography
            sx={{
              mt: isMediumScreen ? 3 : 1,
              textAlign: 'center',
              fontFamily: 'serif',
              fontSize: isMediumScreen ? 17 : 14,
            }}>
            Working Towards A Better Future
          </Typography>
        </Box>
      </Box>

      <Paper
        sx={{
          mt: isMediumScreen ? 15 : 5,
          backgroundColor: 'white',
          mr: isMediumScreen ? 10 : undefined,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          sx={{
            color: '#397f77',
            pt: isMediumScreen ? 10 : 5,
            alignSelf: 'flex-start',
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 35 : 20,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Who We Are
        </Typography>
        <Typography
          sx={{
            color: '#397f77',
            pt: 1,
            alignSelf: 'flex-start',
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 17 : 13,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives.
          From the moment we started our work in 2000, we understood that by working together we could overcome our
          challenges much more efficiently, and that is why we ultimately decided to launch Oles Angels. We strive to
          make a positive change in all of our pursuits.
        </Typography>
        <Button
          variant='contained'
          size={isMediumScreen ? undefined : 'small'}
          sx={{ mt: isMediumScreen ? 20 : 10, mb: isMediumScreen ? 10 : 5 }}>
          {'Learn More'}
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
