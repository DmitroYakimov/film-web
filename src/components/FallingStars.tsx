import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const FallingStars = () => {
  const [stars, setStars] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => [...prev, Math.random().toString()]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((id) => (
        <Box
          key={id}
          sx={{
            position: 'absolute',
            top: 0,
            left: `${Math.random() * 100}%`,
            width: 20,
            height: 20,
            background: 'gold',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            animation: 'fall 4s linear forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          from { top: 0; opacity: 1; }
          to { top: 100vh; opacity: 0; }
        }
      `}</style>
    </>
  );
};
