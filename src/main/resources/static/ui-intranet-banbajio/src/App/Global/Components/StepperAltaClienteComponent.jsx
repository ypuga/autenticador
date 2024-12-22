import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';

const StepperComponent = ({ activeStep, steps }) => {

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
                <Typography fontWeight='bold'>
                  {step.label.toUpperCase()}
                </Typography>
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

export default StepperComponent;
