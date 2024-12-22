import { Box, Button, Divider, Grid2, TextField, Typography } from '@mui/material'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup';
import MultipleSelect from '../Components/MultipleSelect';
import React from 'react'
import { mismoDomicilioFiscal, regimenFiscal, ocupaciones, sectores } from '../../../Data/FiscalData';
import { estadosMexico } from '../../../Data/SucursalesData';
import DynamicRadioButtons from '../Components/RowRadioButtonsGroup';

const AltaFiscalData = ({ onNext, onBack }) => {

    const initialValues = {
        regimenFiscal: '',
        sector: '',
        ocupacion: '',
        fiel: '',
        mismoDomicilioFiscal: true,
        estado: '',
        codigoPostal: '',
        calle: '',
        numeroExterior: '',
        numeroInterior: '',
        colonia: ''
    };

    const validationSchema = Yup.object({
        regimenFiscal: Yup.string().required('Requerido'),
        mismoDomicilioFiscal: Yup.string().required('Requerido'),
        sector: Yup.string().required('Requerido'),
        ocupacion: Yup.string().required('Requerido'),
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
                DATOS FISCALES
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
                            <Grid2>
                                <MultipleSelect
                                    values={regimenFiscal}
                                    placeholder='Regimen Fiscal'
                                    onChange={handleChange('regimenFiscal')}
                                />
                                <ErrorMessage name="regimenFiscal" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2>
                                <MultipleSelect
                                    values={ocupaciones}
                                    placeholder='¿A que te dedicas?'
                                    onChange={handleChange('ocupacion')}
                                />
                            </Grid2>
                            <Grid2>
                                <MultipleSelect
                                    values={sectores}
                                    placeholder='¿Sector economico?'
                                    onChange={handleChange('sector')}
                                />
                            </Grid2>
                            <Grid2>
                                <TextField
                                    label="Si cuenta con una FIEL puede ingresarla aquí"
                                    variant="outlined"
                                    name="fiel"
                                    value={values.fiel}
                                    onChange={handleChange}
                                    inputProps={{
                                        onInput: (e) => {
                                            e.target.value = e.target.value.toUpperCase();
                                        },
                                    }}
                                    fullWidth
                                />
                            </Grid2>
                            <Grid2 marginLeft={"10px"}>
                                <DynamicRadioButtons
                                    options={mismoDomicilioFiscal}
                                    name="mismoDomicilioFiscal"
                                    onChange={handleChange('mismoDomicilioFiscal')}
                                    label='¿Su domicilio fiscal es el mismo que su domicilio actual?'
                                />
                                <ErrorMessage name="mismoDomicilioFiscal" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            {(values.mismoDomicilioFiscal == 'No') ?
                                <Box>
                                    <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}>
                                        <Typography fontSize={"20px"}>Captura de domicilio fiscal</Typography>
                                    </Divider>
                                    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid2 size={6}>
                                            <MultipleSelect values={estadosMexico} placeholder='Estado' />
                                        </Grid2>
                                        <Grid2 size={6}>
                                            <TextField
                                                label="Codigo Postal"
                                                variant="outlined"
                                                name="codigoPostal"
                                                value={values.codigoPostal}
                                                onChange={handleChange}
                                                inputProps={{
                                                    maxLength: '5',
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage name="codigoPostal" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid2 size={6}>
                                            <TextField
                                                label="Ciudad"
                                                variant="outlined"
                                                name="ciudad"
                                                value={values.ciudad}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage name="calle" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                        </Grid2>
                                        <Grid2 size={6}>
                                            <TextField
                                                label="Calle"
                                                variant="outlined"
                                                name="calle"
                                                value={values.calle}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage name="calle" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 container spacing={2}>
                                        <Grid2 size={6}>
                                            <TextField
                                                label="Colonia"
                                                variant="outlined"
                                                name="colonia"
                                                value={values.colonia}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage
                                                name="colonia"
                                                component="div"
                                                style={{ color: 'red', fontSize: '12px' }}
                                            />
                                        </Grid2>
                                        <Grid2 size={3}>
                                            <TextField
                                                label="Número Exterior"
                                                variant="outlined"
                                                name="numeroExterior"
                                                value={values.numeroExterior}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage
                                                name="numeroExterior"
                                                component="div"
                                                style={{ color: 'red', fontSize: '12px' }}
                                            />
                                        </Grid2>
                                        <Grid2 size={3}>
                                            <TextField
                                                label="Número Interior"
                                                variant="outlined"
                                                name="numeroInterior"
                                                value={values.numeroInterior}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                            <ErrorMessage
                                                name="numeroInterior"
                                                component="div"
                                                style={{ color: 'red', fontSize: '12px' }}
                                            />
                                        </Grid2>
                                    </Grid2>
                                </Box>
                                : null
                            }
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
    )
}

export default AltaFiscalData
