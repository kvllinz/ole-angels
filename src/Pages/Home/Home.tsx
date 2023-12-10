import { useEffect, useState } from 'react';

const Home = () => {
  const [a, setA] = useState('');

  useEffect(() => {
    setA('a');
  }, []);

  return (
    <>
      <p>{a}</p>
    </>
  );
};

export default Home;
