import { TextField, Button, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

import { Core } from 'modules/Login';

const ForgetPassword: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Core>
      <Collapse in={open}>
        <Alert severity="success">A recovery email was sent!</Alert>
      </Collapse>

      <TextField label="Recovery email" style={{ marginBottom: '0.5rem' }} />

      <Button
        variant="contained"
        color="primary"
        style={{ margin: '0.5rem 0' }}
        onClick={handleClick}
      >
        Recover password!
      </Button>
    </Core>
  );
};

export default ForgetPassword;
