import { ExitToApp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutApp } from '../../../Store/Authetication/Thunks';
import useToast from '../../../Hooks/useToast';

const LogOutComponent = () => {

    const dispatch = useDispatch();
    const {showToast} = useToast();

  const handleLogOut = () => {
    dispatch(logOutApp());
    showToast('Sesion finalizada correctamente.', 'warning', 'top-center');
  };

  return (
    <Box
      onClick={handleLogOut}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft:'-18px',
        width: '100vh',
        p: 2,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
        },
      }}
    >
      <ExitToApp sx={{ mr: 2 }} />
      <Typography width={"100vh"} variant="button" sx={{ flexGrow: 1 }}>Cerrar sesión</Typography>
    </Box>
  );
};

export default LogOutComponent;
