import { Box } from '@mui/material';

export const PlantsBackground = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '40%',
      background: 'url(/plants.png) center bottom no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,
    }}
  />
);