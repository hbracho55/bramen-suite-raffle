// MUI Imports
import Divider from '@mui/material/Divider'
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  Select,
  TextField,
  Typography
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

const JobDetails = () => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card className='mb-6'>
        <CardHeader title='Detalle de Tarea' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Tarea'
                defaultValue='Asignar responsable'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Responsable'
                defaultValue='Luis Alfonso Diaz Contreras'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Fecha inicio'
                defaultValue='01/08/2024 09:54:67'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Fecha finalización'
                defaultValue=''
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Notas'
                defaultValue='Alta'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className='mbe-2 font-medium' color='text.primary'>
                Documentos adjuntos
              </Typography>
              <FormControl fullWidth>
                <Select
                  native
                  multiple
                  variant='standard'
                  label='Native'
                  value='doc1'
                  inputProps={{ id: 'select-multiple-native' }}
                >
                  <option key={'doc1'} value={'doc1'}>
                    documento1.jpg
                  </option>
                  <option key={'doc2'} value={'doc2'}>
                    documento2.doc
                  </option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                rows={3}
                InputProps={{ readOnly: true }}
                multiline
                size='small'
                label='Descripción de la solución'
                variant='standard'
                defaultValue='se desarrollaron las funcionalidades requeridas'
                id='textarea-standard-static'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default JobDetails
