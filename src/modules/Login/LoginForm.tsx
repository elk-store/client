import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Field, FormikBag, FormikProps, withFormik } from 'formik';
import { TextField } from 'formik-material-ui';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { object, string } from 'yup';

import { Core } from './Core';
import { Auth } from 'services/Auth';

interface IFormProps {
  onSuccessSubmit(token: string): void;
}

interface IFormValues {
  email: string;
  password: string;
}

const initialValues: IFormValues = { email: '', password: '' };

const ForgotPassword = styled.a`
  text-align: end;
  color: var(--color-primary);
  cursor: pointer;

  margin: 0.5rem 0;
`;

const LoginInnerForm = (props: FormikProps<IFormValues>) => {
  const { isSubmitting, submitForm, status = {} } = props;
  const { errorMessage = null } = status;

  return (
    <Core>
      {errorMessage && (
        <Alert severity="error" style={{ margin: '1rem 0' }}>
          {errorMessage}
        </Alert>
      )}

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

      <ForgotPassword href="/forget-password">
        I forgot my password
      </ForgotPassword>

      <Button
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={submitForm}
        style={{ margin: '0.5rem 0' }}
      >
        Sign in
      </Button>

      <Link href="/register">
        <Button variant="contained" style={{ margin: '0.5rem 0' }}>
          Sign up
        </Button>
      </Link>
    </Core>
  );
};

export const LoginForm = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: () => initialValues,
  validationSchema: object().shape({
    email: string().email('Invalid email').required('Required field'),
    password: string().required('Required field'),
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
      const token = await auth.signIn(values);

      onSuccessSubmit(token);
    } catch (e) {
      console.error(e);

      setSubmitting(false);
      setStatus({
        errorMessage: 'Something got wrong.',
      });
    }
  },
})(LoginInnerForm);
