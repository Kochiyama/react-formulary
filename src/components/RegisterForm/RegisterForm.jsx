import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';

const RegisterForm = () => {
  const schema = Yup.object({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    recieveNews: Yup.bool(),
    recievePromotions: Yup.bool(),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      recievePromotions: true,
      recieveNews: false,
    },
    validationSchema: schema,
    onSubmit: () => {
      alert('Registered With Success!');
      alert(`data: ${JSON.stringify(values)}`);
    },
  });

  return (
    <form>
      <TextField
        id='name'
        label='Name'
        margin='normal'
        fullWidth
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(touched.name && errors.name)}
        helperText={touched.name ? errors.name : ''}
      />

      <TextField
        id='lastname'
        label='Last Name'
        margin='normal'
        fullWidth
        value={values.lastname}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(touched.lastname && errors.lastname)}
        helperText={touched.lastname ? errors.lastname : ''}
      />

      <TextField
        id='email'
        type='email'
        label='Email'
        margin='normal'
        fullWidth
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={Boolean(touched.email && errors.email)}
        helperText={touched.email ? errors.email : ''}
      />

      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          padding: '0 50px',
        }}
      >
        <FormControlLabel
          control={
            <Switch
              id='recievePromotions'
              color='primary'
              checked={values.recievePromotions}
              onChange={handleChange}
            />
          }
          label='Recieve Promotions'
        />

        <FormControlLabel
          control={
            <Switch
              id='recieveNews'
              color='primary'
              checked={values.recieveNews}
              onChange={handleChange}
            />
          }
          label='Recieve News'
        />
      </section>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        onClick={handleSubmit}
        fullWidth
        style={{ marginTop: 20 }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
