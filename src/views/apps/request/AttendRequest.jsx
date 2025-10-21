'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'

// Styled Component Imports
import CurrentJobRequest from './CurrentJobRequest'
import JobInformation from './JobInformation'
import RequestTrackingListTable from './list/RequestTrackingTable'
import RequestDetails from './RequestDetails'
import RequestInformation from './RequestInformation'

const AttendRequest = ({ customerData }) => {
  // States
  const [value, setValue] = useState('atender')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    language: [],
    date: null,
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    isPasswordShown: false,
    confirmPassword: '',
    setIsConfirmPasswordShown: false,
    twitter: '',
    facebook: '',
    google: '',
    linkedin: '',
    instagram: '',
    quora: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, setIsConfirmPasswordShown: !show.setIsConfirmPasswordShown }))

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      language: [],
      date: null,
      phoneNumber: '',
      username: '',
      email: '',
      password: '',
      isPasswordShown: false,
      confirmPassword: '',
      setIsConfirmPasswordShown: false,
      twitter: '',
      facebook: '',
      google: '',
      linkedin: '',
      instagram: '',
      quora: ''
    })
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Atender' value='atender' />
          <Tab label='Seguimiento' value='seguimiento' />
          <Tab label='Información Tarea' value='info_tarea' />
          <Tab label='Información Solicitud' value='info_solicitud' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='atender'>
              <Grid item xs={12} sm={12}>
                <RequestDetails customerData={customerData} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CurrentJobRequest customerData={customerData} />
              </Grid>
            </TabPanel>
            <TabPanel value='seguimiento'>
              <RequestTrackingListTable customerData={customerData} />
            </TabPanel>
            <TabPanel value='info_tarea' className='pbs-0'>
              <JobInformation />
            </TabPanel>
            <TabPanel value='info_solicitud' className='pbs-0'>
              <RequestInformation customerData={customerData} />
            </TabPanel>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type='submit' variant='contained' className='mie-2'>
              Atender
            </Button>
            <Button type='submit' variant='contained' className='mie-2'>
              Agregar actividad sin finalizar atención
            </Button>
            <Button type='reset' variant='outlined' onClick={() => handleReset()}>
              Limpiar
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default AttendRequest
