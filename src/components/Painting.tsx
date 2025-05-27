import Image from 'next/image';
import React from 'react';
import paintingImage from '@/../public/picture.jpg';
import { Box } from '@mui/material';


type Props = {
  onClick: () => void;
};

export default function Painting({ onClick }: Props) {
  return (
     <Box
      onClick={onClick}
      sx={{
        "@keyframes tilt-animation": {
                    "0%": {
                        transform: 'rotate(5deg)'
                    },
                    "50%": {
                        transform: 'rotate(-3deg)'
                    },
                    "100%": {
                        transform: 'rotate(4deg)'
                    }
                },
        width: '35%',
        margin: 'auto',
        mt: '55px',
        cursor: 'pointer',
        '&:hover': {
          animation: 'tilt-animation 0.6s steps(1, end) infinite',
        },
      }}
    >
      <Image
        src={paintingImage}
        alt="Painting"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </Box>
  );
}