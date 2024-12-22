import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AltaTDCPage from '../../App/Clientes/Pages/AltaTDCPage'
import AltaCRPPage from '../../App/Clientes/Pages/AltaCRPPage'
import AltaCRMPage from '../../App/Clientes/Pages/AltaCRMPage'

const ClientesRoutes = () => {
  return (
    <Routes>
        <Route path="solicitar/tdc" element={<AltaTDCPage/>}/>
        <Route path="solicitar/crp" element={<AltaCRPPage/>}/>
        <Route path="solicitar/crm" element={<AltaCRMPage/>}/>
    </Routes>
  )
}

export default ClientesRoutes
