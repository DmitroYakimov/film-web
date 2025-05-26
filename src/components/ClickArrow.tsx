import { Box, Typography } from '@mui/material';

export const ClickArrow = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      cursor: 'pointer',
    }}
  >
    <Typography variant="h6">Click Me ↓</Typography>
  </Box>
);