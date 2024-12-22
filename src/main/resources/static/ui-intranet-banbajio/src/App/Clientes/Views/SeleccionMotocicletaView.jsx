import { Box, Button, Divider, Grid2, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ingresosMensuales } from '../../../Data/CuestionarioCdC'
import * as Yup from 'yup';
import SingleSelect from '../../Global/Components/MultipleSelect'
import { Formik } from 'formik'
import { catalogoMotos, motocicletasAnio, motocicletasMarca, plazosPago } from '../../../Data/MotocicletasData';
import TableCotizacion from '../Components/TableCotizacion';
import InfoMotocicleta from '../Components/InfoMotocicleta';
import DiscreteSlider from '../Components/DiscreteSlider.JSX';

const SeleccionMotocicletaView = ({ onNext }) => {

    const [modelosFiltrados, setModelosFiltrados] = useState([]);
    const [modeloSeleccionado, setmodeloSeleccionado] = useState({});
    const [engancheValue, setengancheValue] = useState(20);
    const [showTable, setshowTable] = useState(false);

    const initialValues = {
        marca: '',
        anio: '',
        modelo: '',
        precio: '',
        plazo: '',
        enganche: engancheValue.toString()
    };

    const handleSliderChange = (newValue) => {
        setengancheValue(newValue);
    };

    const validationSchema = Yup.object({
        marca: Yup.string().required('Requerido'),
        anio: Yup.string().required('Requerido'),
        modelo: Yup.string().required('Requerido'),
        plazo: Yup.string().required('Requerido'),
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
                COTIZADOR DE MOTOCICLETA
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
                    {({ values, handleChange, handleSubmit, touched, errors, isValid, dirty }) => {
                        useEffect(() => {
                            const modelos = catalogoMotos
                                .filter(
                                    (moto) =>
                                        moto.anio === values.anio &&
                                        moto.marca === values.marca
                                )
                                .map((moto) => moto.modelo);
                            setModelosFiltrados(modelos);
                        }, [values.anio, values.marca]);
                        useEffect(() => {
                            const motoSelected = catalogoMotos.filter(moto => (
                                moto.modelo.includes(values.modelo)
                            ));
                            setmodeloSeleccionado(motoSelected);
                        }, [values.modelo]);
                        useEffect(() => {
                            handleChange('enganche')(engancheValue.toString());
                        }, [engancheValue]);
                        return (
                            <form>
                                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid2 size={6}>
                                        <SingleSelect
                                            disabled={showTable}
                                            values={motocicletasAnio}
                                            placeholder='Año'
                                            onChange={handleChange('anio')}
                                        />
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <SingleSelect
                                            disabled={showTable}
                                            values={motocicletasMarca}
                                            placeholder='Marca'
                                            onChange={handleChange('marca')}
                                        />
                                    </Grid2>
                                </Grid2>
                                <Grid2>
                                    <Grid2>
                                        <SingleSelect
                                            disabled={showTable}
                                            values={modelosFiltrados}
                                            placeholder='Motocicleta'
                                            onChange={handleChange('modelo')}
                                        />
                                    </Grid2>
                                </Grid2>
                                <Grid2 p={2}>
                                    <DiscreteSlider placeholder={'Seleccione el enganche'} onSliderChange={handleSliderChange} />
                                </Grid2>
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                    {(!showTable) ?
                                        <Button
                                            disabled={(values.modelo != '' && modelosFiltrados.length > 0) ? false : true}
                                            onClick={() => setshowTable(true)}
                                        >
                                            Cotizar motocicleta
                                        </Button>
                                        :
                                        <Button onClick={() => setshowTable(false)}>
                                            Nueva cotizacion
                                        </Button>
                                    }
                                </Box>
                                {(showTable) ?
                                    <Box>
                                        <Divider>Cotizacion</Divider>
                                        <Box>
                                            <InfoMotocicleta modelo={modeloSeleccionado} enganche={engancheValue} />
                                        </Box>
                                        <Divider>Tabla de Amortización</Divider>
                                        <Box>
                                            <TableCotizacion modelo={modeloSeleccionado} enganche={engancheValue} />
                                        </Box>
                                        <Box mt={3}>
                                            <SingleSelect
                                                values={plazosPago.filter(p => p.months).map(p => p.months)}
                                                placeholder='Seleccione el plazo a pagar'
                                                onChange={handleChange('plazo')}
                                            />
                                        </Box>
                                        <Box display={"flex"} justifyContent={"flex-end"} marginBottom={10}>
                                            <Button
                                                sx={{marginTop:'10px'}}
                                                variant="contained"
                                                type="submit"
                                                size="large"
                                                disabled={!dirty || !isValid}
                                                onClick={()=>onNext()}
                                            >
                                                SIGUIENTE
                                            </Button>
                                        </Box>
                                    </Box>
                                    : null
                                }
                            </form>
                        );
                    }}
                </Formik>
            </Box>
        </Box>
    )
}

export default SeleccionMotocicletaView
