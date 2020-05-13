import DayjsUtils from '@date-io/dayjs'
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
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="DD/MM/YYYY"
            margin="normal"
            id="birthdate"
            label="Birth Date"
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
