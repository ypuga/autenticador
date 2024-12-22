import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AltaClientePage from '../../App/Prospectos/Pages/AltaClientePage';
import ProspectosSolicitudesPage from '../../App/Prospectos/Pages/ProspectosSolicitudesPage';

const ProspectosRoutes = () => {
  return (
    <Routes>
      <Route path="altaCliente" element={<AltaClientePage />} />
      <Route path="historial" element={<ProspectosSolicitudesPage />} />
    </Routes>
  );
};

export default ProspectosRoutes;
