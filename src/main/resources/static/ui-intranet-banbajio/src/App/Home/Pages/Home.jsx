import React from 'react';
import AppLayout from '../../Layout/AppLayout';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <AppLayout>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">Welcome to the Home Page!</Typography>
      </Box>
    </AppLayout>
  );
};

export default Home;
