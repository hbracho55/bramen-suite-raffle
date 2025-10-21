// MUI Imports
import Divider from '@mui/material/Divider'
import { Card, CardContent, CardHeader, Grid, TextField } from '../../../../node_modules/@mui/material/index'
import NoteListTable from './list/NoteListTable'

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

const CurrentJobRequest = ({ customerData }) => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card className='mb-6'>
        <CardHeader title='Tarea actual: Asignar responsable a la actividad' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} className='mt-3'>
                <TextField
                  fullWidth
                  rows={6}
                  multiline
                  label='Descripción de la solución'
                  variant='standard'
                  defaultValue=''
                  id='textarea-standard-static'
                />
              </Grid>
              <Grid item xs={12} sm={6} className='mt-3'>
                <NoteListTable customerData={customerData} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default CurrentJobRequest
