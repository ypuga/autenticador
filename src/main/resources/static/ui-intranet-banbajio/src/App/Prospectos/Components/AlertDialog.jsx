import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Divider, Typography } from '@mui/material';
import OTPInput from './OTPInput';

export default function AlertDialog({otpDialog, setotpDialog, onNext}) {

    const [otp, setotp] = React.useState('');

  const handleClose = () => {
    setotpDialog(false);
    onNext();
  };

  const d =()=>{
    setotp()
  }

  return (
    <React.Fragment>
      <Dialog
        open={otpDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box p={1}>
        <DialogTitle id="alert-dialog-title" align='center'>
            VALIDACION DE INFORMACION DE CONTACTO
            <Divider>
                <Typography fontSize={"12px"}>SMS</Typography>
            </Divider>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se envio un SMS al numero de telefono con terminación 3484 con el codigo para validar la información de contacto del cliente.
          </DialogContentText>
          <Box width={"100%"} display={"flex"} alignContent={"center"} justifyContent={"center"} mt={5} mb={5}>
            <OTPInput placeholder="Ingresa el código de verificación" value={otp}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='success' onClick={handleClose} autoFocus>
            VALIDAR
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
