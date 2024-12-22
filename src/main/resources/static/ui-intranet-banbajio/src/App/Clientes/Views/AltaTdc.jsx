import React, { useEffect, useState } from 'react'
import useToast from '../../../Hooks/useToast';
import { Box, Button, CircularProgress, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const AltaTdc = () => {

    const { showToast } = useToast();
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            showToast('La tarjeta de credito terminacion 4033 se asigno a la cuenta correctamente.', 'success', 'top-center');
        }, 10000);
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
                ASIGNACION DE TDC
            </Typography>
            <Typography fontSize={"10px"}>
                ID De Evaluacion: 29921
            </Typography>
            <Box p={1} mt={5}>
                {show ?
                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        verticalAlign: 'center'
                    }}>
                        <CircularProgress />
                        <Typography mt={1} ml={2} fontSize={"20px"}>ASIGNANDO TARJETA DE CREDITO...</Typography>
                    </Box>
                    :
                    <Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>ID Cliente Unico:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>390019238</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>No. Credito:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>773811020</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>Sucursal:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>CENTRO SAN MIGUEL EL ALTO</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>Banquero Personal:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>MARITZA GALLARDO VELEZ</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>Linea de Credito Autorizada:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>$ 35,400</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>Tarjeta Debito Asignada a la cuenta:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>*** - **** - ***9 - 4033</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography fontSize={"15px"}><strong>Producto:</strong></Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize={"15px"}>TDC MASTER CARD</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleSubmit}
                            >
                                FINALIZAR
                            </Button>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default AltaTdc
