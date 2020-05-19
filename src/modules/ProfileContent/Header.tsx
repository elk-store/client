import { Avatar, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <Avatar> R </Avatar>
      <CardContent>
        <Typography variant="h5" component="h2">
          Rafael Stein Matsumoto
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          rafael@catolicasc.org.br
        </Typography>
      </CardContent>
    </>
  )
}

export default Header
