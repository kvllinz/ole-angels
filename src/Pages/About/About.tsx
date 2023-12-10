import { useEffect, useState } from 'react';

const About = () => {
  const [a, setA] = useState('');

  useEffect(() => {
    setA('a');
  }, []);
  console.log({ a });
  return (
    <>
      <p>{a}</p>
    </>
  );
};

export default About;
