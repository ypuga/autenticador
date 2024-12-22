import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  IconButton,
  Alert,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import { useDispatch } from 'react-redux';
import { loginApp } from '../../Store/Authetication/Thunks';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const initialValues = {
    username: '',
    password: '',
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required('Requerido'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Requerido'),
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(loginApp(values));
    } catch (error) {
      seterrorMessage(error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <Box
      sx={{
        fontFamily: 'Felix Timed',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component={"h1"}>INGRESAR</Typography>
      </Box>
      <Divider />
      <Box marginTop={"10px"} width={"100%"}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {errorMessage?
              <Box
              sx={{
                marginTop: '20px',
                marginBottom: '20px'
              }}
              >
                <Alert severity='error' variant='filled'>{errorMessage}</Alert>
              </Box>
              :null
              }
              <Stack spacing={2}>
                <FormControl size="large" variant="outlined" fullWidth>
                  <InputLabel htmlFor="username">Usuario</InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="username"
                    name="username" 
                    label="Usuario"
                  />
                  <ErrorMessage name="username" component="div" style={{ color: 'red', fontFamily: 'Arial' }} />
                </FormControl>

                <FormControl size="large" variant="outlined" fullWidth>
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          onClick={handleShowPassword}
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Contraseña"
                  />
                  <ErrorMessage name="password" component="div" style={{ color: 'red', fontFamily: 'Arial' }} />
                </FormControl>
              </Stack>

              <Box
                marginTop={"20px"}
                sx={{
                  width: '100%',
                  display: 'inline-flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <Stack spacing={2}>
                  <Button color='success' size='large' type="submit" disabled={isSubmitting}>
                    INGRESAR
                  </Button>
                  {isSubmitting && (
                    <Box width={"100%"} display={"flex"} alignContent={"center"} justifyContent={"center"}>
                      <CircularProgress size={"large"} />
                    </Box>
                  )}
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginView;
