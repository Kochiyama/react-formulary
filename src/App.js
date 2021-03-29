import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Typography variant='h2' component='h1' align='center'>
        Form Validation
      </Typography>
      <Typography
        variant='h5'
        component='h2'
        align='center'
        style={{ marginBottom: 20 }}
      >
        With MaterialUI, Formik and Yup!
      </Typography>

      <Container maxWidth='sm'>
        <RegisterForm />
      </Container>
    </Grid>
  );
}

export default App;
