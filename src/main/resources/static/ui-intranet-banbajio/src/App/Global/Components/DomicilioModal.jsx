import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

const DomicilioModal = ({ open, handleClose, onSelect }) => {
    const { domicilioData } = useSelector((state) => state.data);

    const handleDomicilioSelect = (domicilio) => {
        if (onSelect) {
            onSelect(domicilio);
        }
        handleClose();
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth="lg"
            disableBackdropClick={false}
            fullWidth
        >
            <DialogTitle>Consulta de codigo postales</DialogTitle>
            <DialogContent dividers>
                <Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Codigo Postal</TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell>Colonia</TableCell>
                                    <TableCell>Municipio</TableCell>
                                    <TableCell>Ciudad</TableCell>
                                    <TableCell>Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {domicilioData && domicilioData.length > 0 ? (
                                    domicilioData.map((domicilio, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{domicilio.response.cp}</TableCell>
                                            <TableCell>{domicilio.response.estado}</TableCell>
                                            <TableCell>{domicilio.response.asentamiento}</TableCell>
                                            <TableCell>{domicilio.response.municipio}</TableCell>
                                            <TableCell>{domicilio.response.ciudad}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => handleDomicilioSelect(domicilio.response)}>
                                                    Seleccionar
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No hay datos de domicilio disponibles.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </BootstrapDialog>
    );
};

export default DomicilioModal;
