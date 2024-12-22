import React, { useState } from 'react'
import AppLayout from '../../Layout/AppLayout'
import { Box } from '@mui/material'
import StepperComponent from '../../Global/Components/StepperAltaClienteComponent'
import { crmSteps } from '../../../Data/Steps'
import BusquedaCliente from '../../Global/Views/BusquedaCliente'
import BiometriaCliente from '../../Global/Views/BiometriaCliente'
import AltaBanqueroPersonal from '../../Global/VIews/AltaBanqueroPersonal'
import SeleccionMotocicletaView from '../Views/SeleccionMotocicletaView'
import AltaBuroCredito from '../../Global/Views/AltaBuroCredito'
import DocumentsProgress from '../../Global/Views/AltaDocumentacion'
import { altaCRMDocumentos, pagareCRM } from '../../../Data/MocksDocumentos'
import AltaVisitaDomciliaria from '../../Global/Views/AltaVisitaDomciliaria'
import EnvioSolicitudCredito from '../Views/EnvioSolicitudCredito'
import FinalizarCRM from '../Views/FinalizarCRM'

const AltaCRMPage = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 12));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <AppLayout>
      <Box
        width="100%"
        height="100vh"
        display="flex"
        sx={{ overflow: 'hidden' }}
      >
        <Box width="300px" height="100%" sx={{ borderRight: '1px solid #e0e0e0' }}>
          <StepperComponent activeStep={activeStep} steps={crmSteps} />
        </Box>

        <Box
          flex={1}
          height="100%"
          display="flex"
          flexDirection="column"
          sx={{ overflow: 'auto' }}
        >
          {activeStep === 0 && (
            <BusquedaCliente onNext={handleNext} />
          )}
          {activeStep === 1 && (
            <BiometriaCliente onNext={handleNext} />
          )}
          {activeStep === 2 && (
            <SeleccionMotocicletaView onNext={handleNext} />
          )}
          {activeStep === 3 && (
            <AltaBanqueroPersonal onNext={handleNext} />
          )}
          {activeStep === 4 && (
            <AltaBuroCredito onNext={handleNext} onBack={handleBack} />
          )}
          {activeStep === 5 && (
            <AltaVisitaDomciliaria onNext={handleNext} onBack={handleBack} />
          )}
          {activeStep === 6 && (
            <DocumentsProgress onNext={handleNext} documents={altaCRMDocumentos} />
          )}
          {activeStep === 7 && (
            <EnvioSolicitudCredito onNext={handleNext} documents={altaCRMDocumentos} />
          )}
          {activeStep === 8 && (
            <DocumentsProgress onNext={handleNext} documents={pagareCRM} />
          )}
          {activeStep === 9 && (
            <FinalizarCRM onNext={handleNext} documents={pagareCRM} />
          )}
        </Box>
      </Box>
    </AppLayout>
  )
}

export default AltaCRMPage
