import { Box, CircularProgress, Typography } from '@mui/material';
import logoBow from '../../assets/NLBOW.png'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startCheckSesion } from '../../Store/Authetication/Thunks';

const LoadingSystemPage = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startCheckSesion())
    }, [])
    

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#f5f5f5',
      color: 'black',
      flexDirection: 'column',
    }}>
      <Box sx={{
        display: 'flex',
        padding: '20px',
        marginTop: '-40px',
        minWidth: '280px',
        maxWidth: '3000px',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: 'auto',
      }}>
        <img width={"250px"} src={logoBow}/>
        <br/>
        <CircularProgress sx={{ color: '#03a9f4' }} size={80} />
        <Typography sx={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
          Cargando...
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingSystemPage;

