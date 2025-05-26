import { useEffect } from 'react';

export const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio('/sound.mp3');
    audio.play();
  }, []);

  return null;
};