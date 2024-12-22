import { Box } from '@mui/material';
import React, { useState } from 'react';
import AppLayout from '../../Layout/AppLayout';
import AltaCertificacionContacto from '../../Global/VIews/AltaCertificacionContacto';
import AltaFiscalData from '../../Global/VIews/AltaFiscalData';
import AltaBeneficiarios from '../../Global/VIews/AltaBeneficiarios';
import AltaBiometria from '../../Global/VIews/AltaBiometria';
import AltaCliente from '../../Global/VIews/AltaCliente';
import ConfirmacionCuenta from '../../Global/VIews/ConfirmacionCuenta';
import AltaPersonalData from '../../Global/VIews/AltaPersonalData';
import AltaDomicilioData from '../../Global/VIews/AltaDomicilioData'
import StepperComponent from '../../Global/Components/StepperAltaClienteComponent';
import { altaClienteSteps } from '../../../Data/Steps';
import AltaBanqueroPersonal from '../../Global/VIews/AltaBanqueroPersonal';
import AltaKyC from '../../Global/Views/AltaKyC';
import DocumentsProgress from '../../Global/Views/AltaDocumentacion';
import { altaCuentaDocumentos } from '../../../Data/MocksDocumentos';

const AltaClientePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 10));
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
          <StepperComponent activeStep={activeStep} steps={altaClienteSteps} />
        </Box>
        <Box
          flex={1}
          height="100%"
          display="flex"
          flexDirection="column"
          sx={{ overflow: 'auto' }}
        >
          {activeStep === 0 && (
            <AltaPersonalData onNext={handleNext} />
          )}
          {activeStep === 1 && (
            <AltaBanqueroPersonal onNext={handleNext} />
          )}
          {activeStep === 2 && (
            <AltaCertificacionContacto onNext={handleNext} onBack={handleBack}/>
          )}
          {activeStep === 3 && (
            <AltaDomicilioData onNext={handleNext} onBack={handleBack}/>
          )}
          {activeStep === 4 && (
            <AltaKyC onNext={handleNext} onBack={handleBack}/>
          )}
          {activeStep === 5 && (
            <AltaFiscalData onNext={handleNext} onBack={handleBack}/>
          )}
          {activeStep === 6 && (
            <AltaBeneficiarios onNext={handleNext} onBack={handleBack}/>
          )}
          {activeStep === 7 && (
            <AltaBiometria onNext={handleNext} />
          )}
          {activeStep === 8 && (
            <DocumentsProgress onNext={handleNext} documents={altaCuentaDocumentos}/>
          )}
          {activeStep === 9 && (
            <AltaCliente onNext={handleNext} />
          )}
          {activeStep === 10 && (
            <ConfirmacionCuenta/>
          )}
        </Box>
      </Box>
    </AppLayout>
  );
};

export default AltaClientePage;