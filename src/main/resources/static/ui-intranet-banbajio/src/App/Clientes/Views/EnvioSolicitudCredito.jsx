import { Alert, AlertTitle, Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLoading } from '../../../Hooks/LoadingContext';
import useToast from '../../../Hooks/useToast';

const EnvioSolicitudCredito = ({ onNext }) => {

    const { isLoading, startLoading, stopLoading } = useLoading();
    const [show, setShow] = useState(true);
    const [statusSolicitud, setstatusSolicitud] = useState({
        status: 'AUTORIZADO',
        folio: '4999203'
    })
    const { showToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            showToast('La solicitud de tarjeta ha sido enviada correctamente.', 'success', 'top-center');
        }, 18000);
        return () => {
            clearTimeout(timer);
        };
    }, []);


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
                ENVIO DE SOLICITUD
            </Typography>
            <Typography fontSize={"10px"}>
                ID De Evaluacion: 29921
            </Typography>
            <Box flex={1} my={4}>
                {show ?
                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        verticalAlign: 'center'
                    }}>
                        <CircularProgress />
                        <Typography mt={1} ml={2} fontSize={"20px"}>ENVIANDO SOLICITUD DE CREDITO...</Typography>
                    </Box>
                    :
                    <Box>
                        {(statusSolicitud.status == 'EN_PROCESO') ?
                            <Box>
                                <Alert severity="info" variant="filled">
                                    <AlertTitle>
                                        <Typography>EN PROCESO...</Typography>
                                        <Typography>La solicitud se ha enviado con el folio <strong>{statusSolicitud.folio}</strong>. Y se encuentra en proceso de validación y autorización, en un plazo maximo de 24 Horas se enviara la confirmación de solicitud al SMS y al Email del cliente.</Typography>
                                    </AlertTitle>
                                </Alert>
                            </Box>
                            : (statusSolicitud.status == 'RECHAZADO') ?
                                <Box>
                                    <Alert severity="warning" variant="filled">
                                        <AlertTitle>
                                            <Typography>RECHAZADO...</Typography>
                                            <Typography>La solicitud con el folio <strong>{statusSolicitud.folio}</strong> ha sido rechazada. Recuerde que podra realizar una solicitud nuevamente despues de 3 Meses.</Typography>
                                        </AlertTitle>
                                    </Alert>
                                </Box>
                                : (statusSolicitud.status == 'AUTORIZADO') ?
                                    <Box>
                                        <Alert severity="success" variant="filled">
                                            <AlertTitle>
                                                <Typography>AUTORIZADO</Typography>
                                                <Typography>La solicitud con folio <strong>{statusSolicitud.folio}</strong> fue autorizada.</Typography>
                                            </AlertTitle>
                                        </Alert>
                                        <Box display={"flex"} mt={3} justifyContent={"flex-end"}>
                                            <Button onClick={onNext} color='success' variant='contained'>Continuar</Button>
                                        </Box>
                                    </Box>
                                    :
                                    <Box>
                                        <Alert severity="error" variant="filled">
                                            <AlertTitle>
                                                <Typography>ERROR</Typography>
                                                <Typography>Hubo un error con la solicitud comuniquese a atencion a empleados.</Typography>
                                                <Typography><strong>Folio solicitud: </strong>{statusSolicitud.folio}</Typography>
                                            </AlertTitle>
                                        </Alert>
                                    </Box>
                        }
                        <Box display={"flex"} marginTop={(statusSolicitud.status == 'AUTORIZADO') ? "-37px": "25px"} justifyContent={(statusSolicitud.status == 'AUTORIZADO') ? "flex-start": "flex-end"}>
                            <Button onClick={handleSubmit} variant={(statusSolicitud.status == 'AUTORIZADO') ? 'text': 'contained'}>
                                SALIR DEL PROCESO
                            </Button>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default EnvioSolicitudCredito
