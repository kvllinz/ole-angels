import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery } from '@mui/material';
import fist from '../../assets/fist.jpg';
import ole2 from '../../assets/Ole2.jpg';
import plant from '../../assets/plant.jpg';
import womanWDog from '../../assets/womanWDog.jpg';
import { useState, useEffect } from 'react';
import ContentPaper from '../../Components/ContentPaper/ContentPaper';
import StyledButton from '../../Components/StyledButton/StyledButton';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../commonSlice';

const Home = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after a short delay (you can adjust the delay)
    const timeout = setTimeout(() => {
      setIsImageVisible(true);
    }, 500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const dispatch = useDispatch();

  const isXSmallScreen = useMediaQuery('(max-width:600px)');
  // const isSmallScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const isMediumScreen = useMediaQuery('(min-width:1280px)');
  // const isIpadScreen = useMediaQuery('');
  const topMargin = isXSmallScreen ? 7.5 : 25;

  const images = [
    { img: fist, words: 'Local Empowerment', subWords: ' Change for the Better' },
    { img: plant, words: 'Economic Development', subWords: 'Making Change Possible' },
    { img: womanWDog, words: 'Capacity Building', subWords: 'Empowering Others' },
  ];

  const resourcesGuidlines = [
    {
      id: '01.',
      title: 'How We Help',
      words:
        "Our grants are intended to offset the costs associated with each child's recovery that are not covered by medical insurance.",
    },
    {
      id: '02.',
      title: 'Apply for a Grant',
      words:
        'Read through our requirements to learn if you are eligible for assistance, and how to start the  application process.',
    },
    {
      id: '03.',
      title: 'Recieve Funding',
      words: 'If selected, our team will work with you and your providers to pay your medical providers directly.',
    },
  ];

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        mt: topMargin,
        mb: 3,
      }}>
      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }}>
        <Box
          component='img'
          src={ole2}
          sx={{
            width: { xs: '100%', sm: '100%', md: '30%' }, // Set the initial width of the image
            flex: '1 1 auto', // Allow the image to grow and shrink
            maxWidth: { md: '750px' }, // Set a maximum width on medium screens
            opacity: isImageVisible ? 1 : 0,
            transition: 'opacity 5s ease-in-out',
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
            Ole's Angels Gives Back
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
      <ContentPaper
        title='Who We Are'
        content='Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives.
        From the moment we started our work in 2000, we understood that by working together we could overcome our
        challenges much more efficiently, and that is why we ultimately decided to launch Oles Angels. We strive to make
        a positive change in all of our pursuits.'
      />
      <Box
        sx={{
          mt: 15,
          width: '100%',
          maxWidth: { md: isMediumScreen ? '450px' : '200px' },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Typography
          sx={{
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 40 : 20,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          What We Do
        </Typography>
        <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 17 : 14 }}>Meaningful Work</Typography>
      </Box>
      <div
        style={{
          maxWidth: isMediumScreen ? '1020px' : '450px',
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 9,
        }}>
        <ImageList
          cols={isMediumScreen ? 3 : 1}
          sx={{ width: '100%', height: isMediumScreen ? 290 : 1100 }}
          rowHeight={isMediumScreen ? 200 : 250}
          gap={isMediumScreen ? 40 : 0}>
          {images.map(({ img, words, subWords }) => (
            <ImageListItem key={img}>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${img}?w=248&fit=crop&auto=format`}
                alt={words}
                loading='lazy'
              />
              <ImageListItemBar
                title={words}
                sx={{ fontFamily: 'serif', textAlign: 'center', mt: 3 }}
                subtitle={<Typography sx={{ fontFamily: 'serif', textAlign: 'center' }}>{subWords}</Typography>}
                position='below'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mt: isMediumScreen ? 3 : 0,
        }}>
        <Typography
          sx={{
            pt: isMediumScreen ? 10 : 5,
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 35 : 20,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Get the Resources You Need
        </Typography>
        <Typography
          sx={{
            pt: 1,
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 17 : 13,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Ole's Angels is proud to manage our Patient Assistance Grant Program, offering tailored to the unique
          individual recovery of each patient applicant.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: isMediumScreen ? 9 : 2,
          alignSelf: 'center',
          flexDirection: isMediumScreen ? 'row' : 'column',
        }}>
        {resourcesGuidlines.map(({ id, title, words }, index) => (
          <>
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
                width: 300,
                height: 200,
                mt: isMediumScreen ? 0 : 5,
                backgroundColor: 'white',
                color: '#397f77',
                pr: 1,
                pl: 1,
                py: 1,
                borderRadius: '2%',
              }}>
              <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 35 : 20, fontWeight: 400 }}>
                {id}
              </Typography>
              <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 17 : 13, fontWeight: 300 }}>
                {title}
              </Typography>
              <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 14 : 11 }}>{words}</Typography>
            </Box>
            {index <= 1 && (
              <div key={index} style={{ height: '100%', borderLeft: '1px solid #000000', margin: '0 10px' }} />
            )}
          </>
        ))}
      </Box>
      <StyledButton
        variant='contained'
        size={isMediumScreen ? undefined : 'small'}
        sx={{
          mt: isMediumScreen ? 10 : 5,
          maxWidth: '150px',
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {'Apply'}
      </StyledButton>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: isMediumScreen ? 20 : 5 }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 35 : 20,
            fontWeight: 300,
            color: 'inherit',
            textDecoration: 'none',
          }}>
          Join The Fight
        </Typography>
        <StyledButton
          variant='contained'
          size={isMediumScreen ? undefined : 'small'}
          onClick={() => dispatch(setIsVisible(true))}
          sx={{
            mt: isMediumScreen ? 5 : 2,
            maxWidth: '150px',
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          {'Donate Today'}
        </StyledButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: isMediumScreen ? 20 : 14, alignItems: 'center' }}>
        <Typography sx={{ fontFamily: 'serif', mb: 2, fontSize: 19 }}> Ole's Angels</Typography>
        <a style={{ fontFamily: 'serif' }}>info@mysite.com</a>
        <Typography sx={{ fontFamily: 'serif', mt: 4, fontSize: 11 }}> ©2023 by Ole's Angels.</Typography>
      </Box>
    </Container>
  );
};

export default Home;
