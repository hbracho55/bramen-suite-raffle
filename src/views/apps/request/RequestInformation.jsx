// MUI Imports
import { MenuItem } from '@/@menu/horizontal-menu/index'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

import {
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField
} from '../../../../node_modules/@mui/material/index'

// Component Imports

// Vars
const userData = {
  firstName: 'Seth',
  lastName: 'Hallam',
  userName: '@shallamb',
  billingEmail: 'shallamb@gmail.com',
  status: 'active',
  role: 'Subscriber',
  taxId: 'Tax-8894',
  contact: '+1 (234) 464-0600',
  language: ['English'],
  country: 'France',
  useAsBillingAddress: true
}

const RequestInformation = ({ customerData }) => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card className='mb-6'>
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                rows={3}
                InputProps={{ readOnly: true }}
                multiline
                size='small'
                label='Descripción original'
                variant='standard'
                defaultValue='Se requiere enriquecer datos del cliente con rut 25516031-1'
                id='textarea-standard-static'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                rows={3}
                InputProps={{ readOnly: true }}
                multiline
                size='small'
                label='Descripción actualizada'
                variant='standard'
                defaultValue='Se requiere enriquecer datos del cliente con rut 25516031-1'
                id='textarea-standard-static'
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Responsable</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '500px' }}
                  defaultValue={10}
                >
                  <MenuItem value={10}>Luis Gerardo Rodríguez</MenuItem>
                  <MenuItem value={20}>Carlos Alberto Suarez</MenuItem>
                  <MenuItem value={30}>Esperanza Andreina Lopez</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Prioridad</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '200px' }}
                  defaultValue={10}
                >
                  <MenuItem value={10}>Urgente</MenuItem>
                  <MenuItem value={20}>Alta</MenuItem>
                  <MenuItem value={30}>Media</MenuItem>
                  <MenuItem value={40}>Baja</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppReactDatepicker
                selected={new Date()}
                id='basic-input'
                onChange={date => setDate(new Date())}
                placeholderText='Click to select a date'
                customInput={<TextField variant='standard' label='Fecha Estimada' />}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider sx={{ padding: '20px' }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default RequestInformation
