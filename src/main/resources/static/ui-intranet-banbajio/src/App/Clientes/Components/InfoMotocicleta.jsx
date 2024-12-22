import { Box, Grid2, Typography } from '@mui/material'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import React from 'react'

const InfoMotocicleta = ({ modelo ,enganche }) => {
    const motoSelected = modelo[0];
    const engancheMonto = ((motoSelected.precio)*(enganche/100))
    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={1}>
                    <TwoWheelerIcon />
                </Grid2>
                <Grid2 item size={3}>
                    <Typography><strong>Motocicleta:</strong></Typography>
                </Grid2>
                <Grid2 item size={6}>
                    <Typography>{motoSelected.marca} {motoSelected.anio} - {motoSelected.modelo}</Typography>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2}>
                <Grid2 size={1}>
                    <AttachMoneyIcon sx={{color: 'teal'}}/>
                </Grid2>
                <Grid2 item size={2}>
                    <Typography color='teal'><strong>Precio:</strong></Typography>
                </Grid2>
                <Grid2 item size={2}>
                    <Typography>$ {motoSelected.precio}.00</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <PriceCheckIcon sx={{color: 'green'}}/>
                </Grid2>
                <Grid2 item size={2}>
                    <Typography color='green'><strong>Enganche:</strong></Typography>
                </Grid2>
                <Grid2 item size={2}>
                    <Typography>$ {engancheMonto.toFixed(0)}.00</Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default InfoMotocicleta
