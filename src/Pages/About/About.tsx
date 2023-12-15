import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import ContentPaper from '../../Components/ContentPaper/ContentPaper';

const About = () => {
  const [a, setA] = useState('');

  useEffect(() => {
    setA('a');
  }, []);
  console.log({ a });
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        mb: 3,
      }}>
      <ContentPaper
        title='Our Story'
        content='It is incredible how one small idea can grow into something truly special. Oles Angels is rooted in the belief that we all have an inherent responsibility to make a meaningful difference in our community. With a variety of active projects and a large volunteer staff, we harness our skills and resources to successfully achieve our goals.

Since our founding in 2000, we have been proud to witness how our activities have benefitted the San Francisco community and beyond. Want to take part? Contribute to our work by donating or volunteering today.'
      />
    </Container>
  );
};

export default About;
