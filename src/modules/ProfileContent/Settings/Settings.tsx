import DateFnsUtils from '@date-io/date-fns';
import { Grid, TextField, Button } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [birthdate, setBirthdate] = useState<Date>(new Date());

  const handleBirthdate = (date: Date | null) => {
    if (date) {
      setBirthdate(date);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Full name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="E-mail" />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField fullWidth label="CPF" />
      </Grid>
      <Grid item xs={12} md={4}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            label="Birthdate"
            format="dd/MM/yyyy"
            value={birthdate}
            onChange={handleBirthdate}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth label="Phone" />
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'end' }}>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export { Settings };
