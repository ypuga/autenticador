import { Box, Button, Divider, Grid2, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import * as Yup from 'yup';
import SingleSelect from '../Components/MultipleSelect';
import { criteriosBusqueda } from '../../../Data/SucursalesData';
import { Formik } from 'formik';
import { useLoading } from '../../../Hooks/LoadingContext';
import ResultadosBusquedaModal from '../../Clientes/Components/ResultadosBusquedaModal';

const BusquedaCliente = ({ onNext }) => {

    const {isLoading, startLoading, stopLoading} = useLoading();
    const [open, setOpen] = useState(false);

    const initialValues = {
        criterioBusqueda: '',
        busqueda: ''
    };

    const validationSchema = Yup.object({
        criterioBusqueda: Yup.string().required('Requerido'),
        busqueda: Yup.string().required('Requerido'),
    });

    const handleSubmit = (values) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleContinue = () => {
        onNext();
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
                BUSQUEDA DE CLIENTE
            </Typography>
            <ResultadosBusquedaModal open={open} handleClose={handleClose} handleContinue={()=>handleContinue}/>
            <Box flex={1} my={4}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        touched,
                        errors,
                        isValid,
                        dirty,
                        setFieldValue
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <SingleSelect
                                        value={values.criterioBusqueda}
                                        onChange={(event) => setFieldValue('criterioBusqueda', event.target.value)}
                                        values={criteriosBusqueda}
                                        placeholder={'Criterio de Búsqueda'}
                                    />
                                    {touched.criterioBusqueda && errors.criterioBusqueda && (
                                        <Typography color="error">{errors.criterioBusqueda}</Typography>
                                    )}
                                    {values.criterioBusqueda == 'CURP' ?
                                        <Box display={'flex'} justifyContent={'flex-end'}>
                                            <Button onClick={() => window.open('https://www.sinube.mx/calcula-tu-rfc-y-curp', '_blank')} >Consultar CURP</Button>
                                        </Box>
                                        : null
                                    }
                                </Grid2>
                            </Grid2>
                            {values.criterioBusqueda != '' ?
                                <Grid2 size={6} mt={2}>
                                    <TextField
                                        label={values.criterioBusqueda}
                                        variant="outlined"
                                        onChange={handleChange}
                                        value={values.busqueda}
                                        name="busqueda"
                                        inputProps={{
                                            maxLength: values.criterioBusqueda == 'CURP' ? 18 : 9,
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                    />
                                    {touched.busqueda && errors.busqueda && (
                                        <Typography color="error">{errors.busqueda}</Typography>
                                    )}
                                </Grid2>
                                : null
                            }
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    disabled={!isValid || !dirty}
                                    variant="contained"
                                    type="submit"
                                >
                                    Consultar
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default BusquedaCliente;
