import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const CustomBackdrop = ({ isLoading }) => {
  return (
    <Backdrop
      sx={(theme) => ({
        color: '#fff',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      })}
      open={isLoading}
    >
      <CircularProgress
        sx={{
          width: '80px !important',
          height: '80px !important', 
          color: 'white',
        }}
      />
    </Backdrop>
  );
};

export default CustomBackdrop;
