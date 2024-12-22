import { Box, Button, Divider, LinearProgress, Typography } from '@mui/material'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import React, { useState } from 'react'
import LinearWithValueLabel from '../../Home/Components/LinearWithValueLabel';

const AltaBiometria = ({ onNext }) => {

    const DERECHA = {
        label: 'DERECHA',
        value: 0
    }
    const IZQUIERDA = {
        label: 'IZQUIERDA',
        value: 50
    }
    const FINISH = {
        label: 'IZQUIERDA',
        value: 100
    }

    const [mano, setmano] = useState(DERECHA);

    const handleMano = () => {
        if (mano == DERECHA) {
            setmano(IZQUIERDA);
        }
        else {
            setmano(FINISH);
        }
    }

    const handleSubmit = (values) => {
        onNext();
    };

    return (
        <Box
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
        >
            <Typography variant="h5" gutterBottom>
                BIOMETRIA
            </Typography>
            <Typography fontSize={"10px"}>
                ID De Evaluacion: 29921
            </Typography>
            <Box marginTop={"10px"} marginBottom={"10px"}>
                <LinearWithValueLabel progress={mano.value} />
            </Box>
            <Divider>
                <Typography>ALTA DE BIOMETRIA DACTILAR DEL CLIENTE</Typography>
            </Divider>
            <Box sx={{
                width: '100%',
                padding: '30px',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Typography align='center'>Favor de solicitar al cliente que coloque sus huellas en el lector.</Typography>
                <Typography align='center'>MANO {mano.label}</Typography>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    marginTop: '20px',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <Box
                        sx={{
                            width: '120px',
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <FingerprintIcon sx={{ fontSize: '70px' }} />
                    </Box>
                    <Box
                        sx={{
                            width: '120px',
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                            marginLeft: '5px'
                        }}
                    >
                        <FingerprintIcon sx={{ fontSize: '70px' }} />
                    </Box>
                    <Box
                        sx={{
                            width: '120px',
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                            marginLeft: '5px'
                        }}
                    >
                        <FingerprintIcon sx={{ fontSize: '70px' }} />
                    </Box>
                    <Box
                        sx={{
                            width: '120px',
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                            marginLeft: '5px'
                        }}
                    >
                        <FingerprintIcon sx={{ fontSize: '70px' }} />
                    </Box>
                    <Box
                        sx={{
                            width: '120px',
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                            marginLeft: '5px'
                        }}
                    >
                        <FingerprintIcon sx={{ fontSize: '70px' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignContent: 'flex-end',
                justifyContent: 'flex-end'
            }}>
                <Button disabled={mano.value == 100} onClick={handleMano}>Siguiente</Button>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button
                    variant="contained"
                    size="large"
                    disabled={mano.value != 100}
                    onClick={handleSubmit}
                >
                    FINALIZAR
                </Button>
            </Box>
        </Box>
    )
}

export default AltaBiometria
