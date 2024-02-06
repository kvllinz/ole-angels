import { Box, Container, Paper, Typography, useMediaQuery } from '@mui/material';
import ContentPaper from '../../Components/ContentPaper/ContentPaper';
import Jen from '../../assets/Jen.jpg';
import Brent from '../../assets/Brent.jpg';

type KeyPeople = {
  id: number;
  img: string;
  name: string;
  about: string;
}[];

const About = () => {
  const isXSmallScreen = useMediaQuery('(max-width:600px)');
  // const isSmallScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const isMediumScreen = useMediaQuery('(min-width:1280px)');
  // const isIpadScreen = useMediaQuery('');
  const topMargin = isXSmallScreen ? 5 : 10;

  const keyPeople: KeyPeople = [
    {
      id: 1,
      img: Jen,
      name: 'Jennifer East',
      about:
        "Jennifer is the Chief of Staff at Intradiem, a software company focused on the reinventing the customer service experience. She received a Bachelor of Business Administration and a Master of Business Administration from the University of Georgia. Jennifer brings previous non-profit management experience in her role as Secretary/Treasurer for the Georgia Gymnastics Judges Association. She is an avid fitness enthusiast and first crossed paths with Ole's family in a CrossFit gym. Jennifer and her husband, Charles, live in Milton, GA and have two daughters.",
    },
    {
      id: 2,
      img: Brent,
      name: 'Brent',
      about:
        "Brent Burke grew up in Statesboro and now resides in Norcross with his wife, Tracy and 3 dogs. Brent has four grown children: Nic, Cole, Caleb and Amelia Grace. Brent started his career at Northwestern Mutual in 2002 and has developed an expertise in planning for business owners and executives. Brent's favorite way to spend time with family and friends is through outdoor activities, such as camping, water and snow skiing, or playing a game of baseball. Brent has also participated in a number of Crossfit competitions and triathlon races over the years. Brent has valued the mentorship he's received over the years and seeks to give back by mentoring others.",
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
      <ContentPaper
        title='Our Story'
        content='It is incredible how one small idea can grow into something truly special. Oles Angels is rooted in the belief that we all have an inherent responsibility to make a meaningful difference in our community. With a variety of active projects and a large volunteer staff, we harness our skills and resources to successfully achieve our goals.

Since our founding in 2000, we have been proud to witness how our activities have benefitted the San Francisco community and beyond. Want to take part? Contribute to our work by donating or volunteering today.'
      />
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
            pt: isMediumScreen ? 15 : 7,
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 35 : 20,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Key People
        </Typography>
        <Typography
          sx={{
            pt: 2,
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 17 : 13,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Get to Know the Amazing People behind Ole's Angels
        </Typography>
        <Typography
          sx={{
            pt: 2,
            fontFamily: 'serif',
            fontSize: isMediumScreen ? 17 : 13,
            pl: isMediumScreen ? 30 : 2,
            pr: isMediumScreen ? 30 : 2,
          }}>
          Coming together from a wide variety of backgrounds and experiences, our skilled team of professionals is the
          backbone of Ole's Angels. Their ideas help shape the direction and mission of our organization. Read on to
          learn more about some of our incredible team members.
        </Typography>
      </Box>
      <Box sx={{ pt: isMediumScreen ? 15 : 7 }}>
        {keyPeople.map(({ name, about, img }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: isXSmallScreen ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {index % 2 !== 0 && !isXSmallScreen ? (
              <>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: isXSmallScreen ? '100%' : '50%',
                    alignItems: 'center',
                    pt: 2,
                    pr: 2,
                    pl: 2,
                    pb: 2,
                    overflow: 'auto',
                    mt: isXSmallScreen ? 2 : 0,
                    backgroundColor: 'white',
                    mr: 2,
                  }}>
                  <Typography
                    sx={{
                      fontFamily: 'serif',
                      fontSize: isMediumScreen ? 30 : 20,
                      color: '#397f77',
                      alignSelf: 'flex-start',
                    }}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 17 : 13, pt: 1, color: '#397f77' }}>
                    {about}
                  </Typography>
                </Paper>
                <Box
                  component={'img'}
                  src={img}
                  sx={{
                    width: { xs: '100%', sm: '100%', md: '20%' }, // Set the initial width of the image
                    flex: '1 1 auto', // Allow the image to grow and shrink
                    maxWidth: { md: '350px', xs: '250px' }, // Set a maximum width on medium screens
                  }}
                />
              </>
            ) : (
              <>
                <Box
                  component={'img'}
                  src={img}
                  sx={{
                    width: { xs: '100%', sm: '100%', md: '20%' }, // Set the initial width of the image
                    flex: '1 1 auto', // Allow the image to grow and shrink
                    maxWidth: { md: '350px', xs: '250px' }, // Set a maximum width on medium screens
                    mr: 2,
                    mt: isXSmallScreen ? 2 : 0,
                  }}
                />
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: isXSmallScreen ? '100%' : '50%',
                    alignItems: 'center',
                    pt: 2,
                    pr: 2,
                    pl: 2,
                    pb: 2,
                    overflow: 'auto',
                    mt: isXSmallScreen ? 2 : 0,
                    backgroundColor: 'white',
                  }}>
                  <Typography
                    sx={{
                      fontFamily: 'serif',
                      fontSize: isMediumScreen ? 30 : 20,
                      color: '#397f77',
                      alignSelf: 'flex-start',
                    }}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontFamily: 'serif', fontSize: isMediumScreen ? 17 : 13, pt: 1, color: '#397f77' }}>
                    {about}
                  </Typography>
                </Paper>
              </>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default About;
