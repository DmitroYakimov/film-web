import { Box, Typography } from '@mui/material';

export const ClickArrow = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 40,
      left: '25%',
      transform: 'translateX(-50%) rotate(-30deg)',
      textAlign: 'center',
    }}
  >
    <Typography variant="h1">↓</Typography>
  </Box>
);