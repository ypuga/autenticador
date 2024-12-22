import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

export default function CuentaModal({ open, handleClose, setisCurpValidate }) {

  const handleContinueSolicitud =()=>{
    handleClose();
    setisCurpValidate(true);
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'start',
        }}
        id="customized-dialog-title"
      >
        <ErrorIcon sx={{ color: 'orange', marginRight: '10px', fontSize: '90px' }} />
        <Typography fontSize="30px" sx={{ marginTop: '10px' }}>
          EL CLIENTE YA CUENTA CON UNA EVALUACION ACTIVA PARA EL PRODUCTO SOLICITADO.
        </Typography>
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    ID Evaluación
                  </TableCell>
                  <TableCell>
                    Fecha Evaluacion
                  </TableCell>
                  <TableCell>
                    Producto
                  </TableCell>
                  <TableCell>
                    Sucursal
                  </TableCell>
                  <TableCell>
                    Ejecutivo
                  </TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell scope="row" align="left">
                  89898
                </TableCell>
                <TableCell scope="row" align="left">
                  2024-11-24
                </TableCell>
                <TableCell scope="row" align="left">
                  CUENTA ALAMEDA
                </TableCell>
                <TableCell scope="row" align="left">
                  914
                </TableCell>
                <TableCell scope="row" align="left">
                  84540632
                </TableCell>
                <TableCell>
                  <IconButton aria-label="delete" size="large">
                    <DeleteOutline sx={{color:'red'}} fontSize="inherit" color='red'/>
                  </IconButton>
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='success' autoFocus onClick={handleContinueSolicitud}>
          Continuar con la evaluación
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
