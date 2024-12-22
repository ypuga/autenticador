import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const UserInfo = () => {
    
    const {user, profile} = useSelector(state=>state.sistema)

  return (
    <Box>
        <Box 
        sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        }}
        >
            <Box>
                <Avatar>Y</Avatar>
            </Box>
            <Box
            sx={{
                display: 'inline-block',
                marginLeft: '10px'
            }}
            >
                <Typography variant='h7'>{user}</Typography>
                <br/>
                <Typography fontSize={"12px"}>{profile}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default UserInfo
