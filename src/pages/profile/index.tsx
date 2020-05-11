import { Grid } from '@material-ui/core'
import React from 'react'

import ProfileCard from './ProfileCard'

const Index: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfileCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default Index
