import { Box } from '@mui/material';
import React from 'react';

const stars = [0, 1, 2, 3, 4];

export default function FallingStars() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        pointerEvents: 'none',
      }}
    >
      {stars.map((_, index) => (
        <Box
          key={index}
          sx={{
            "@keyframes drop": {
                    "0%": {
                        transform: 'translateY(-150px)',
                        opacity: 0
                    },
                    "100%": {
                        transform: 'translateY(0px)',
                        opacity: 1
                    }
                },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'drop 1.5s ease-out forwards',
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <Box
            sx={{
              width: '2px',
              height: '150px',
              backgroundColor: '#333',
              marginBottom: '8px',
            }}
          />
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'gold',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, \
                          68% 57%, 79% 91%, 50% 70%, 21% 91%, \
                          32% 57%, 2% 35%, 39% 35%)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
}