import React from 'react';
import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import MultipleSelect from '../Components/MultipleSelect';
import { ejecutivos } from '../../../Data/ExecutivesData';
import { sucursales } from '../../../Data/SucursalesData';
import { useLoading } from '../../../Hooks/LoadingContext';

const AltaBanqueroPersonal = ({ onNext, onBack }) => {

  const {isLoading, startLoading, stopLoading} = useLoading();

  const handleNext = () => {
    onNext()
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
        BANQUERO PERSONAL
      </Typography>
      <Typography fontSize={"10px"}>
        ID De Evaluacion: 29921
      </Typography> 
      <Box flex={1} my={4}>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 size={6}>
            <TextField
              label="Numero de empleado"
              disabled
              defaultValue={"84540632"}
              variant="outlined"
              inputProps={{ maxLength: 8 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label="Numero de sucursal"
              disabled
              variant="outlined"
              defaultValue={"914"}
              inputProps={{ maxLength: 4 }}
              fullWidth
            />
          </Grid2>
        </Grid2>
        <Grid2 size={6}>
          <MultipleSelect values={ejecutivos} placeholder={"Banquero personal"}/>
        </Grid2>
        <Grid2 size={6}>
          <MultipleSelect values={sucursales} placeholder={"Sucursal"}/>
        </Grid2>
        <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button 
          variant="contained" 
          onClick={handleNext}
          size="large"
        >
          Siguiente
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default AltaBanqueroPersonal;
