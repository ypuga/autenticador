import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { ingresosMensuales, laCasaDondeVive, trabajoFijo } from '../../../Data/CuestionarioCdC';
import SingleSelect from '../../Global/Components/MultipleSelect';

const KycTdcView = ({onNext, onBack}) => {

    const initialValues = {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    };

    const validationSchema = Yup.object({
        q1: Yup.string().required('Requerido'),
        q2: Yup.string().required('Requerido'),
        q3: Yup.string().required('Requerido'),
        q4: Yup.string().required('Requerido'),
    });

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
                CONOCIMIENTO DEL CLIENTE
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
                                    <SingleSelect
                                        values={laCasaDondeVive}
                                        placeholder='¿La casa donde vive es?'
                                        onChange={handleChange('q1')}
                                    />
                                </Grid2>
                                <Grid2 size={6}>
                                    <SingleSelect
                                        values={trabajoFijo}
                                        placeholder='¿Cuenta con trabajo fijo?'
                                        onChange={handleChange('q2')}
                                    />
                                </Grid2>
                            </Grid2>
                            <Grid2 container>
                                <TextField
                                    label="Empresa donde labora"
                                    variant="outlined"
                                    name="q3"
                                    value={values.q3}
                                    onChange={handleChange}
                                    inputProps={{
                                        onInput: (e) => {
                                            e.target.value = e.target.value.toUpperCase();
                                        },
                                    }}
                                    fullWidth
                                />
                            </Grid2>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <SingleSelect
                                        values={ingresosMensuales}
                                        placeholder='¿A cuanto ascienden sus ingresos mensuales?'
                                        onChange={handleChange('q4')}
                                    />
                                </Grid2>
                            </Grid2>
                            <Box display="flex" justifyContent='space-between' mt={3}>
                                <Button onClick={onBack} size='large'>Regresar</Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    disabled={!dirty || !isValid}
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
    )
}

export default KycTdcView
