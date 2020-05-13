import { Grid } from '@material-ui/core'
import React from 'react'

import ProfileCard from './ProfileCard'
import Core from 'modules/Core'

const Index: React.FC = () => {
  return (
    <Core>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfileCard />
        </Grid>
      </Grid>
    </Core>
  )
}

export default Index
