import { Box, Grid2, TextField, Typography, Button } from '@mui/material'
import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { useLoading } from '../../../Hooks/LoadingContext';
import AlertDialog from '../Components/AlertDialog';

const AltaCertificacionContacto = ({ onNext, onBack }) => {

    const { isLoading, startLoading, stopLoading } = useLoading();
    const [otpDialog, setotpDialog] = useState(false);

    const initialValues = {
        telefono: '',
        confirmacionTelefono: '',
        email: '',
        confirmacionEmail: ''
    };

    const validationSchema = Yup.object({
        telefono: Yup.string().required('Requerido'),
        confirmacionTelefono: Yup.string()
            .oneOf([Yup.ref('telefono'), null], 'El teléfono no coincide')
            .required('Requerido'),
        email: Yup.string().email('Correo inválido').required('Requerido'),
        confirmacionEmail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'El correo electrónico no coincide')
            .required('Requerido'),
    });

    const handleSubmit = (values) => {
        setotpDialog(true);
    };

    return (
        <Box
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
        >
            <AlertDialog otpDialog={otpDialog} setotpDialog={() => setotpDialog()} onNext={() => onNext()} />
            <Typography variant="h5" gutterBottom>
                MEDIOS DE CONTACTO
            </Typography>
            <Typography fontSize={"10px"}>
                ID De Evaluacion: 29921
            </Typography>
            <Box flex={1} my={4}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleSubmit, touched, errors, isValid, dirty }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Número de Teléfono"
                                        variant="outlined"
                                        name="telefono"
                                        value={values.telefono}
                                        onChange={handleChange}
                                        inputProps={{
                                            maxLength: '10',
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                    />
                                    <ErrorMessage name="telefono" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Confirmación de Teléfono"
                                        variant="outlined"
                                        name="confirmacionTelefono"
                                        value={values.confirmacionTelefono}
                                        onChange={handleChange}
                                        inputProps={{
                                            maxLength: '10',
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                    />
                                    <ErrorMessage name="confirmacionTelefono" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                            </Grid2>

                            <Grid2 container rowSpacing={1} mt={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Confirmación de Email"
                                        variant="outlined"
                                        name="confirmacionEmail"
                                        value={values.confirmacionEmail}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <ErrorMessage name="confirmacionEmail" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                            </Grid2>

                            <Box display="flex" justifyContent='space-between' mt={3}>
                                <Button onClick={onBack} size='large'>Regresar</Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    onClick={handleSubmit}
                                >
                                    SIGUIENTE
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default AltaCertificacionContacto;
