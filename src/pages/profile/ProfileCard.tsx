import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const useStyles = makeStyles({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
})

const ProfileCard: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <Avatar> R </Avatar>
        <CardContent>
          <Typography variant="h5" component="h2">
            Rafael Stein Matsumoto
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            rafael@catolicasc.org.br
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Tabs value={value} onChange={handleChange} orientation="vertical">
          <Tab label="Configurações" />
          <Tab label="Histórico de compra" />
          <Tab label="Método de pagamento" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Configurações do usuário
        </TabPanel>
        <TabPanel value={value} index={1}>
          Histórico de compra históricos
        </TabPanel>
        <TabPanel value={value} index={2}>
          Método de pagamento
        </TabPanel>
      </CardActions>
    </Card>
  )
}

export default ProfileCard
