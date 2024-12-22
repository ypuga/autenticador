import React from 'react';
import DashboardLayoutBasic from '../Home/Components/DashboardLayoutBasic';
import { Backdrop, Box } from '@mui/material';
import { useLoading } from '../../Hooks/LoadingContext';
import CustomBackdrop from './Components/CustomBackdrop';

const AppLayout = ({ children }) => {

  const { isLoading } = useLoading();

  return (
    <DashboardLayoutBasic>
      <CustomBackdrop isLoading={isLoading}/>
        <Box
        sx={{
            height: '100vh',
            padding: '5px',
            margin: '10px',
            borderRadius: '10px'
        }}
        >
            {children}
        </Box>
    </DashboardLayoutBasic>
  );
};

export default AppLayout;
