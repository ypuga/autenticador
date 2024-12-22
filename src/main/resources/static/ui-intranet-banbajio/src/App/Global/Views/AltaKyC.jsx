import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import { ErrorMessage, Formik } from 'formik'
import MultipleSelect from '../Components/MultipleSelect';
import * as Yup from 'yup';
import React, { useState } from 'react'
import { afore, aforesMexico, cargosPublicos, conocimientoFinanciero, depositosMensuales, destinoRecursos, ingresosMensuales, origenRecursos, politicamenteExpuesta } from '../../../Data/CuestionarioCdC';
import DynamicRadioButtons from '../Components/RowRadioButtonsGroup';

const AltaKyC = ({ onNext, onBack }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    const initialValues = {
        q1: '',
        q1Otro: '',
        q2: '',
        q2Otro: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q6Afore: '',
        q7: '',
        q7Prestamo: '',
        q8: '',
        q8PPE: ''
    };

    const validationSchema = Yup.object({
        q1: Yup.string().required('Requerido'),
        q2: Yup.string().required('Requerido'),
        q3: Yup.string().required('Requerido'),
        q4: Yup.string().required('Requerido'),
        q5: Yup.string().required('Requerido'),
        q6: Yup.string().required('Requerido'),
        q7: Yup.string().required('Requerido'),
        q8: Yup.string().required('Requerido'),
    });

    const handleSubmit = (values) => {
        onNext();
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedValues(typeof value === 'string' ? value.split(',') : value);
        if (onChange) {
            onChange(value);
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
                                    <MultipleSelect
                                        values={origenRecursos}
                                        placeholder='Origen de los recursos'
                                        onChange={handleChange('q1')}
                                    />
                                    <ErrorMessage name="q1" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                                <Grid2 size={6}>
                                    <MultipleSelect
                                        values={destinoRecursos}
                                        placeholder='Destino de los recursos'
                                        onChange={handleChange('q2')}
                                    />
                                    <ErrorMessage name="q2" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </Grid2>
                            </Grid2>
                            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid2 size={6}>
                                    {(values.q1 == 'Otro') ?
                                        <>
                                            <TextField
                                                label="Especifique el origen de los recursos"
                                                variant="outlined"
                                                name="q1Otro"
                                                value={values.q1Otro}
                                                onChange={handleChange}
                                                inputProps={{
                                                    onInput: (e) => {
                                                        e.target.value = e.target.value.toUpperCase();
                                                    },
                                                }}
                                                fullWidth
                                            />
                                        </>
                                        : null
                                    }
                                </Grid2>
                                <Grid2 size={6}>
                                    {(values.q2 == 'Otro') ?
                                        <TextField
                                            label="Especifique el destino de los recursos"
                                            variant="outlined"
                                            name="q2Otro"
                                            value={values.q2Otro}
                                            onChange={handleChange}
                                            inputProps={{
                                                onInput: (e) => {
                                                    e.target.value = e.target.value.toUpperCase();
                                                },
                                            }}
                                            fullWidth
                                        />
                                        : null
                                    }
                                </Grid2>
                            </Grid2>
                            <Grid2>
                                <MultipleSelect
                                    values={ingresosMensuales}
                                    placeholder='A cuanto ascienden sus ingresos mensuales'
                                    onChange={handleChange('q3')}
                                />
                                <ErrorMessage name="q3" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2>
                                <MultipleSelect
                                    values={conocimientoFinanciero}
                                    placeholder='¿Qué porcentaje de sus ingresos utiliza para inversiones financieras o ahorros?'
                                    onChange={handleChange('q4')}
                                />
                                <ErrorMessage name="q4" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2>
                                <MultipleSelect
                                    values={depositosMensuales}
                                    placeholder='¿Cuál es el monto promedio esperado de los depósitos o retiros mensuales en su cuenta?'
                                    onChange={handleChange('q5')}
                                />
                                <ErrorMessage name="q5" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2 size={6} marginLeft={"10px"}>
                                <DynamicRadioButtons
                                    options={afore}
                                    name="q6"
                                    defaultValue={false}
                                    onChange={handleChange('q6')}
                                    label='¿Cuenta con Afore?'
                                />
                                <ErrorMessage name="q6" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                {(values.q6 == 'Si') ?
                                    <MultipleSelect
                                        values={aforesMexico}
                                        placeholder='Seleccione una Afore'
                                        onChange={handleChange('q6Afore')}
                                    />
                                    : null
                                }
                            </Grid2>
                            <Grid2 size={6} marginLeft={"10px"}>
                                <DynamicRadioButtons
                                    options={afore}
                                    name="q7"
                                    defaultValue={false}
                                    onChange={handleChange('q7')}
                                    label='¿Desea contratar un prestamo personal?'
                                />
                                <ErrorMessage name="q7" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                {(values.q7 == 'Si') ?
                                    <TextField
                                        label="Monto de prestamo deseado"
                                        variant="outlined"
                                        name="q7Prestamo"
                                        value={values.q7Prestamo}
                                        onChange={handleChange}
                                        inputProps={{
                                            onInput: (e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                            },
                                        }}
                                        fullWidth
                                    />
                                    : null
                                }
                            </Grid2>
                            <Grid2 size={6} marginLeft={"10px"}>
                                <DynamicRadioButtons
                                    options={politicamenteExpuesta}
                                    name="q8"
                                    defaultValue={false}
                                    onChange={handleChange('q8')}
                                    label='¿Usted o algún familiar directo ocupa o ha ocupado un cargo público relevante?'
                                />
                                <ErrorMessage name="q6" component="div" style={{ color: 'red', fontSize: '12px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                {(values.q8 == 'Si') ?
                                    <MultipleSelect
                                        values={cargosPublicos}
                                        placeholder='Especifique el cargo publico'
                                        onChange={handleChange('q8PPE')}
                                    />
                                    : null
                                }
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

export default AltaKyC
