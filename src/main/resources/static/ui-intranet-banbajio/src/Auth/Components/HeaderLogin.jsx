import { Box, Divider, Typography } from '@mui/material'
import logoBow from '../../assets/NLBOW.png'
import React from 'react'

const HeaderLogin = () => {
  return (
    <Box
    sx={{
        width: '100%',
    }}
    >
        <Box 
        sx={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center'
        }}
        >
          <img width={"80%"} src={logoBow}/>
        </Box>
    </Box>
  )
}

export default HeaderLogin
