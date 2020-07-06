import DateFnsUtils from '@date-io/date-fns';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Field, FormikBag, FormikProps, withFormik } from 'formik';
import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import Link from 'next/link';
import React from 'react';
import { object, string, date, number } from 'yup';

import { Core } from './Core';
import { Auth } from 'services/Auth';

interface IFormProps {
  onSuccessSubmit(token: string): void;
}

interface IFormValues {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthdate: Date;
  phone: string;
}

const initialValues: IFormValues = {
  birthdate: new Date(),
  cpf: '',
  email: '',
  name: '',
  password: '',
  phone: '',
};

const SignUpInnerForm = (props: FormikProps<IFormValues>) => {
  const { isSubmitting, submitForm, status = {} } = props;
  const { errorMessage = null } = status;

  return (
    <Core>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {errorMessage && (
          <Alert severity="error" style={{ margin: '1rem 0' }}>
            {errorMessage}
          </Alert>
        )}

        <Field
          component={TextField}
          name="name"
          label="Name"
          style={{ marginBottom: '0.5rem' }}
        />

        <Field
          component={TextField}
          name="email"
          type="email"
          label="Email"
          style={{ marginBottom: '0.5rem' }}
        />

        <Field
          component={TextField}
          name="password"
          type="password"
          label="Password"
          style={{ marginBottom: '0.5rem' }}
        />

        <Field
          component={TextField}
          name="cpf"
          label="CPF"
          style={{ marginBottom: '0.5rem' }}
        />

        <Field
          component={TextField}
          name="phone"
          type="phone"
          label="Phone"
          style={{ marginBottom: '0.5rem' }}
        />

        <Field component={DatePicker} name="date" label="Birthdate" />

        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
          style={{ margin: '0.5rem 0' }}
        >
          Sign up
        </Button>

        <Link href="/login">
          <Button variant="contained" style={{ margin: '0.5rem 0' }}>
            Sign in
          </Button>
        </Link>
      </MuiPickersUtilsProvider>
    </Core>
  );
};

export const SignUpForm = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: () => initialValues,
  validationSchema: object().shape({
    name: string().required('Required field'),
    email: string().email('Invalid email').required('Required field'),
    password: string()
      .min(8, 'Minimum of 8 characters')
      .required('Required field'),
    cpf: number().required('Required field'),
    birthdate: date().required('Required field'),
    phone: number().required('Required field'),
  }),
  handleSubmit: async (
    values: IFormValues,
    formikBag: FormikBag<IFormProps, IFormValues>
  ) => {
    const {
      setSubmitting,
      setStatus,
      props: { onSuccessSubmit: onSuccessSubmit },
    } = formikBag;

    try {
      setSubmitting(false);

      const auth = new Auth();
      const user = await auth.signUp(values);
      const token = await auth.signIn({
        email: user.email,
        password: values.password,
      });

      onSuccessSubmit(token);
    } catch (e) {
      console.error(e);

      setSubmitting(false);
      setStatus({
        errorMessage: 'Something got wrong',
      });
    }
  },
})(SignUpInnerForm);
