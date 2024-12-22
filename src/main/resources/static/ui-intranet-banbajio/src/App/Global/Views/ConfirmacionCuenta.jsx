import { Box, Button, Divider, Typography } from '@mui/material'
import banner from '../../../assets/Descarga Banco Alameda App.png'
import React from 'react'

const ConfirmacionCuenta = () => {

    const handleSubmit = () => {
        window.location.reload();
    }

    return (
        <Box
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
        >
            <Typography variant="h5" gutterBottom>
                CONFIRMACION DE CUENTA
            </Typography>
            <Typography fontSize="10px">ID De Evaluacion: 29921</Typography>
            <hr />
            <Divider />
            <Box padding={"10px"}>
                <Box>
                    <Typography fontSize={"40px"} color='teal' textAlign='center'><strong>LA ALTA DE LA CUENTA HA SIDO EXITOSA!!!</strong></Typography>
                    <br />
                    <Typography fontSize={"20px"} color='green' textAlign='center'>Favor de darle la bienvenida al cliente a la familia BANCO ALAMEDA</Typography>
                </Box>
                <Box mt={"50px"}>
                    <img style={{ width: '96vh' }} src={banner} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={3} padding={"10px"}>
                <Button
                    variant="contained"
                    size="large"
                    color='success'
                    onClick={handleSubmit}
                >
                    FINALIZAR
                </Button>
            </Box>
        </Box>
    )
}

export default ConfirmacionCuenta
