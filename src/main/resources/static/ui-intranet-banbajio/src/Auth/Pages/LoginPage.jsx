import { Box } from '@mui/material';
import React from 'react';
import HeaderLogin from '../Components/HeaderLogin';
import LoginView from '../Views/LoginView';

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: '99%',
        height: '100vh',
        maxHeight: '95vh',
        padding: '10px',
        backgroundImage: `url(https://www.beaware360.com/wp-content/uploads/2023/12/gestion-de-relaciones-con-el-cliente.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          padding: '-30px',
        }}
      >
        <Box
          sx={{
            padding: '50px',
            width: '50vh',
            marginTop: '50px',
            height: '500px',
            marginLeft: '15px',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow:
              'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',
          }}
        >
          <HeaderLogin />
          <Box>
            <LoginView />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
