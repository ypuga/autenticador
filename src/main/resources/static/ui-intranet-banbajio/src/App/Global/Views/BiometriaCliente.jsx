import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

const BiometriaCliente = ({ onNext }) => {
    return (
        <Box
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
        >
            <Typography variant="h5" gutterBottom>
                BIOMETRIA DEL CLIENTE
            </Typography>
            <Box flex={1} my={4}>
                <Box sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <PanToolAltIcon sx={{
                        color: 'teal',
                        fontSize: '300px'
                    }} />
                    <Typography fontSize={"30px"}>CAPTURAR HUELLA DE DEDO INDICE DERECHO</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={() => onNext()}
                    >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default BiometriaCliente
