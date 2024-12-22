import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import DynamicRadioButtons from '../Components/RowRadioButtonsGroup';
import { creditoAutomotriz, creditoHipotecario, tdcVigente } from '../../../Data/BuroCreditoData';

const AltaBuroCredito = ({onNext, onBack}) => {

    const initialValues = {
        tdcVigente: '',
        bancoTdc: '',
        limiteCredito: '',
        creditoHipotecario: '',
        creditoAutomotriz: ''
    };

    const validationSchema = Yup.object({
        tdcVigente: Yup.string().required('Requerido'),
        creditoHipotecario: Yup.string().required('Requerido'),
        creditoAutomotriz: Yup.string().required('Requerido'),
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
                BURO DE CREDITO
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
                        <form>
                            <Grid2>
                                <DynamicRadioButtons
                                    options={tdcVigente}
                                    name="tdcVigente"
                                    defaultValue={false}
                                    onChange={handleChange('tdcVigente')}
                                    label='¿Tienes alguna tarjeta de crédito vigente?'
                                />
                            </Grid2>
                            {(values.tdcVigente == 'Si') ?
                                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid2 size={6}>
                                        <TextField
                                            label="Institución Otorgante"
                                            variant="outlined"
                                            name="bancoTdc"
                                            value={values.bancoTdc}
                                            onChange={handleChange}
                                            inputProps={{
                                                onInput: (e) => {
                                                    e.target.value = e.target.value.toUpperCase();
                                                },
                                            }}
                                            fullWidth
                                        />
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <TextField
                                            label="Limite de Credito"
                                            variant="outlined"
                                            name="limiteCredito"
                                            value={values.limiteCredito}
                                            onChange={handleChange}
                                            inputProps={{
                                                onInput: (e) => {
                                                    e.target.value = e.target.value.toUpperCase();
                                                },
                                            }}
                                            fullWidth
                                        />
                                    </Grid2>
                                </Grid2>
                                : null
                            }
                            <br />
                            <Grid2 size={6}>
                                <DynamicRadioButtons
                                    options={creditoAutomotriz}
                                    name="creditoAutomotriz"
                                    defaultValue={false}
                                    onChange={handleChange('creditoAutomotriz')}
                                    label='¿Tienes algún crédito automotriz?'
                                />
                            </Grid2>
                            <br />
                            <Grid2 size={6}>
                                <DynamicRadioButtons
                                    options={creditoHipotecario}
                                    name="creditoHipotecario"
                                    defaultValue={false}
                                    onChange={handleChange('creditoHipotecario')}
                                    label='¿Tienes algún crédito hipotecario en los últimos seis años?'
                                />
                            </Grid2>
                            <Box display="flex" justifyContent='space-between' mt={3}>
                                <Button onClick={()=>onBack()} size='large'>Regresar</Button>
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

export default AltaBuroCredito
