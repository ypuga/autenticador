import { Alert, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid2, TextField, Typography } from '@mui/material'
import { ErrorMessage, Formik } from 'formik'
import MultipleSelect from '../Components/MultipleSelect';
import * as Yup from 'yup';
import React, { useState } from 'react'
import { estadosMexico } from '../../../Data/SucursalesData';
import { useDispatch } from 'react-redux';
import { useLoading } from '../../../Hooks/LoadingContext';
import { startGetCodigoPostalData } from '../../../Store/Datos/Thunks';
import useToast from '../../../Hooks/useToast';
import DomicilioModal from '../Components/DomicilioModal';
import DynamicRadioButtons from '../Components/RowRadioButtonsGroup';
import { tdcVigente } from '../../../Data/BuroCreditoData';
import { CheckBox } from '@mui/icons-material';

const AltaVisitaDomciliaria = ({ onNext, onBack }) => {
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const [open, setOpen] = useState(false);
    const [isDisabled, setisDisabled] = useState(false);
    const { isLoading, startLoading, stopLoading } = useLoading();

    const initialValues = {
        estado: '',
        codigoPostal: '',
        localidad: '',
        municipio: '',
        asentamiento: '',
        calle: '',
        numeroExterior: '',
        numeroInterior: '',
        colonia: '',
        sameAddress: true,
        referenciaDomicilio: '',
        diasVisita: ''
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validationSchema = Yup.object({
        estado: Yup.string().required('Requerido'),
        codigoPostal: Yup.string()
            .matches(/^\d{5}$/, 'El código postal debe tener exactamente 5 dígitos')
            .required('Requerido'),
        calle: Yup.string().required('Requerido'),
        numeroExterior: Yup.string().required('Requerido'),
        colonia: Yup.string().required('Requerido'),
        referenciaDomicilio: Yup.string().required('Requerido'),
        numeroExterior: Yup.string().required('Requerido'),
    });

    const handleSubmit = (values) => {
        onNext();
    };

    const handleConsultaCp = async (cp) => {
        if (cp.length === 5) {
            try {
                startLoading();
                await dispatch(startGetCodigoPostalData(cp));
                setOpen(true);
            } catch (error) {
                console.log(error.message);
                showToast(error.message, 'error', 'top-center');
            } finally {
                stopLoading();
            }
        }
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
                DOMICILIO DEL CLIENTE
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
                            {(values.sameAddress == 'No') ?
                                <Alert variant="filled" sx={{ marginBottom: '20px' }} severity='info'>Se le solicitara al cliente el comprobante de domicilio dentro del paso de documentación del cliente.</Alert>
                                : null
                            }
                            <DomicilioModal
                                open={open}
                                handleClose={handleClose}
                                onSelect={(domicilio) => {
                                    values.asentamiento = domicilio.tipo_asentamiento,
                                        values.localidad = domicilio.ciudad,
                                        values.municipio = domicilio.municipio,
                                        values.colonia = domicilio.asentamiento,
                                        values.estado = domicilio.estado
                                    setisDisabled(true);
                                }
                                }
                            />
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Código Postal"
                                        variant="outlined"
                                        name="codigoPostal"
                                        value={values.codigoPostal}
                                        onChange={(e) => {
                                            handleChange(e);
                                            if (e.target.value.length === 5) {
                                                handleConsultaCp(e.target.value);
                                            }
                                        }}
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
                                <Grid2 size={6}>
                                    <MultipleSelect values={values.estado ? [values.estado] : estadosMexico} placeholder='Estado' onChange={handleChange('estado')} />
                                </Grid2>
                            </Grid2>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Localidad"
                                        variant="outlined"
                                        name="localidad"
                                        value={values.localidad}
                                        onChange={handleChange}
                                        inputProps={{
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                        disabled={isDisabled}
                                    />
                                    <ErrorMessage name="localidad" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Asentamiento"
                                        variant="outlined"
                                        name="asentamiento"
                                        value={values.asentamiento}
                                        onChange={handleChange}
                                        inputProps={{
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                        disabled={isDisabled}
                                    />
                                    <ErrorMessage name="asentamiento" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                            </Grid2>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    <TextField
                                        label="Municipio"
                                        variant="outlined"
                                        name="municipio"
                                        value={values.municipio}
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                        disabled={isDisabled}
                                    />
                                    <ErrorMessage name="ciudad" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
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
                                        disabled={isDisabled}
                                    />
                                    <ErrorMessage
                                        name="colonia"
                                        component="div"
                                        style={{ color: 'red', fontSize: '12px' }}
                                    />
                                </Grid2>
                            </Grid2>
                            <Grid2 container spacing={2}>
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
                            <Grid2 size={10}>
                                <TextField
                                    label="Referencia de Domicilio"
                                    variant="outlined"
                                    name="referenciaDomicilio"
                                    value={values.referenciaDomicilio}
                                    onChange={handleChange}
                                    inputProps={{
                                        onInput: (e) => {
                                            e.target.value = e.target.value.toUpperCase();
                                        },
                                    }}
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                                <ErrorMessage name="referenciaDomicilio" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2 p={2}>
                                <Typography>¿Que dias se encuentra en su domicilio?</Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Lunes" />
                                    <FormControlLabel control={<Checkbox />} label="Martes" />
                                    <FormControlLabel control={<Checkbox />} label="Miercoles" />
                                    <FormControlLabel control={<Checkbox />} label="Jueves" />
                                    <FormControlLabel control={<Checkbox />} label="Viernes" />
                                    <FormControlLabel control={<Checkbox />} label="Sabado" />
                                    <FormControlLabel control={<Checkbox />} label="Domingo" />
                                </FormGroup>
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
    )
}

export default AltaVisitaDomciliaria
