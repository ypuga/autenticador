import { Box, Button, Grid2, Typography } from '@mui/material'
import bannerMoto from '../../../assets/CREDITO_MOTO.png'
import React from 'react'

const FinalizarCRM = () => {

    const handleSubmit = () =>{
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
                CREDITO MOTO
            </Typography>
            <Box width="100%" mb={4} mt={5}>
                <Box width={"100%"}>
                    <img src={bannerMoto} style={{width: '95vh'}}/>
                </Box>
                <Typography color='green' variant='h4' textAlign='center'>
                    <strong>
                        El credito de motocicleta ha sido finalizada correctamente!!!
                    </strong>
                </Typography>
                <br/>
                <Grid2 container spacing={2}>
                    <Grid2 size={3}>
                        <Typography>
                            <strong>
                                Folio de Solicitud:
                            </strong>
                        </Typography>
                    </Grid2>
                    <Grid2 size={3}>
                        <Typography>
                            4893848
                        </Typography>
                    </Grid2>
                    <Grid2 size={3}>
                        <Typography>
                            <strong>
                                Ejecutivo:
                            </strong>
                        </Typography>
                    </Grid2>
                    <Grid2 size={3}>
                        <Typography>
                            84540632
                        </Typography>
                    </Grid2>
                </Grid2>
                <br/>
                <br/>
                <Typography color='teal' textAlign='center' variant='h6'>
                    El credito de motocicleta ha sido autorizado correctamente, favor de acompañar al cliente
                    al departamento de motocicletas para validar la existencia en fisico de la motocicleta
                    en sucursal opara pedir la motocicleta desde el sistema muebles.
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"}>
                <Button color='success' size='large' variant='contained' onClick={handleSubmit}>
                    FINALIZAR
                </Button>
            </Box>
        </Box>
    )
}

export default FinalizarCRM
