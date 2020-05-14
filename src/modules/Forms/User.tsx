import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { TextField, Container, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import React from 'react'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textField: {
    width: '25ch',
  },
  button: {
    width: '25ch',
  },
})

const Form: React.FC = () => {
  const classes = useStyles()
  const [birthdate, setBirthdate] = React.useState<Date | null>(new Date())

  const handleBirthdate = (date: Date | null) => {
    setBirthdate(date)
  }

  return (
    <Container fixed>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <form>
          <div>
            <Grid item xs className={classes.textField}>
              <TextField margin="normal" id="fullname" label="Full name" />
            </Grid>
            <Grid item xs className={classes.textField}>
              <TextField margin="normal" id="email" label="Email" />
            </Grid>
            <Grid item xs className={classes.textField}>
              <TextField margin="normal" id="cpf" label="CPF" />
            </Grid>
            <Grid item xs className={classes.textField}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="birthdate"
                  label="Birth Date"
                  value={birthdate}
                  onChange={handleBirthdate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs className={classes.textField}>
              <TextField id="telephone" margin="normal" label="Telephone" />
            </Grid>
          </div>
        </form>
        <Grid item xs className={classes.textField}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.textField}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
