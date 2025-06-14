import { useState } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import  Painting  from '../components/Painting';
import { ClickArrow } from '../components/ClickArrow';
import { PlantsBackground } from '../components/PlantsBackground';
import { FallingStars }  from '../components/FallingStars';
import { AudioPlayer } from '../components/AudioPlayer';

export default function Home() {
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    setActivated(true);
  };

  return (
    <>
      <Head>
        <title>Magic Painting</title>
      </Head>
      <Box>
        {!activated && <ClickArrow/>}
      <Painting onClick={handleClick} />
        {activated && (
          <>
            <FallingStars/>
            <PlantsBackground />
            <AudioPlayer />
          </>
        )}
      </Box>
    </>
  );
}