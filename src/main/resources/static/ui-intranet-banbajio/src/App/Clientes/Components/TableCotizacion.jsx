import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { plazosPago } from '../../../Data/MotocicletasData'

const TableCotizacion = ({ modelo, enganche }) => {
    const moto = modelo[0];
    const engancheMonto = ((moto.precio)*(enganche/100))
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Plazo</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Tasa</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Sobre-Precio</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Precio Final</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Pago Mensual</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {plazosPago.map((plazo, index) => (
                        <TableRow key={index}>
                            <TableCell>{plazo.months}</TableCell>
                            <TableCell>{plazo.tasa}%</TableCell>
                            <TableCell>$ {((moto.precio - engancheMonto) * (plazo.tasa / 100)).toFixed(0)}.00</TableCell>
                            <TableCell>$ {((moto.precio - engancheMonto) * (1+(plazo.tasa / 100))).toFixed(0)}.00</TableCell>
                            <TableCell>$ {((moto.precio - engancheMonto) * (1+(plazo.tasa / 100))/plazo.value).toFixed(0)}.00</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableCotizacion
