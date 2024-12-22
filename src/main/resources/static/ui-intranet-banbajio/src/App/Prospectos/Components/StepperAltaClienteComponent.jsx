import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const StepperAltaClienteComponent = ({ activeStep }) => {
  const steps = [
    { label: 'DATOS PERSONALES', description: 'Información personal del cliente' },
    { label: 'BANQUERO PERSONAL', description: 'Información del banquero' },
    { label: 'MEDIOS DE CONTACTO', description: 'Certificación de medios de contacto' },
    { label: 'DOMICILIO', description: 'Domicilio del cliente' },
    { label: 'CONOCIMIENTO DEL CLIENTE', description: 'Conocimiento del cliente' },
    { label: 'DATOS FISCALES', description: 'Datos fiscales del cliente' },
    { label: 'BENEFICIARIOS', description: 'Datos de los beneficiarios de la cuenta' },
    { label: 'BIOMETRIA', description: 'Alta de la biometria dactilar y facial del cliente' },
    { label: 'ALTA DEL CLIENTE', description: 'Alta y validación de la información del cliente' },
    { label: 'DOCUMENTACION DEL CLIENTE', description: 'Impresión y digitalización de los documentos del cliente' },
    { label: 'ALTA CUENTA', description: 'Confirmación de la alta de la cuenta' }
  ];

  return (
    <Box 
      height="100%" 
      width="100%" 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        overflowY: 'auto',
        maxHeight: '100%',
      }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            height: '100%',
            '& .MuiStep-root': {
              height: '25%',
              padding: 0,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              '&:not(:last-child)': {
                paddingBottom: '0',
                marginBottom: 0,
              }
            },
            '& .MuiStepConnector-root': {
              flex: 1,
              padding: 0,
              marginLeft: '12px',
              '& .MuiStepConnector-line': {
                height: '100%',
                borderLeftWidth: '2px',
                minHeight: 'unset'
              }
            },
            '& .MuiStepLabel-root': {
              padding: '24px 8px',
              marginTop: 0,
              marginBottom: 0
            },
            '& .MuiStepLabel-label': {
              fontWeight: 'bold'
            }
          }}
        >
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
                <Box sx={{ color: 'text.secondary', fontSize: '0.875rem', mt: 0.5 }}>
                  {step.description}
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default StepperAltaClienteComponent;
