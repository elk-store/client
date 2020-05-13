import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  })
)

const Form: React.FC = () => {
  const classes = useStyles()
  const [birthdate, setBirthdate] = React.useState<Date | null>(new Date())

  const handleBirthdate = (date: Date | null) => {
    setBirthdate(date)
  }
  return (
    <form className={classes.root}>
      <div>
        <TextField id="fullname" label="Full name" />
      </div>
      <div>
        <TextField id="email" label="Email" />
      </div>
      <div>
        <TextField id="cpf" label="CPF" />
      </div>
      <div>
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
      </div>
      <div>
        <TextField id="telephone" label="Telephone" />
      </div>
    </form>
  )
}

export default Form
